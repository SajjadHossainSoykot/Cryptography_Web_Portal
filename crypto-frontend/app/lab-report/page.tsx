import { Download, ExternalLink, FileText } from "lucide-react";
import { PageHeader } from "../../components/ui/PageHeader";

const githubPdfUrl =
  "https://github.com/SajjadHossainSoykot/ICT-4110-Cryptography-and-Network-Security-Laboratory/blob/main/Lab%20Report/CryptographyExperimentsAll.pdf";

const rawPdfUrl =
  "https://raw.githubusercontent.com/SajjadHossainSoykot/ICT-4110-Cryptography-and-Network-Security-Laboratory/main/Lab%20Report/CryptographyExperimentsAll.pdf";

export default function LabReportPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <PageHeader
        badge="PDF Documentation"
        title="Cryptography Lab Report"
        description="Read the original Cryptography and Network Security Laboratory report that inspired this interactive web portal."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
              <FileText className="h-7 w-7 text-cyan-300" />
            </div>

            <h2 className="text-2xl font-bold text-white">
              Lab Report Source
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              This PDF contains the original laboratory experiments for Caesar
              Cipher, Playfair Cipher, Hill Cipher, Vigenère Cipher, Rail Fence
              Cipher, RSA Algorithm, and Diffie-Hellman Key Exchange.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={githubPdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <ExternalLink className="h-4 w-4" />
                View on GitHub
              </a>

              <a
                href={rawPdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
              >
                <Download className="h-4 w-4" />
                Open / Download PDF
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/10 px-5 py-4">
              <h2 className="text-lg font-bold text-white">PDF Preview</h2>
              <p className="mt-1 text-sm text-slate-400">
                Browser preview of the original lab report.
              </p>
            </div>

            <iframe
              src={rawPdfUrl}
              className="h-[720px] w-full bg-white"
              title="Cryptography Lab Report PDF"
            />
          </div>
        </div>
      </section>
    </div>
  );
}