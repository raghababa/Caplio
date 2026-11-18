import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata("privacy");

type PrivacySection = {
  title: string;
  content: ReactNode[];
};

const sections: PrivacySection[] = [
  {
    title: "Privacy at a Glance",
    content: [
      `${siteConfig.name} is a local-first macOS screenshot manager and searchable visual library. Your visual library is processed on your Mac. Meeting Recorder also lets you record and transcribe meetings locally.`,
      "OCR, categorization, similarity detection, search indexing, thumbnails, and document processing run on-device. Screenshots, OCR text, search queries, filenames, folder paths, Capture Session names, and document content are not uploaded for processing.",
      "Current Caplio builds do not include Caplio-controlled usage analytics, do not transmit an analytics installation identifier, and do not use a third-party analytics SDK such as TelemetryDeck.",
      "Caplio may still use the network for Apple App Store / StoreKit purchase and entitlement services, Apple speech-model downloads, and when you choose to open Privacy or Terms links or send feedback by email. Caplio does not sell personal data and does not use advertising trackers.",
    ],
  },
  {
    title: "Information Processed Locally",
    content: [
      "Core Caplio features run on your Mac. OCR, indexing, search, automatic categorization of indexed images, thumbnail generation, Similar Images processing, and Document Builder processing are performed locally/on-device.",
      "Caplio does not require cloud AI to search your library.",
      "Caplio processes and stores the following locally rather than uploading them for remote library or meeting processing. Exports and copies you choose to share are described below:",
      <ul
        key="local-content-list"
        className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted"
      >
        <li>screenshots and images</li>
        <li>image contents</li>
        <li>OCR / extracted text</li>
        <li>search queries and search terms</li>
        <li>filenames</li>
        <li>file paths</li>
        <li>folder names and folder paths</li>
        <li>Capture Session names</li>
        <li>document titles</li>
        <li>document text and content</li>
        <li>meeting audio and video</li>
        <li>meeting titles, dates, duration, source choices, and recording status</li>
        <li>meeting transcripts, language choices, and transcript timing</li>
        <li>meeting settings and local recording/transcription diagnostics</li>
        <li>thumbnails</li>
        <li>manually edited titles</li>
        <li>Similar Images screenshot/group IDs</li>
        <li>security-scoped bookmark data</li>
        <li>StoreKit transaction IDs and receipts (handled locally / by Apple as applicable)</li>
        <li>the app’s local trial installation ID</li>
        <li>local diagnostic logs (not automatically uploaded)</li>
      </ul>,
    ],
  },
  {
    title: "Meeting Recorder",
    content: [
      "When you start a meeting recording, Caplio captures the sources you choose. Depending on the recording mode, these can include microphone audio, system audio, and video of a selected window or display. Recordings may contain other people’s voices and information visible on screen. Make sure you have any consent or permission needed before recording or sharing a meeting.",
      "Caplio uses macOS microphone and Screen Recording permissions for the selected sources. Screen Recording access can also be needed to capture system audio without saving video. You can manage these permissions in macOS Privacy & Security settings.",
      "Meeting media and transcripts are processed and saved locally. Caplio does not upload meeting recordings, transcripts, or meeting titles to Caplio servers or a cloud transcription service.",
      "When you request transcription of a saved meeting, Caplio uses Apple’s on-device speech processing on supported Macs. There is no cloud transcription fallback. If the required language model is not installed, Caplio requests its download from Apple. Apple manages these models through macOS; the download requires network access, but Caplio does not send the meeting recording or transcript with that request.",
      "You can export recordings, transcript text, and PDFs to a destination you choose. These are separate copies. A destination may be synced or backed up by macOS or another service, and anything you choose to share is handled by that destination or service. Caplio does not control those copies or their retention.",
    ],
  },
  {
    title: "Folder and File Access",
    content: [
      "Caplio accesses only the folders you select or authorize, as needed for its library features. You can watch multiple folders.",
      "Folder authorization and security-scoped bookmark information remain local on your Mac.",
      "Optional file organization applies to eligible, processed library images from authorized watched folders. Caplio does not claim to automatically reorganize every file on your Desktop.",
      "You can remove folder access through Caplio’s settings or macOS Privacy & Security settings.",
    ],
  },
  {
    title: "Usage Analytics",
    content: [
      "In current Caplio builds, Caplio does not collect Caplio-controlled product-usage analytics and does not include TelemetryDeck or another third-party analytics transport.",
      "Production analytics behavior uses a no-op tracker: Caplio does not send automatic app telemetry for product analytics.",
      "This does not mean Caplio never uses the network. Apple’s App Store and StoreKit services may still communicate with Apple when you purchase, restore, or verify Library Pro or Meeting Recorder access. Apple speech-model downloads may also use the network.",
    ],
  },
  {
    title: "Earlier Versions and Historical Analytics",
    content: [
      "Some earlier Caplio versions included privacy-preserving anonymous product-usage analytics through TelemetryDeck. Those events were intended to describe product interactions and did not include screenshots, OCR text, search queries, filenames, folder paths, Capture Session names, or document content.",
      "If you used an older analytics-enabled version, analytics data already transmitted (if any) is subject to the practices of that third-party service and the privacy policy that applied at the time.",
      "Deleting Caplio from your Mac does not necessarily delete previously transmitted aggregate analytics data. Caplio does not claim that historical TelemetryDeck records have been deleted.",
    ],
  },
  {
    title: "Purchases and Subscriptions",
    content: [
      "Purchases and subscriptions are processed through Apple’s App Store and StoreKit. Caplio does not receive your credit card or other payment card details.",
      "Internet access may be used for Apple App Store purchase and subscription services, including verifying Library Pro and the separate Meeting Recorder Lifetime entitlement, restoring purchases, and receiving purchase or revocation updates.",
    ],
  },
  {
    title: "Local Data Storage",
    content: [
      "Caplio stores product and library information locally on your Mac as needed for functionality. This may include image library and index information, OCR and indexing data, watched-folder authorization, settings, local trial state, and local diagnostic logs.",
      "Meeting Recorder stores its recordings, transcripts, and meeting database in Caplio’s local application-support storage. Meeting records include titles, creation and recording times, duration, selected audio/video source types, language, transcript text and timing, file references, recording/transcription status, and error information. Caplio also remembers recording-source preferences in local settings.",
      "Temporary audio and transcript files may be created during transcription. Interrupted recordings may leave partial media for recovery; failed or interrupted processing may leave temporary files. Caplio does not promise that every partial or temporary file is removed immediately.",
      "Local meeting diagnostics include recording and dropped-buffer counts, transcription-attempt counts, and capture, writer, or transcription errors. Development builds may also log timing, audio-level measurements, and transcript-formatting counts. These diagnostics are not automatically uploaded by Caplio.",
      "Feedback is user-initiated through your email app. If you choose to send meeting content or diagnostic information to support, that information leaves your device through your email service. Review what you include before sending.",
      "Core library, search, and OCR features do not require uploading your library content.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      <>
        Purchases are handled by Apple. See Apple’s App Store and privacy
        information at{" "}
        <a
          href="https://www.apple.com/legal/privacy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          apple.com/legal/privacy
        </a>
        .
      </>,
      "Apple also provides the on-device speech framework and downloads and manages its language models. Apple’s services and any information Apple handles through them are subject to Apple’s privacy practices. Local meeting processing does not mean that the app or macOS never communicates with Apple.",
      "Opening Privacy Policy or Terms links is user-initiated. Sending feedback opens a user-initiated email composer.",
      "This website does not use third-party analytics, advertising trackers, or cookie banners.",
    ],
  },
  {
    title: "Data Retention and User Control",
    content: [
      "Saved meetings remain in Caplio’s local storage until you delete them or remove the relevant application data. Caplio does not automatically delete saved meetings after a fixed retention period.",
      "Deleting a meeting removes its stored media, transcript, and associated meeting records. If deletion is interrupted or fails, some local files or records may remain until cleanup succeeds; Caplio retries pending meeting deletions when its meeting library recovers. This is not a promise of secure erasure.",
      "Deleting a meeting does not delete recordings, transcripts, or PDFs you have already exported, shared copies, backups, or Apple-managed speech models. Manage those separately in the relevant folders, services, or system settings.",
      "Removing the app alone may leave local application data or backups behind. To remove locally stored Caplio data, remove the relevant application data as well. Your macOS, backup, and sync settings can affect what copies remain.",
      "Apple retains purchase and subscription records according to Apple’s policies. Historical analytics from older Caplio versions, if any, are governed by the third-party practices applicable when that data was transmitted.",
    ],
  },
  {
    title: "Children’s Privacy",
    content: [
      "Caplio is not directed to children, and we do not knowingly collect personal information from children through Caplio.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "Contact",
    content: [
      <>
        For privacy questions about {siteConfig.name}, visit our{" "}
        <Link href="/support" className="text-accent hover:underline">
          Support
        </Link>{" "}
        page and use Email Support.
      </>,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm text-muted">Last updated: November 18, 2026</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-muted">
          How {siteConfig.name} handles your data and protects your privacy.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.content.map((paragraph, index) =>
                  typeof paragraph === "string" ? (
                    <p
                      key={`${section.title}-${index}`}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ) : (
                    <div key={`${section.title}-${index}`}>{paragraph}</div>
                  )
                )}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted">
          See also our{" "}
          <Link href="/support" className="text-accent hover:underline">
            Support
          </Link>{" "}
          page and{" "}
          <Link href="/terms" className="text-accent hover:underline">
            Terms of Use
          </Link>
          .
        </p>
      </article>
    </SiteLayout>
  );
}
