import Link from "next/link";
import { siteBranding, socialLinks } from "@/content/site";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.25 5c0 1.1.88 2 1.97 2h.03a2 2 0 1 0 0-4ZM20.75 12.58c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.64 1-3.1 1.7V8.5h-3.38c.05.76 0 10.5 0 10.5h3.38v-5.86c0-.32.03-.64.12-.86.25-.64.83-1.3 1.79-1.3 1.26 0 1.77.98 1.77 2.42V19H21c.05-2.76 0-6.42 0-6.42Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.5a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-blue-400/40 hover:bg-white/10 hover:text-white"
            >
              <SocialIcon label={link.label} />
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {siteBranding.footerCopyright}
        </p>
      </div>
    </footer>
  );
}
