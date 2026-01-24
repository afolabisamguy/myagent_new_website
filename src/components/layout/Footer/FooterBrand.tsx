import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Brand } from '../Navbar/Brand';
import { footerMeta } from '../../../data/footer';
import { cn } from '../../../lib/cn';

interface FooterBrandProps {
  className?: string;
}

const socialLinks = [
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Twitter', icon: Twitter, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
];

export function FooterBrand({ className }: FooterBrandProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <Brand />
      <p className="text-sm text-gray-600 max-w-xs">{footerMeta.description}</p>
      <div className="flex items-center gap-3">
        {socialLinks.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-[#D89A16] hover:text-[#D89A16]"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
