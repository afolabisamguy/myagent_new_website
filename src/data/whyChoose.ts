import {
  BadgeDollarSign,
  BadgeCheck,
  MessagesSquare,
  ShieldCheck,
  Clock,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type WhyChooseFeature = {
  title: string;
  description: string;
  badgeVariant: 'orange' | 'gray';
  icon: LucideIcon;
};

export const features: WhyChooseFeature[] = [
  {
    title: 'No Agent Commission',
    description: 'Save thousands in agent fees. Connect directly with landlords and keep your money.',
    badgeVariant: 'orange',
    icon: BadgeDollarSign,
  },
  {
    title: 'Verified Listings Only',
    description: 'Every property is verified by our team. No fake listings, no fraudulent landlords.',
    badgeVariant: 'gray',
    icon: BadgeCheck,
  },
  {
    title: 'Secure Communication',
    description: 'Chat safely with landlords through our platform with built-in call features.',
    badgeVariant: 'gray',
    icon: MessagesSquare,
  },
  {
    title: 'Payment Protection',
    description: 'Secure escrow system ensures your money is safe until you move in.',
    badgeVariant: 'orange',
    icon: ShieldCheck,
  },
  {
    title: 'Fast Support',
    description: 'Get help when you need it with our responsive customer support team.',
    badgeVariant: 'gray',
    icon: Clock,
  },
  {
    title: 'Community Verified',
    description: 'Real reviews from tenants and landlords help you make informed decisions.',
    badgeVariant: 'gray',
    icon: Users,
  },
];
