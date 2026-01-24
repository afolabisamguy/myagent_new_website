import { type ReactNode } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import {
  fadeIn,
  fadeUp,
  scaleIn,
  slideLeft,
  slideRight,
  transitionEase,
} from "../../lib/motion";
import { cn } from "../../lib/cn";

type RevealVariant =
  | "fadeUp"
  | "fadeIn"
  | "scaleIn"
  | "slideLeft"
  | "slideRight";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  repeat?: boolean;
  amount?: number;
  margin?: string;
  transition?: Transition;
}

const variantMap = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
};

export function Reveal({
  children,
  variant = "fadeUp",
  delay,
  duration,
  className,
  repeat = false,
  amount = 0.35,
  margin = "-10% 0px -10% 0px",
  transition = transitionEase,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        {children}
      </div>
    );
  }

  const variants = variantMap[variant]({ delay, duration, transition });

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount, once: !repeat, margin }}
    >
      {children}
    </motion.div>
  );
}
