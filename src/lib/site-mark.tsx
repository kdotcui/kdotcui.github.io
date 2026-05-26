type SiteMarkSvgProps = {
  size?: number;
  fill?: string;
};

/** Hexagonal cluster mark used for favicons and social preview images. */
export function SiteMarkSvg({ size = 32, fill = "#000" }: SiteMarkSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="10.25" r="5.25" fill={fill} />
      <circle cx="20.55" cy="12.88" r="5.25" fill={fill} />
      <circle cx="20.55" cy="19.12" r="5.25" fill={fill} />
      <circle cx="16" cy="21.75" r="5.25" fill={fill} />
      <circle cx="11.45" cy="19.12" r="5.25" fill={fill} />
      <circle cx="11.45" cy="12.88" r="5.25" fill={fill} />
    </svg>
  );
}
