import { Mail, Phone } from 'lucide-react';
import { footerMeta } from '../../../data/footer';
import { cn } from '../../../lib/cn';

interface FooterBottomProps {
  className?: string;
}

export function FooterBottom({ className }: FooterBottomProps) {
  return (
    <div className={cn('flex flex-col gap-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-between', className)}>
      <p>&copy; {footerMeta.year} MyAgent. All rights reserved.</p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <a
          href={`mailto:${footerMeta.email}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-[#D89A16]"
        >
          <Mail className="h-4 w-4 text-gray-500" aria-hidden="true" />
          {footerMeta.email}
        </a>
        <a
          href={`tel:${footerMeta.phone.replace(/\s+/g, '')}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-[#D89A16]"
        >
          <Phone className="h-4 w-4 text-gray-500" aria-hidden="true" />
          {footerMeta.phone}
        </a>
      </div>
    </div>
  );
}
