import { type NavItem } from '../../../data/nav';
import { cn } from '../../../lib/cn';

interface NavLinksProps {
  items: NavItem[];
  activeHref?: string;
  className?: string;
}

export function NavLinks({ items, activeHref, className }: NavLinksProps) {
  return (
    <nav className={cn('flex items-center gap-1', className)}>
      {items.map((item) => {
        const isActive = activeHref === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'text-[#D89A16]'
                : 'text-gray-600 hover:text-gray-900'
            )}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
