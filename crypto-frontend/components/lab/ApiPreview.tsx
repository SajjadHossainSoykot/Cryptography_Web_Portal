type ApiPreviewProps = {
  payload: unknown;
};

export function ApiPreview({ payload }: ApiPreviewProps) {
  return (
    <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-[var(--foreground)]">
        API Payload Preview
      </h2>

      <pre className="max-h-80 overflow-auto rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-4 text-xs leading-6 text-[var(--muted)]">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </div>
  );
}