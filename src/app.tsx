// @ts-expect-error - React is used by JSX transform in SSR
import React from "react";

export function App() {
  return (
    <div>
      {/* Page - using table-cell for centering instead of flex */}
      <div
        className="h-full min-h-[100vh] w-full bg-[var(--bg-main)] p-[40px_20px] text-center"
        style={{ display: "table" }}
      >
        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
          {/* Block - using inline-block instead of flex-col */}
          <div className="inline-block w-[740px] max-w-full rounded-[30px] border border-[var(--card-border)] bg-linear-to-r from-[var(--bg-card-from)] to-[var(--bg-card-to)] p-[32px_24px] text-left shadow-[var(--card-shadow)_0px_0px_130px_0px]">
            {/* Header - using inline elements instead of flex */}
            <div className="mb-6">
              {/* Icon - using inline-block and vertical-align */}
              <div className="mr-2.5 inline-block h-[40px] w-[40px] rounded-full border border-[var(--icon-border)] bg-[var(--bg-icon)] text-center align-middle leading-[38px]">
                <img
                  src="/logo.png"
                  width="24"
                  height="24"
                  alt="Testownik"
                  className="inline-block align-middle"
                />
              </div>
              <span className="inline-block align-middle text-lg font-normal text-[var(--text-main)]">
                Testownik
              </span>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h1 className="mb-3 text-[32px] leading-none font-medium tracking-normal text-[var(--text-main)]">
                Twoje quizy zostały anulowane
              </h1>
              <p className="text-[16px] leading-5.5 font-thin text-[var(--text-main)]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            {/* Button section */}
            <div className="mb-6">
              <a
                href="#login"
                className="mb-2 inline-block rounded-[25px] bg-linear-to-r from-[var(--btn-from)] to-[var(--btn-to)] px-[22px] py-[8px] text-[18px] font-normal text-[var(--btn-text)] no-underline shadow-[var(--btn-shadow)_0px_0px_20px_0px]"
              >
                Zaloguj się
              </a>
              <p className="text-[13px] font-light text-[var(--text-main)] opacity-50">
                *Po zalogowaniu się przejdź do ustawień
              </p>
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--ft-border)] pt-3">
              <p className="mb-2.5 text-sm font-thin text-[var(--text-muted)]">
                Otrzymałeś tę wiadomość, ponieważ korzystasz z Testownika
                Solvro. Jeśli to nie Ty inicjowałeś tę akcję, możesz zignorować
                ten e‑mail.
              </p>
              <p className="text-sm font-light text-[var(--text-muted)]">
                Testownik &#8226; Koło Naukowe Solvro &#8226;{" "}
                <a
                  href="#settings"
                  className="text-[var(--text-main)] underline"
                >
                  Ustawienia powiadomień
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
