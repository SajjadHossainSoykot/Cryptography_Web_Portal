import type { Algorithm } from "../../data/algorithms";

type AlgorithmSelectorProps = {
  algorithms: Algorithm[];
  selectedAlgorithmId: Algorithm["id"];
  onSelect: (algorithmId: Algorithm["id"]) => void;
};

export function AlgorithmSelector({
  algorithms,
  selectedAlgorithmId,
  onSelect,
}: AlgorithmSelectorProps) {
  const classicalAlgorithms = algorithms.filter(
    (algorithm) => algorithm.category === "Classical Cryptography"
  );

  const modernAlgorithms = algorithms.filter(
    (algorithm) => algorithm.category === "Modern Cryptography"
  );

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Choose Algorithm</h2>
          <p className="text-sm text-slate-400">
            Select one cipher or key exchange algorithm to test.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
        <AlgorithmGroup
          title="Classical Ciphers"
          algorithms={classicalAlgorithms}
          selectedAlgorithmId={selectedAlgorithmId}
          onSelect={onSelect}
        />

        <AlgorithmGroup
          title="Modern Cryptography"
          algorithms={modernAlgorithms}
          selectedAlgorithmId={selectedAlgorithmId}
          onSelect={onSelect}
        />
      </div>
    </section>
  );
}

function AlgorithmGroup({
  title,
  algorithms,
  selectedAlgorithmId,
  onSelect,
}: AlgorithmSelectorProps & {
  title: string;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>

      <div className="flex flex-wrap gap-2">
        {algorithms.map((algorithm) => {
          const isActive = algorithm.id === selectedAlgorithmId;

          return (
            <button
              key={algorithm.id}
              type="button"
              onClick={() => onSelect(algorithm.id)}
              className={
                isActive
                  ? "rounded-full border border-cyan-300/70 bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30"
                  : "rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-100"
              }
            >
              {algorithm.shortName}
            </button>
          );
        })}
      </div>
    </div>
  );
}