import { type AboutItemData } from '../../../data/about';
import { AboutItem } from './AboutItem';
import { RevealStagger } from '../../motion/RevealStagger';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerItem } from '../../../lib/motion';

interface AboutItemsProps {
  items: AboutItemData[];
}

export function AboutItems({ items }: AboutItemsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <RevealStagger className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) =>
        prefersReducedMotion ? (
          <div key={index}>
            <AboutItem title={item.title} description={item.description} icon={item.icon} />
          </div>
        ) : (
          <motion.div key={index} variants={staggerItem}>
            <AboutItem title={item.title} description={item.description} icon={item.icon} />
          </motion.div>
        )
      )}
    </RevealStagger>
  );
}
