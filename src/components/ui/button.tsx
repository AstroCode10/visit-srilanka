import React from "react";
import clsx from "clsx";

type ButtonVariant = "default" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "button" | "a";
  href?: string;
};

type ButtonProps =
  | (CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>);

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className = "",
    variant = "default",
    size = "md",
    as = "button",
    href,
    ...rest
  } = props;

  const baseStyles = "rounded font-semibold transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const combinedClass = clsx(baseStyles, variants[variant], sizes[size], className);

  if (as === "a" && href) {
    // Pass only anchor-legal props
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={combinedClass} {...anchorProps}>
        {children}
      </a>
    );
  }

  // Otherwise render a button
  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={combinedClass} {...buttonProps}>
      {children}
    </button>
  );
};