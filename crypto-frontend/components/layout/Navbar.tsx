"use client";

import Link from "next/link";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2">
            <ShieldCheck className="h-5 w-5 text-cyan-300" />
          </div>

          <div>
            <p className="text-sm font-bold tracking-wide text-white">
              CryptoGraphy
            </p>
            <p className="text-xs text-slate-400">Web Portal</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/lab"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
          >
            Start Lab
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
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