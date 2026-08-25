import { galleries, gallerySections } from './galleries';
import type { GalleryImage, GallerySection } from './types';

export type Experience = {
  slug: string;
  company: string;
  shortName: string;
  role: string;
  roles?: string[];
  location: string;
  start: string;
  end: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  titles?: string[];
  accent: string;
  gallery: GalleryImage[];
  /** When set, work page renders gallery broken into titled groups */
  gallerySections?: GallerySection[];
};

export const profile = {
  name: 'Tim Cox',
  title: 'Senior Frontend Engineer',
  location: 'Ontario, California',
  tagline:
    'Twenty-plus years building production deployed web platforms for games, medical, and entertainment companies used by millions of users—React, Next.js, and TypeScript at scale.',
  about: [
    'I’m a Senior Frontend Engineer with 20+ years of experience building scalable applications used by billions of users. I specialize in React, Next.js, and TypeScript, with a focus on frontend architecture, performance optimization, and maintainable UI systems.',
    'At Intrepid Studios I architected and led development across the Ashes of Creation customer-facing site and internal tools, modernizing legacy systems into scalable React platforms. Earlier, at Sony Online Entertainment, I shipped marketing, e-commerce, and account systems for EverQuest, DC Universe Online, PlanetSide 2, and more—including A/B tests that lifted engagement by about 30%.',
    'I own frontend systems end to end—from architecture through production—partnering with product, UX, and backend teams to ship reliable, performant experiences.',
  ],
  email: 'timcox6772@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tim-cox-49788a1',
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Redux / React Query',
    'GraphQL / REST',
    'Performance & CDN',
    'Design systems',
    'Jest / RTL',
    'CI/CD',
    'Angular',
    'UI/UX',
  ],
  education: {
    school: 'Biola University',
    focus: 'Communications',
    years: '1990 – 1996',
  },
};

export const experiences: Experience[] = [
  {
    slug: 'intrepid',
    company: 'Intrepid Studios',
    shortName: 'Intrepid',
    role: 'Senior Frontend Engineer',
    roles: [
      'Senior Frontend Developer (Oct 2025 – Feb 2026)',
      'Sr Frontend Engineer / Frontend Developer (Jun 2022 – Feb 2026)',
    ],
    location: 'Remote / San Diego, CA',
    start: '2022',
    end: '2026',
    period: 'Jun 2022 – Feb 2026',
    summary:
      'Led frontend architecture for the Ashes of Creation web platform and internal admin tools—migrating legacy Angular to React/Next.js, improving performance, and shipping shared UI systems across teams.',
    highlights: [
      'Architected the Ashes of Creation customer site and internal tools with React, Next.js, and TypeScript.',
      'Migrated legacy Angular applications to React, improving load times by roughly 25–30%.',
      'Improved performance 35–45% via rendering, data fetching, and CloudFront CDN caching.',
      'Built reusable component libraries that improved cross-team consistency by ~20%.',
      'Added Jest / React Testing Library coverage and CI/CD workflows to reduce regressions.',
      'Owned client/server state with React Query, Redux, and context; contributed to REST/GraphQL API design.',
      'Leveraged SSR, SSG, and ISR for SEO and content delivery gains of 20–30%.',
    ],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Redux',
      'React Query',
      'GraphQL',
      'AWS CloudFront',
      'Jest',
      'CI/CD',
    ],
    titles: ['Ashes of Creation'],
    accent: '#1d6b5c',
    gallery: galleries.intrepid ?? [],
  },
  {
    slug: 'ambry',
    company: 'Ambry Genetics',
    shortName: 'Ambry',
    role: 'Senior Front End Engineer & UI/UX Designer',
    location: 'Aliso Viejo, CA',
    start: '2017',
    end: '2022',
    period: 'Dec 2017 – Apr 2022',
    summary:
      'Designed and built frontend experiences for a leading genetics company—patient portals, payment flows, style guides, and Bootstrap migrations—bridging design and engineering.',
    highlights: [
      'Built patient-facing portal features including credit card payment flows.',
      'Created design and style guides for internal and customer-facing applications.',
      'Refactored large applications from Bootstrap 2 to Bootstrap 4.',
      'Authored a global SCSS/Bootstrap brand layer distributed via Docker images.',
      'Designed wireframes in Adobe XD and Photoshop for major UX overhauls.',
      'Streamlined customer apps toward React/Redux; mentored offshore teammates on React.',
    ],
    stack: [
      'React',
      'Angular',
      'AngularJS',
      'SCSS',
      'Bootstrap',
      'Webpack',
      'Symfony Encore',
      'Adobe XD',
      'Docker',
    ],
    accent: '#2a5f8f',
    gallery: galleries.ambry ?? [],
  },
  {
    slug: 'netbrains',
    company: 'NetBrains, Inc',
    shortName: 'NetBrains',
    role: 'Software Engineer',
    location: 'Irvine, CA',
    start: '2015',
    end: '2017',
    period: 'Nov 2015 – Oct 2017',
    summary:
      'Delivered frontend applications for medical industry clients with Angular/AngularJS, and maintained the company site with Jekyll and CloudCannon.',
    highlights: [
      'Built dynamic frontend apps for medical companies using Angular and AngularJS.',
      'Maintained the company website with Jekyll and CloudCannon.',
      'Taught backend teammates CSS patterns for large-scale applications.',
      'Used Webpack for modular application builds and Git for revision control.',
    ],
    stack: [
      'Angular',
      'AngularJS',
      'HTML5',
      'SASS',
      'Webpack',
      'Jekyll',
      'Git',
    ],
    accent: '#6b4f3a',
    gallery: galleries.netbrains ?? [],
  },
  {
    slug: 'disney',
    company: 'Disney Consumer Products',
    shortName: 'Disney',
    role: 'Senior Web Developer',
    location: 'Glendale, CA',
    start: '2015',
    end: '2015',
    period: 'Jul 2015 – Sep 2015',
    summary:
      'Built customer-facing and backend web tools for Disney—metadata storage, uploads, and email capture—ramping quickly on Java, JSP, PHP, and Spring.',
    highlights: [
      'Created a backend PHP/Java app for metadata storage and file uploads.',
      'Stood up local/dev servers with Apache Tomcat and Spring Framework.',
      'Implemented email gathering for the main site using Java and MySQL.',
      'Shipped with Eclipse across Java-based web applications.',
    ],
    stack: [
      'Java',
      'JSP',
      'PHP',
      'MySQL',
      'jQuery',
      'SASS',
      'Tomcat',
      'Spring',
    ],
    accent: '#1a4d8c',
    gallery: galleries.disney ?? [],
  },
  {
    slug: 'soe',
    company: 'Sony Online Entertainment',
    shortName: 'SOE',
    role: 'Senior Web Developer',
    roles: [
      'Senior Web Developer (Jul 2005 – Feb 2015)',
      'Web Developer (Jun 1999 – Jul 2005)',
    ],
    location: 'San Diego, CA',
    start: '1999',
    end: '2015',
    period: 'Jun 1999 – Feb 2015',
    summary:
      'Nearly sixteen years building marketing, e-commerce, registration, and account platforms for SOE’s MMO portfolio—EverQuest, EverQuest II, Star Wars Galaxies, Vanguard, PlanetSide 2, DC Universe Online, and more serving over a billion page views for millions of users during that time.',
    highlights: [
      'Shipped customer-facing and backend apps for marketing, storefronts, and account management across SOE’s catalog.',
      'Drove A/B-tested registration and retention flows that improved engagement (~30% in key experiments).',
      'Built AJAX-driven account and character visualization experiences for web and mobile.',
      'Supported PlayStation 2 online store and registration flows (~15–20% lift in digital transactions).',
      'Created and maintained PlayStation 3 registration and store flows while working in Tokyo.',
      'Modernized legacy sites with Bootstrap for responsive design; moved from JSP to Apache Velocity.',
      'Credited across dozens of titles including EverQuest expansions, EQ II, DCUO, PlanetSide 2, Free Realms, and Clone Wars Adventures.',
    ],
    stack: [
      'JavaScript',
      'jQuery',
      'AJAX',
      'Velocity',
      'Java/JSP',
      'Bootstrap',
      'HTML/CSS',
      'e-commerce',
    ],
    titles: [
      'EverQuest',
      'PlanetSide',
      'Star Wars Galaxies',
      'EverQuest II',
      'Station Exchange',
      'Vanguard',
      'Pirates of the Burning Sea',
      'Free Realms',
      'DC Universe Online',
      'PlanetSide 2',
      'H1Z1',
      'Station.com',
    ],
    accent: '#8b3a2a',
    gallery: galleries.soe ?? [],
    gallerySections: gallerySections.soe,
  },
];

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}

export function getAdjacent(slug: string) {
  const index = experiences.findIndex((e) => e.slug === slug);
  return {
    prev: index > 0 ? experiences[index - 1] : null,
    next:
      index >= 0 && index < experiences.length - 1 ?
        experiences[index + 1]
      : null,
  };
}
