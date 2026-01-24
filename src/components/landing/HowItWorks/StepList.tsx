import { type HowItWorksStep } from '../../../data/howItWorks';
import { StepItem } from './StepItem';
import { RevealStagger } from '../../motion/RevealStagger';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerItem } from '../../../lib/motion';

interface StepListProps {
  steps: HowItWorksStep[];
}

export function StepList({ steps }: StepListProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <RevealStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
      {steps.map((step, index) =>
        prefersReducedMotion ? (
          <div key={index}>
            <StepItem
              icon={step.icon}
              title={step.title}
              description={step.description}
              badgeVariant={step.badgeVariant}
            />
          </div>
        ) : (
          <motion.div key={index} variants={staggerItem}>
            <StepItem
              icon={step.icon}
              title={step.title}
              description={step.description}
              badgeVariant={step.badgeVariant}
            />
          </motion.div>
        )
      )}
    </RevealStagger>
  );
}
