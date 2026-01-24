import { Container } from '../../layout/Container';
import { finalCtaCopy } from '../../../data/finalCta';
import { FinalCtaActions } from './FinalCtaActions';
import { Reveal } from '../../motion/Reveal';

export function FinalCtaSection() {
  return (
    <Container>
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal variant="fadeUp">
          <h2 id="final-cta-title" className="text-3xl font-semibold sm:text-4xl">
            {finalCtaCopy.title}
          </h2>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.1}>
          <p className="mt-4 text-base text-white/90 sm:text-lg">{finalCtaCopy.subtitle}</p>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.2}>
          <FinalCtaActions className="mt-8" />
        </Reveal>
        <Reveal variant="fadeIn" delay={0.3}>
          <p className="mt-4 text-sm text-white/80">{finalCtaCopy.caption}</p>
        </Reveal>
      </div>
    </Container>
  );
}
