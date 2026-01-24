import { type WhyChooseFeature } from '../../../data/whyChoose';
import { FeatureCard } from './FeatureCard';
import { RevealStagger } from '../../motion/RevealStagger';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerItem } from '../../../lib/motion';

interface FeatureGridProps {
  features: WhyChooseFeature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <RevealStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
      {features.map((feature, index) =>
        prefersReducedMotion ? (
          <div key={index}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badgeVariant={feature.badgeVariant}
            />
          </div>
        ) : (
          <motion.div key={index} variants={staggerItem}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badgeVariant={feature.badgeVariant}
            />
          </motion.div>
        )
      )}
    </RevealStagger>
  );
}
