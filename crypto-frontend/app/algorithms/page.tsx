import Link from "next/link";
import { PageHeader } from "../../components/ui/PageHeader";
import { algorithms } from "../../data/algorithms";

export default function AlgorithmsPage() {
  const classicalAlgorithms = algorithms.filter(
    (algorithm) => algorithm.category === "Classical Cryptography"
  );

  const modernAlgorithms = algorithms.filter(
    (algorithm) => algorithm.category === "Modern Cryptography"
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <PageHeader
        badge="Algorithm Library"
        title="Cryptographic Algorithms"
        description="Explore the theory, formulas, examples, and input requirements for each cryptographic algorithm included in this portal."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-2">
        <AlgorithmSection
          title="Classical Cryptography"
          algorithms={classicalAlgorithms}
        />

        <AlgorithmSection
          title="Modern Cryptography"
          algorithms={modernAlgorithms}
        />
      </section>
    </div>
  );
}

function AlgorithmSection({
  title,
  algorithms,
}: {
  title: string;
  algorithms: typeof import("../../data/algorithms").algorithms;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="mb-5 text-2xl font-bold text-white">{title}</h2>

      <div className="grid gap-4">
        {algorithms.map((algorithm) => (
          <Link
            key={algorithm.id}
            href={algorithm.route}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-cyan-400/50 hover:bg-slate-900"
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <h3 className="font-semibold text-white">{algorithm.name}</h3>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                {algorithm.modes.join(" / ")}
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-400">
              {algorithm.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}