/** Resume content mirrored from Tim-Cox-Resume (2026) */

export const resumeFiles = {
  pdf: '/resume/Tim-Cox-Resume.pdf',
  docx: '/resume/Tim-Cox-Resume.docx',
} as const;

export const resume = {
  name: 'Tim Cox',
  title: 'Senior Frontend Engineer',
  location: 'Ontario, CA, USA',
  email: 'timcox6772@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tim-cox-49788a1',
  linkedinLabel: 'LinkedIn',
  github: 'https://github.com/Alamias',
  githubLabel: 'GitHub',
  summary:
    'Senior Frontend Engineer with 25+ years building websites and web applications for gaming, healthcare, and enterprise teams. Most recently focused on React, Next.js, TypeScript, frontend architecture, design systems, accessibility, and performance. Built or supported more than 40 production sites and applications used by millions of people. Known for owning difficult problems, working well across teams, and leaving code easier to maintain.',
  skillGroups: [
    {
      label: 'Frontend',
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'SCSS',
        'Angular',
      ],
    },
    {
      label: 'Backend & data',
      items: [
        'React Query',
        'Redux',
        'GraphQL',
        'REST APIs',
        'Node.js',
        'Express',
        'MongoDB',
        'Schema Design',
        'Queries',
        'Models',
        'Strapi CMS',
      ],
    },
    {
      label: 'Architecture & tools',
      items: [
        'SSR',
        'SSG',
        'ISR',
        'Authentication',
        'API/CMS Integration',
        'Caching',
        'Image Optimization',
        'Design systems',
        'Component libraries',
        'UI architecture',
        'Performance',
        'Webpack',
        'Docker',
        'GitHub Actions',
        'Agile',
        'Figma',
        'Adobe XD',
        'Jira',
        'MERN',
        'Cursor',
        'ChatGPT',
        'Claude',
      ],
    },
  ],
  experience: [
    {
      company: 'Intrepid Studios',
      note: 'Studio closure — all staff laid off',
      location: 'Remote',
      period: 'June 2022 – February 2026',
      blurb:
        'Video game developer creating ambitious online worlds and immersive multiplayer experiences.',
      roles: [
        {
          title: 'Senior Frontend Engineer',
          period: 'Sep 2025 – Feb 2026',
          bullets: [
            'Improved application performance by about 35%-45% by fixing rendering and data-fetching problems and making better use of AWS CloudFront caching.',
            'Improved Lighthouse scores and page-load times with image optimization, lazy loading, code splitting, and server-side rendering. Used Chrome DevTools, CloudFront logs, Datadog, and Sentry to track down performance and production issues.',
            'Wrote Jest, React Testing Library, and Playwright tests and ran them automatically through GitHub Actions. Failed tests stopped the build before the code could move forward.',
            'Handled client and server state with React Query, Redux, and Context API. Also built selected Node.js/Express routes, schemas, models, and controllers and worked with Strapi and MongoDB queries.',
            'Turned the Figma designs into a Tailwind-based design system for the main website. Built the primitives, tokens, typography, responsive rules, accessibility patterns, and shared components used by our two-person frontend team.',
            'The design system made new pages faster to build, removed duplicated UI code, kept the site visually consistent, and made responsive behavior and maintenance easier.',
            'Checked accessibility with Lighthouse, automated scans, keyboard and screen-reader testing, contrast and focus checks, semantic HTML reviews, and code reviews.',
            'Made frontend architecture decisions, reviewed code, mentored developers, and helped set engineering standards.',
          ],
        },
        {
          title: 'Frontend Engineer',
          period: 'Jun 2022 – Sep 2025',
          bullets: [
            'ArchOwned most of the frontend for the Ashes of Creation web platform, including accounts, profiles, news, homepage features, internal tools, and work throughout the e-commerce store.',
            'Built registration, login, email verification, profile updates, purchase history, code redemption, password changes, two-factor authentication, and verified email changes. Added client- and server-side validation, useful error states, and protection against duplicate submissions.',
            'Connected Strapi to Next.js through GraphQL and used tag-based invalidation to keep published content current. Built article lists and pages, featured news, pagination, tag filtering, dynamic routes, and responsive images.',
            'Built homepage pieces such as hero banners, calls to action, promotions, media galleries, video, carousels, and community content. Also worked on product cards, cart and checkout flows, promotions, entitlements, and store API integration.',
            'Built tools for support and operations teams to search MongoDB and manage accounts, permissions, bans, game packages, and entitlements. Protected sensitive actions with Auth0, role-based access, protected routes, and validation.',
            'Rebuilt legacy Angular applications in React and Next.js, cutting technical debt and improving load times by about 25%-30%.',
            'Used SSR, SSG, ISR, and caching in Next.js to improve SEO, performance, and content delivery by about 20%-30%.',
          ],
        },
      ],
    },
    {
      company: 'Ambry Genetics',
      location: 'Hybrid',
      period: 'December 2017 – April 2022',
      blurb:
        'Genetic testing company providing diagnostics, hereditary risk assessment, and precision medicine.',
      roles: [
        {
          title: 'Senior Software Engineer',
          bullets: [
            'Was the only frontend engineer for two healthcare applications: a patient payment portal used by thousands each month and an end-to-end sample-kit fulfillment system.',
            'Built the Angular frontend for the payment portal, including forms, invoices, credit-card integration, validation, API integration, responsive accessibility, confirmation screens, and error handling.',
            'Built the React frontend for the sample-kit system. It handled orders, patient information, kit selection, address validation, inventory, shipping labels, tracking, returned samples, and status updates.',
            'Led a Bootstrap 2-to-4 migration that improved accessibility and responsive behavior across key applications.',
            'Created reusable UI components and patterns that reduced development time for new features by 15%-20%.',
            'Cleaned up the frontend architecture and improved the Webpack build and deployment process, making the applications easier to maintain and reducing environment problems.',
          ],
        },
      ],
    },
    {
      company: 'NetBrains',
      location: '',
      period: 'November 2015 – October 2017',
      blurb:
        'Network automation platform improving infrastructure visibility and enterprise operational efficiency.',
      roles: [
        {
          title: 'Senior Software Engineer',
          bullets: [
            'Was the only frontend developer for Clarity, an Angular application used by nurses for allergy testing. Built patient intake, test setup, results, dosage calculations, treatment schedules, reporting, validation, API integration, and the responsive interface.',
            'The application replaced manual steps, helped nurses move through testing faster, and reduced errors. Introduced Webpack and worked with backend engineers to improve consistency and deployments.',
            'Introduced Webpack to modernize build processes and improve deployment reliability.',
            'Partnered with backend engineers on frontend practices and UI consistency.',
          ],
        },
      ],
    },
    {
      company: 'Disney Consumer Products',
      note: 'Department closed',
      location: '',
      period: 'July 2015 – September 2015',
      blurb:
        'Global consumer products division for licensed merchandise, retail, and brand experiences.',
      roles: [
        {
          title: 'Senior Web Developer',
          bullets: [
            "Built Java, JSP, PHP, and MySQL features for Disney's Imagicademy learning suite and created email-capture services for marketing campaigns.",
            'Configured Apache Tomcat and Spring development environments.',
            'Built email capture systems supporting marketing initiatives.',
          ],
        },
      ],
    },
    {
      company: 'Sony Online Entertainment',
      location: '',
      period: 'June 1999 – July 2015',
      blurb:
        'Video game publisher for online multiplayer games and interactive entertainment.',
      roles: [
        {
          title: 'Senior Web Developer',
          period: 'Jul 2010 – Jul 2015',
          bullets: [
            "Built and supported more than 40 production websites and applications across SOE's portfolio. Major properties reached up to 2 million daily pageviews",
            'Tested different registration flows, calls to action, and page layouts with Tealium, Google Analytics, and Google Tag Manager, improving player engagement by about 30%.',
            'Mentored junior developers, reviewed code, and worked directly with game teams, designers, artists, and backend developers on launches and live updates.',
          ],
        },
        {
          title: 'Web Developer',
          period: 'Jun 1999 – Jul 2010',
          bullets: [
            'Built game websites, internal tools, account systems, forums, character-data pages, expansion sales, promotions, launch and download pages, and marketing campaigns.',
            'Worked on nearly every SOE web property during my 16 years there, from Wheel of Fortune Online and JEOPARDY! Online through EverQuest, Star Wars Galaxies, PlanetSide, DC Universe Online, and H1Z1.',
            "Built and supported PlayStation 3's online store and registration flow, contributing to an estimated 15%-20% increase in digital transactions",
            'Built AJAX account and commerce systems with JavaScript, jQuery, HTML, CSS, PHP, Dynamo, REST APIs, CMS platforms, CDN delivery, responsive design, and automated deployments.',
          ],
        },
      ],
    },
  ],
  education: {
    school: 'Biola University',
    focus: 'Coursework in Communications',
    location: 'La Mirada, California',
  },
} as const;
