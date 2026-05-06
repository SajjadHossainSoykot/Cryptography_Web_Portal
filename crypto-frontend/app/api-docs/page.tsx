import { PageHeader } from "../../components/ui/PageHeader";

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <PageHeader
        badge="Backend API"
        title="API Documentation"
        description="This page documents how the Next.js frontend communicates with the FastAPI backend through the unified POST /crypto endpoint."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <ApiBlock
            title="Backend Base URL"
            content={`http://127.0.0.1:8000`}
          />

          <ApiBlock title="Main Endpoint" content={`POST /crypto`} />

          <ApiBlock
            title="General Request Format"
            content={`{
  "algorithm": "caesar",
  "mode": "encrypt",
  "text": "HELLO",
  "key": {
    "shift": 3
  }
}`}
          />

          <ApiBlock
            title="Supported Algorithms"
            content={`caesar
playfair
hill
vigenere
rail_fence
rsa
diffie_hellman`}
          />
        </div>
      </section>
    </div>
  );
}

function ApiBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-[var(--foreground)]">
        {title}
      </h2>

      <pre className="overflow-x-auto whitespace-pre-wrap rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5 text-sm leading-7 text-[var(--muted)]">
        {content}
      </pre>
    </div>
  );
}