"use client";
import React, { useEffect, useRef, useState, Children } from "react";
import { m, LazyMotion, domAnimation, useMotionValue, animate } from "framer-motion";
import { twClassNames } from "@spark/utils";

export interface CarouselProps {
  children: React.ReactNode;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  showArrows?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export const Carousel = ({
  children,
  autoplay = false,
  autoplayDelay = 3000,
  loop = false,
  showArrows = true,
  showIndicators = true,
  className,
}: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const slides = Children.toArray(children);
  const total = slides.length;

  const calculateX = () => -index * (containerRef.current?.offsetWidth || 0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1 >= total ? (loop ? 0 : prev) : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 < 0 ? (loop ? total - 1 : 0) : prev - 1));
  };

  useEffect(() => {
    const controls = animate(x, calculateX());
    return controls.stop;
  }, [index]);

  useEffect(() => {
    const resizeHandler = () => animate(x, calculateX());
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay]);

  return (
    <div className={twClassNames("relative overflow-hidden", className)}>
      <div ref={containerRef} className="flex w-full">
        {slides.map((child, i) => (
          <LazyMotion key={i} features={domAnimation}>
            <m.div className="min-w-full shrink-0" style={{ x }} transition={{ duration: 0.5 }}>
              {child}
            </m.div>
          </LazyMotion>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full text-white"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full text-white"
          >
            ›
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              className={twClassNames(
                "h-2 w-2 rounded-full",
                i === index ? "bg-white" : "bg-white/50",
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
