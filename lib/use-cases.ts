import { siteConfig } from "@/lib/site";

export type UseCase = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string[];
  problemTitle: string;
  problem: string;
  howTitle: string;
  how: string[];
  whyCaplio: string[];
  relatedSlugs: string[];
};

export const useCases: UseCase[] = [
  {
    slug: "screenshot-organizer-for-mac",
    title: "Screenshot organizer for Mac",
    metaTitle: "Screenshot Organizer for Mac",
    metaDescription:
      "Organize screenshots and images on your Mac with Caplio. Index folders you choose, browse a timeline, search by text, and optionally organize files by date or category — privately on your Mac.",
    eyebrow: "Use case",
    headline: "Screenshot organizer for Mac",
    intro: [
      "Caplio is a private screenshot and image organizer for Mac. It turns folders you choose into a searchable visual library with on-device OCR, timeline browsing, and optional file organization.",
      "You can find old screenshots, keep your Desktop tidy, and reuse images in other Mac apps — without uploading your library to the cloud.",
    ],
    problemTitle: "The problem",
    problem:
      "Screenshots pile up on the Desktop and in Pictures. Finder search does not read text inside images, and renaming files by hand is slow. You need an organizer built for screenshots and images on macOS.",
    howTitle: "How Caplio helps",
    how: [
      "Index screenshots and images from folders you choose",
      "Browse your library in a timeline with categories and thumbnails",
      "Search by recognized text, filename, category, app, or date",
      "Optionally organize original files by date or category",
      "Keep files where they are by default — no duplicate import library",
    ],
    whyCaplio: [
      "Local-first on macOS",
      "On-device OCR with Apple Vision",
      "Optional organization with previews and history",
      "Available on the Mac App Store",
    ],
    relatedSlugs: [
      "organize-screenshots-automatically-on-mac",
      "search-text-inside-screenshots-on-mac",
      "screenshot-manager-without-uploading-images",
    ],
  },
  {
    slug: "search-text-inside-screenshots-on-mac",
    title: "Search text inside screenshots on Mac",
    metaTitle: "Search Text Inside Screenshots on Mac",
    metaDescription:
      "Search text inside screenshots and images on your Mac with Caplio. On-device OCR makes words, numbers, and URLs in images searchable — privately, without cloud upload.",
    eyebrow: "Use case",
    headline: "Search text inside screenshots on Mac",
    intro: [
      "Caplio uses on-device OCR to extract text from screenshots and images, then adds that text to a local search index on your Mac.",
      "That means you can search for a word, number, URL, or phrase that appears inside an image — not only in the filename.",
    ],
    problemTitle: "The problem",
    problem:
      "Important details often live inside screenshots: error messages, receipts, UI copy, chat snippets, or design notes. Finder and Photos usually cannot search that text. Caplio can.",
    howTitle: "How Caplio helps",
    how: [
      "Recognize text inside supported screenshots and images",
      "Index recognized text locally on your Mac",
      "Search words, numbers, URLs, and supported languages in images",
      "Open results in a timeline and detail view",
      "Copy recognized text for use in other apps",
    ],
    whyCaplio: [
      "OCR with Apple’s Vision framework on-device",
      "No cloud OCR or remote AI analysis of your library",
      "Works with PNG, JPEG, HEIC, TIFF, and WebP",
      "Built for macOS workflows",
    ],
    relatedSlugs: [
      "local-ocr-for-mac",
      "search-screenshots-by-date",
      "screenshot-organizer-for-mac",
    ],
  },
  {
    slug: "local-ocr-for-mac",
    title: "Local OCR for Mac",
    metaTitle: "Local OCR for Mac",
    metaDescription:
      "Local OCR for Mac with Caplio. Recognize text inside screenshots and images on-device using Apple Vision. Your library stays on your Mac — no cloud OCR upload.",
    eyebrow: "Use case",
    headline: "Local OCR for Mac",
    intro: [
      "Caplio provides local OCR for macOS. Text recognition runs on your Mac with Apple’s Vision framework, so screenshots and images become searchable without sending them to a cloud OCR service.",
      "Your images, recognized text, and search index stay on your device.",
    ],
    problemTitle: "The problem",
    problem:
      "Many OCR tools upload images to remote servers. If you care about privacy — or simply want OCR that works as part of a Mac screenshot library — you need on-device recognition that stays local.",
    howTitle: "How Caplio helps",
    how: [
      "Run OCR locally with Apple Vision on macOS",
      "Add recognized text to a private search index",
      "Search inside screenshots and other supported images",
      "Avoid cloud OCR and remote AI analysis of your library",
      "Use Caplio offline for core processing, OCR, and local search",
    ],
    whyCaplio: [
      "On-device by design",
      "No upload for OCR analysis",
      "Integrated with search, timeline, and organization",
      "Privacy-first Mac app",
    ],
    relatedSlugs: [
      "search-text-inside-screenshots-on-mac",
      "screenshot-manager-without-uploading-images",
      "screenshot-organizer-for-mac",
    ],
  },
  {
    slug: "organize-screenshots-automatically-on-mac",
    title: "Organize screenshots automatically on Mac",
    metaTitle: "Organize Screenshots Automatically on Mac",
    metaDescription:
      "Optionally organize screenshots and images on your Mac with Caplio. Keep files in place by default, or enable organization by date or category with move previews and history.",
    eyebrow: "Use case",
    headline: "Organize screenshots automatically on Mac",
    intro: [
      "Caplio can optionally organize screenshots and images by date or category after you enable file organization.",
      "By default, Caplio indexes images where they already are — without importing duplicate copies into a separate library.",
    ],
    problemTitle: "The problem",
    problem:
      "Automatic organizers sometimes move files without enough control. Caplio keeps organization optional: search and browse first, then organize originals only when you choose to.",
    howTitle: "How Caplio helps",
    how: [
      "Index screenshots and images in place by default",
      "Enable optional organization by date or category",
      "Use move previews before files are rearranged",
      "Restore moved files through organization history when possible",
      "Keep using search and timeline without enabling organization",
    ],
    whyCaplio: [
      "No forced duplicate library",
      "Organization is optional",
      "Your originals stay under your control",
      "Pairs with OCR search and timeline browsing",
    ],
    relatedSlugs: [
      "screenshot-organizer-for-mac",
      "search-screenshots-by-date",
      "screenshot-manager-without-uploading-images",
    ],
  },
  {
    slug: "search-screenshots-by-date",
    title: "Search screenshots by date",
    metaTitle: "Search Screenshots by Date on Mac",
    metaDescription:
      "Browse and find screenshots by date on your Mac with Caplio. Use timeline browsing, date filters, and on-device OCR search to recover images from any day.",
    eyebrow: "Use case",
    headline: "Search screenshots by date",
    intro: [
      "Caplio includes timeline browsing so you can move through your screenshot and image history by date.",
      "Combine date browsing with text search, categories, and filenames to find what you captured last week — or last year.",
    ],
    problemTitle: "The problem",
    problem:
      "When you only remember roughly when you took a screenshot, scrolling through Finder folders is inefficient. A date-aware timeline makes visual history searchable and scannable.",
    howTitle: "How Caplio helps",
    how: [
      "Browse screenshots and images in a chronological timeline",
      "Jump by date to narrow what you see",
      "Filter by category and search recognized text",
      "Open any result in a detail view with OCR text",
      "Index existing folders so older images become part of your timeline",
    ],
    whyCaplio: [
      "Timeline built for screenshot history",
      "Works with OCR and category filters",
      "Local library on your Mac",
      "Optional organization by date if you want files sorted on disk",
    ],
    relatedSlugs: [
      "search-text-inside-screenshots-on-mac",
      "screenshot-organizer-for-mac",
      "organize-screenshots-automatically-on-mac",
    ],
  },
  {
    slug: "screenshot-manager-without-uploading-images",
    title: "Screenshot manager without uploading images",
    metaTitle: "Screenshot Manager Without Uploading Images",
    metaDescription:
      "Manage screenshots on Mac without uploading images. Caplio is a local-first screenshot and image manager with on-device OCR — no cloud OCR or remote AI analysis of your library.",
    eyebrow: "Use case",
    headline: "Screenshot manager without uploading images",
    intro: [
      "Caplio is a screenshot and image manager for Mac that keeps processing local. OCR, indexing, and search run on your Mac. Caplio does not upload your image library to a cloud OCR or remote AI service for analysis.",
      "App Store purchases and subscriptions may still use Apple’s services.",
    ],
    problemTitle: "The problem",
    problem:
      "Some screenshot tools and AI organizers send images to the cloud. If you want a Mac-native manager that stays private, you need local processing and a clear boundary around what leaves your machine.",
    howTitle: "How Caplio helps",
    how: [
      "Manage screenshots and images in a local library",
      "Run OCR and search on-device",
      "Avoid cloud OCR and remote AI analysis of your files",
      "Choose which folders Caplio can access",
      "Download from the Mac App Store with a 7-day trial on your Mac",
    ],
    whyCaplio: [
      "Local-first by design",
      "Privacy-aligned with on-device Vision OCR",
      "Search, timeline, and optional organization in one app",
      "No separate cloud library to sync for OCR",
    ],
    relatedSlugs: [
      "local-ocr-for-mac",
      "screenshot-organizer-for-mac",
      "search-text-inside-screenshots-on-mac",
    ],
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((useCase) => useCase.slug === slug);
}

export function getRelatedUseCases(useCase: UseCase): UseCase[] {
  return useCase.relatedSlugs
    .map((slug) => getUseCaseBySlug(slug))
    .filter((item): item is UseCase => Boolean(item));
}

export function getUseCasePath(slug: string) {
  return `/use-cases/${slug}`;
}

export function getUseCaseUrl(slug: string) {
  return new URL(getUseCasePath(slug), siteConfig.url).toString();
}
