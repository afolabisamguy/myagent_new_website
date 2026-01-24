import { Container } from '../../layout/Container';
import { HeroQuestions } from './HeroQuestions';
import { HeroCopy } from './HeroCopy';
import { HeroCTAs } from './HeroCTAs';
import { PhoneMockups } from '../Mockups/PhoneMockups';
import {
  heroQuestions,
  heroHeadline,
  heroSubtitle,
  heroTagline,
  heroCaption,
} from '../../../data/hero';
import { Reveal } from '../../motion/Reveal';
import { transitionSpring } from '../../../lib/motion';

export function HeroSection() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
        {/* Left Phone Mockup - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:col-span-3 lg:block">
          <div className="relative overflow-hidden">
            <Reveal variant="slideLeft" transition={transitionSpring}>
              <PhoneMockups position="left" />
            </Reveal>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center gap-8 lg:col-span-6">
          <Reveal variant="fadeIn" transition={transitionSpring}>
            <HeroQuestions questions={heroQuestions} />
          </Reveal>
          <HeroCopy
            headline={heroHeadline}
            subtitle={heroSubtitle}
            tagline={heroTagline}
          />
          <HeroCTAs caption={heroCaption} />
        </div>

        {/* Right Phone Mockup - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:col-span-3 lg:block">
          <div className="relative overflow-hidden">
            <Reveal variant="slideRight" transition={transitionSpring}>
              <PhoneMockups position="right" />
            </Reveal>
          </div>
        </div>

        {/* Phone Mockups for Mobile - Below content */}
        <div className="flex justify-center gap-4 sm:gap-8 lg:hidden">
          <div className="relative overflow-hidden">
            <Reveal variant="slideLeft" transition={transitionSpring}>
              <PhoneMockups position="left" />
            </Reveal>
          </div>
          <div className="relative overflow-hidden">
            <Reveal variant="slideRight" transition={transitionSpring} delay={0.1}>
              <PhoneMockups position="right" />
            </Reveal>
          </div>
        </div>
      </div>
    </Container>
  );
}
