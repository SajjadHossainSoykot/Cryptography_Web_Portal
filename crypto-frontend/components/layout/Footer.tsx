export function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>
          © 2026{" "}
          <a
            href="https://github.com/SajjadHossainSoykot"
            className="font-medium text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            Sajjad Hossain Soykot
          </a>
          . All rights reserved.
        </p>

        <p>
          This project is based on laboratory experiments from the Cryptography
          and Network Security course.
        </p>
      </div>
    </footer>
  );
}