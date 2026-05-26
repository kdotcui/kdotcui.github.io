import type { Metadata } from "next";
import { TimelineVideoPage } from "@/components/TimelineVideoPage";

export const metadata: Metadata = {
  title: "timeline",
};

export default function TimelinePage() {
  return <TimelineVideoPage />;
}
