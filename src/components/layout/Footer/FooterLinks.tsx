import { cn } from '../../../lib/cn';

type FooterLinkItem = {
  label: string;
  href: string;
};

interface FooterLinksProps {
  title: string;
  links: FooterLinkItem[];
  className?: string;
}

export function FooterLinks({ title, links, className }: FooterLinksProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">{title}</h3>
      <ul className="space-y-3 text-sm text-gray-600">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="transition-colors hover:text-[#D89A16]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
