import { FlaskConical } from "lucide-react";
import { PageHeader } from "../../components/ui/PageHeader";

export default function LabPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <PageHeader
        badge="Interactive Experiment Area"
        title="Interactive Cryptography Lab"
        description="Select a cryptographic algorithm, enter your message, customize keys, and run encryption, decryption, key generation, or key exchange using the FastAPI backend."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-cyan-400/10 p-3">
              <FlaskConical className="h-6 w-6 text-cyan-300" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                Lab Interface Coming Next
              </h2>
              <p className="text-slate-400">
                In Step 3, this page will become the real interactive cipher
                tester.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Select Algorithm" />
            <FeatureCard title="Enter Text" />
            <FeatureCard title="Change Keys" />
            <FeatureCard title="View Result" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-sm font-medium text-slate-300">
      {title}
    </div>
  );
}