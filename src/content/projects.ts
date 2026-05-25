export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  tags: string[];
  description: string;
  images: ProjectImage[];
};

/** Replace images under /public/projects/<slug>/ or edit src paths here. */
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    period: "Spring 2025",
    tags: ["Identity", "Web"],
    description:
      "A short description of the work. Swap this copy and add your own images in public/projects/project-one/.",
    images: [
      {
        src: "/projects/project-one/01.svg",
        alt: "Project One — cover",
        width: 900,
        height: 1200,
      },
      {
        src: "/projects/project-one/02.svg",
        alt: "Project One — spread",
        width: 1200,
        height: 900,
      },
      {
        src: "/projects/project-one/03.svg",
        alt: "Project One — detail",
        width: 900,
        height: 1200,
      },
    ],
  },
  {
    slug: "project-two",
    title: "Project Two",
    period: "Summer 2025",
    tags: ["Editorial", "Art Direction"],
    description:
      "Another row on the homepage with a horizontal image strip, inspired by open portfolio layouts.",
    images: [
      {
        src: "/projects/project-two/01.svg",
        alt: "Project Two — frame 1",
        width: 1400,
        height: 900,
      },
      {
        src: "/projects/project-two/02.svg",
        alt: "Project Two — frame 2",
        width: 1400,
        height: 900,
      },
    ],
  },
  {
    slug: "archive",
    title: "Archive",
    period: "Ongoing",
    tags: ["Mixed"],
    description: "Smaller experiments and in-progress work.",
    images: [
      {
        src: "/projects/archive/01.svg",
        alt: "Archive — sample",
        width: 800,
        height: 1000,
      },
    ],
  },
];
