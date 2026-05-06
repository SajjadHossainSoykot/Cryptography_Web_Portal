import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, LockKeyhole } from "lucide-react";
import { algorithms, type Algorithm } from "../data/algorithms";

const classicalAlgorithms = algorithms.filter(
  (algorithm) => algorithm.category === "Classical Cryptography"
);

const modernAlgorithms = algorithms.filter(
  (algorithm) => algorithm.category === "Modern Cryptography"
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <div className="min-w-0 pt-10 lg:pt-16">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-600 dark:text-cyan-200">
            Cryptography and Network Security Laboratory
          </div>

          <h1 className="max-w-6xl text-4xl font-bold tracking-tight leading-[1.18] text-[var(--foreground)] md:text-5xl md:leading-[1.18] lg:text-5xl xl:text-6xl">
            {/* Mobile: typing in two lines */}
            <span className="block md:hidden">
              <span className="mobile-type-line-1">
                <span>Learn, Test, </span>
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  Encrypt
                </span>
              </span>

              <span className="mobile-type-line-2 mt-3">
                <span>, & </span>
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Decrypt
                </span>
              </span>

              <span className="mt-4 block pb-2 bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                Cryptographic Algorithms.
              </span>
            </span>

            {/* Desktop: typing in one line */}
            <span className="hidden md:block">
              <span className="typing-full-line">
                <span>Learn, Test, </span>
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  Encrypt
                </span>
                <span>, & </span>
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Decrypt
                </span>
              </span>

              <span className="mt-4 block pb-2 bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                Cryptographic Algorithms.
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-justify text-lg leading-8 text-[var(--muted)]">
            CipherXploreSS Web Portal is an interactive academic platform for
            experimenting with classical ciphers and modern cryptographic key
            exchange algorithms using a FastAPI backend and Next.js frontend.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/lab"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Interactive Lab
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/algorithms"
              className="inline-flex items-center justify-center rounded-full border border-[var(--card-border)] px-6 py-3 font-semibold text-[var(--foreground)] transition hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-200"
            >
              Explore Algorithms
            </Link>
          </div>
        </div>

        <div className="w-full rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur dark:shadow-cyan-950/20">
          <div className="grid gap-4">
            <FeatureCard
              icon={
                <div className="rounded-xl bg-cyan-400/10 p-2">
                  <FlaskConical className="h-5 w-5 text-cyan-500 dark:text-cyan-300" />
                </div>
              }
              title="Interactive Lab"
              description="Select algorithms, change keys, encrypt messages, decrypt ciphertext, generate RSA keys, and test Diffie-Hellman shared secrets."
            />

            <FeatureCard
              icon={
                <div className="rounded-xl bg-violet-400/10 p-2">
                  <BookOpen className="h-5 w-5 text-violet-500 dark:text-violet-300" />
                </div>
              }
              title="Theory Section"
              description="Read theory, formulas, examples, and algorithm steps based on cryptography laboratory experiments."
            />

            <FeatureCard
              icon={
                <div className="rounded-xl bg-emerald-400/10 p-2">
                  <LockKeyhole className="h-5 w-5 text-emerald-500 dark:text-emerald-300" />
                </div>
              }
              title="Backend Powered"
              description="All crypto operations are processed by the FastAPI backend through the unified POST /crypto endpoint."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">
            Supported Algorithms
          </h2>

          <p className="mt-2 max-w-3xl text-justify text-[var(--muted)]">
            The portal currently supports seven algorithms from your
            cryptography laboratory experiments.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AlgorithmGroup
            title="Classical Cryptography"
            algorithms={classicalAlgorithms}
          />

          <AlgorithmGroup
            title="Modern Cryptography"
            algorithms={modernAlgorithms}
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
      <div className="mb-3 flex items-center gap-3">
        {icon}

        <h2 className="font-semibold text-[var(--foreground)]">{title}</h2>
      </div>

      <p className="text-left text-sm leading-6 text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}

function AlgorithmGroup({
  title,
  algorithms,
}: {
  title: string;
  algorithms: Algorithm[];
}) {
  return (
    <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6">
      <h3 className="mb-5 text-xl font-semibold text-[var(--foreground)]">
        {title}
      </h3>

      <div className="grid gap-4">
        {algorithms.map((algorithm) => (
          <Link
            key={algorithm.id}
            href={algorithm.route}
            className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <h4 className="font-semibold text-[var(--foreground)]">
                {algorithm.name}
              </h4>

              <span className="shrink-0 rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-600 dark:text-cyan-200">
                {algorithm.modes.join(" / ")}
              </span>
            </div>

            <p className="text-left text-sm leading-6 text-[var(--muted)]">
              {algorithm.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}