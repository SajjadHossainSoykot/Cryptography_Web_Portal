import type { AlgorithmMode } from "../../data/algorithms";

type TextInputPanelProps = {
  value: string;
  mode: AlgorithmMode;
  algorithmId: string;
  onChange: (value: string) => void;
};

export function TextInputPanel({
  value,
  mode,
  algorithmId,
  onChange,
}: TextInputPanelProps) {
  const isSpecialMode = mode === "keygen" || mode === "generate";

  const placeholder =
    algorithmId === "rsa" && mode === "decrypt"
      ? "3000, 28, 2726, 2726, 1307"
      : mode === "decrypt"
      ? "Enter ciphertext..."
      : "Enter plaintext...";

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[var(--muted)]">
        Input Text
      </label>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={isSpecialMode}
        placeholder={
          isSpecialMode ? "No text input required for this mode." : placeholder
        }
        rows={5}
        className="w-full resize-none rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 px-4 py-4 text-sm leading-6 text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-cyan-400/60 disabled:cursor-not-allowed disabled:opacity-60"
      />

      {algorithmId === "rsa" && mode === "decrypt" ? (
        <p className="mt-2 text-xs text-amber-600 dark:text-amber-300">
          Enter comma-separated RSA cipher numbers.
        </p>
      ) : null}
    </div>
  );
}