/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    backgroundImage: true, // Enable background gradients
  },
  content: [
    "./components/**/*.html",
    "./emails/**/*.html",
    "./layouts/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        page: "#dfe7f5",
        card: {
          light: "#fafafa",
          dark: "#a9c4eb",
          border: "#86a9db",
        },
        text: {
          main: "#0b111c",
          muted: "#1f2937",
        },
        button: {
          from: "#5898f7",
          to: "#2761b8",
          text: "#dfe7f5",
        },
        border: {
          light: "rgba(31, 41, 55, 0.15)",
        },
      },
      backgroundImage: {
        "card-gradient": "linear-gradient(to right, #fafafa, #a9c4eb)",
        "btn-gradient": "linear-gradient(to right, #5898f7, #2761b8)",
      },
      boxShadow: {
        card: "0px 0px 130px 0px rgba(11, 17, 28, 0.1)",
        btn: "0px 0px 20px 0px rgba(134, 169, 219, 0.5)",
      },
    },
  },
};
