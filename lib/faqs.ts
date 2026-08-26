export type FaqItem = {
  question: string;
  answer: string;
};

export const productFaqs: FaqItem[] = [
  {
    question: "What is Caplio?",
    answer:
      "Caplio is a local-first macOS app for searching, organizing, and reusing screenshots and images. It uses on-device OCR to make text inside images searchable and stores its library and search data locally on your Mac.",
  },
  {
    question: "Is Caplio a Mac app?",
    answer:
      "Yes. Caplio is a native macOS application designed for Mac and is distributed through the Mac App Store.",
  },
  {
    question: "What does Caplio do?",
    answer:
      "Caplio indexes screenshots and images from folders you choose, recognizes text inside them using on-device OCR, makes that text searchable, provides timeline browsing, and can optionally organize files by date or category.",
  },
  {
    question: "Does Caplio only support screenshots?",
    answer:
      "No. Caplio supports screenshots as well as other supported image files, including PNG, JPEG, HEIC, TIFF, and WebP.",
  },
  {
    question: "Is Caplio private?",
    answer:
      "Caplio is designed to be local-first. Images, OCR processing, and the search index stay on your Mac, and Caplio does not upload your image library to a cloud OCR or remote AI service for analysis.",
  },
  {
    question: "Does Caplio upload my screenshots?",
    answer:
      "Caplio does not upload your screenshots or images to a cloud OCR or remote AI service for analysis. Image processing and OCR are performed locally on your Mac.",
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
      "Caplio provides optional file organization. When enabled, files can be organized by date or category. You can use Caplio's search and library features without enabling file organization.",
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
      "Yes. Caplio provides a 7-day trial with full app access on the Mac. Current purchase and subscription options are available through the app and Mac App Store.",
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
  "What does Caplio do?",
  "Is Caplio private?",
  "Does Caplio only support screenshots?",
  "Does Caplio move my original files?",
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
