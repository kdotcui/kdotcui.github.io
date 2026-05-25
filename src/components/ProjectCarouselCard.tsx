import Image from "next/image";
import type { CSSProperties } from "react";
import type { ProjectMedia } from "@/content/projects";

type ProjectCarouselCardProps = {
  media: ProjectMedia;
  priority?: boolean;
};

type ProjectCarouselCardStyle = CSSProperties & {
  "--project-card-width"?: string;
};

export function ProjectCarouselCard({
  media,
  priority = false,
}: ProjectCarouselCardProps) {
  const style: ProjectCarouselCardStyle | undefined = media.cardWidth
    ? { "--project-card-width": media.cardWidth }
    : undefined;
  const fixedWidthClass = media.cardWidth
    ? " project-carousel-card--fixed-width"
    : "";
  const mediaTypeClass = ` project-carousel-card--${media.type ?? "image"}`;

  return (
    <figure
      className={`project-carousel-card${mediaTypeClass}${fixedWidthClass}`}
      style={style}
    >
      {renderProjectMedia(media, priority)}
      {media.caption ? (
        <figcaption className="project-carousel-card__caption">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function renderProjectMedia(media: ProjectMedia, priority: boolean) {
  if (media.type === "video") {
    return (
      <video
        className="project-carousel-card__media project-carousel-card__video"
        src={media.src}
        title={media.title}
        poster={media.poster}
        width={media.width}
        height={media.height}
        controls={media.controls ?? true}
        autoPlay={media.autoPlay}
        loop={media.loop}
        muted={media.muted}
        playsInline={media.playsInline ?? true}
      />
    );
  }

  if (media.type === "link") {
    return (
      <a
        className="project-carousel-card__link"
        href={media.href}
        target="_blank"
        rel="noreferrer"
      >
        {media.image ? (
          <Image
            src={media.image.src}
            alt={media.image.alt}
            width={media.image.width}
            height={media.image.height}
            className="project-carousel-card__link-image"
            sizes="(max-width: 900px) 80vw, 28vw"
          />
        ) : null}
        <span className="project-carousel-card__link-body">
          {media.eyebrow ? (
            <span className="project-carousel-card__link-eyebrow">
              {media.eyebrow}
            </span>
          ) : null}
          <span className="project-carousel-card__link-title">
            {media.title}
          </span>
          {media.description ? (
            <span className="project-carousel-card__link-description">
              {media.description}
            </span>
          ) : null}
          <span className="project-carousel-card__link-url">{media.href}</span>
        </span>
      </a>
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      className="project-carousel-card__media project-carousel-card__image"
      sizes="(max-width: 900px) 85vw, 42vw"
      {...(priority ? { priority: true } : {})}
    />
  );
}
