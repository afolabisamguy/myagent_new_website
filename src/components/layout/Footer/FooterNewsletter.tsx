import { Button } from '../../ui/Button';
import { cn } from '../../../lib/cn';

interface FooterNewsletterProps {
  className?: string;
}

export function FooterNewsletter({ className }: FooterNewsletterProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
        Stay Updated
      </h3>
      <p className="text-sm text-gray-600">
        Get the latest updates on new features and listings.
      </p>
      <form className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          placeholder="Your email"
          className="h-10 w-full rounded-full border border-gray-200 px-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#D89A16] focus:outline-none focus:ring-2 focus:ring-[#D89A16]/30"
        />
        <Button variant="primary" size="sm" className="h-10 px-5">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
