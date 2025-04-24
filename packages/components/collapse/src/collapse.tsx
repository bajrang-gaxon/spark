"use client";
import React, { useRef, type ComponentProps } from "react";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import { twClassNames } from "@spark/utils";

export interface CollapseProps extends ComponentProps<typeof m.div> {
  open: boolean;
  duration?: number;
  easing?: string;
  className?: string;
  children: React.ReactNode;
}

export const Collapse = ({
  open,
  duration = 0.3,
  easing = "easeInOut",
  className,
  children,
  ...rest
}: CollapseProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const animation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1, transition: { duration, ease: easing } },
    exit: { height: 0, opacity: 0, transition: { duration, ease: easing } },
  };

  const classes = twClassNames("overflow-hidden", className);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            {...rest}
            ref={ref}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation}
            className={classes}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default Collapse;
