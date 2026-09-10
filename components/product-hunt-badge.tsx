import { siteConfig } from "@/lib/site";

type ProductHuntBadgeProps = {
  className?: string;
};

export function ProductHuntBadge({ className = "" }: ProductHuntBadgeProps) {
  return (
    <a
      href={siteConfig.productHuntUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`.trim()}
      aria-label="Caplio featured on Product Hunt"
    >
      {/* Official Product Hunt Featured badge */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={siteConfig.productHuntBadgeImageUrl}
        alt="Caplio featured on Product Hunt"
        width={250}
        height={54}
        className="h-[40px] w-auto object-contain align-middle sm:h-[54px] sm:w-[250px]"
      />
    </a>
  );
}
