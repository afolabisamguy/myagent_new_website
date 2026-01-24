import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../../ui/Button';
import { cn } from '../../../lib/cn';

interface FinalCtaActionsProps {
  className?: string;
}

export function FinalCtaActions({ className }: FinalCtaActionsProps) {
  return (
    <div className={cn('flex flex-col items-center gap-4 sm:flex-row', className)}>
      <Button variant="white" size="md" className="min-w-[170px]">
        <Download className="h-4 w-4" aria-hidden="true" />
        Download App
      </Button>
      <Button variant="outline-white" size="md" className="min-w-[170px]">
        Join Waitlist
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  );
}
