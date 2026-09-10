import { siteConfig } from "@/lib/site";

type AppStoreBadgeProps = {
  className?: string;
};

export function AppStoreBadge({ className = "" }: AppStoreBadgeProps) {
  return (
    <a
      href={siteConfig.appStoreBadgeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`.trim()}
      aria-label="Download Caplio on the App Store"
    >
      {/* Official App Store marketing badge from Apple */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={siteConfig.appStoreBadgeImageUrl}
        alt="Download on the App Store"
        width={246}
        height={82}
        className="h-[82px] w-[246px] object-contain align-middle"
      />
    </a>
  );
}
