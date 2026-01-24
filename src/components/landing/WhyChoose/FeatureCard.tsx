import { type LucideIcon } from 'lucide-react';
import { IconBadge } from '../../ui/IconBadge';
import { Card } from '../../ui/Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badgeVariant: 'orange' | 'gray';
}

export function FeatureCard({ icon: Icon, title, description, badgeVariant }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center text-center">
      <div className="mb-4 sm:mb-6">
        <IconBadge variant={badgeVariant} shape="square" size="md">
          <Icon className="w-full h-full" />
        </IconBadge>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm text-gray-600 sm:text-base">{description}</p>
    </Card>
  );
}
