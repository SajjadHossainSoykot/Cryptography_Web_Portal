export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 CryptoGraphy Web Portal. Academic project.</p>

        <p>
          Built with Next.js frontend and FastAPI backend for cryptography lab
          experiments.
        </p>
      </div>
    </footer>
  );
}