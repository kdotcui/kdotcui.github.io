import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { SiteMarkSvg } from "@/lib/site-mark";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          background: "#ffffff",
        }}
      >
        <SiteMarkSvg size={160} />
        <div style={{ fontSize: 56, fontWeight: 600, color: "#000" }}>{site.name}</div>
      </div>
    ),
    { ...size },
  );
}
