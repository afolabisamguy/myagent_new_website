import { type LucideIcon } from 'lucide-react';
import { IconBadge } from '../../ui/IconBadge';
import { cn } from '../../../lib/cn';

interface AboutItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function AboutItem({ title, description, icon: Icon, className }: AboutItemProps) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      <IconBadge variant="orange" shape="circle" size="lg" className="mb-6">
        <Icon className="h-full w-full" aria-hidden="true" />
      </IconBadge>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}
