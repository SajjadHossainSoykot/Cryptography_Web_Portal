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
    <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            Result
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Backend response formatted for the selected algorithm.
          </p>
        </div>

        <button
          type="button"
          disabled={!result || isLoading}
          onClick={() => navigator.clipboard.writeText(result)}
          className="rounded-full border border-[var(--card-border)] px-4 py-2 text-xs font-semibold text-[var(--muted)] transition hover:border-cyan-400/40 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:text-cyan-200"
        >
          Copy
        </button>
      </div>

      {error ? (
        <BackendErrorMessage error={error} />
      ) : isLoading ? (
        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5 text-sm text-[var(--muted)]">
          Running algorithm...
        </div>
      ) : data ? (
        <FormattedResult data={data} />
      ) : (
        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5 text-sm text-[var(--muted)]">
          Result will appear here.
        </div>
      )}
    </div>
  );
}

function BackendErrorMessage({ error }: { error: string }) {
  const isBackendConnectionError =
    error.toLowerCase().includes("backend server is not connected") ||
    error.toLowerCase().includes("failed to fetch");

  return (
    <div className="min-h-40 rounded-2xl border border-red-400/25 bg-red-500/10 p-5">
      <div className="mb-4">
        <p className="text-sm font-bold text-red-600 dark:text-red-200">
          {isBackendConnectionError
            ? "Backend Server Not Connected"
            : "Request Error"}
        </p>

        <p className="mt-1 text-xs leading-5 text-red-600/80 dark:text-red-200/80">
          {isBackendConnectionError
            ? "The frontend is working, but it cannot reach your FastAPI backend server."
            : "The backend returned an error while processing this request."}
        </p>
      </div>

      <pre className="whitespace-pre-wrap break-words rounded-xl border border-red-400/20 bg-red-500/10 p-4 text-sm leading-7 text-red-700 dark:text-red-100">
        {error}
      </pre>
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

        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Playfair Key Matrix
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                5 × 5 matrix generated from the keyword.
              </p>
            </div>
          </div>

          {matrix.length > 0 ? (
            <MatrixGrid matrix={matrix} />
          ) : (
            <p className="text-sm text-[var(--muted)]">Matrix not returned.</p>
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

      <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Hill Key Matrix
        </p>

        {matrix.length > 0 ? (
          <MatrixGrid matrix={matrix} />
        ) : (
          <p className="text-sm text-[var(--muted)]">Matrix not returned.</p>
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
        <PrimaryOutput
          label="Key Generation"
          value="RSA keys generated successfully."
        />
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
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Shared Key Status
        </p>

        <p
          className={
            matched
              ? "mt-2 text-3xl font-bold text-emerald-600 dark:text-emerald-300"
              : "mt-2 text-3xl font-bold text-red-600 dark:text-red-300"
          }
        >
          {matched ? "Matched" : "Not Matched"}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SmallInfo label="Public Key A" value={formatValue(dh.public_key_a)} />
        <SmallInfo label="Public Key B" value={formatValue(dh.public_key_b)} />
        <HighlightInfo
          label="Shared Key A"
          value={formatValue(dh.shared_key_a)}
        />
        <HighlightInfo
          label="Shared Key B"
          value={formatValue(dh.shared_key_b)}
        />
      </div>
    </div>
  );
}

function PrimaryOutput({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200/70">
        {label}
      </p>

      <pre className="overflow-auto whitespace-pre-wrap break-words text-2xl font-bold leading-8 text-cyan-700 dark:text-cyan-100">
        {value}
      </pre>
    </div>
  );
}

function SmallInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>

      <pre className="overflow-auto whitespace-pre-wrap break-words text-base leading-7 text-[var(--foreground)]">
        {value}
      </pre>
    </div>
  );
}

function HighlightInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200/70">
        {label}
      </p>

      <pre className="overflow-auto whitespace-pre-wrap break-words text-2xl font-bold leading-8 text-cyan-700 dark:text-cyan-100">
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
            className="flex aspect-square items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-bold text-cyan-700 shadow-sm shadow-cyan-950/10 dark:text-cyan-100 dark:shadow-cyan-950/20"
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

  if (Array.isArray(value[0])) {
    return value.map((row) =>
      Array.isArray(row) ? row.map((cell) => String(cell)) : []
    );
  }

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