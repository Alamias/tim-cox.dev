import type { Metadata } from "next";
import { profile } from "./experience";

export const siteUrl = "https://tim-cox.dev";

export const site = {
  name: profile.name,
  givenName: "Tim",
  familyName: "Cox",
  jobTitle: "Senior Frontend Developer",
  status: "Open to work",
  title: "Tim Cox — Senior Frontend Developer for Hire | React, Next.js",
  titleShort: "Tim Cox — Senior Frontend Developer",
  description:
    "Tim Cox is a senior frontend developer open to work. 20+ years with React, Next.js, and TypeScript. Seeking remote or hybrid roles near Ontario, California.",
  locale: "en_US",
  location: profile.location,
  email: profile.email,
  linkedin: profile.linkedin,
  keywords: [
    "Tim Cox",
    "Tim Cox frontend developer",
    "frontend developer",
    "frontend developer for hire",
    "frontend developer looking for work",
    "senior frontend developer",
    "senior frontend engineer",
    "open to work",
    "available for hire",
    "hire frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "remote frontend developer",
    "frontend developer Ontario California",
    "UI engineer",
    "frontend architect",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
} as const;

export const extraMeta = {
  "geo.region": "US-CA",
  "geo.placename": "Ontario, California",
  coverage: "Ontario, California, United States",
  subject:
    "Tim Cox, senior frontend developer open to work, React, Next.js, TypeScript",
  "profile:first_name": "Tim",
  "profile:last_name": "Cox",
  availability: "open to work",
  "job-title": site.jobTitle,
} as const;

function uniqueKeywords(extra: string[] = []) {
  return [...new Set([...site.keywords, ...extra])];
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  images,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  images?: { url: string; alt?: string; width?: number; height?: number }[];
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const ogTitle = title.includes(site.name) ? title : `${title} · ${site.name}`;

  return {
    title,
    description,
    keywords: uniqueKeywords(keywords),
    authors: [{ name: site.name, url: siteUrl }],
    creator: site.name,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: site.titleShort,
      locale: site.locale,
      type,
      emails: [site.email],
      countryName: "United States",
      ...(type === "profile"
        ? { firstName: site.givenName, lastName: site.familyName }
        : {}),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: site.name,
        givenName: site.givenName,
        familyName: site.familyName,
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        jobTitle: site.jobTitle,
        description: site.description,
        email: `mailto:${site.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ontario",
          addressRegion: "CA",
          addressCountry: "US",
        },
        homeLocation: {
          "@type": "Place",
          name: profile.location,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ontario",
            addressRegion: "CA",
            addressCountry: "US",
          },
        },
        sameAs: [site.linkedin],
        knowsLanguage: "en",
        knowsAbout: [
          "Frontend development",
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "UI architecture",
          "Web performance",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Biola University",
        },
        hasOccupation: {
          "@type": "Occupation",
          name: site.jobTitle,
          occupationLocation: {
            "@type": "City",
            name: profile.location,
          },
          skills: profile.skills.join(", "),
        },
        seeks: {
          "@type": "Demand",
          name: "Senior Frontend Developer role",
          description:
            "Open to senior frontend and frontend-focused full-stack roles. Remote, or hybrid near Ontario, California.",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: site.titleShort,
        url: siteUrl,
        description: site.description,
        inLanguage: "en-US",
        publisher: { "@id": `${siteUrl}/#person` },
        about: { "@id": `${siteUrl}/#person` },
        keywords: site.keywords.join(", "),
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: site.title,
        description: site.description,
        about: { "@id": `${siteUrl}/#person` },
        mainEntity: { "@id": `${siteUrl}/#person` },
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
    ],
  };
}
