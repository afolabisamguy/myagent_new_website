import { Container } from '../../layout/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { FeatureGrid } from './FeatureGrid';
import { features } from '../../../data/whyChoose';

export function WhyChooseSection() {
  return (
    <Container>
      <SectionHeading
        id="why-choose-heading"
        title="Why Choose MyAgent?"
        subtitle="We're revolutionizing the rental experience in Nigeria with transparency, security, and trust"
        align="center"
      />
      <FeatureGrid features={features} />
    </Container>
  );
}
