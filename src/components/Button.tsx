import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  showArrow = true,
  className = '',
  target,
  rel,
  type = 'button',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs sm:text-[13px]',
    lg: 'px-8 py-3.5 text-[13px] sm:text-sm',
  };

  const variantClasses = {
    primary:
      'bg-[#3F7D68] text-[#FFFFFF] border border-[#3F7D68] hover:bg-[#2F6150] hover:border-[#2F6150]',
    secondary:
      'bg-[#EDE8DC] text-[#17211B] border border-[#17211B]/15 hover:border-[#17211B]/35 hover:bg-[#E2DDD0]',
    outline:
      'bg-transparent text-[#17211B] border border-[#17211B]/25 hover:border-[#3F7D68] hover:text-[#3F7D68]',
    ghost:
      'bg-transparent text-[#17211B] hover:text-[#3F7D68] px-0 py-1.5 border-b border-transparent hover:border-[#3F7D68]',
  };

  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 font-sans-ui font-semibold uppercase tracking-[0.08em] transition-all duration-300 rounded-none group cursor-pointer select-none';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 pointer-events-none' : ''
  } ${className}`;

  if (href) {
    const isOutbound = href.startsWith('http') || href.startsWith('mailto');
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || (isOutbound && !href.startsWith('mailto') ? '_blank' : undefined)}
        rel={rel || (isOutbound ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
        )}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
    </button>
  );
};
