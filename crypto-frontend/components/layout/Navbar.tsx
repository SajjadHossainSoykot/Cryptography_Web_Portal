"use client";

import Link from "next/link";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

const classicalAlgorithms = [
  {
    label: "Caesar Cipher",
    href: "/algorithms/caesar",
  },
  {
    label: "Playfair Cipher",
    href: "/algorithms/playfair",
  },
  {
    label: "Hill Cipher",
    href: "/algorithms/hill",
  },
  {
    label: "Vigenère Cipher",
    href: "/algorithms/vigenere",
  },
  {
    label: "Rail Fence Cipher",
    href: "/algorithms/rail-fence",
  },
];

const modernAlgorithms = [
  {
    label: "RSA Algorithm",
    href: "/algorithms/rsa",
  },
  {
    label: "Diffie-Hellman",
    href: "/algorithms/diffie-hellman",
  },
];

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Interactive Lab",
    href: "/lab",
  },
  {
    label: "Algorithms",
    href: "/algorithms",
    hasDropdown: true,
  },
  {
    label: "Lab Report",
    href: "/lab-report",
  },
  {
    label: "API Docs",
    href: "/api-docs",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--card-border)] bg-[var(--background)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div
            className="shrink-0 overflow-hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-1"
            style={{
              width: "60px",
              height: "60px",
            }}
          >
            <img
              src="/favicon.ico"
              alt="CipherXploreSS Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: "10px",
              }}
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold tracking-wide text-[var(--foreground)]">
              CipherXploreSS
            </p>
            <p className="max-w-[260px] truncate text-xs text-[var(--muted)]">
              Explore, Encrypt, Decrypt, and Learn Cryptography.
            </p>
          </div>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--muted)] transition hover:text-cyan-500 dark:hover:text-cyan-300"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
                </Link>

                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[520px] -translate-x-1/2 rounded-3xl border border-[var(--card-border)] bg-[var(--background)] p-5 opacity-0 shadow-2xl shadow-cyan-950/10 transition-all duration-200 group-hover:visible group-hover:mt-3 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <div className="mb-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3">
                        <p className="text-sm font-bold text-[var(--foreground)]">
                          Classical Cryptography
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                          Traditional ciphers for encryption and decryption.
                        </p>
                      </div>

                      <div className="grid gap-2">
                        {classicalAlgorithms.map((algo) => (
                          <Link
                            key={algo.href}
                            href={algo.href}
                            className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-cyan-400/10 hover:text-cyan-600 dark:hover:text-cyan-200"
                          >
                            {algo.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-3 rounded-2xl border border-purple-400/20 bg-purple-400/10 px-4 py-3">
                        <p className="text-sm font-bold text-[var(--foreground)]">
                          Modern Cryptography
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                          Public-key and key exchange algorithms.
                        </p>
                      </div>

                      <div className="grid gap-2">
                        {modernAlgorithms.map((algo) => (
                          <Link
                            key={algo.href}
                            href={algo.href}
                            className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-purple-400/10 hover:text-purple-600 dark:hover:text-purple-200"
                          >
                            {algo.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-[var(--card-border)] pt-4">
                    <Link
                      href="/algorithms"
                      className="block rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-3 text-center text-sm font-semibold text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
                    >
                      View All Algorithms
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] transition hover:text-cyan-500 dark:hover:text-cyan-300"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-[var(--muted)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
            aria-label="Toggle dark and light mode"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <Link
            href="/lab"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-600 transition hover:bg-cyan-400/20 dark:text-cyan-200"
          >
            Start Lab
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--muted)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
            aria-label="Toggle dark and light mode"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--muted)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen ? (
        <div className="border-t border-[var(--card-border)] bg-[var(--background)] px-5 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
            >
              Home
            </Link>

            <Link
              href="/lab"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
            >
              Interactive Lab
            </Link>

            {/* Mobile Algorithms Section */}
            <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4">
              <Link
                href="/algorithms"
                onClick={() => setIsOpen(false)}
                className="mb-4 flex items-center justify-between rounded-xl bg-cyan-400/10 px-4 py-3 text-sm font-bold text-cyan-600 transition hover:bg-cyan-400/20 dark:text-cyan-200"
              >
                Algorithms
                <span className="text-xs font-medium">View All</span>
              </Link>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    Classical
                  </p>

                  <div className="grid gap-2">
                    {classicalAlgorithms.map((algo) => (
                      <Link
                        key={algo.href}
                        href={algo.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-cyan-400/10 hover:text-cyan-600 dark:hover:text-cyan-200"
                      >
                        {algo.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    Modern
                  </p>

                  <div className="grid gap-2">
                    {modernAlgorithms.map((algo) => (
                      <Link
                        key={algo.href}
                        href={algo.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-purple-400/10 hover:text-purple-600 dark:hover:text-purple-200"
                      >
                        {algo.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/lab-report"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
            >
              Lab Report
            </Link>

            <Link
              href="/api-docs"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
            >
              API Docs
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
            >
              About
            </Link>

            <Link
              href="/lab"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Interactive Lab
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}