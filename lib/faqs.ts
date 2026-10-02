export type FaqItem = {
  question: string;
  answer: string;
};

export const productFaqs: FaqItem[] = [
  {
    question: "What is Caplio?",
    answer:
      "Caplio is a private visual workflow for macOS: Capture → Sessions → Search → Organize → Create. Capture screenshots, keep related captures in Sessions, search text inside images with on-device OCR, and turn selected captures into PDF or Word documents. Your visual library stays on your Mac.",
  },
  {
    question: "Is Caplio a Mac app?",
    answer:
      "Yes. Caplio is a native macOS application designed for Mac and is distributed through the Mac App Store.",
  },
  {
    question: "What does Caplio do?",
    answer:
      "Caplio lets you capture screenshots directly, organize related captures in Capture Sessions, index screenshots and images from folders you choose, search recognized text with on-device OCR, browse a Timeline, find similar images, optionally organize files by Date, Category, or Capture Session, and create PDF or DOCX documents.",
  },
  {
    question: "Can Caplio take screenshots?",
    answer:
      "Yes. Caplio can capture an area or the full screen directly using customizable global shortcuts. Screenshot capture is free.",
  },
  {
    question: "Do I need Caplio Pro to take screenshots?",
    answer:
      "No. Screenshot capture is free. Caplio Pro unlocks the searchable visual library and advanced organization and document workflows.",
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
      "Your visual library stays on your Mac. OCR, indexing, and search run on-device. Caplio does not upload your images, OCR text, or search queries for library processing. Caplio may send limited privacy-preserving anonymous usage analytics that do not include library content. See the Privacy Policy for details.",
  },
  {
    question: "Does Caplio upload my screenshots?",
    answer:
      "Caplio does not upload your screenshots or images for OCR, search, or remote library processing. Image processing and OCR are performed locally on your Mac.",
  },
  {
    question: "Does Caplio use AI?",
    answer:
      "Caplio does not use cloud AI or remote large language models to analyze your image library. OCR is performed locally using Apple's Vision framework.",
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
    question: "Can Caplio search old screenshots?",
    answer:
      "Yes. Caplio can index existing screenshots and images in folders you choose, so older images can become searchable as part of your library.",
  },
  {
    question: "Can Caplio organize files automatically?",
    answer:
      "Caplio provides optional file organization. When enabled, files can be organized by Date, Category, or Capture Session. You can use Caplio's search and library features without enabling file organization. Changing a Session does not by itself move files on disk.",
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
      "Screenshot capture is free. Caplio also provides a 7-day trial of Caplio Pro on your Mac so you can explore the searchable visual library and advanced organization and document workflows. Purchase and subscription options are available through the app and Mac App Store.",
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
  "Do I need Caplio Pro to take screenshots?",
  "What are Capture Sessions?",
  "Can Caplio turn screenshots into a PDF?",
  "Is Caplio private?",
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
