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
      "Organize screenshots and images on your Mac with Caplio. Capture, keep related captures in Sessions, browse a timeline, search by text, and optionally organize files by Date, Category, or Capture Session.",
    eyebrow: "Use case",
    headline: "Screenshot organizer for Mac",
    intro: [
      "Caplio is a private screenshot and image organizer for Mac. Capture screenshots, keep related work in Capture Sessions, and turn folders you choose into a searchable visual library with on-device OCR.",
      "You can find old screenshots, keep related captures together, and reuse images in other Mac apps — without uploading your library for OCR or search processing.",
    ],
    problemTitle: "The problem",
    problem:
      "Screenshots pile up on the Desktop and in Pictures. Finder search does not read text inside images, and renaming files by hand is slow. You need an organizer built for screenshots and images on macOS.",
    howTitle: "How Caplio helps",
    how: [
      "Capture region, full screen, window, or fixed-region screenshots (screenshot capture is free)",
      "Keep related captures together in Capture Sessions",
      "Index screenshots and images from folders you choose",
      "Browse your library in a timeline with categories and thumbnails",
      "Search by recognized text, filename, category, app, or date",
      "Optionally organize eligible processed library images by Date, Category, or Capture Session",
    ],
    whyCaplio: [
      "Local-first on macOS",
      "On-device OCR with Apple Vision",
      "Capture → Session → Search → Create workflow",
      "Available on the Mac App Store",
    ],
    relatedSlugs: [
      "capture-screenshots-during-online-classes",
      "organize-screenshots-by-capture-session",
      "turn-screenshots-into-pdf-on-mac",
      "search-text-inside-screenshots-on-mac",
    ],
  },
  {
    slug: "search-text-inside-screenshots-on-mac",
    title: "Search text inside screenshots on Mac",
    metaTitle: "Search Text Inside Screenshots on Mac",
    metaDescription:
      "Search text inside screenshots and images on your Mac with Caplio. On-device OCR makes words, numbers, and URLs in images searchable — privately, without cloud OCR upload.",
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
      "Combine search with Capture Sessions, categories, and dates",
      "Copy recognized text or include it when creating a document",
    ],
    whyCaplio: [
      "OCR with Apple’s Vision framework on-device",
      "No cloud OCR or remote AI analysis of your library",
      "Works with PNG, JPEG, HEIC, TIFF, and WebP",
      "Built for macOS workflows",
    ],
    relatedSlugs: [
      "local-ocr-for-mac",
      "turn-screenshots-into-pdf-on-mac",
      "capture-research-material-on-mac",
      "screenshot-organizer-for-mac",
    ],
  },
  {
    slug: "local-ocr-for-mac",
    title: "Local OCR for Mac",
    metaTitle: "Local OCR for Mac",
    metaDescription:
      "Local OCR for Mac with Caplio. Recognize text inside screenshots and images on-device using Apple Vision. Your visual library stays on your Mac — no cloud OCR upload.",
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
      "Integrated with search, Sessions, timeline, and documents",
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
      "Optionally organize eligible processed screenshots on your Mac with Caplio. Keep files in place by default, or enable organization by Date, Category, or Capture Session with move previews and history.",
    eyebrow: "Use case",
    headline: "Organize screenshots automatically on Mac",
    intro: [
      "Caplio can optionally organize eligible, processed library images from authorized watched folders by Date, Category, or Capture Session after you enable file organization.",
      "By default, Caplio indexes images where they already are — without importing duplicate copies into a separate library. Caplio does not claim to reorganize every file on your Desktop automatically.",
    ],
    problemTitle: "The problem",
    problem:
      "Automatic organizers sometimes move files without enough control. Caplio keeps organization optional: search and browse first, then organize eligible library originals only when you choose to.",
    howTitle: "How Caplio helps",
    how: [
      "Index screenshots and images in place by default",
      "Enable optional organization by Date, Category, or Capture Session for eligible processed images",
      "Use move previews before files are rearranged",
      "Restore moved files through organization history when possible",
      "Keep using search and timeline without enabling organization",
    ],
    whyCaplio: [
      "No forced duplicate library",
      "Organization is optional",
      "Your originals stay under your control",
      "Pairs with OCR search, Sessions, and timeline browsing",
    ],
    relatedSlugs: [
      "organize-screenshots-by-capture-session",
      "screenshot-organizer-for-mac",
      "search-screenshots-by-date",
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
      "Combine date browsing with text search, Capture Sessions, categories, and filenames to find what you captured last week — or last year.",
    ],
    problemTitle: "The problem",
    problem:
      "When you only remember roughly when you took a screenshot, scrolling through Finder folders is inefficient. A date-aware timeline makes visual history searchable and scannable.",
    howTitle: "How Caplio helps",
    how: [
      "Browse screenshots and images in a chronological timeline",
      "Jump by date to narrow what you see",
      "Filter by Session, category, and search recognized text",
      "Open any result in a detail view with OCR text",
      "Index existing folders so older images become part of your timeline",
    ],
    whyCaplio: [
      "Timeline built for screenshot history",
      "Works with OCR, Sessions, and category filters",
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
      "Manage screenshots on Mac without uploading images for OCR or search. Caplio is a local-first screenshot and image manager with on-device OCR — your visual library stays on your Mac.",
    eyebrow: "Use case",
    headline: "Screenshot manager without uploading images",
    intro: [
      "Caplio is a screenshot and image manager for Mac that keeps library processing local. OCR, indexing, and search run on your Mac. Caplio does not upload your image library to a cloud OCR or remote AI service for analysis.",
      "Current Caplio builds do not include Caplio-controlled usage analytics. App Store / StoreKit services may still use the network for purchases and restoration. See the Privacy Policy for details.",
    ],
    problemTitle: "The problem",
    problem:
      "Some screenshot tools and AI organizers send images to the cloud. If you want a Mac-native manager that stays private, you need local processing and a clear boundary around library content.",
    howTitle: "How Caplio helps",
    how: [
      "Capture and manage screenshots in a local workflow",
      "Run OCR and search on-device",
      "Avoid cloud OCR and remote AI analysis of your files",
      "Choose which folders Caplio can access",
      "Download from the Mac App Store — screenshot capture is free; try Caplio Pro for 7 days",
    ],
    whyCaplio: [
      "Local-first by design",
      "Privacy-aligned with on-device Vision OCR",
      "Capture, Sessions, search, and documents in one app",
      "No separate cloud library to sync for OCR",
    ],
    relatedSlugs: [
      "privacy-first-screenshot-manager-for-mac",
      "local-ocr-for-mac",
      "screenshot-organizer-for-mac",
      "search-text-inside-screenshots-on-mac",
    ],
  },
  {
    slug: "find-similar-images-and-duplicate-screenshots-on-mac",
    title: "Find similar images and duplicate screenshots on Mac",
    metaTitle: "Find Similar Images & Duplicate Screenshots on Mac",
    metaDescription:
      "Find visually similar images, repeated screenshots, and exact copies on your Mac with Caplio. Review related images privately and decide what you want to keep.",
    eyebrow: "Use case",
    headline: "Find similar images and duplicate screenshots on Mac",
    intro: [
      "Caplio helps you find visually similar images and exact copies inside the folders you choose on your Mac. Similar captures are brought together for review, while you stay in control of what gets kept or removed.",
      "Nothing is deleted automatically. Caplio never removes images for you.",
    ],
    problemTitle: "The problem",
    problem:
      "Screenshot and image collections often accumulate repeated captures, slightly different versions of the same screen, crops or visually similar images, and exact copies. Finding these manually becomes difficult as the library grows.",
    howTitle: "How Caplio helps",
    how: [
      "Detect images that appear visually very similar",
      "Detect exact copies in your chosen folders",
      "Bring related captures together for review",
      "Compare images side by side and keep what you want",
      "Stop a group from being suggested again when you are done with it",
    ],
    whyCaplio: [
      "You stay in control. Caplio never automatically deletes images",
      "Works with the folders you choose, not a whole-Mac scan",
      "Pairs with OCR search, timeline browsing, and categories",
      "Local-first processing with no cloud AI required for this workflow",
    ],
    relatedSlugs: [
      "screenshot-organizer-for-mac",
      "search-text-inside-screenshots-on-mac",
      "organize-screenshots-automatically-on-mac",
    ],
  },
  {
    slug: "capture-screenshots-during-online-classes",
    title: "Capture screenshots during online classes",
    metaTitle: "Capture Screenshots During Online Classes on Mac",
    metaDescription:
      "Capture lecture slides and notes during online classes on Mac with Caplio. Keep related captures in a Capture Session, search them later, and export a PDF or Word document.",
    eyebrow: "Use case",
    headline: "Capture screenshots during online classes",
    intro: [
      "Start a Capture Session for a class, then capture slides, diagrams, and key moments with Caplio’s free screenshot capture.",
      "Later, search the recognized text, review the Session, and turn the useful captures into a PDF or Word document.",
    ],
    problemTitle: "The problem",
    problem:
      "During live classes, you need to capture quickly without losing focus. Afterward, related screenshots are scattered and hard to turn into study notes.",
    howTitle: "How Caplio helps",
    how: [
      "Capture a region, full screen, window, or fixed region with global shortcuts",
      "Keep every lecture capture in one Capture Session",
      "Search text inside slides later with on-device OCR",
      "Select and reorder the useful images",
      "Export Image + Text, Image Only, or Text Only as PDF or DOCX",
    ],
    whyCaplio: [
      "Screenshot capture is free",
      "Sessions keep class context together",
      "Local OCR for private study material",
      "Document Builder for notes you can revise",
    ],
    relatedSlugs: [
      "organize-screenshots-by-capture-session",
      "turn-screenshots-into-pdf-on-mac",
      "turn-screenshots-into-word-on-mac",
      "organize-meeting-screenshots-on-mac",
    ],
  },
  {
    slug: "organize-meeting-screenshots-on-mac",
    title: "Organize meeting screenshots on Mac",
    metaTitle: "Organize Meeting Screenshots on Mac",
    metaDescription:
      "Capture and organize meeting screenshots on Mac with Caplio. Use Capture Sessions, on-device search, and Document Builder to keep decisions and visuals together.",
    eyebrow: "Use case",
    headline: "Organize meeting screenshots on Mac",
    intro: [
      "Start a Capture Session for a meeting, capture the important screens, then search and package what matters afterward.",
      "Caplio does not integrate with Zoom, Teams, or calendars — it simply helps you capture, group, search, and document what you see.",
    ],
    problemTitle: "The problem",
    problem:
      "Meeting screenshots scatter across the Desktop. Finding the slide with the decision, the chart, or the action list later is slow without a shared context.",
    howTitle: "How Caplio helps",
    how: [
      "Capture during the meeting without leaving your flow",
      "Assign captures to a named Capture Session",
      "Filter the library by that Session later",
      "Search recognized text inside the screenshots",
      "Create a PDF or Word summary document from selected images",
    ],
    whyCaplio: [
      "Fast free capture",
      "Session-based context for meetings",
      "On-device search of visual notes",
      "Export when you need a shareable document",
    ],
    relatedSlugs: [
      "capture-screenshots-during-online-classes",
      "organize-screenshots-by-capture-session",
      "turn-screenshots-into-pdf-on-mac",
    ],
  },
  {
    slug: "capture-research-material-on-mac",
    title: "Capture research material on Mac",
    metaTitle: "Capture Research Material on Mac",
    metaDescription:
      "Build a private visual research library on Mac with Caplio. Capture sources, keep them in Sessions, search OCR text, and export selected material to PDF or Word.",
    eyebrow: "Use case",
    headline: "Capture research material on Mac",
    intro: [
      "Use Caplio as a visual research library: capture sources as you browse, keep related material in a Capture Session, and search the text inside images later.",
      "When you are ready, select the useful captures and create a PDF or editable Word document.",
    ],
    problemTitle: "The problem",
    problem:
      "Research often lives as screenshots of articles, charts, and UI references. Without searchable OCR and a session context, that material becomes hard to reuse.",
    howTitle: "How Caplio helps",
    how: [
      "Capture research screenshots quickly",
      "Group a project or topic in a Capture Session",
      "Search recognized text across your research captures",
      "Browse the Timeline when you remember when you found something",
      "Export Image + Text or Text Only documents for writing",
    ],
    whyCaplio: [
      "Private on-device OCR",
      "Sessions for project context",
      "Searchable visual library",
      "Documents without cloud AI rewriting",
    ],
    relatedSlugs: [
      "search-text-inside-screenshots-on-mac",
      "turn-screenshots-into-word-on-mac",
      "screenshot-workflows-for-designers",
    ],
  },
  {
    slug: "turn-screenshots-into-pdf-on-mac",
    title: "Turn screenshots into PDF on Mac",
    metaTitle: "Turn Screenshots into PDF on Mac",
    metaDescription:
      "Turn screenshots into a PDF on Mac with Caplio Document Builder. Select and reorder images, choose Image + Text, Image Only, or Text Only, and export.",
    eyebrow: "Use case",
    headline: "Turn screenshots into PDF on Mac",
    intro: [
      "Select the screenshots and images you need, put them in order, review the extracted text, and create a PDF.",
      "Choose Image + Text, Image Only, or Text Only depending on whether you want visuals, editable text, or both.",
    ],
    problemTitle: "The problem",
    problem:
      "Assembling screenshots into a clean PDF usually means bouncing between Preview, Pages, and manual cropping. Caplio keeps selection, order, OCR review, and export in one workflow.",
    howTitle: "How Caplio helps",
    how: [
      "Select captures from search, Timeline, or a Capture Session",
      "Reorder images for the document",
      "Review extracted text before export",
      "Export as PDF with Image + Text, Image Only, or Text Only",
      "Keep library OCR unchanged when you edit draft text for the document",
    ],
    whyCaplio: [
      "Built for screenshot-to-document workflows",
      "Three clear content modes",
      "Works with Sessions and search",
      "No AI summarization — you control the content",
    ],
    relatedSlugs: [
      "turn-screenshots-into-word-on-mac",
      "capture-screenshots-during-online-classes",
      "organize-meeting-screenshots-on-mac",
    ],
  },
  {
    slug: "turn-screenshots-into-word-on-mac",
    title: "Turn screenshots into Word documents on Mac",
    metaTitle: "Turn Screenshots into Word / DOCX on Mac",
    metaDescription:
      "Create editable Word documents from screenshots on Mac with Caplio. Export DOCX with Image + Text, Image Only, or Text Only from Document Builder.",
    eyebrow: "Use case",
    headline: "Turn screenshots into Word documents on Mac",
    intro: [
      "Document Builder supports DOCX as well as PDF. Select and reorder captures, review OCR text, and export an editable Word document.",
      "Useful for classes, meetings, research notes, and project documentation you want to revise later.",
    ],
    problemTitle: "The problem",
    problem:
      "Copying OCR text by hand into Word is slow, and dropping screenshots into a doc often loses structure. Caplio packages images and extracted text in one pass.",
    howTitle: "How Caplio helps",
    how: [
      "Select and order the screenshots you need",
      "Review and adjust OCR draft text for the document",
      "Choose Image + Text, Image Only, or Text Only",
      "Export DOCX for editing in Word or compatible apps",
      "Keep the underlying library OCR unchanged",
    ],
    whyCaplio: [
      "Native DOCX export",
      "Same workflow as PDF export",
      "Fits Capture → Session → Search → Create",
      "You remain in control of the wording",
    ],
    relatedSlugs: [
      "turn-screenshots-into-pdf-on-mac",
      "capture-research-material-on-mac",
      "search-text-inside-screenshots-on-mac",
    ],
  },
  {
    slug: "organize-screenshots-by-capture-session",
    title: "Organize screenshots by Capture Session",
    metaTitle: "Organize Screenshots by Capture Session on Mac",
    metaDescription:
      "Use Caplio Capture Sessions to keep related screenshots together for classes, meetings, research, and projects. Filter, revisit, and reassign captures by Session.",
    eyebrow: "Use case",
    headline: "Organize screenshots by Capture Session",
    intro: [
      "A Capture Session is a user-defined context for related captures — a class, meeting, research task, project, or any focused piece of work.",
      "Sessions can be reused, filtered, and revisited. Images can be reassigned to another Session when your context changes.",
    ],
    problemTitle: "The problem",
    problem:
      "Date folders alone do not explain why a screenshot mattered. Without a session context, related captures from the same activity get mixed with everything else.",
    howTitle: "How Caplio helps",
    how: [
      "Start a Session before or during focused work",
      "Capture into that Session as you go",
      "Filter your library by Session later",
      "Reassign images to another Session when needed",
      "Optionally organize original files on disk by Capture Session",
    ],
    whyCaplio: [
      "Sessions are context, not Timeline grouping",
      "You name and reuse Sessions",
      "Pairs with search and Document Builder",
      "No automatic AI session naming",
    ],
    relatedSlugs: [
      "capture-screenshots-during-online-classes",
      "organize-meeting-screenshots-on-mac",
      "organize-screenshots-automatically-on-mac",
    ],
  },
  {
    slug: "screenshot-workflows-for-designers",
    title: "Screenshot workflows for designers",
    metaTitle: "Screenshot Workflows for Designers on Mac",
    metaDescription:
      "Capture UI references, keep project Sessions, search visual notes, find similar captures, and export design documentation with Caplio on Mac.",
    eyebrow: "Use case",
    headline: "Screenshot workflows for designers",
    intro: [
      "Designers collect UI states, competitor screens, and review notes as screenshots. Caplio helps you capture quickly, keep a project Session, and find references later.",
      "Drag images into design tools, review similar captures, and export selected boards into a PDF when you need a shareable pack.",
    ],
    problemTitle: "The problem",
    problem:
      "Reference screenshots scatter across Desktop folders. Finding the right UI state or comparing near-identical captures slows critique and handoff.",
    howTitle: "How Caplio helps",
    how: [
      "Capture area or full screen without leaving your flow",
      "Keep a project or client in a Capture Session",
      "Search text inside UI copy and labels",
      "Review similar or duplicate-looking captures",
      "Drag images into compatible design apps or export a PDF",
    ],
    whyCaplio: [
      "Fast free capture",
      "Visual Timeline and Sessions",
      "Similar Images for near-duplicates",
      "Local library for private client work",
    ],
    relatedSlugs: [
      "find-similar-images-and-duplicate-screenshots-on-mac",
      "capture-research-material-on-mac",
      "screenshot-workflows-for-developers",
    ],
  },
  {
    slug: "screenshot-workflows-for-developers",
    title: "Screenshot workflows for developers",
    metaTitle: "Screenshot Workflows for Developers on Mac",
    metaDescription:
      "Capture error states, keep debugging Sessions, search text inside screenshots, and turn relevant captures into docs with Caplio on Mac.",
    eyebrow: "Use case",
    headline: "Screenshot workflows for developers",
    intro: [
      "Capture error dialogs, console output, and UI bugs as you reproduce issues. Keep a debugging or ticket Session, then search the OCR text later.",
      "When you write a report, select the relevant captures and export Image + Text or Text Only.",
    ],
    problemTitle: "The problem",
    problem:
      "Bug screenshots are easy to take and hard to find again — especially when the useful detail is text inside the image, not the filename.",
    howTitle: "How Caplio helps",
    how: [
      "Capture area screenshots of errors and UI states",
      "Group related debugging captures in a Session",
      "Search stack traces, error codes, and UI strings via OCR",
      "Copy recognized text into tickets or chats",
      "Export a PDF or DOCX for bug reports and handoffs",
    ],
    whyCaplio: [
      "On-device OCR for private code and data",
      "Sessions for tickets and incidents",
      "Search that reads inside images",
      "Document export for clear reports",
    ],
    relatedSlugs: [
      "search-text-inside-screenshots-on-mac",
      "turn-screenshots-into-pdf-on-mac",
      "screenshot-workflows-for-designers",
    ],
  },
  {
    slug: "privacy-first-screenshot-manager-for-mac",
    title: "Privacy-first screenshot manager for Mac",
    metaTitle: "Privacy-First Screenshot Manager for Mac",
    metaDescription:
      "A private screenshot manager for Mac work. Caplio keeps OCR, search, and library processing on-device. No cloud AI required to search your screenshots.",
    eyebrow: "Use case",
    headline: "Privacy-first screenshot manager for Mac",
    intro: [
      "Caplio is built for people who capture screenshots while they work and want library processing to stay on the Mac. OCR, search indexing, categorization, similarity detection, and document drafting run locally.",
      "Current Caplio builds do not include Caplio-controlled usage analytics. Caplio still uses Apple’s App Store services for purchases and restoration when needed. Caplio does not claim enterprise security certifications or completed penetration testing.",
    ],
    problemTitle: "The problem",
    problem:
      "Many screenshot and “AI organizer” tools send images or extracted text to remote services. For class notes, client work, research, or internal screens, that boundary matters.",
    howTitle: "How Caplio helps",
    how: [
      "Capture screenshots with free region, full-screen, window, and fixed-region modes",
      "Keep related work in Capture Sessions",
      "Search text inside screenshots with on-device Apple Vision OCR",
      "Export selected captures to PDF or Word without cloud document AI",
      "Authorize only the folders you choose to watch",
    ],
    whyCaplio: [
      "Local-first visual library",
      "No cloud OCR required to search",
      "Clear Free Capture vs Caplio Pro model",
      "Readable Privacy Policy with version notes",
    ],
    relatedSlugs: [
      "screenshot-manager-without-uploading-images",
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
