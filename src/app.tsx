import { useState } from "react";

import "./theme.css";

export function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      {/* Toggle */}
      <button
        onClick={() => {
          setDark(!dark);
        }}
        className="fixed top-4 right-4 z-50 rounded-full bg-[#408CFF] px-4 py-2 text-sm text-[#020617]"
      >
        {dark ? "Dark" : "Light"}
      </button>

      {/* Page */}
      <div className="flex h-full min-h-[100vh] w-full items-center justify-center bg-[var(--bg-main)] p-[40px_20px]">
        {/* Block */}
        <div className="flex w-[740px] flex-col gap-6 rounded-[30px] border border-[var(--card-border)] bg-linear-to-r from-[var(--bg-card-from)] to-[var(--bg-card-to)] p-[32px_24px] shadow-[var(--card-shadow)_0px_0px_130px_0px] [&>*]:text-[var(--text-main)]">
          {/* Header */}
          <div className="flex gap-2.5">
            {/* Icon */}
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[var(--icon-border)] bg-[var(--bg-icon)] p-[8px_0px]">
              <svg
                className="text-[var(--icon)]"
                width="24"
                height="24"
                viewBox="0 0 250 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_31_44)">
                  <path
                    d="M41.6774 97.6982L46.8709 102.831L125 179.571L208.323 97.6982H187.484L125 159.103L62.484 97.6982H41.6774Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0 97.6982L5.19374 102.831L26.0323 123.299L36.4515 113.065L20.8386 97.7296H0V97.6982ZM229.193 97.6982L177.128 148.9L187.516 159.103L250 97.6982H229.193ZM46.8709 123.268L36.4515 133.502L57.2902 153.97L67.7096 143.736L46.8709 123.268ZM78.1289 153.97L67.7096 164.204L125 220.476L156.258 189.774L149.694 183.327L145.839 179.571L125 200.039L78.1289 154.001V153.97ZM166.677 159.103L156.29 169.306L166.709 179.54L177.128 169.306L171.935 164.204L166.709 159.103H166.677Z"
                    fill="currentColor"
                  />
                  <path
                    d="M125 28.1247L92.4037 60.1102L92.2444 60.2666H92.563L101.326 68.8734L110.247 77.668L124.841 92.002L130.831 97.8857L139.753 106.649L125 121.139L110.088 106.492L119.01 97.7293H101.166L92.2444 106.492L125 138.634L157.437 106.461L148.674 97.8543L139.753 89.0911L119.201 68.9048L110.279 60.1415L125.032 45.6823L139.944 60.3294L131.022 69.0923H148.866L157.787 60.3294L125 28.1247Z"
                    fill="currentColor"
                  />
                  <path
                    d="M139.753 106.649L130.831 115.412L139.689 124.112L148.674 115.224L139.753 106.68V106.649Z"
                    fill="currentColor"
                  />
                  <path
                    d="M110.247 60.1101L119.233 51.3156L110.247 42.6151L101.326 51.3782L110.215 60.1414L110.247 60.1101Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_44">
                    <rect width="250" height="250" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="content-center text-lg font-normal">Testownik</p>
          </div>
          {/* Content */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[32px] leading-none font-medium tracking-normal">
              Twoje quizy zostały anulowane
            </h1>
            <p className="text-[16px] leading-[22px] font-thin">
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
          {/* Button sec */}
          <div className="flex flex-col gap-2">
            <button className="w-fit gap-2.5 rounded-[25px] bg-linear-to-r from-[var(--btn-from)] to-[var(--btn-to)] p-[8px_22px] shadow-[var(--btn-shadow)_0px_0px_20px_0px]">
              <p className="text-[18px] font-normal text-[var(--btn-text)]">
                Zaloguj się
              </p>
            </button>
            <p
              className={`text-[13px] font-thin text-[var(--text-main)] ${
                dark ? "opacity-50" : "opacity-80"
              }`}
            >
              *Po zalogowaniu się przejdź do ustawień
            </p>
          </div>
          {/* Footer */}
          <div className="flex flex-col gap-2.5 border-t border-[var(--ft-border)] p-[12px_0px] [&>*]:text-sm [&>*]:font-thin [&>*]:text-[var(--text-muted)]">
            <p>
              Otrzymałeś tę wiadomość, ponieważ korzystasz z Testownika Solvro.
              Jeśli to nie Ty inicjowałeś tę akcję, możesz zignorować ten
              e‑mail.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <p>Testownik</p>
              <p>&#8226;</p>
              <p>Koło Naukowe Solvro</p>
              <p>&#8226;</p>
              <p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-[var(--text-main)] underline">
                  Ustawienia wiadomości
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
