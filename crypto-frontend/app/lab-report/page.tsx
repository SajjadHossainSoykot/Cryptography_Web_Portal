import { Download, ExternalLink, FileText } from "lucide-react";
import { PageHeader } from "../../components/ui/PageHeader";

const localPdfUrl = "/files/CryptographyExperimentsAll.pdf";

const githubPdfUrl =
  "https://github.com/SajjadHossainSoykot/ICT-4110-Cryptography-and-Network-Security-Laboratory/blob/main/Lab%20Report/CryptographyExperimentsAll.pdf";

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
              Original Lab Report
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              This PDF contains the original laboratory experiments for Caesar
              Cipher, Playfair Cipher, Hill Cipher, Vigenère Cipher, Rail Fence
              Cipher, RSA Algorithm, and Diffie-Hellman Key Exchange.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href={localPdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <ExternalLink className="h-4 w-4" />
                Open PDF in Browser
              </a>

              <a
                href={localPdfUrl}
                download="CryptographyExperimentsAll.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>

              <a
                href={githubPdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
              >
                <ExternalLink className="h-4 w-4" />
                View Source on GitHub
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="border-b border-white/10 px-5 py-4">
              <h2 className="text-lg font-bold text-white">PDF Preview</h2>
              <p className="mt-1 text-sm text-slate-400">
                Preview of the local lab report PDF stored inside this project.
              </p>
            </div>

            <object
              data={localPdfUrl}
              type="application/pdf"
              className="h-[720px] w-full bg-white"
            >
              <div className="p-6 text-slate-300">
                <p className="mb-4">
                  Your browser cannot preview this PDF directly.
                </p>

                <a
                  href={localPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950"
                >
                  Open PDF
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>
    </div>
  );
}