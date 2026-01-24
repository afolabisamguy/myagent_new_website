import { UserPlus, Search, MessageCircle, CreditCard, type LucideIcon } from 'lucide-react';

export type HowItWorksStep = {
  title: string;
  description: string;
  badgeVariant: 'orange' | 'teal' | 'gray';
  icon: LucideIcon;
};

export const steps: HowItWorksStep[] = [
  {
    title: 'Sign Up',
    description: 'Create your account in minutes with basic information and get verified instantly.',
    badgeVariant: 'orange',
    icon: UserPlus,
  },
  {
    title: 'Browse Verified Listings',
    description: 'Explore thousands of verified properties with real photos and accurate details.',
    badgeVariant: 'gray',
    icon: Search,
  },
  {
    title: 'Chat & Schedule Visit',
    description: 'Connect directly with landlords through secure chat and schedule property visits.',
    badgeVariant: 'gray',
    icon: MessageCircle,
  },
  {
    title: 'Pay with Confidence',
    description: 'Make secure payments with our escrow protection and transparent pricing.',
    badgeVariant: 'teal',
    icon: CreditCard,
  },
];
