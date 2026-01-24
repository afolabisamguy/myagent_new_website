import { type LucideIcon } from 'lucide-react';
import { Card } from '../../ui/Card';
import { IconBadge } from '../../ui/IconBadge';

interface LandlordFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function LandlordFeatureCard({ title, description, icon: Icon }: LandlordFeatureCardProps) {
  return (
    <Card className="flex h-full flex-col items-center text-center shadow-sm">
      <IconBadge variant="teal" shape="circle" size="md">
        <Icon className="h-full w-full" aria-hidden="true" />
      </IconBadge>
      <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">{description}</p>
    </Card>
  );
}
