import { type LucideIcon } from 'lucide-react';
import { IconBadge } from '../../ui/IconBadge';

interface StepItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badgeVariant: 'orange' | 'teal' | 'gray';
}

export function StepItem({ icon: Icon, title, description, badgeVariant }: StepItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 sm:mb-6">
        <IconBadge variant={badgeVariant} shape="circle" size="lg">
          <Icon className="w-full h-full" />
        </IconBadge>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm text-gray-600 sm:text-base max-w-xs">{description}</p>
    </div>
  );
}
