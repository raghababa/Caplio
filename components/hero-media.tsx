"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAvailable, setVideoAvailable] = useState(true);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (reduceMotion || !videoRef.current) return;
    videoRef.current.play().catch(() => setVideoAvailable(false));
  }, [reduceMotion]);

  return (
    <div className="relative mx-auto mt-16 max-w-4xl">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/8 ring-1 ring-black/5">
        <div className="flex items-center gap-2 border-b border-border bg-white px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-xs text-muted">Caplio</span>
        </div>

        <div className="relative aspect-video bg-gradient-to-br from-surface to-white">
          {!reduceMotion && videoAvailable ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/screenshots/timeline.svg"
              onError={() => setVideoAvailable(false)}
            >
              <source src="/video/caplio-demo.mp4" type="video/mp4" />
              <source src="/video/caplio-demo.webm" type="video/webm" />
            </video>
          ) : (
            <Image
              src="/screenshots/timeline.svg"
              alt="Caplio app preview"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          )}
        </div>
      </div>
    </div>
  );
}
