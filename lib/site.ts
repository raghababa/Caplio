export const siteConfig = {
  name: "Caplio",
  tagline: "Capture it. Find it. Turn it into something useful.",
  slogan: "Core screenshot capture is free forever.",
  description:
    "Capture screenshots with customizable shortcuts, organize them into Sessions, search text inside images with on-device OCR, and export PDF or Word documents. Caplio is a private screenshot manager and OCR screenshot organizer for Mac.",
  privacyLine: "Your visual library stays on your Mac.",
  url: "https://caplio.vercel.app",
  supportEmail: "r.aghababa@gmail.com",
  appStoreUrl:
    "https://apps.apple.com/app/apple-store/id6786196613?pt=127883050&ct=website&mt=8",
  appStoreBadgeImageUrl:
    "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1786579200",
  productHuntUrl:
    "https://www.producthunt.com/products/caplio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-caplio",
  productHuntBadgeImageUrl:
    "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1225018&theme=neutral&t=1789046498115",
  keywords: [
    "Caplio",
    "screenshot manager for Mac",
    "screenshot organizer for macOS",
    "search text inside screenshots on Mac",
    "Mac screenshot app with OCR",
    "private screenshot manager",
    "screenshot capture with custom keyboard shortcuts",
    "window screenshot capture for Mac",
    "organize screenshots automatically on Mac",
    "turn screenshots into PDF",
    "convert screenshots to Word documents",
    "local OCR for Mac",
    "Capture Sessions",
    "on-device OCR Mac",
  ],
};

export function getSupportMailtoUrl(subject = "Caplio Support") {
  const mailto = new URL(`mailto:${siteConfig.supportEmail}`);
  mailto.searchParams.set("subject", subject);
  return mailto.toString();
}

export const pages = {
  home: {
    path: "/",
    title: `${siteConfig.name} | Screenshot Manager & OCR Organizer for Mac`,
    description: siteConfig.description,
  },
  pricing: {
    path: "/pricing",
    title: "Pricing",
    description:
      "Start with 7 days of Caplio Pro. Keep screenshot capture free forever. US pricing: Caplio Pro is $0.99/month, $4.99/year, or $8.99 Lifetime (one-time). Prices shown in USD for the United States and may vary by country or region.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "Caplio privacy policy. Your visual library stays on your Mac. On-device OCR and local processing. No Caplio-controlled usage analytics in current builds. No advertising tracking.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use",
    description:
      "Terms of use for Caplio, the macOS screenshot manager with on-device OCR, Capture Sessions, and document export.",
  },
  support: {
    path: "/support",
    title: "Support",
    description:
      "Caplio FAQ and support. Free screenshot capture, Capture Sessions, on-device OCR search, Document Builder, privacy, Caplio Pro trial, and download.",
  },
} as const;

export const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
];

export const valueBeats = [
  {
    title: "Capture",
    description:
      "Region, full-screen, and fixed-region capture with customizable shortcuts — free forever. Window Capture is available with Caplio Pro.",
  },
  {
    title: "Sessions",
    description:
      "Start a Capture Session for a class, meeting, research task, or project so related captures stay together.",
  },
  {
    title: "Search & create",
    description:
      "Search text inside screenshots and images with on-device OCR, then turn selected captures into PDF or Word documents.",
  },
];

export type Feature = {
  id: string;
  title: string;
  description: string;
  detail: string;
  image?: string;
  imageAlt: string;
  badge?: string;
  href?: string;
  placeholderTitle?: string;
  placeholderBody?: string;
};

export const features: Feature[] = [
  {
    id: "capture",
    title: "Capture without breaking your flow",
    description:
      "Capture a selected region, the full screen, or a fixed region directly with Caplio. Customizable global keyboard shortcuts let you capture without interrupting what you're doing.",
    detail:
      "Region, full-screen, and fixed-region capture are free forever. Window Capture requires Caplio Pro (included in the 7-day Pro trial). Customizable shortcuts apply to available capture modes and do not unlock paid modes.",
    image: "/screenshots/capture.jpg",
    imageAlt:
      "Caplio menu bar capture menu showing Capture Area and Full Screen shortcuts",
  },
  {
    id: "sessions",
    title: "Keep a class, meeting, or project together",
    description:
      "Start a Capture Session for a class, meeting, research task, project, or any focused piece of work. Related captures stay connected to the Session so you can find the whole context later.",
    detail:
      "Name Sessions yourself, revisit them later, filter images by Session, and reassign captures when needed. Start Session → Capture → Search → Create Document.",
    image: "/screenshots/sessions.jpg",
    imageAlt:
      "Caplio detail view with an active Capture Session and recognized text",
  },
  {
    id: "search",
    title: "Find anything you captured",
    description:
      "Caplio uses on-device OCR to make screenshots and images searchable. Search recognized text along with filenames, titles, categories, dates, and app information where available.",
    detail:
      "Local OCR and index-based search — not cloud AI, semantic search, or LLM search. Search screenshots on Mac without uploading your library for processing.",
    image: "/screenshots/search.png",
    imageAlt: "Caplio search results showing text inside screenshots",
  },
  {
    id: "documents",
    title: "Turn captures into documents",
    description:
      "Select screenshots and images, put them in the order you want, review the extracted text, and create a PDF or editable Word document.",
    detail:
      "Choose Image + Text, Image Only, or Text Only. Useful for classes, meetings, research, project documentation, and visual notes. You can edit OCR draft text for the document without changing the underlying library OCR.",
    image: "/screenshots/documents.jpg",
    imageAlt:
      "Caplio Document Builder with Image + Extracted Text selected for PDF or DOCX export",
  },
  {
    id: "similar",
    title: "Find similar images and exact copies",
    description:
      "Multiple captures of the same screen can quickly clutter your library. Caplio brings visually similar images and exact copies together so you can review them side by side and decide what you want to keep.",
    detail: "Nothing is deleted automatically. You decide what stays.",
    image: "/screenshots/similar.jpg",
    imageAlt:
      "Caplio Exact Copies review showing duplicate screenshots side by side",
    href: "/use-cases/find-similar-images-and-duplicate-screenshots-on-mac",
  },
  {
    id: "timeline",
    title: "Your searchable visual library",
    description:
      "Add folders you choose — including multiple watched folders — and browse screenshots and images in a clean Timeline instead of digging through Finder. Supported types include PNG, JPEG, HEIC, TIFF, and WebP.",
    detail:
      "Open originals, use Quick Look, copy or share, and drag images into compatible Mac apps. Caplio can automatically categorize indexed images to help you browse and filter.",
    image: "/screenshots/timeline.png",
    imageAlt: "Caplio timeline library view",
  },
  {
    id: "organize",
    title: "Organize files on your terms",
    description:
      "Caplio can optionally organize eligible, processed library images from authorized watched folders by Date, Category, or Capture Session.",
    detail:
      "By default, Caplio indexes images from the folders you choose without importing duplicate copies. Organization is optional and under your control — Caplio does not claim to reorganize every file on your Desktop automatically, and changing a Session does not by itself move files on disk.",
    image: "/screenshots/organize.png",
    imageAlt: "Caplio file organization",
  },
];

export const privacyPoints = [
  {
    title: "On-device OCR and search",
    description:
      "Text recognition, categorization, similarity detection, search indexing, and document processing run on your Mac. Images, OCR text, and search queries are not uploaded for processing.",
  },
  {
    title: "Your visual library stays local",
    description:
      "Filenames, folder paths, Capture Session names, and document content are not uploaded for OCR, search, or remote library processing. No cloud AI is required to search your library.",
  },
  {
    title: "No Caplio usage analytics",
    description:
      "Current Caplio builds do not include Caplio-controlled usage analytics or a third-party analytics SDK. StoreKit may still contact Apple for purchases and restoration.",
  },
];

export const pricingUs = {
  monthly: "$0.99",
  yearly: "$4.99",
  lifetime: "$8.99",
} as const;

export const pricingSummary = `Caplio Pro is ${pricingUs.monthly}/month, ${pricingUs.yearly}/year, or ${pricingUs.lifetime} Lifetime (one-time).`;

export const pricingDisclaimer =
  "Prices shown in USD for the United States. Actual prices may vary by country or region. The Mac App Store displays your final local price before purchase.";

export const pricingPlans = [
  {
    name: "Free Capture",
    badge: "Free",
    prices: [{ amount: "Free", period: "forever" }],
    description:
      "Capture selected regions, the full screen, or a fixed region with customizable keyboard shortcuts. Try Caplio Pro free for 7 days to explore Window Capture, OCR search, and advanced screenshot organization. Free capture continues after your trial ends.",
    features: [
      "Region Capture",
      "Full-screen Capture",
      "Fixed-region Capture",
      "Customizable capture shortcuts",
    ],
    cta: "Download on the Mac App Store",
    highlighted: false,
  },
  {
    name: "Caplio Pro",
    badge: "Subscription",
    prices: [
      { amount: pricingUs.monthly, period: "/month" },
      { amount: pricingUs.yearly, period: "/year" },
    ],
    description:
      "Continue Caplio Pro after your 7-day trial with a monthly or yearly subscription. Unlock Window Capture, the searchable visual library, on-device OCR search, Similar Images, Document Builder, and advanced file organization. Free capture modes stay available either way.",
    features: [
      "Window Capture",
      "Searchable visual library",
      "On-device OCR and search",
      "Similar Images",
      "Document Builder (PDF & DOCX)",
      "Organize by Date, Category, or Capture Session",
      "Restore purchases on same Apple Account",
    ],
    cta: "Download on the Mac App Store",
    highlighted: false,
  },
  {
    name: "Lifetime",
    badge: "Pay once",
    prices: [{ amount: pricingUs.lifetime, period: "one-time" }],
    description: `Unlock Caplio Pro with a one-time ${pricingUs.lifetime} purchase. No recurring subscription. Includes Window Capture and all Caplio Pro features. Free capture modes remain available either way.`,
    features: [
      "Window Capture",
      "All Caplio Pro features",
      "Searchable visual library",
      "On-device OCR and search",
      "Similar Images",
      "Document Builder (PDF & DOCX)",
      "Organize by Date, Category, or Capture Session",
    ],
    cta: "Download on the Mac App Store",
    highlighted: true,
  },
];
