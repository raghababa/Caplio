export const siteConfig = {
  name: "Caplio",
  tagline: "Capture it. Find it. Turn it into something useful.",
  slogan: "Screenshot capture is free.",
  description:
    "Capture screenshots on your Mac, keep related captures together in Sessions, search text inside screenshots and images, and turn what you collect into PDF or Word documents.",
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
    "screenshot capture Mac",
    "screenshot organizer for Mac",
    "search screenshots on Mac",
    "search text inside screenshots",
    "OCR screenshot Mac",
    "searchable image library",
    "organize screenshots",
    "screenshot sessions",
    "screenshots to PDF",
    "screenshots to Word",
    "private screenshot manager",
    "on-device OCR Mac",
    "Capture Sessions",
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
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  pricing: {
    path: "/pricing",
    title: "Pricing",
    description:
      "Screenshot capture is free. Try Caplio Pro free for 7 days. Caplio Pro is $0.99/month, $5.99/year, or $9.99 Lifetime (one-time). Prices shown in USD and may vary by region.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "Caplio privacy policy. Your visual library stays on your Mac. Limited anonymous usage analytics via TelemetryDeck. No advertising tracking.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use",
    description:
      "Terms of use for Caplio, the macOS app for capturing screenshots, searching images with on-device OCR, and creating documents.",
  },
  support: {
    path: "/support",
    title: "Support",
    description:
      "Caplio FAQ and support. Capture screenshots for free, search with on-device OCR, use Capture Sessions, create PDF or Word documents, and get help with Caplio Pro.",
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
      "Capture an area or the full screen with customizable global shortcuts. Screenshot capture is free.",
  },
  {
    title: "Sessions",
    description:
      "Start a Capture Session for a class, meeting, research task, or project so related captures stay together.",
  },
  {
    title: "Search & create",
    description:
      "Search text inside screenshots and images, then turn selected captures into PDF or Word documents.",
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
      "Capture an area or your full screen directly with Caplio. Customizable global shortcuts let you capture without interrupting what you're doing.",
    detail:
      "Screenshot capture is free — you do not need Caplio Pro just to take screenshots.",
    badge: "Screenshot capture is free.",
    imageAlt: "Caplio screenshot capture",
    placeholderTitle: "Area or full screen",
    placeholderBody:
      "Customizable global shortcuts for capture without leaving your current app.",
  },
  {
    id: "sessions",
    title: "Keep a class, meeting, or project together",
    description:
      "Start a Capture Session for a class, meeting, research task, project, or any focused piece of work. Related captures stay connected to the Session so you can find the whole context later.",
    detail:
      "Name Sessions yourself, revisit them later, filter images by Session, and reassign captures when needed. Start Session → Capture → Search → Create Document.",
    imageAlt: "Caplio Capture Sessions",
    placeholderTitle: "Capture Sessions",
    placeholderBody:
      "A context for related captures — not a Timeline grouping mode.",
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
    imageAlt: "Caplio Document Builder",
    placeholderTitle: "PDF or Word",
    placeholderBody:
      "Image + Text, Image Only, or Text Only — you control the export.",
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
      "Add folders you choose and browse screenshots and images in a clean Timeline instead of digging through Finder. Supported types include PNG, JPEG, HEIC, TIFF, and WebP.",
    detail:
      "Open originals, use Quick Look, copy or share, and drag images into compatible Mac apps.",
    image: "/screenshots/timeline.png",
    imageAlt: "Caplio timeline library view",
  },
  {
    id: "organize",
    title: "Organize files on your terms",
    description:
      "Caplio can optionally organize your original files on disk by Date, Category, or Capture Session.",
    detail:
      "By default, Caplio indexes images from the folders you choose without importing duplicate copies. Organization is optional and under your control — changing a Session does not by itself move files on disk.",
    image: "/screenshots/organize.png",
    imageAlt: "Caplio file organization",
  },
];

export const privacyPoints = [
  {
    title: "On-device OCR and search",
    description:
      "Text recognition and search indexing run on your Mac. Images, OCR text, and search queries are not uploaded for processing.",
  },
  {
    title: "Your visual library stays local",
    description:
      "Filenames, folder paths, Capture Session names, and document content are not uploaded for OCR, search, or remote library processing.",
  },
  {
    title: "Privacy-preserving analytics",
    description:
      "Caplio may send limited anonymous product-usage events to improve the app. Analytics do not include images, OCR text, search terms, filenames, paths, Session names, or document content.",
  },
];

export const pricingDisclaimer =
  "Prices shown in USD. App Store pricing may vary by country or region.";

export const pricingPlans = [
  {
    name: "Free Capture",
    badge: "Free",
    prices: [{ amount: "Free", period: "forever" }],
    description:
      "Screenshot capture stays free. Capture an area or the full screen with customizable global shortcuts — no Caplio Pro required.",
    features: [
      "Screenshot Capture",
      "Capture Area",
      "Full Screen Capture",
      "Customizable capture shortcuts",
    ],
    cta: "Download on the Mac App Store",
    highlighted: false,
  },
  {
    name: "Caplio Pro",
    badge: "Subscription",
    prices: [
      { amount: "$0.99", period: "/month" },
      { amount: "$5.99", period: "/year" },
    ],
    description:
      "Try Caplio Pro free for 7 days. Unlock the searchable visual library, on-device OCR search, Similar Images, Document Builder, and advanced file organization.",
    features: [
      "7-day Pro trial on your Mac",
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
    prices: [{ amount: "$9.99", period: "one-time" }],
    description:
      "Unlock Caplio Pro with a one-time purchase. No recurring subscription.",
    features: [
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
