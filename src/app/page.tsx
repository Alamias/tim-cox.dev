import type { Metadata } from "next";
import { HomeHero } from "@/components/HomeHero";
import { HomeSections } from "@/components/HomeSections";
import { pageMetadata, site } from "@/data/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: site.title,
    description: site.description,
    path: "/",
    type: "profile",
  }),
  title: { absolute: site.title },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSections />
    </>
  );
}
