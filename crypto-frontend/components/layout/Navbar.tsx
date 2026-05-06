"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

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
              src="favicon.ico"
              alt="Sajjad Hossain Soykot"
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

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-cyan-500 dark:hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
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

      {isOpen ? (
        <div className="border-t border-[var(--card-border)] bg-[var(--background)] px-5 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-200"
              >
                {link.label}
              </Link>
            ))}

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