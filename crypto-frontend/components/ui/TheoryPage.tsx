import Link from "next/link";

type TheoryPageProps = {
  title: string;
  category: string;
  description: string;
  formula: string;
  example: string;
  steps: string[];
};

export function TheoryPage({
  title,
  category,
  description,
  formula,
  example,
  steps,
}: TheoryPageProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-20">
        <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-600 dark:text-cyan-200">
          {category}
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          {description}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/lab"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Try in Interactive Lab
          </Link>

          <Link
            href="/algorithms"
            className="inline-flex items-center justify-center rounded-full border border-[var(--card-border)] px-6 py-3 font-semibold text-[var(--foreground)] transition hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-200"
          >
            Back to Algorithms
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
              Algorithm Steps
            </h2>

            <ol className="space-y-3">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-[var(--muted)]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-600 dark:text-cyan-200">
                    {index + 1}
                  </span>
                  <span className="leading-7">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-8">
            <InfoBlock title="Formula" content={formula} />
            <InfoBlock title="Example" content={example} />
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
        {title}
      </h2>

      <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5 text-sm leading-7 text-[var(--muted)]">
        {content}
      </pre>
    </div>
  );
}