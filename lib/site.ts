export const siteConfig = {
  name: "Caplio",
  tagline: "Find and organize any screenshot or image on your Mac",
  slogan: "Find it. Organize it. Drag it anywhere.",
  description:
    "Caplio turns your screenshots and images into a private, searchable library on your Mac. Find images by recognized text, organize them your way, and drag anything directly into the apps where you need it.",
  url: "https://caplio.vercel.app",
  appStoreUrl:
    "https://apps.apple.com/us/app/caplio/id6786196613?mt=12",
  keywords: [
    "Caplio",
    "screenshot search Mac",
    "OCR screenshots Mac",
    "find text in screenshots",
    "Mac screenshot organizer",
    "on-device OCR",
    "private screenshot library",
    "menu bar screenshot search",
    "macOS screenshot app",
  ],
};

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
      "Try Caplio free for 7 days on your Mac. Caplio Pro is $1.99/month, $9.99/year, or $29.99 Lifetime. Prices shown in USD and may vary by region.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "Caplio privacy policy. Local image processing, on-device OCR, indexing, and search on your Mac. Internet access may be used for App Store purchases.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use",
    description:
      "Terms of use for Caplio, the macOS app for finding and organizing screenshots and images with on-device OCR.",
  },
  support: {
    path: "/support",
    title: "Support",
    description:
      "Get help with Caplio on Mac. Trial, subscriptions, Lifetime, OCR search, folders, restore purchases, and how to contact support.",
  },
} as const;

export const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
];

export const valueBeats = [
  {
    title: "Find it",
    description:
      "Search screenshots and images by text, filename, category, app, or date.",
  },
  {
    title: "Organize it",
    description:
      "Build a clean visual library and optionally organize files by date or category.",
  },
  {
    title: "Drag it anywhere",
    description:
      "Drag any image straight from Caplio into Mail, Messages, documents, design tools, and other Mac apps.",
  },
];

export const features = [
  {
    id: "ocr",
    title: "Find text inside any image",
    description:
      "Search words, numbers, URLs, and supported languages inside your screenshots and images.",
    detail:
      "Caplio uses Apple Vision on your Mac to read text from screenshots and images with high-quality on-device recognition.",
    image: "/screenshots/ocr.png",
    imageAlt: "Caplio OCR search results",
  },
  {
    id: "menubar",
    title: "Quick search from the menu bar",
    description:
      "Recent images, full-text search, and processing status without opening a window.",
    detail:
      "Caplio lives in your menu bar so you can jump to any screenshot or image the moment you need it.",
    image: "/screenshots/search.png",
    imageAlt: "Caplio menu bar search",
  },
  {
    id: "timeline",
    title: "Browse your visual library",
    description:
      "Timeline browsing with categories, thumbnails, and detail views for every indexed image.",
    detail:
      "Scroll through your image history by date, filter by category, and open any image in full detail.",
    image: "/screenshots/timeline.png",
    imageAlt: "Caplio timeline library view",
  },
  {
    id: "organize",
    title: "Organize on your terms",
    description:
      "Optionally organize files by date or category, with move previews and restore history.",
    detail:
      "Keep files where they are, or let Caplio sort new screenshots and images into a structured folder tree, always with undo.",
    image: "/screenshots/organize.png",
    imageAlt: "Caplio file organization",
  },
];

export const privacyPoints = [
  {
    title: "Local processing",
    description:
      "Caplio’s core image processing, OCR, indexing, and search happen locally.",
  },
  {
    title: "Your Mac, your library",
    description: "Your data stays safely on your Mac. Choose a subscription or Lifetime after your trial to continue using Caplio Pro.",
  },
  {
    title: "Minimal network use",
    description:
      "Internet access may be used for Apple App Store purchase and subscription services.",
  },
];

export const pricingDisclaimer =
  "Prices shown in USD. App Store pricing may vary by country or region.";

export const pricingPlans = [
  {
    name: "Free trial",
    badge: null,
    prices: [{ amount: "7 days", period: "on your Mac" }],
    description:
      "Try every feature during onboarding. Connect a folder, scan screenshots and images, and explore the full library.",
    features: [
      "Full access to all features",
      "On-device OCR and search",
      "Menu bar quick search",
      "Timeline and organization",
    ],
    cta: "Download on the Mac App Store",
    highlighted: false,
  },
  {
    name: "Caplio Pro",
    badge: "Subscription",
    prices: [
      { amount: "$1.99", period: "/month" },
      { amount: "$9.99", period: "/year" },
    ],
    description:
      "Keep processing new screenshots and images, and keep using search and timeline after your trial ends.",
    features: [
      "Ongoing image indexing",
      "Full-text search",
      "Timeline browsing",
      "Optional file organization",
      "Restore purchases on same Apple Account",
    ],
    cta: "Download on the Mac App Store",
    highlighted: false,
  },
  {
    name: "Lifetime",
    badge: "Pay once",
    prices: [{ amount: "$29.99", period: "one-time" }],
    description:
      "Unlock Caplio Pro with a one-time purchase. No recurring subscription.",
    features: [
      "All Caplio Pro features",
      "Ongoing image indexing",
      "Full-text search",
      "Timeline browsing",
      "Optional file organization",
    ],
    cta: "Download on the Mac App Store",
    highlighted: true,
  },
];
