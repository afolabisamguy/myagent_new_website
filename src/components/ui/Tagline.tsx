import { cn } from '../../lib/cn';

interface TaglineProps {
  children: string;
  className?: string;
}

export function Tagline({ children, className }: TaglineProps) {
  return (
    <p className={cn('text-center text-lg font-semibold text-[#D89A16]', className)}>
      {children}
    </p>
  );
}
