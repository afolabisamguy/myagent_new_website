import { type LucideIcon, Users, Shield, BarChart3, Clock, BadgeCheck, LayoutDashboard } from 'lucide-react';

export type LandlordFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const landlordFeatures: LandlordFeature[] = [
  {
    title: 'Quality Tenants',
    description: 'Connect with verified tenants who have gone through our screening process.',
    icon: Users,
  },
  {
    title: 'Fraud Protection',
    description: 'Our verification system protects you from fraudulent applications and fake documents.',
    icon: Shield,
  },
  {
    title: 'Market Insights',
    description: 'Get real-time data on rental prices and market trends in your area.',
    icon: BarChart3,
  },
  {
    title: 'Faster Rentals',
    description: 'List your property and connect with interested tenants within days, not months.',
    icon: Clock,
  },
  {
    title: 'Easy Management',
    description: 'Simple tools to manage applications, communications, and rental agreements.',
    icon: BadgeCheck,
  },
  {
    title: 'Portfolio Growth',
    description: 'Scale your rental business with our landlord dashboard and analytics.',
    icon: LayoutDashboard,
  },
];
