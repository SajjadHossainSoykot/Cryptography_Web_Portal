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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Cryptography and Network Security Laboratory
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            <i>Learn, Test, Encrypt, & Decrypt Cryptographic Algorithms.</i>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            CryptoGraphy Web Portal is an interactive academic platform for
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
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Explore Algorithms
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/10 p-2">
                  <FlaskConical className="h-5 w-5 text-cyan-300" />
                </div>
                <h2 className="font-semibold text-white">Interactive Lab</h2>
              </div>
              <p className="text-sm leading-6 text-slate-400">
                Select algorithms, change keys, encrypt messages, decrypt
                ciphertext, generate RSA keys, and test Diffie-Hellman shared
                secrets.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-violet-400/10 p-2">
                  <BookOpen className="h-5 w-5 text-violet-300" />
                </div>
                <h2 className="font-semibold text-white">Theory Section</h2>
              </div>
              <p className="text-sm leading-6 text-slate-400">
                Read theory, formulas, examples, and algorithm steps based on
                cryptography laboratory experiments.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-400/10 p-2">
                  <LockKeyhole className="h-5 w-5 text-emerald-300" />
                </div>
                <h2 className="font-semibold text-white">Backend Powered</h2>
              </div>
              <p className="text-sm leading-6 text-slate-400">
                All crypto operations will be processed by your existing FastAPI
                backend through the unified POST /crypto endpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            Supported Algorithms
          </h2>
          <p className="mt-2 text-slate-400">
            The portal currently supports seven algorithms from your
            cryptography lab report.
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

function AlgorithmGroup({
  title,
  algorithms,
}: {
  title: string;
  algorithms: Algorithm[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="mb-5 text-xl font-semibold text-white">{title}</h3>

      <div className="grid gap-4">
        {algorithms.map((algorithm) => (
          <Link
            key={algorithm.id}
            href={algorithm.route}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-cyan-400/50 hover:bg-slate-900"
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <h4 className="font-semibold text-white">{algorithm.name}</h4>
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