/** Resume content mirrored from Tim-Cox-Resume (2026) */

export const resumeFiles = {
  pdf: "/resume/Tim-Cox-Resume.pdf",
  docx: "/resume/Tim-Cox-Resume.docx",
} as const;

export const resume = {
  name: "Tim Cox",
  title: "Senior Frontend Engineer",
  location: "Ontario, CA, USA",
  email: "timcox6772@gmail.com",
  linkedin: "https://www.linkedin.com/in/tim-cox-49788a1",
  linkedinLabel: "LinkedIn",
  summary:
    "Senior Frontend Engineer with over 20 years of experience developing scalable web applications and high-performance user interfaces. Proven expertise in front-end architecture, performance optimization, and modernizing legacy platforms. Engineered 40+ production web applications used daily by millions of users—including EverQuest, EverQuest II, DC Universe Online, Star Wars Galaxies, PlanetSide 2, Ashes of Creation, SOE All Access, and H1Z1. Currently working with React, Next.js, and TypeScript, with AI-assisted coding via Cursor and ChatGPT. Looking for a challenging frontend role with room to grow toward full-stack.",
  skillGroups: [
    {
      label: "Frontend",
      items: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "SCSS",
        "Angular",
        "Jest",
        "Playwright",
      ],
    },
    {
      label: "Backend & data",
      items: ["GraphQL", "REST APIs", "Node.js", "MongoDB", "Python", "PHP"],
    },
    {
      label: "Architecture & tools",
      items: [
        "Design systems",
        "Component libraries",
        "UI architecture",
        "Performance",
        "Webpack",
        "Docker",
        "GitHub Actions",
        "Agile",
        "Figma",
        "Adobe XD",
        "Jira",
        "MERN",
        "Cursor",
        "ChatGPT",
      ],
    },
  ],
  experience: [
    {
      company: "Intrepid Studios",
      note: "Studio closure — all staff laid off",
      location: "Remote",
      period: "June 2022 – February 2026",
      blurb:
        "Video game developer creating ambitious online worlds and immersive multiplayer experiences.",
      roles: [
        {
          title: "Senior Frontend Engineer",
          period: "Sep 2025 – Feb 2026",
          bullets: [
            "Implemented unit and component testing (Jest, React Testing Library) and CI/CD workflows, leveraging AI-assisted tools to improve coverage and reduce regressions.",
            "Improved performance 35–45% through optimized rendering, data fetching, and CDN caching (AWS CloudFront).",
            "Managed complex client/server state (React Query, Redux, context) and contributed to REST/GraphQL API design.",
            "Built reusable component libraries and shared UI systems, improving cross-team consistency by ~20%.",
          ],
        },
        {
          title: "Frontend Engineer",
          period: "Jun 2022 – Sep 2025",
          bullets: [
            "Architected and led development of the Ashes of Creation web platform and internal admin tools with React, Next.js, and TypeScript.",
            "Owned production and internal apps (legacy Angular site, employee admin tools, React AOC site)—features, stability, and tech-debt reduction.",
            "Led Angular → React migration, improving load times 25–30%.",
            "Used Next.js SSR, SSG, and ISR to improve SEO, performance, and content delivery 20–30%.",
            "Partnered with UX, product, and backend teams to ship production-ready features.",
          ],
        },
      ],
    },
    {
      company: "Ambry Genetics",
      location: "Hybrid",
      period: "December 2017 – April 2022",
      blurb:
        "Genetic testing company providing diagnostics, hereditary risk assessment, and precision medicine.",
      roles: [
        {
          title: "Senior Software Engineer",
          bullets: [
            "Developed and maintained a patient payment portal in Angular used by thousands of users monthly.",
            "Built Angular and React apps across multiple production systems during a frontend transition.",
            "Led Bootstrap 2 → 4 migration improving accessibility and mobile responsiveness.",
            "Created shared UI components and patterns, cutting new-feature development time 15–20%.",
            "Built internal billing apps used daily by operations teams.",
            "Refactored UI architecture for reuse and lower maintenance overhead; improved Webpack build/deploy workflows.",
          ],
        },
      ],
    },
    {
      company: "NetBrains",
      location: "",
      period: "November 2015 – October 2017",
      blurb:
        "Network automation platform improving infrastructure visibility and enterprise operational efficiency.",
      roles: [
        {
          title: "Senior Software Engineer",
          bullets: [
            "Developed Angular applications including Clarity (end-to-end allergy testing for nurses) and maintained company web platforms.",
            "Introduced Webpack to modernize build processes and improve deployment reliability.",
            "Partnered with backend engineers on frontend practices and UI consistency.",
          ],
        },
      ],
    },
    {
      company: "Disney Consumer Products",
      note: "Department closed",
      location: "",
      period: "July 2015 – September 2015",
      blurb:
        "Global consumer products division for licensed merchandise, retail, and brand experiences.",
      roles: [
        {
          title: "Senior Web Developer",
          bullets: [
            "Built backend and web systems with Java, JSP, PHP, and MySQL for Disney’s Imagicademy learning suite.",
            "Configured Apache Tomcat and Spring development environments.",
            "Built email capture systems supporting marketing initiatives.",
          ],
        },
      ],
    },
    {
      company: "Sony Online Entertainment",
      location: "",
      period: "June 1999 – July 2015",
      blurb:
        "Video game publisher for online multiplayer games and interactive entertainment.",
      roles: [
        {
          title: "Senior Web Developer",
          period: "Jul 2010 – Jul 2015",
          bullets: [
            "Implemented A/B testing that improved player engagement by ~30%.",
            "Developed web systems supporting Sony’s online gaming platforms, contributing to 10%+ growth in user acquisition.",
          ],
        },
        {
          title: "Web Developer",
          period: "Jun 1999 – Jul 2010",
          bullets: [
            "Created and supported PlayStation 2 online store and registration flows, contributing to a 15–20% increase in digital transactions.",
            "Built AJAX-driven player account management systems to support sales and revenue.",
            "Delivered web features for major game launches and retention initiatives.",
            "Supported titles such as Wheel of Fortune Online and JEOPARDY! Online with Dynamo, HTML, CSS, and JavaScript.",
          ],
        },
      ],
    },
  ],
  education: {
    school: "Biola University",
    focus: "Communications",
    location: "La Mirada, California",
  },
} as const;
