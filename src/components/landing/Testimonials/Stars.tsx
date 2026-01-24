import { Star } from 'lucide-react';
import { cn } from '../../../lib/cn';

interface StarsProps {
  rating: number;
  className?: string;
}

const MAX_STARS = 5;

export function Stars({ rating, className }: StarsProps) {
  const safeRating = Math.max(0, Math.min(MAX_STARS, Math.round(rating)));

  return (
    <div className={cn('flex items-center gap-1', className)} aria-label={`${safeRating} out of ${MAX_STARS} stars`}>
      {Array.from({ length: MAX_STARS }).map((_, index) => {
        const isFilled = index < safeRating;

        return (
          <Star
            key={index}
            className={cn(
              'h-4 w-4',
              isFilled ? 'text-amber-400 fill-amber-400' : 'text-gray-200'
            )}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}
