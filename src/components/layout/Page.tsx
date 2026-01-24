import { type ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface PageProps {
  children: ReactNode;
  className?: string;
}

export function Page({ children, className }: PageProps) {
  return (
    <div className={cn('min-h-screen bg-[#f5f5f3]', className)}>
      {children}
    </div>
  );
}
