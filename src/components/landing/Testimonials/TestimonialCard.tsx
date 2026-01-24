import { Quote } from 'lucide-react';
import { Card } from '../../ui/Card';
import { type Testimonial } from '../../../data/testimonials';
import { Avatar } from './Avatar';
import { Stars } from './Stars';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <Stars rating={5} />
        <Quote className="h-8 w-8 text-gray-300" aria-hidden="true" />
      </div>
      <figure className="flex flex-1 flex-col">
        <blockquote className="text-gray-600 italic leading-relaxed">
          {testimonial.quote}
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <Avatar src={testimonial.avatarSrc} alt={testimonial.name} />
          <div>
            <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-xs text-gray-500">{testimonial.meta}</p>
          </div>
        </figcaption>
      </figure>
    </Card>
  );
}
