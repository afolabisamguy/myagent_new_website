import { type Testimonial } from '../../../data/testimonials';
import { TestimonialCard } from './TestimonialCard';
import { RevealStagger } from '../../motion/RevealStagger';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerItem } from '../../../lib/motion';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <RevealStagger className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) =>
        prefersReducedMotion ? (
          <div key={index}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ) : (
          <motion.div key={index} variants={staggerItem}>
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        )
      )}
    </RevealStagger>
  );
}
