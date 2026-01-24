import { Button } from '../../ui/Button';
import { Download, ArrowRight } from 'lucide-react';
import { cn } from '../../../lib/cn';
import { Reveal } from '../../motion/Reveal';
import { transitionSpring } from '../../../lib/motion';

interface HeroCTAsProps {
  caption?: string;
  className?: string;
}

export function HeroCTAs({ caption, className }: HeroCTAsProps) {
  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Reveal variant="fadeUp" transition={transitionSpring}>
          <Button variant="primary" size="lg">
            <Download className="h-5 w-5" />
            <span>Download App</span>
          </Button>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.12} transition={transitionSpring}>
          <Button variant="outline" size="lg">
            <span>Join Waitlist</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Reveal>
      </div>
      
      {caption && (
        <Reveal variant="fadeIn" delay={0.18} transition={transitionSpring}>
          <p className="text-sm text-gray-500">{caption}</p>
        </Reveal>
      )}
    </div>
  );
}
