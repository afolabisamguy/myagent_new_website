import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Reveal } from "./Reveal";

type MotionSectionVariant = "fadeUp" | "fadeIn";
type MotionSectionElement = "section" | "div";

interface MotionSectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: MotionSectionVariant;
  as?: MotionSectionElement;
  repeat?: boolean;
}

export function MotionSection({
  id,
  children,
  className,
  variant = "fadeUp",
  as = "section",
  repeat = false,
  ...rest
}: MotionSectionProps) {
  const Component = as;

  return (
    <Component
      id={id}
      className={cn(
        "scroll-mt-20 md:scroll-mt-28 relative overflow-hidden",
        className,
      )}
      {...rest}
    >
      <Reveal variant={variant} repeat={repeat}>
        {children}
      </Reveal>
    </Component>
  );
}
