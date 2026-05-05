type ApiPreviewProps = {
  payload: unknown;
};

export function ApiPreview({ payload }: ApiPreviewProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <h2 className="mb-4 text-lg font-bold text-white">
        API Payload Preview
      </h2>

      <pre className="max-h-80 overflow-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-xs leading-6 text-slate-300">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </div>
  );
}