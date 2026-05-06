import type { AlgorithmMode } from "../../data/algorithms";

type ModeSelectorProps = {
  modes: AlgorithmMode[];
  selectedMode: AlgorithmMode;
  onModeChange: (mode: AlgorithmMode) => void;
};

export function ModeSelector({
  modes,
  selectedMode,
  onModeChange,
}: ModeSelectorProps) {
  return (
    <div>
      <label className="mb-3 block text-sm font-semibold text-[var(--muted)]">
        Operation Mode
      </label>

      <div className="flex flex-wrap gap-2">
        {modes.map((mode) => {
          const isActive = mode === selectedMode;

          return (
            <button
              key={mode}
              type="button"
              onClick={() => onModeChange(mode)}
              className={
                isActive
                  ? "rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950"
                  : "rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-600 dark:hover:text-cyan-200"
              }
            >
              {mode}
            </button>
          );
        })}
      </div>
    </div>
  );
}