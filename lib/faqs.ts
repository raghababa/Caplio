export type FaqItem = {
  question: string;
  answer: string;
};

export const productFaqs: FaqItem[] = [
  {
    question: "What is Caplio?",
    answer:
      "Caplio is a native, local-first screenshot manager and searchable visual library for macOS. Capture screenshots, keep related captures in Sessions, search text inside images with on-device OCR, optionally organize eligible library images, and export PDF or Word documents. Your visual library stays on your Mac.",
  },
  {
    question: "What operating system does Caplio support?",
    answer:
      "Caplio is a native macOS application distributed through the Mac App Store.",
  },
  {
    question: "Is Caplio a Mac app?",
    answer:
      "Yes. Caplio is a native macOS application designed for Mac and is distributed through the Mac App Store.",
  },
  {
    question: "What does Caplio do?",
    answer:
      "Caplio lets you capture screenshots (region, full screen, window, and fixed region), organize related captures in Capture Sessions, index screenshots and images from folders you choose, search recognized text with on-device OCR, browse a Timeline, find similar images, optionally organize eligible processed library images by Date, Category, or Capture Session, and create PDF or DOCX documents.",
  },
  {
    question: "Can Caplio take screenshots?",
    answer:
      "Yes. Caplio can capture a region, the full screen, a window, or a fixed region using customizable global keyboard shortcuts. Screenshot capture is free.",
  },
  {
    question: "Can users customize capture keyboard shortcuts?",
    answer:
      "Yes. Caplio supports customizable global keyboard shortcuts for capture and related actions.",
  },
  {
    question: "Do I need Caplio Pro to take screenshots?",
    answer:
      "No. Screenshot capture is free forever. You do not need Caplio Pro just to take screenshots. Caplio Pro unlocks the searchable visual library and advanced organization and document workflows.",
  },
  {
    question: "What features require Caplio Pro?",
    answer:
      "Caplio Pro unlocks the searchable visual library, on-device OCR search workflow, Similar Images, Document Builder, and advanced file organization. Screenshot capture remains free.",
  },
  {
    question: "What are Capture Sessions?",
    answer:
      "Capture Sessions help keep related captures from a class, meeting, research task, project, or other activity together. You name Sessions yourself, can revisit them, filter images by Session, and reassign captures when needed.",
  },
  {
    question: "Can Caplio turn screenshots into a PDF?",
    answer:
      "Yes. With Document Builder, you can select and reorder images and export a document using Image + Text, Image Only, or Text Only.",
  },
  {
    question: "Can Caplio create Word documents from screenshots?",
    answer:
      "Yes. Document Builder supports DOCX as well as PDF.",
  },
  {
    question: "Why does Caplio ask for Screen Recording permission?",
    answer:
      "macOS requires Screen Recording permission when Caplio captures the screen. Caplio requests this permission when you explicitly try to capture — not simply because the app launches.",
  },
  {
    question: "Does Caplio only support screenshots?",
    answer:
      "No. Caplio supports screenshots as well as other supported image files, including PNG, JPEG, HEIC, TIFF, and WebP.",
  },
  {
    question: "Is Caplio private?",
    answer:
      "Your visual library stays on your Mac. OCR, indexing, categorization, similarity detection, search, and document processing run on-device. Caplio does not upload your images, OCR text, or search queries for library processing. Current Caplio builds do not include Caplio-controlled usage analytics. See the Privacy Policy for details, including notes about older versions.",
  },
  {
    question: "Does Caplio upload my screenshots?",
    answer:
      "No. Caplio does not upload your screenshots or images for OCR, search, or remote library processing. Image processing and OCR are performed locally on your Mac.",
  },
  {
    question: "Does Caplio collect usage analytics?",
    answer:
      "Current Caplio builds do not include Caplio-controlled usage analytics or a third-party analytics SDK. Some earlier versions used privacy-preserving anonymous product-usage analytics. StoreKit may still communicate with Apple for purchases and restoration. See the Privacy Policy for details.",
  },
  {
    question: "Does Caplio use AI?",
    answer:
      "Caplio does not use cloud AI or remote large language models to analyze your image library. OCR is performed locally using Apple's Vision framework. Caplio is not an AI chatbot or semantic LLM search tool.",
  },
  {
    question: "What OCR technology does Caplio use?",
    answer:
      "Caplio uses Apple's Vision framework for on-device text recognition on macOS.",
  },
  {
    question: "Can Caplio search text inside images?",
    answer:
      "Yes. Caplio extracts recognized text from supported images and adds it to a local search index, allowing you to search for words and text found inside images.",
  },
  {
    question: "Does OCR work offline / on-device?",
    answer:
      "Yes. Caplio’s OCR and local search run on-device on your Mac and do not require uploading images to a cloud OCR service.",
  },
  {
    question: "Can Caplio search old screenshots?",
    answer:
      "Yes. Caplio can index existing screenshots and images in folders you choose, so older images can become searchable as part of your library.",
  },
  {
    question: "Can Caplio organize existing screenshots?",
    answer:
      "Yes. Caplio can index screenshots and images from authorized watched folders and optionally organize eligible, processed library images by Date, Category, or Capture Session. Caplio does not claim to automatically reorganize every file on your Desktop.",
  },
  {
    question: "Can Caplio organize files automatically?",
    answer:
      "Caplio provides optional file organization for eligible, processed library images from authorized watched folders. When enabled, files can be organized by Date, Category, or Capture Session. You can use Caplio's search and library features without enabling file organization. Changing a Session does not by itself move files on disk.",
  },
  {
    question: "Does Caplio move my original files?",
    answer:
      "Not during normal indexing. File movement occurs only when you choose to use Caplio's optional file organization features.",
  },
  {
    question: "Can I share images from Caplio?",
    answer:
      "Yes. Caplio can share an image directly or share an image together with its extracted text.",
  },
  {
    question: "Can I copy OCR text from Caplio?",
    answer:
      "Yes. Recognized text can be copied from Caplio for use in other applications.",
  },
  {
    question: "Does Caplio work offline?",
    answer:
      "Caplio's core image processing, OCR, and local search do not require uploading your images to an online processing service. App Store purchase and subscription functions may require access to Apple's services.",
  },
  {
    question: "Where can I download Caplio?",
    answer:
      "Caplio is available for macOS from the official Mac App Store listing.",
  },
  {
    question: "Does Caplio have a free trial?",
    answer:
      "Screenshot capture is free forever. Caplio also provides a 7-day trial of Caplio Pro on your Mac so you can explore the searchable visual library and advanced organization and document workflows. After the trial, you can keep capturing for free without a subscription. Purchase and subscription options are available through the app and Mac App Store.",
  },
];

export function getFaqPageJsonLd(faqs: FaqItem[] = productFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

const homepageFaqQuestions = [
  "What is Caplio?",
  "Can Caplio take screenshots?",
  "Can users customize capture keyboard shortcuts?",
  "Do I need Caplio Pro to take screenshots?",
  "What features require Caplio Pro?",
  "Can Caplio search text inside images?",
  "Does Caplio upload my screenshots?",
  "Does Caplio collect usage analytics?",
  "Does Caplio have a free trial?",
  "Where can I download Caplio?",
] as const;

export const homepageFaqs: FaqItem[] = homepageFaqQuestions.map((question) => {
  const faq = productFaqs.find((item) => item.question === question);
  if (!faq) {
    throw new Error(`Missing homepage FAQ: ${question}`);
  }
  return faq;
});
