import {
  ExternalLink,
  GraduationCap,
  Lightbulb,
  Rocket,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";

import { SiCodeforces } from "react-icons/si";

import { PageHeader } from "../../components/ui/PageHeader";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SajjadHossainSoykot",
    icon: FaGithub,
    className:
      "border-slate-400/30 bg-slate-800/80 text-white dark:bg-slate-800/70",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sajjadhossainsoykot",
    icon: FaLinkedinIn,
    className: "border-blue-400/30 bg-blue-500/15 text-blue-600 dark:text-blue-200",
  },
  {
    name: "X",
    href: "https://x.com/sajjadsoykot",
    icon: FaTwitter,
    className: "border-sky-400/30 bg-sky-500/15 text-sky-600 dark:text-sky-200",
  },
  {
    name: "Facebook",
    href: "https://fb.com/sajjadhossainsoykot",
    icon: FaFacebookF,
    className: "border-blue-500/30 bg-blue-600/15 text-blue-600 dark:text-blue-200",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sajjad_hossain_soykot",
    icon: FaInstagram,
    className: "border-pink-400/30 bg-pink-500/15 text-pink-600 dark:text-pink-200",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/sajjadhossainsoykot",
    icon: FaYoutube,
    className: "border-red-400/30 bg-red-500/15 text-red-600 dark:text-red-200",
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/sajjadsoykot",
    icon: SiCodeforces,
    className: "border-cyan-400/30 bg-cyan-500/15 text-cyan-600 dark:text-cyan-200",
  },
  {
    name: "Discord",
    href: "https://discord.gg/bfuyjQk",
    icon: FaDiscord,
    className: "border-indigo-400/30 bg-indigo-500/15 text-indigo-600 dark:text-indigo-200",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <PageHeader
        badge="Academic Project"
        title="About CipherXploreSS Web Portal"
        description="CipherXploreSS is an academic web application for learning, testing, and demonstrating cryptographic algorithms from a cryptography and network security laboratory course."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <DeveloperCard />

          <div className="grid gap-6">
            <AboutCard
              icon={<GraduationCap className="h-6 w-6 text-violet-500 dark:text-violet-300" />}
              title="Academic Background"
              description="This project is based on laboratory experiments from the Cryptography and Network Security course. The implemented experiments include Caesar Cipher, Playfair Cipher, Hill Cipher, Vigenère Cipher, Rail Fence Cipher, RSA Algorithm, and Diffie-Hellman Key Exchange."
            />

            <AboutCard
              icon={<Rocket className="h-6 w-6 text-cyan-500 dark:text-cyan-300" />}
              title="Project Purpose"
              description="The main purpose of this portal is to make cryptographic algorithms easier to understand by allowing users to test encryption, decryption, key generation, and shared-key generation directly from a web interface."
            />

            <AboutCard
              icon={<Lightbulb className="h-6 w-6 text-amber-500 dark:text-amber-300" />}
              title="Learning Goal"
              description="Besides implementing cryptography algorithms, this project is also a learning journey for understanding API development, FastAPI routing, backend response handling, Next.js App Router, reusable frontend components, and frontend-backend integration."
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
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

function DeveloperCard() {
  return (
    <div className="rounded-3xl border border-cyan-400/25 bg-cyan-400/5 p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-8">
        <img
          src="https://avatars.githubusercontent.com/u/105968856"
          // src="favicon.ico"
          alt="Sajjad Hossain Soykot"
          width={132}
          height={132}
          className="h-[132px] w-[132px] shrink-0 rounded-3xl border border-cyan-400/40 object-cover p-1 shadow-lg shadow-cyan-950/10 dark:shadow-cyan-950/30"
        />

        <div className="min-w-0">
          <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-200">
            Developer
          </p>

          <h2 className="mt-1 text-2xl font-bold leading-tight text-[var(--foreground)]">
            Sajjad Hossain Soykot
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            B.Sc. Engineering in ICT · Islamic University, Bangladesh
          </p>

          <a
            href="https://github.com/SajjadHossainSoykot"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-600 transition hover:bg-cyan-400/20 dark:text-cyan-200"
          >
            <ExternalLink className="h-4 w-4" />
            View GitHub Profile
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <JustifiedText className="text-[var(--muted)]">
          I am a B.Sc. Engineering student in Information and Communication
          Technology at Islamic University, Bangladesh. I am interested in
          programming, full stack development, UI/UX design, web development,
          research, and building academic technology projects.
        </JustifiedText>

        <JustifiedText className="text-[var(--muted)]">
          This CipherXploreSS Web Portal was created to transform my Cryptography
          and Network Security laboratory experiments into an interactive
          web-based platform. Through this project, I am also learning how to
          connect a FastAPI backend with a modern Next.js frontend and how to
          design API-based full-stack applications.
        </JustifiedText>
      </div>

      <div className="mt-6 rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-5">
        <div className="mb-5">
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            Connect with me
          </h3>
          <JustifiedText className="mt-1 text-sm text-[var(--muted)]">
            Find my work, profiles, and programming activity here.
          </JustifiedText>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-3 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                aria-label={`Visit ${link.name}`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-xl ${link.className}`}
                >
                  <Icon />
                </span>

                <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                  <span className="truncate text-sm font-semibold text-[var(--foreground)] group-hover:text-cyan-600 dark:group-hover:text-cyan-100">
                    {link.name}
                  </span>

                  <ExternalLink className="h-4 w-4 shrink-0 text-[var(--muted)] group-hover:text-cyan-600 dark:group-hover:text-cyan-300" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
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
    <div className="rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-sm">
      {icon ? (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
          {icon}
        </div>
      ) : null}

      <h2 className="mb-3 text-xl font-bold text-[var(--foreground)]">
        {title}
      </h2>

      <JustifiedText className="text-[var(--muted)]">
        {description}
      </JustifiedText>
    </div>
  );
}

function JustifiedText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`leading-7 ${className}`}
      style={{
        textAlign: "justify",
        textJustify: "inter-word",
      }}
    >
      {children}
    </p>
  );
}