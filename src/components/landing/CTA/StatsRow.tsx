import { type CtaStat } from '../../../data/cta';
import { StatItem } from './StatItem';
import { RevealStagger } from '../../motion/RevealStagger';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerItem } from '../../../lib/motion';

interface StatsRowProps {
  stats: CtaStat[];
}

export function StatsRow({ stats }: StatsRowProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <RevealStagger
      as="dl"
      className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10"
    >
      {stats.map((stat, index) =>
        prefersReducedMotion ? (
          <div key={index}>
            <StatItem value={stat.value} label={stat.label} />
          </div>
        ) : (
          <motion.div key={index} variants={staggerItem}>
            <StatItem value={stat.value} label={stat.label} />
          </motion.div>
        )
      )}
    </RevealStagger>
  );
}
