import type { Algorithm } from "../../data/algorithms";

type KeyInputPanelProps = {
  algorithm: Algorithm;
  keyValues: Record<string, unknown>;
  onKeyChange: (key: string, value: unknown) => void;
};

export function KeyInputPanel({
  algorithm,
  keyValues,
  onKeyChange,
}: KeyInputPanelProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-300">
        Key Settings
      </label>

      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
        {algorithm.id === "caesar" ? (
          <NumberInput
            label="Shift"
            value={Number(keyValues.shift ?? 3)}
            onChange={(value) => onKeyChange("shift", value)}
          />
        ) : null}

        {algorithm.id === "playfair" ? (
          <TextInput
            label="Keyword"
            value={String(keyValues.keyword ?? "MONARCHY")}
            onChange={(value) => onKeyChange("keyword", value)}
          />
        ) : null}

        {algorithm.id === "vigenere" ? (
          <TextInput
            label="Keyword"
            value={String(keyValues.keyword ?? "KEY")}
            onChange={(value) => onKeyChange("keyword", value)}
          />
        ) : null}

        {algorithm.id === "rail_fence" ? (
          <NumberInput
            label="Depth"
            value={Number(keyValues.depth ?? 3)}
            onChange={(value) => onKeyChange("depth", value)}
          />
        ) : null}

        {algorithm.id === "hill" ? (
          <HillMatrixInput
            matrix={getMatrix(keyValues.matrix)}
            onChange={(matrix) => onKeyChange("matrix", matrix)}
          />
        ) : null}

        {algorithm.id === "rsa" ? (
          <div className="grid gap-3 sm:grid-cols-3">
            <NumberInput
              label="p"
              value={Number(keyValues.p ?? 61)}
              onChange={(value) => onKeyChange("p", value)}
            />

            <NumberInput
              label="q"
              value={Number(keyValues.q ?? 53)}
              onChange={(value) => onKeyChange("q", value)}
            />

            <NumberInput
              label="e"
              value={Number(keyValues.e ?? 17)}
              onChange={(value) => onKeyChange("e", value)}
            />
          </div>
        ) : null}

        {algorithm.id === "diffie_hellman" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <NumberInput
              label="p"
              value={Number(keyValues.p ?? 23)}
              onChange={(value) => onKeyChange("p", value)}
            />

            <NumberInput
              label="g"
              value={Number(keyValues.g ?? 5)}
              onChange={(value) => onKeyChange("g", value)}
            />

            <NumberInput
              label="Private A"
              value={Number(keyValues.a ?? 6)}
              onChange={(value) => onKeyChange("a", value)}
            />

            <NumberInput
              label="Private B"
              value={Number(keyValues.b ?? 15)}
              onChange={(value) => onKeyChange("b", value)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
        {label}
      </label>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60"
      />
    </div>
  );
}

function NumberInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60"
      />
    </div>
  );
}

function HillMatrixInput({
  matrix,
  onChange,
}: {
  matrix: number[][];
  onChange: (matrix: number[][]) => void;
}) {
  function updateMatrix(row: number, col: number, value: number) {
    const newMatrix = matrix.map((matrixRow) => [...matrixRow]);
    newMatrix[row][col] = value;
    onChange(newMatrix);
  }

  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
        2x2 Matrix
      </p>

      <div className="grid max-w-xs grid-cols-2 gap-2">
        {matrix.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="number"
              value={value}
              onChange={(event) =>
                updateMatrix(rowIndex, colIndex, Number(event.target.value))
              }
              className="rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-center text-sm text-slate-100 outline-none transition focus:border-cyan-400/60"
            />
          ))
        )}
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Matrix must be invertible modulo 26.
      </p>
    </div>
  );
}

function getMatrix(value: unknown): number[][] {
  if (
    Array.isArray(value) &&
    value.length === 2 &&
    Array.isArray(value[0]) &&
    Array.isArray(value[1])
  ) {
    return value as number[][];
  }

  return [
    [3, 3],
    [2, 5],
  ];
}