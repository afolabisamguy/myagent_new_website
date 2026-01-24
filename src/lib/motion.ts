import { type Transition, type Variants } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export const transitionEase: Transition = {
  duration: 0.6,
  ease: EASE_OUT,
};

export const transitionSpring: Transition = {
  type: "spring",
  stiffness: 140,
  damping: 22,
  mass: 0.9,
};

type VariantOptions = {
  delay?: number;
  duration?: number;
  transition?: Transition;
};

function buildTransition(options?: VariantOptions) {
  const base = options?.transition ?? transitionEase;
  const transition: Transition = { ...base };

  if (typeof options?.delay === "number") {
    transition.delay = options.delay;
  }
  if (typeof options?.duration === "number") {
    transition.duration = options.duration;
  }

  return transition;
}

export function fadeUp(options?: VariantOptions): Variants {
  return {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: buildTransition(options),
    },
  };
}

export function fadeIn(options?: VariantOptions): Variants {
  return {
    hidden: { opacity: 0, filter: "blur(6px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: buildTransition(options),
    },
  };
}

export function scaleIn(options?: VariantOptions): Variants {
  return {
    hidden: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: buildTransition(options),
    },
  };
}

export function slideLeft(options?: VariantOptions): Variants {
  return {
    hidden: { opacity: 0, x: -24, filter: "blur(6px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: buildTransition(options),
    },
  };
}

export function slideRight(options?: VariantOptions): Variants {
  return {
    hidden: { opacity: 0, x: 24, filter: "blur(6px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: buildTransition(options),
    },
  };
}

export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transitionEase,
  },
};
