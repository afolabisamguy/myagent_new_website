import { type ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'white' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors',
        {
          'bg-[#D89A16] text-white hover:bg-[#C08914]': variant === 'primary',
          'border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-50':
            variant === 'outline',
          'bg-transparent text-gray-600 hover:bg-gray-100': variant === 'ghost',
          'bg-white text-gray-900 hover:bg-gray-100': variant === 'white',
          'border-2 border-white bg-transparent text-white hover:bg-white/10':
            variant === 'outline-white',
          'h-9 px-4 text-sm': size === 'sm',
          'h-11 px-6 text-base': size === 'md',
          'h-14 px-8 text-lg': size === 'lg',
        },
        className
      )}
    >
      {children}
    </button>
  );
}
