import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

type NavLink = {
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

function IconLinkedIn() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.55c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconFood() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2" />
      <path d="M21 15a5 5 0 0 1-5 5h-1a2 2 0 0 1-2-2v-7" />
    </svg>
  );
}

function IconMusic() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function IconBlog() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

const socialLinks: NavLink[] = [
  {
    label: "linkedin",
    href: site.links.linkedin,
    icon: <IconLinkedIn />,
    external: true,
  },
  {
    label: "instagram",
    href: site.links.instagram,
    icon: <IconInstagram />,
    external: true,
  },
  { label: "github", href: site.links.github, icon: <IconGitHub />, external: true },
];

const sectionLinks: NavLink[] = [
  { label: "food", href: "/food", icon: <IconFood /> },
  { label: "music", href: "/music", icon: <IconMusic /> },
  { label: "blog", href: "/blog", icon: <IconBlog /> },
];

export function SiteSidebar() {
  return (
    <aside className="site-sidebar">
      <div className="site-sidebar__inner">
        <Link href="/" className="site-sidebar__name">
          {site.name}
        </Link>
        <p className="site-sidebar__tagline">
          is building @{" "}
          <a
            href={site.work.url}
            className="site-sidebar__tagline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.work.company}
          </a>
          
        </p>
        <div className="site-sidebar__nav-grid">
          <nav className="site-sidebar__nav" aria-label="Contact and social">
            {socialLinks.map(({ label, href, icon, external }) => (
              <a
                key={label}
                href={href}
                className="site-sidebar__link"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="site-sidebar__link-icon" aria-hidden>
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </nav>
          <nav
            className="site-sidebar__nav site-sidebar__nav--sections"
            aria-label="Sections"
          >
            {sectionLinks.map(({ label, href, icon }) => (
              <Link key={label} href={href} className="site-sidebar__link">
                <span className="site-sidebar__link-icon" aria-hidden>
                  {icon}
                </span>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </aside>
  );
}
