import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UseCasePage } from "@/components/use-case-page";
import { siteConfig } from "@/lib/site";
import {
  getUseCaseBySlug,
  getUseCasePath,
  useCases,
} from "@/lib/use-cases";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    return {};
  }

  const path = getUseCasePath(useCase.slug);
  const title = useCase.metaTitle;
  const absoluteTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description: useCase.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: absoluteTitle,
      description: useCase.metaDescription,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: absoluteTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description: useCase.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function UseCaseSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  return <UseCasePage useCase={useCase} />;
}
