import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type Base = { children: ReactNode; variant?: 'solid' | 'outline' | 'quiet'; className?: string };
const classes = (variant: Base['variant'] = 'solid', className = '') => `portfolio-button portfolio-button--${variant} ${className}`;
export function ActionButton({ children, variant = 'solid', className = '', ...props }: Base & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={classes(variant, className)} {...props}>{children}</button>;
}
export function ActionLink({ children, variant = 'solid', className = '', ...props }: Base & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={classes(variant, className)} {...props}>{children}</a>;
}
