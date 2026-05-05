import Link from "next/link";
import { ShieldCheck } from "lucide-react";

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
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2">
            <ShieldCheck className="h-5 w-5 text-cyan-300" />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              CryptoGraphy
            </p>
            <p className="text-xs text-slate-400">Web Portal</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/lab"
          className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
        >
          Start Lab
        </Link>
      </div>
    </header>
  );
}