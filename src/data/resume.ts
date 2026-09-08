/** Resume content mirrored from Tim_Cox_Senior_Frontend_Engineer_Resume (2026) */

export const resumeFiles = {
  pdf: "/resume/Tim-Cox-Resume.pdf",
  docx: "/resume/Tim-Cox-Resume.docx",
} as const;

export const resume = {
  name: "Tim Cox",
  title: "Senior Frontend Engineer",
  location: "Ontario, CA",
  phone: "858-829-1434",
  email: "timcox6772@gmail.com",
  linkedin: "https://www.linkedin.com/in/tim-cox-49788a1",
  linkedinLabel: "LinkedIn",
  website: "https://tim-cox.dev",
  websiteLabel: "tim-cox.dev",
  summary:
    "Senior Frontend Engineer with 15+ years building websites and web applications for gaming, healthcare, and enterprise teams. Engineered 40+ production sites and applications used daily by millions of people, including EverQuest, EverQuest II, DC Universe Online, Star Wars Galaxies, PlanetSide 2, Ashes of Creation, and H1Z1, several reaching 1-2 million daily pageviews. Most recently focused on React, Next.js, TypeScript, frontend architecture, design systems, accessibility, and performance, with AI-assisted development workflows (Cursor, ChatGPT, Claude Code). Known for owning difficult problems, working well across teams, and leaving code easier to maintain.",
  focusAreas: [
    "Frontend Architecture",
    "React & Next.js Development",
    "Design Systems",
    "Web Performance",
    "Accessibility",
    "Testing & CI/CD",
    "Technical Leadership",
    "API Integration",
    "Legacy Modernization",
    "High-Traffic Platforms",
  ],
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
      ],
    },
    {
      label: "React & Next.js",
      items: [
        "Hooks",
        "Custom Hooks",
        "Context API",
        "Server/Client Components",
        "App Router",
        "Dynamic Routes",
        "Middleware",
        "Route Handlers",
        "Server Actions",
      ],
    },
    {
      label: "Data & Backend",
      items: [
        "React Query",
        "Redux",
        "GraphQL",
        "REST APIs",
        "Node.js",
        "Express",
        "MongoDB",
        "Schema Design",
        "Queries",
        "Models",
        "Strapi CMS",
        "Python",
        "PHP",
      ],
    },
    {
      label: "Architecture",
      items: [
        "SSR",
        "SSG",
        "ISR",
        "Authentication",
        "API/CMS Integration",
        "Caching",
        "Image Optimization",
        "Design Systems",
        "Component Libraries",
        "Responsive Design",
      ],
    },
    {
      label: "Quality & Accessibility",
      items: [
        "Jest",
        "React Testing Library",
        "Playwright",
        "Lighthouse",
        "Chrome DevTools",
        "WCAG",
        "ARIA",
        "Semantic HTML",
        "Keyboard Accessibility",
      ],
    },
    {
      label: "Delivery & Observability",
      items: [
        "AWS CloudFront",
        "Datadog",
        "Sentry",
        "CI/CD",
        "GitHub Actions",
        "Git",
        "Docker",
        "Webpack",
        "Figma",
        "Adobe XD",
        "Jira",
        "Agile",
        "AI-Assisted Development (Cursor, ChatGPT, Claude, Claude Code, Claude Cowork)",
      ],
    },
  ],
  experience: [
    {
      company: "Intrepid Studios",
      location: "Remote",
      period: "June 2022 – February 2026",
      blurb:
        "Video game studio; company closure resulted in a studio-wide layoff.",
      roles: [
        {
          title: "Senior Frontend Engineer",
          period: "Sep 2025 – Feb 2026",
          bullets: [
            "Improved application performance by about 35%–45% by fixing rendering and data-fetching problems, making better use of AWS CloudFront caching, and using AI-assisted analysis to identify bottlenecks.",
            "Improved Lighthouse scores and page-load times with image optimization, lazy loading, code splitting, and server-side rendering. Used Chrome DevTools, CloudFront logs, Datadog, and Sentry to track down performance and production issues.",
            "Wrote Jest, React Testing Library, and Playwright tests and ran them automatically through GitHub Actions, using AI-assisted tools to generate test cases and improve coverage. Failed tests stopped the build before the code could move forward.",
            "Handled client and server state with React Query, Redux, and Context API. Also built selected Node.js/Express routes, schemas, models, and controllers and worked with Strapi and MongoDB queries.",
            "Turned the Figma designs into a Tailwind-based design system for the main website. Built the primitives, tokens, typography, responsive rules, accessibility patterns, and shared components used by our two-person frontend team.",
            "The design system and reusable component libraries improved cross-team consistency and scalability by about 20%, removed duplicated UI code, and made responsive behavior and maintenance easier.",
            "Checked accessibility with Lighthouse, automated scans, keyboard and screen-reader testing, contrast and focus checks, semantic HTML reviews, and code reviews.",
            "Made frontend architecture decisions, reviewed code, mentored developers, and helped set engineering standards.",
          ],
        },
        {
          title: "Frontend Engineer",
          period: "Jun 2022 – Sep 2025",
          bullets: [
            "Owned most of the frontend for the Ashes of Creation web platform, including accounts, profiles, news, homepage features, internal tools, and work throughout the e-commerce store.",
            "Built registration, login, email verification, profile updates, purchase history, code redemption, password changes, two-factor authentication, and verified email changes. Added client- and server-side validation, useful error states, and protection against duplicate submissions.",
            "Connected Strapi to Next.js through GraphQL and used tag-based invalidation to keep published content current. Built article lists and pages, featured news, pagination, tag filtering, dynamic routes, and responsive images.",
            "Built homepage pieces such as hero banners, calls to action, promotions, media galleries, video, carousels, and community content. Also worked on product cards, cart and checkout flows, promotions, entitlements, and store API integration.",
            "Built tools for support and operations teams to search MongoDB and manage accounts, permissions, bans, game packages, and entitlements. Protected sensitive actions with Auth0, role-based access, protected routes, and validation.",
            "Led the migration of legacy Angular applications to React and Next.js, using AI-assisted tools (Cursor, ChatGPT) to accelerate refactoring, cutting technical debt and improving load times by about 25%–30%.",
            "Used SSR, SSG, ISR, and caching in Next.js to improve SEO, performance, and content delivery by about 20%–30%.",
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
            "Was the only frontend engineer for two healthcare applications: a patient payment portal used by thousands each month and an end-to-end sample-kit fulfillment system.",
            "Built the Angular frontend for the payment portal, including forms, invoices, credit-card integration, validation, API integration, responsive accessibility, confirmation screens, and error handling.",
            "Built the React frontend for the sample-kit system. It handled orders, patient information, kit selection, address validation, inventory, shipping labels, tracking, returned samples, and status updates.",
            "Led a Bootstrap 2-to-4 migration that improved accessibility and responsive behavior across key applications.",
            "Created reusable UI components and patterns that reduced development time for new features by 15%–20%.",
            "Cleaned up the frontend architecture and improved the Webpack build and deployment process, making the applications easier to maintain and reducing environment problems.",
          ],
        },
      ],
    },
    {
      company: "NetBrains",
      location: "California",
      period: "November 2015 – October 2017",
      blurb:
        "Network automation platform improving infrastructure visibility, troubleshooting, and enterprise operational efficiency globally.",
      roles: [
        {
          title: "Senior Software Engineer",
          bullets: [
            "Sole frontend developer for Clarity, an Angular application used by nurses for allergy testing — covering patient intake, dosage calculations, treatment schedules, reporting, and API integration.",
            "Replaced manual testing steps with a faster, lower-error workflow; introduced Webpack and improved deployment consistency with the backend team.",
          ],
        },
      ],
    },
    {
      company: "Disney Consumer Products",
      location: "California",
      period: "July 2015 – September 2015",
      blurb:
        "Global consumer products division creating licensed merchandise, retail, and brand experiences. Department closed.",
      roles: [
        {
          bullets: [
            "Built Java, JSP, PHP, and MySQL features for Disney's Imagicademy learning suite, including email-capture services for marketing campaigns, and set up the team's Apache Tomcat and Spring environments.",
          ],
        },
      ],
    },
    {
      company: "Sony Online Entertainment",
      location: "San Diego, CA",
      period: "June 1999 – July 2015",
      blurb:
        "Video game publisher developing online multiplayer games and interactive entertainment experiences.",
      roles: [
        {
          title: "Senior Web Developer",
          period: "Jul 2010 – Jul 2015",
          bullets: [
            "Built and supported more than 40 production websites and applications across SOE's portfolio. Major properties reached up to 2 million daily pageviews.",
            "Tested different registration flows, calls to action, and page layouts with Tealium, Google Analytics, and Google Tag Manager, improving player engagement by about 30%.",
            "Developed web systems supporting Sony's online gaming platforms, contributing to 10%+ growth in user acquisition and increased platform revenue.",
            "Mentored junior developers, reviewed code, and worked directly with game teams, designers, artists, and backend developers on launches and live updates.",
          ],
        },
        {
          title: "Web Developer",
          period: "Jun 1999 – Jul 2010",
          bullets: [
            "Built game websites, internal tools, account systems, forums, character-data pages, expansion sales, promotions, launch and download pages, and marketing campaigns across nearly every SOE property, including EverQuest, Star Wars Galaxies, PlanetSide, DC Universe Online, and H1Z1.",
            "Built and supported PlayStation 3's online store and registration flow, contributing to an estimated 15%–20% increase in digital transactions.",
            "Built AJAX account and commerce systems with JavaScript, jQuery, HTML, CSS, PHP, Dynamo, REST APIs, CMS platforms, CDN delivery, responsive design, and automated deployments.",
          ],
        },
      ],
    },
  ],
  education: {
    school: "Biola University",
    focus: "Coursework in Communications",
    location: "La Mirada, CA",
  },
} as const;
