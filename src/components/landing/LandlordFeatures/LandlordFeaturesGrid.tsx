import { motion, useReducedMotion } from 'framer-motion';
import { type LandlordFeature } from '../../../data/landlordFeatures';
import { RevealStagger } from '../../motion/RevealStagger';
import { staggerItem } from '../../../lib/motion';
import { LandlordFeatureCard } from './LandlordFeatureCard';

interface LandlordFeaturesGridProps {
  features: LandlordFeature[];
}

export function LandlordFeaturesGrid({ features }: LandlordFeaturesGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <RevealStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
      {features.map((feature, index) =>
        prefersReducedMotion ? (
          <div key={index} className="h-full">
            <LandlordFeatureCard {...feature} />
          </div>
        ) : (
          <motion.div key={index} variants={staggerItem} className="h-full">
            <LandlordFeatureCard {...feature} />
          </motion.div>
        )
      )}
    </RevealStagger>
  );
}
