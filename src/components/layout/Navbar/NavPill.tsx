import { type ReactNode } from 'react';
import { cn } from '../../../lib/cn';

interface NavPillProps {
  children: ReactNode;
  className?: string;
}

export function NavPill({ children, className }: NavPillProps) {
  return (
    <div
      className={cn(
        'rounded-full bg-white px-4 py-2 shadow-sm',
        className
      )}
    >
      {children}
    </div>
  );
}
