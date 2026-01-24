import { Heart, Target, Zap, type LucideIcon } from 'lucide-react';

export type AboutItemData = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const aboutCopy = {
  title: 'About MyAgent',
  description:
    "We started MyAgent because we experienced firsthand the frustrations of Nigeria’s rental market. High agent fees, fake listings, and stressful negotiations shouldn’t be the norm.",
};

export const aboutItems: AboutItemData[] = [
  {
    title: 'Our Mission',
    description:
      'To eliminate the stress and hidden costs of finding rental accommodation in Nigeria by connecting tenants directly with verified landlords.',
    icon: Target,
  },
  {
    title: 'Our Values',
    description:
      'Transparency, trust, and fairness guide everything we do. We believe everyone deserves access to honest rental opportunities.',
    icon: Heart,
  },
  {
    title: 'Our Impact',
    description:
      'Over 50,000 successful rentals facilitated, ₦2.5 billion saved in agent fees, and thousands of satisfied users across Nigeria.',
    icon: Zap,
  },
];
