import { privacyPoints } from "@/lib/site";

export function PrivacySection() {
  return (
    <section className="border-t border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Built for privacy
          </h2>
          <p className="mt-4 text-lg text-muted">
            Caplio is designed so your visual library stays under your control.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {privacyPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-surface">
                <svg
                  className="size-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
