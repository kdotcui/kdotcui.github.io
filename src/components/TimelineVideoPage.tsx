"use client";

import Image from "next/image";
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

    if (!video || (hasStarted && !video.paused)) return;

    if (!hasStarted) {
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1;
    }

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
      onClick={startExperience}
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
        aria-label="Welcome to keaven. Click to experience."
        aria-hidden={hasStarted}
        tabIndex={hasStarted ? -1 : 0}
      >
        <span className="timeline-page__star timeline-page__star--top-left" />
        <span className="timeline-page__star timeline-page__star--top-right" />
        <span className="timeline-page__star timeline-page__star--bottom-left" />
        <span className="timeline-page__star timeline-page__star--bottom-right" />
        <span className="timeline-page__intro-mark" aria-hidden="true">
          <span className="timeline-page__intro-copy">welcome to keaven.</span>
          <Image
            className="timeline-page__intro-icon"
            src="/icon.svg"
            alt=""
            width={96}
            height={96}
            decoding="async"
          />
          <span className="timeline-page__intro-copy">click to experience</span>
        </span>
      </button>
    </main>
  );
}
