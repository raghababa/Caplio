import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="text-lg font-semibold tracking-tight">{siteConfig.name}</p>
          <p className="text-sm leading-relaxed text-muted">
            A private, searchable visual library for your Mac. On-device OCR.
            Nothing uploaded.
          </p>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
              Product
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
              Legal
            </p>
            <ul className="space-y-2">
              {footerLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
