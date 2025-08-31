import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | E-Cell FCRIT",
  description:
    "Meet the passionate team of E-Cell FCRIT driving entrepreneurship and innovation in our college community.",
  keywords:
    "E-Cell team, FCRIT team, entrepreneurship team, student leadership, core committee",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
