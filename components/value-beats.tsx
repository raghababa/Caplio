import { valueBeats } from "@/lib/site";

export function ValueBeats() {
  return (
    <div className="mx-auto mt-14 grid max-w-5xl gap-6 px-2 md:grid-cols-3">
      {valueBeats.map((beat) => (
        <div
          key={beat.title}
          className="rounded-2xl border border-border bg-white/80 p-6 text-left shadow-sm"
        >
          <h3 className="text-lg font-semibold tracking-tight">{beat.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {beat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
