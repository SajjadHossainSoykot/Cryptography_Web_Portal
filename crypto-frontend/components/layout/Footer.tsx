import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

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
    className:
      "border-blue-400/30 bg-blue-500/15 text-blue-600 dark:text-blue-200",
  },
  {
    name: "X",
    href: "https://x.com/sajjadsoykot",
    icon: FaTwitter,
    className:
      "border-sky-400/30 bg-sky-500/15 text-sky-600 dark:text-sky-200",
  },
  {
    name: "Facebook",
    href: "https://fb.com/sajjadhossainsoykot",
    icon: FaFacebookF,
    className:
      "border-blue-500/30 bg-blue-600/15 text-blue-600 dark:text-blue-200",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sajjad_hossain_soykot",
    icon: FaInstagram,
    className:
      "border-pink-400/30 bg-pink-500/15 text-pink-600 dark:text-pink-200",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/sajjadhossainsoykot",
    icon: FaYoutube,
    className:
      "border-red-400/30 bg-red-500/15 text-red-600 dark:text-red-200",
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/sajjadsoykot",
    icon: SiCodeforces,
    className:
      "border-cyan-400/30 bg-cyan-500/15 text-cyan-600 dark:text-cyan-200",
  },
  {
    name: "Discord",
    href: "https://discord.gg/bfuyjQk",
    icon: FaDiscord,
    className:
      "border-indigo-400/30 bg-indigo-500/15 text-indigo-600 dark:text-indigo-200",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-[var(--muted)]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="mx-auto max-w-xl text-center md:mx-0 md:max-w-2xl md:text-left">
            <h3 className="mb-3 text-base font-semibold text-[var(--foreground)]">
              About CipherXploreSS
            </h3>

            <p className="text-sm leading-7 text-[var(--muted)] md:text-justify">
              The CipherXploreSS Web Portal is based on laboratory experiments
              from the Cryptography and Network Security course. This project is
              designed to help students, teachers, and learners understand how
              different cryptographic algorithms work through an interactive web
              interface.
            </p>

            <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-justify">
              Users can select an algorithm, provide plaintext or ciphertext,
              enter the required keys, and instantly perform encryption,
              decryption, key generation, or shared secret key generation.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--foreground)]">
              Follow Me
            </p>

            <div className="flex max-w-xs flex-wrap items-center justify-center gap-2.5 md:max-w-none md:justify-end">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-base shadow-sm transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-md ${social.className}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--card-border)] pt-5 text-center">
          <p className="text-sm leading-6">
            © 2026{" "}
            <a
              href="https://github.com/SajjadHossainSoykot"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              Sajjad Hossain Soykot
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}