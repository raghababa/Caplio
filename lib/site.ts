export const siteConfig = {
  name: "Caplio",
  tagline: "Find and organize any screenshot or image on your Mac",
  description:
    "Caplio turns folders you choose into a private, searchable visual library with on-device OCR, timeline browsing, and menu bar search.",
  url: "https://caplio.vercel.app",
  appStoreStatus: "coming-soon" as const,
};

export const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/privacy", label: "Privacy" },
];

export const features = [
  {
    id: "ocr",
    title: "Find text inside any screenshot",
    description:
      "Search words, numbers, URLs, and supported languages inside your images.",
    detail:
      "Caplio uses Apple Vision on your Mac to read text from screenshots with high-quality on-device recognition.",
    image: "/screenshots/ocr.png",
    imageAlt: "Caplio OCR search results",
  },
  {
    id: "menubar",
    title: "Quick search from the menu bar",
    description:
      "Recent shots, full-text search, and processing status without opening a window.",
    detail:
      "Caplio lives in your menu bar so you can jump to any screenshot the moment you need it.",
    image: "/screenshots/search.png",
    imageAlt: "Caplio menu bar search",
  },
  {
    id: "timeline",
    title: "Browse your visual library",
    description:
      "Timeline browsing with categories, thumbnails, and detail views for every indexed image.",
    detail:
      "Scroll through your screenshot history by date, filter by category, and open any image in full detail.",
    image: "/screenshots/timeline.png",
    imageAlt: "Caplio timeline library view",
  },
  {
    id: "organize",
    title: "Organize on your terms",
    description:
      "Optionally organize files by date or category, with move previews and restore history.",
    detail:
      "Keep files where they are, or let Caplio sort new screenshots into a structured folder tree, always with undo.",
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
    description: "Your data stays safely on your Mac. Subscribe after the trial to continue using Caplio.",
  },
  {
    title: "Minimal network use",
    description:
      "Internet access may be used for Apple App Store purchase and subscription services.",
  },
];

export const pricingPlans = [
  {
    name: "Free trial",
    price: "7 days",
    period: "on your Mac",
    description:
      "Try every feature during onboarding. Connect a folder, scan screenshots, and explore the full library.",
    features: [
      "Full access to all features",
      "On-device OCR and search",
      "Menu bar quick search",
      "Timeline and organization",
    ],
    cta: "Coming soon",
    highlighted: false,
  },
  {
    name: "Caplio Pro",
    price: "Monthly / Yearly",
    period: "subscription",
    description:
      "Keep processing new screenshots and using search and timeline after your trial ends.",
    features: [
      "Ongoing screenshot indexing",
      "Full-text search",
      "Timeline browsing",
      "Optional file organization",
      "Restore purchases on same Apple ID",
    ],
    cta: "Coming soon",
    highlighted: true,
  },
];
