import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
  className?: string;
}

export function SectionHeading({ id, title, subtitle, align = 'center', className }: SectionHeadingProps) {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-8 sm:mb-12', alignClasses[align], className)}>
      <h2 id={id} className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-600 sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
