import {
  ExternalLink,
  GraduationCap,
  Lightbulb,
  Rocket,
  UserRound,
} from "lucide-react";
import { PageHeader } from "../../components/ui/PageHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <PageHeader
        badge="Academic Project"
        title="About CryptoGraphy Web Portal"
        description="CryptoGraphy Web Portal is an academic web application for learning, testing, and demonstrating cryptographic algorithms from a cryptography and network security laboratory course."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3">
                <UserRound className="h-6 w-6 text-cyan-300" />
              </div>

              <div>
                <p className="text-sm text-cyan-200">Developer</p>
                <h2 className="text-2xl font-bold text-white">
                  Sajjad Hossain Soykot
                </h2>
              </div>
            </div>

            <p className="leading-7 text-slate-300">
              I am a B.Sc. Engineering student in Information and Communication
              Technology at Islamic University, Bangladesh. I am interested in
              programming, frontend development, UI/UX design, web development,
              research, and building academic technology projects.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              This CryptoGraphy Web Portal was created to transform my
              Cryptography and Network Security laboratory experiments into an
              interactive web-based platform. Through this project, I am also
              learning how to connect a FastAPI backend with a modern Next.js
              frontend and how to design API-based full-stack applications.
            </p>

            <a
              href="https://github.com/SajjadHossainSoykot"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
            >
              <ExternalLink className="h-4 w-4" />
              View GitHub Profile
            </a>
          </div>

          <div className="grid gap-6">
            <AboutCard
              icon={<GraduationCap className="h-6 w-6 text-violet-300" />}
              title="Academic Background"
              description="This project is based on laboratory experiments from the Cryptography and Network Security course. The implemented experiments include Caesar Cipher, Playfair Cipher, Hill Cipher, Vigenère Cipher, Rail Fence Cipher, RSA Algorithm, and Diffie-Hellman Key Exchange."
            />

            <AboutCard
              icon={<Rocket className="h-6 w-6 text-cyan-300" />}
              title="Project Purpose"
              description="The main purpose of this portal is to make cryptographic algorithms easier to understand by allowing users to test encryption, decryption, key generation, and shared-key generation directly from a web interface."
            />

            <AboutCard
              icon={<Lightbulb className="h-6 w-6 text-amber-300" />}
              title="Learning Goal"
              description="Besides implementing cryptography algorithms, this project is also a learning journey for understanding API development, FastAPI routing, backend response handling, Next.js App Router, reusable frontend components, and frontend-backend integration."
            />
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <AboutCard
            title="Backend Implementation"
            description="The backend is built with FastAPI and Python. Each algorithm is separated into its own module, and all operations are handled through a unified POST /crypto endpoint. This makes the API simple and easy to connect with the frontend."
          />

          <AboutCard
            title="Frontend Implementation"
            description="The frontend is built with Next.js, TypeScript, and Tailwind CSS. It contains a homepage, algorithm theory pages, API documentation, project information, and an interactive lab interface for testing the backend algorithms."
          />

          <AboutCard
            title="Supported Algorithms"
            description="The portal supports Caesar Cipher, Playfair Cipher, Hill Cipher, Vigenère Cipher, Rail Fence Cipher, RSA Algorithm, and Diffie-Hellman Key Exchange. These algorithms are implemented from laboratory experiment concepts and converted into API-based web features."
          />

          <AboutCard
            title="Disclaimer"
            description="This project is created only for academic learning and demonstration. The cryptographic implementations are simplified for educational understanding and should not be used for real-world secure communication."
          />
        </div>
      </section>
    </div>
  );
}

function AboutCard({
  icon,
  title,
  description,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      {icon ? (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
          {icon}
        </div>
      ) : null}

      <h2 className="mb-3 text-xl font-bold text-white">{title}</h2>
      <p className="leading-7 text-slate-400">{description}</p>
    </div>
  );
}