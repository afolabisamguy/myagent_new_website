import { Container } from '../../layout/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { ctaCopy, ctaStats } from '../../../data/cta';
import { StatsRow } from './StatsRow';

export function CtaSection() {
  return (
    <Container>
      <SectionHeading
        id="cta-title"
        title={ctaCopy.title}
        subtitle={ctaCopy.subtitle}
        align="center"
        className="mx-auto max-w-3xl"
      />
      <StatsRow stats={ctaStats} />
    </Container>
  );
}
