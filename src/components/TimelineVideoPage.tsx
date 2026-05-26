"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function TimelineVideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [showMeLink, setShowMeLink] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const timeoutId = window.setTimeout(() => {
      setShowMeLink(true);
    }, 10000);

    return () => window.clearTimeout(timeoutId);
  }, [hasStarted]);

  async function startExperience() {
    const video = videoRef.current;

    if (!video || hasStarted) return;

    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
      setHasStarted(true);
    } catch {
      video.muted = true;
    }
  }

  return (
    <main
      className={`timeline-page${hasStarted ? " is-started" : ""}`}
      aria-label="Timeline"
    >
      <video
        ref={videoRef}
        className="timeline-page__video"
        src="/videos/timeline-may24.mov"
        muted={!hasStarted}
        loop
        playsInline
        preload="auto"
      />
      <h1 className="timeline-page__title">ear + eye</h1>
      <Link
        href="/me"
        className={`timeline-page__me-link${showMeLink ? " is-visible" : ""}`}
      >
        kevin→
      </Link>
      <button
        type="button"
        className="timeline-page__intro"
        onClick={startExperience}
        aria-label="Welcome to keaven. Click to experience."
        aria-hidden={hasStarted}
        tabIndex={hasStarted ? -1 : 0}
      >
        <span className="timeline-page__star timeline-page__star--top-left" />
        <span className="timeline-page__star timeline-page__star--top-right" />
        <span className="timeline-page__star timeline-page__star--bottom-left" />
        <span className="timeline-page__star timeline-page__star--bottom-right" />
        <p className="timeline-page__intro-copy">
          welcome to keaven.
          <br />
          click to experience
        </p>
        <p className="timeline-page__disclaimer">horizontal mode recommended</p>
      </button>
    </main>
  );
}
