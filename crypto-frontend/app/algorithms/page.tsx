import Link from "next/link";
import { PageHeader } from "../../components/ui/PageHeader";
import { algorithms, type Algorithm } from "../../data/algorithms";

export default function AlgorithmsPage() {
  const classicalAlgorithms = algorithms.filter(
    (algorithm) => algorithm.category === "Classical Cryptography"
  );

  const modernAlgorithms = algorithms.filter(
    (algorithm) => algorithm.category === "Modern Cryptography"
  );

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
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
  algorithms: Algorithm[];
}) {
  return (
    <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-sm">
      <h2 className="mb-5 text-2xl font-bold text-[var(--foreground)]">
        {title}
      </h2>

      <div className="grid gap-4">
        {algorithms.map((algorithm) => (
          <Link
            key={algorithm.id}
            href={algorithm.route}
            className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <h3 className="font-semibold text-[var(--foreground)]">
                {algorithm.name}
              </h3>

              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-200">
                {algorithm.modes.join(" / ")}
              </span>
            </div>

            <p className="text-sm leading-6 text-[var(--muted)]">
              {algorithm.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}