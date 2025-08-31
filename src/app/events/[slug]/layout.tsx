import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Basic metadata for individual event pages
  return {
    title: `Event Details | E-Cell FCRIT`,
    description:
      "Learn more about this E-Cell FCRIT event, including speakers, sponsors, and event highlights.",
  };
}

export default function EventSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
