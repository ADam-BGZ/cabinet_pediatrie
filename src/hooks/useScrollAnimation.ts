"use client";

import { useEffect, useState, useCallback } from "react";

type AnimationDirection = "left" | "right" | "down" | "up";

export function useScrollAnimation(direction: AnimationDirection = "up") {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useCallback((node: HTMLDivElement | null) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  const animationClass = isVisible
    ? {
        left: "animate-fade-in-left",
        right: "animate-fade-in-right",
        down: "animate-fade-in-down",
        up: "animate-fade-in-up",
      }[direction]
    : "scroll-hidden";

  return { refCallback: ref, animationClass };
}
