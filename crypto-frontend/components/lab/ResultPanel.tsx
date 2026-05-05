type ResultPanelProps = {
  data: unknown;
  result: string;
  error?: string;
  isLoading?: boolean;
};

export function ResultPanel({
  data,
  result,
  error,
  isLoading,
}: ResultPanelProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">Result</h2>
          <p className="mt-1 text-sm text-slate-500">
            Backend response formatted for the selected algorithm.
          </p>
        </div>

        <button
          type="button"
          disabled={!result || isLoading}
          onClick={() => navigator.clipboard.writeText(result)}
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Copy
        </button>
      </div>

      {error ? (
        <pre className="min-h-40 max-h-80 overflow-auto rounded-2xl border border-red-400/20 bg-red-950/30 p-5 text-sm leading-7 text-red-200">
          {error}
        </pre>
      ) : isLoading ? (
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-slate-300">
          Running algorithm...
        </div>
      ) : data ? (
        <FormattedResult data={data} />
      ) : (
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-slate-400">
          Result will appear here.
        </div>
      )}
    </div>
  );
}

function FormattedResult({ data }: { data: unknown }) {
  if (!data || typeof data !== "object") {
    return <PrimaryOutput label="Output" value={String(data)} />;
  }

  const response = data as Record<string, unknown>;
  const algorithm = String(response.algorithm ?? "");
  const mode = String(response.mode ?? "");
  const result = response.result;

  if (algorithm === "rsa") {
    return <RSAResult result={result} mode={mode} />;
  }

  if (algorithm === "diffie_hellman") {
    return <DiffieHellmanResult response={response} />;
  }

  if (algorithm === "playfair") {
    return <PlayfairResult response={response} />;
  }

  if (algorithm === "hill") {
    return <HillResult response={response} />;
  }

  return <PrimaryOutput label="Output" value={formatValue(result)} />;
}

function PlayfairResult({ response }: { response: Record<string, unknown> }) {
  const output = formatValue(response.result);
  const keyword = formatValue(response.keyword);
  const matrix = normalizeMatrix(response.matrix, 5);

  return (
    <div className="space-y-5">
      <PrimaryOutput label="Encrypted / Decrypted Output" value={output} />

      <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
        <SmallInfo label="Keyword" value={keyword} />

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Playfair Key Matrix
              </p>
              <p className="mt-1 text-sm text-slate-400">
                5 × 5 matrix generated from the keyword.
              </p>
            </div>
          </div>

          {matrix.length > 0 ? (
            <MatrixGrid matrix={matrix} />
          ) : (
            <p className="text-sm text-slate-500">Matrix not returned.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function HillResult({ response }: { response: Record<string, unknown> }) {
  const output = formatValue(response.result);
  const matrix = normalizeMatrix(response.matrix, 2);

  return (
    <div className="space-y-5">
      <PrimaryOutput label="Encrypted / Decrypted Output" value={output} />

      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Hill Key Matrix
        </p>

        {matrix.length > 0 ? (
          <MatrixGrid matrix={matrix} />
        ) : (
          <p className="text-sm text-slate-500">Matrix not returned.</p>
        )}
      </div>
    </div>
  );
}

function RSAResult({ result, mode }: { result: unknown; mode: string }) {
  if (!result || typeof result !== "object") {
    return <PrimaryOutput label="Output" value={formatValue(result)} />;
  }

  const rsa = result as Record<string, unknown>;

  return (
    <div className="space-y-5">
      {mode === "encrypt" && "cipher" in rsa ? (
        <PrimaryOutput label="Cipher Array" value={formatValue(rsa.cipher)} />
      ) : null}

      {mode === "decrypt" && "plain" in rsa ? (
        <PrimaryOutput label="Plain Text" value={formatValue(rsa.plain)} />
      ) : null}

      {mode === "keygen" ? (
        <PrimaryOutput label="Key Generation" value="RSA keys generated successfully." />
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        {"public_key" in rsa ? (
          <SmallInfo label="Public Key" value={formatValue(rsa.public_key)} />
        ) : null}

        {"private_key" in rsa ? (
          <SmallInfo label="Private Key" value={formatValue(rsa.private_key)} />
        ) : null}

        {"n" in rsa ? <SmallInfo label="n" value={formatValue(rsa.n)} /> : null}

        {"phi" in rsa ? (
          <SmallInfo label="phi(n)" value={formatValue(rsa.phi)} />
        ) : null}
      </div>
    </div>
  );
}

function DiffieHellmanResult({
  response,
}: {
  response: Record<string, unknown>;
}) {
  const result = response.result;

  if (!result || typeof result !== "object") {
    return <PrimaryOutput label="Output" value={formatValue(result)} />;
  }

  const dh = result as Record<string, unknown>;
  const matched = Boolean(dh.matched);

  return (
    <div className="space-y-5">
      <div
        className={
          matched
            ? "rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5"
            : "rounded-2xl border border-red-400/30 bg-red-400/10 p-5"
        }
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Shared Key Status
        </p>

        <p
          className={
            matched
              ? "mt-2 text-3xl font-bold text-emerald-300"
              : "mt-2 text-3xl font-bold text-red-300"
          }
        >
          {matched ? "Matched" : "Not Matched"}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SmallInfo label="Public Key A" value={formatValue(dh.public_key_a)} />
        <SmallInfo label="Public Key B" value={formatValue(dh.public_key_b)} />
        <HighlightInfo label="Shared Key A" value={formatValue(dh.shared_key_a)} />
        <HighlightInfo label="Shared Key B" value={formatValue(dh.shared_key_b)} />
      </div>
    </div>
  );
}

function PrimaryOutput({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70">
        {label}
      </p>

      <pre className="overflow-auto whitespace-pre-wrap break-words text-2xl font-bold leading-8 text-cyan-100">
        {value}
      </pre>
    </div>
  );
}

function SmallInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>

      <pre className="overflow-auto whitespace-pre-wrap break-words text-base leading-7 text-slate-200">
        {value}
      </pre>
    </div>
  );
}

function HighlightInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70">
        {label}
      </p>

      <pre className="overflow-auto whitespace-pre-wrap break-words text-2xl font-bold leading-8 text-cyan-100">
        {value}
      </pre>
    </div>
  );
}

function MatrixGrid({ matrix }: { matrix: string[][] }) {
  const columnCount = matrix[0]?.length ?? 5;

  return (
    <div
      className="grid max-w-sm gap-2"
      style={{
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
      }}
    >
      {matrix.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <div
            key={`${rowIndex}-${columnIndex}-${cell}`}
            className="flex aspect-square items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-bold text-cyan-100 shadow-sm shadow-cyan-950/20"
          >
            {cell}
          </div>
        ))
      )}
    </div>
  );
}

function normalizeMatrix(value: unknown, expectedSize: number): string[][] {
  if (!Array.isArray(value)) {
    return [];
  }

  // Case 1: Backend returns nested matrix:
  // [["M","O","N","A","R"], ["C","H","Y","B","D"], ...]
  if (Array.isArray(value[0])) {
    return value.map((row) =>
      Array.isArray(row) ? row.map((cell) => String(cell)) : []
    );
  }

  // Case 2: Backend returns flat matrix:
  // ["M","O","N","A","R","C","H",...]
  const flat = value.map((cell) => String(cell));
  const matrix: string[][] = [];

  for (let i = 0; i < flat.length; i += expectedSize) {
    matrix.push(flat.slice(i, i + expectedSize));
  }

  return matrix;
}

function formatValue(value: unknown) {
  if (value === undefined || value === null) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return JSON.stringify(value, null, 2);
}