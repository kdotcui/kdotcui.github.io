import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

type ImageStripProps = {
  images: ProjectImage[];
  title: string;
  priorityFirstImage?: boolean;
};

export function ImageStrip({
  images,
  title,
  priorityFirstImage = false,
}: ImageStripProps) {
  return (
    <div
      className="image-strip"
      role="region"
      aria-label={`Scrollable image gallery for ${title}`}
    >
      <div className="image-strip__track" tabIndex={0}>
        {images.map((image, imageIndex) => (
          <figure key={image.src} className="image-strip__frame">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="image-strip__img"
              sizes="(max-width: 900px) 85vw, 42vw"
              {...(priorityFirstImage && imageIndex === 0
                ? { priority: true }
                : {})}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
