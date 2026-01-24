import { Tagline } from '../../ui/Tagline';
import { cn } from '../../../lib/cn';
import { Reveal } from '../../motion/Reveal';
import { transitionSpring } from '../../../lib/motion';

interface HeroCopyProps {
  headline: string;
  subtitle: string;
  tagline: string;
  className?: string;
}

export function HeroCopy({ headline, subtitle, tagline, className }: HeroCopyProps) {
  // Split headline to highlight "MyAgent"
  const parts = headline.split('MyAgent');
  
  return (
    <div className={cn('flex flex-col items-center gap-6 text-center', className)}>
      <Reveal variant="fadeUp" transition={transitionSpring}>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          {parts.map((part, index) => (
            <span key={index}>
              {part}
              {index < parts.length - 1 && <span className="text-[#D89A16]">MyAgent</span>}
            </span>
          ))}
        </h1>
      </Reveal>

      <Reveal variant="fadeUp" delay={0.1} transition={transitionSpring}>
        <p className="max-w-2xl text-lg text-gray-600 sm:text-xl">
          {subtitle}
        </p>
      </Reveal>

      <Reveal variant="fadeUp" delay={0.2} transition={transitionSpring}>
        <Tagline>{tagline}</Tagline>
      </Reveal>
    </div>
  );
}
