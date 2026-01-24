import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "../../lib/motion";
import { cn } from "../../lib/cn";

type RevealStaggerElement = "div" | "section" | "ul" | "ol" | "dl";

interface RevealStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  repeat?: boolean;
  amount?: number;
  margin?: string;
  as?: RevealStaggerElement;
}

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  repeat = false,
  amount = 0.35,
  margin = "-10% 0px -10% 0px",
  as = "div",
}: RevealStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  const motionElements = {
    div: motion.div,
    section: motion.section,
    ul: motion.ul,
    ol: motion.ol,
    dl: motion.dl,
  };

  const MotionComponent = motionElements[as];

  if (prefersReducedMotion) {
    const StaticComponent = as;
    return (
      <StaticComponent className={cn("relative overflow-hidden", className)}>
        {children}
      </StaticComponent>
    );
  }

  const variants = staggerContainer(stagger, delayChildren);

  return (
    <MotionComponent
      className={cn("relative overflow-hidden", className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount, once: !repeat, margin }}
    >
      {children}
    </MotionComponent>
  );
}
