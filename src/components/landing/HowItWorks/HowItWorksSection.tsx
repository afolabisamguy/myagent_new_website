import { Container } from '../../layout/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { StepList } from './StepList';
import { steps } from '../../../data/howItWorks';

export function HowItWorksSection() {
  return (
    <Container>
      <SectionHeading
        id="how-it-works-heading"
        title="How It Works"
        subtitle="Get connected with your perfect rental in just 4 simple steps"
        align="center"
      />
      <StepList steps={steps} />
    </Container>
  );
}
