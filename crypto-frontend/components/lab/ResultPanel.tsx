type ResultPanelProps = {
  result: string;
};

export function ResultPanel({ result }: ResultPanelProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-white">Result</h2>

        <button
          type="button"
          disabled={!result}
          onClick={() => navigator.clipboard.writeText(result)}
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Copy
        </button>
      </div>

      <pre className="min-h-40 max-h-64 overflow-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-7 text-slate-300">
        {result || "Result will appear here."}
      </pre>
    </div>
  );
}