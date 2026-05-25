export type ProjectMediaBase = {
  cardWidth?: string;
  caption?: string;
};

export type ProjectImage = ProjectMediaBase & {
  type?: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectVideo = ProjectMediaBase & {
  type: "video";
  src: string;
  title: string;
  poster?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
};

export type ProjectLinkPreview = ProjectMediaBase & {
  type: "link";
  href: string;
  title: string;
  description?: string;
  eyebrow?: string;
  image?: ProjectImage;
};

export type ProjectMedia = ProjectImage | ProjectVideo | ProjectLinkPreview;

export type ProjectLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  description: string;
  logo?: ProjectLogo;
  media: ProjectMedia[];
};

/** Replace images under /public/projects/<slug>/ or edit src paths here. */
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Wealth.com",
    period: "Ongoing",
    description:
      "Building estate and wealth management tools during Wealth.com's growth from Series A to Series B, contributing across AI/LLM pipelines, and shipping out user product requests. Currently supporting over $15T in client assets!",
    logo: {
      src: "/logos/wealth.png",
      alt: "Wealth.com",
      width: 420,
      height: 120,
    },
    media: [
      {
        src: "/projects/project-one/01.svg",
        alt: "Wealth.com cover",
        width: 900,
        height: 1200,
      },
      {
        src: "/projects/project-one/02.svg",
        alt: "Wealth.com product spread",
        width: 1200,
        height: 900,
      },
      {
        src: "/projects/project-one/03.svg",
        alt: "Wealth.com product detail",
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: "project-two",
    title: "HubSpot",
    period: "Summer 2025",
    description:
      "My first internship experience, working on core CRM record page features used by teams every day. I independently planned and shipped end-to-end record associations, a workflow used more than 10M times daily.",
    logo: {
      src: "/logos/hubspot.png",
      alt: "HubSpot",
      width: 962,
      height: 275,
    },
    media: [
      {
        src: "/projects/project-two/01.svg",
        alt: "HubSpot CRM frame 1",
        width: 1400,
        height: 900,
      },
      {
        src: "/projects/project-two/02.svg",
        alt: "HubSpot CRM frame 2",
        width: 1400,
        height: 900,
      },
    ],
  },
  {
    slug: "archive",
    title: "Experiments",
    period: "",
    description: "Smaller experiments.",
    media: [
      {
        src: "/projects/archive/01.svg",
        alt: "Archive — sample",
        width: 800,
        height: 1000,
      },
    ],
  },
];
