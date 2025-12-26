/**
 * Email Template Build Script
 *
 * This script automatically converts the React email template to email-compatible HTML.
 *
 * Process:
 * 1. Build the Vite project (npm run build)
 * 2. Server-side render the React component to static HTML
 * 3. Extract CSS and combine into a single email-compatible HTML file
 *
 * Features:
 * - Single file output with embedded CSS
 * - No JavaScript required in output
 * - Gmail, Outlook, Apple Mail compatible
 * - Dark mode support via CSS variables
 * - GitHub raw URLs for assets when built in CI
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";

const OUTPUT_DIR = path.join(process.cwd(), "dist", "email");
const DIST_DIR = path.join(process.cwd(), "dist");
const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/Solvro/emails-testownik/main";

// Check if running in GitHub Actions
const isGitHubCI = process.env.GITHUB_ACTIONS === "true";

// Email-compatible wrapper with proper meta tags and embedded CSS
function wrapInEmailDocument(
  bodyContent: string,
  css: string,
  title: string,
): string {
  return `<!DOCTYPE html>
<html lang="pl" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>${title}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    /* Reset */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
    a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      .dark { color-scheme: dark; }
    }

    /* Responsive */
    @media screen and (max-width: 600px) {
      .email-container { width: 100% !important; max-width: 100% !important; }
    }

    /* App styles */
${css}
  </style>
</head>
<body style="margin: 0; padding: 0;">
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
  ${bodyContent}
</body>
</html>`;
}

async function buildEmailTemplate() {
  console.log("🚀 Starting email template build...\n");

  if (isGitHubCI) {
    console.log(
      "🔧 Running in GitHub Actions - using raw.githubusercontent.com URLs\n",
    );
  }

  // Step 1: Build the Vite project (to get CSS)
  console.log("📦 Step 1: Building Vite project...");
  try {
    execSync("npm run build", { stdio: "inherit" });
  } catch {
    throw new Error("Vite build failed");
  }

  // Step 2: Server-side render the React component
  console.log("\n🔄 Step 2: Rendering React component to HTML...");

  // Import and render the App component
  const { App: AppComponent } = await import("../src/app.js");
  const htmlContent = renderToString(React.createElement(AppComponent));

  // Extract title from rendered HTML
  const titleRegex = /<h1[^>]*>([^<]+)<\/h1>/;
  const titleMatch = titleRegex.exec(htmlContent);
  const title = titleMatch?.[1] ?? "Email";

  console.log("✅ React component rendered successfully");

  // Step 3: Read built CSS
  console.log("\n📖 Step 3: Reading CSS...");

  const indexPath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(indexPath)) {
    throw new Error("dist/index.html not found after build");
  }

  const indexHtml = fs.readFileSync(indexPath, "utf8");

  // Extract CSS file path from index.html
  const cssLinkRegex = /<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/;
  const cssLinkMatch = cssLinkRegex.exec(indexHtml);
  if (cssLinkMatch === null) {
    throw new Error("Could not find CSS link in index.html");
  }

  const cssPath = path.join(DIST_DIR, cssLinkMatch[1]);
  if (!fs.existsSync(cssPath)) {
    throw new Error(`CSS file not found: ${cssPath}`);
  }

  let css = fs.readFileSync(cssPath, "utf8");

  console.log("✅ CSS read successfully");

  // Step 4: Replace asset URLs with GitHub raw URLs if in CI
  let processedHtml = htmlContent;

  if (isGitHubCI) {
    console.log("\n🔗 Step 4: Replacing asset URLs with GitHub raw URLs...");

    // Replace logo references
    processedHtml = processedHtml.replaceAll(
      'src="/logo.png"',
      `src="${GITHUB_RAW_BASE}/public/logo.png"`,
    );

    // Replace font URLs in CSS
    css = css.replaceAll(
      /url\("\.\/fonts\/([^"]+)"\)/g,
      `url("${GITHUB_RAW_BASE}/src/fonts/$1")`,
    );

    console.log("✅ Asset URLs replaced with GitHub raw URLs");
  }

  // Step 5: Create output directory and save file
  console.log("\n💾 Step 5: Generating email template...");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Combine into final email HTML
  const emailHtml = wrapInEmailDocument(processedHtml, css, title);
  const outputPath = path.join(OUTPUT_DIR, "email.html");
  fs.writeFileSync(outputPath, emailHtml);

  console.log("\n✅ Email template generated successfully!");
  console.log(`\n📁 Output: ${outputPath}`);
  console.log(`📄 Title: "${title}"`);
  console.log(
    `📏 Size: ${(Buffer.byteLength(emailHtml, "utf8") / 1024).toFixed(2)} KB`,
  );
}

try {
  await buildEmailTemplate();
} catch (error: unknown) {
  console.error("❌ Build failed:", error);
  throw error;
}
