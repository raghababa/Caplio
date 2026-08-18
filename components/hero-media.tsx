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
    <div id="watch" className="relative mx-auto mt-16 max-w-5xl scroll-mt-24 px-2">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/10 ring-1 ring-black/5">
        <div className="relative aspect-video bg-[#f7f6f3]">
          {!reduceMotion && videoAvailable ? (
            <video
              ref={videoRef}
              className="h-full w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              poster="/screenshots/timeline.png"
              onError={() => setVideoAvailable(false)}
            >
              <source src="/video/caplio-demo.mp4" type="video/mp4" />
              <source src="/video/caplio-appstore.mov" type="video/quicktime" />
            </video>
          ) : (
            <Image
              src="/screenshots/timeline.png"
              alt="Caplio app preview"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          )}
        </div>
      </div>
    </div>
  );
}
