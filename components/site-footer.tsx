import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getUseCasePath, useCases } from "@/lib/use-cases";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-start lg:justify-between">
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

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
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
              <li>
                <Link
                  href="/support"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  Use cases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
              Use cases
            </p>
            <ul className="space-y-2">
              {useCases.slice(0, 4).map((useCase) => (
                <li key={useCase.slug}>
                  <Link
                    href={getUseCasePath(useCase.slug)}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {useCase.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/use-cases"
                  className="text-sm text-accent transition-colors hover:underline"
                >
                  View all
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
              Legal
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
