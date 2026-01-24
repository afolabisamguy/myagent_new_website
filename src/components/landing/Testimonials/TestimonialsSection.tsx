import { Container } from '../../layout/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { testimonials } from '../../../data/testimonials';
import { TestimonialGrid } from './TestimonialGrid';

export function TestimonialsSection() {
  return (
    <Container>
      <SectionHeading
        id="testimonials-title"
        title="What Our Users Say"
        subtitle="Join thousands of satisfied tenants and landlords across Nigeria"
        align="center"
      />
      <TestimonialGrid testimonials={testimonials} />
    </Container>
  );
}
