import type { ProjectMedia } from "@/content/projects";
import { ProjectCarouselCard } from "./ProjectCarouselCard";

type ImageStripProps = {
  media: ProjectMedia[];
  title: string;
  priorityFirstImage?: boolean;
};

export function ImageStrip({
  media,
  title,
  priorityFirstImage = false,
}: ImageStripProps) {
  return (
    <div
      className="image-strip"
      role="region"
      aria-label={`Scrollable project media for ${title}`}
    >
      <div className="image-strip__track" tabIndex={0}>
        {media.map((item, mediaIndex) => (
          <ProjectCarouselCard
            key={getProjectMediaKey(item)}
            media={item}
            priority={priorityFirstImage && mediaIndex === 0}
          />
        ))}
      </div>
    </div>
  );
}

function getProjectMediaKey(media: ProjectMedia) {
  if (media.type === "link") {
    return media.href;
  }

  return media.src;
}
