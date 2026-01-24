import { useMemo, useState } from 'react';
import { cn } from '../../../lib/cn';

type AvatarSize = 'sm' | 'md';

interface AvatarProps {
  src: string;
  alt: string;
  size?: AvatarSize;
  className?: string;
}

const sizeClasses: Record<AvatarSize, { image: string; text: string }> = {
  sm: { image: 'h-9 w-9', text: 'text-xs' },
  md: { image: 'h-11 w-11', text: 'text-sm' },
};

function getInitials(text: string) {
  const parts = text.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return '';
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export function Avatar({ src, alt, size = 'sm', className }: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const initials = useMemo(() => getInitials(alt), [alt]);
  const classes = sizeClasses[size];

  if (!src || hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-full bg-gray-100 text-gray-600 font-semibold',
          classes.image,
          classes.text,
          className
        )}
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn('rounded-full object-cover', classes.image, className)}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
