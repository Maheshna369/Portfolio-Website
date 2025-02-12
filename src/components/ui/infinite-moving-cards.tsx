"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  otherSkills,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  otherSkills: {
    src: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();

      // Ensure state updates after DOM changes
      setTimeout(() => setStart(true), 0);
    }
  }
  

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "40s"; // Default speed
      if (speed === "fast") duration = "20s";
      else if (speed === "slow") duration = "80s";

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-max z-20 h-full max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max h-full shrink-0 gap-4 py-4 flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
      >
        {otherSkills.map((skill) => (
          <img
            onContextMenu={(e) => e.preventDefault()}
            className=" bg-white flex justify-center items-center relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700"
            style={
              {
                //   background:
                // "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }
            }
            key={skill.name}
            src={skill.src}
            alt={skill.name}
          />
        ))}
      </ul>
    </div>
  );
};
