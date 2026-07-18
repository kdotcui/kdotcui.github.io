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

export type ProjectIframe = ProjectMediaBase & {
  type: "iframe";
  src: string;
  title: string;
  width: number;
  height: number;
  allowFullScreen?: boolean;
};

export type ProjectMedia =
  | ProjectImage
  | ProjectVideo
  | ProjectLinkPreview
  | ProjectIframe;

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
        type: "iframe",
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7483180730592927744?collapsed=1",
        title: "Embedded post",
        width: 504,
        height: 589,
        allowFullScreen: true,
      },
    ],
  },
  {
    slug: "project-two",
    title: "HubSpot",
    period: "Summer 2025",
    description:
      "My first internship experience, working on core CRM record page features used by teams every day. I independently planned and shipped end-to-end record associations, a workflow used more than 10M times daily. (gifs ripped off hubspot.com but that was one of the features i had full ownership of)",
    logo: {
      src: "/logos/hubspot.png",
      alt: "HubSpot",
      width: 962,
      height: 275,
    },
    media: [
      {
        src: "/projects/project-two/create-associations-record-page.gif",
        alt: "Create associations record page",
        width: 684,
        height: 824,
      },
      {
        src: "/projects/project-two/record-customization-association-card.gif",
        alt: "Record customization association card",
        width: 300,
        height: 640,
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
