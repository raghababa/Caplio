import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-sm shadow-accent/20",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-white hover:border-foreground/20",
  ghost: "text-foreground hover:bg-surface",
};

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = BaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
