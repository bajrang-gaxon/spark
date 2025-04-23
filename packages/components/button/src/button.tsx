"use client";
import React, { useRef } from "react";
//import Spinner from "../Spinner";
// @ts-ignore
import Ripple from "material-ripple-effects";
import { twClassNames } from "@spark/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "full" | "none";
  color?: "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  ripple?: boolean; // <-- new prop
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: "text-xs px-3 h-8 min-w-14",
  md: "text-sm px-4 h-10 min-w-16",
  lg: "text-base px-6 h-12 min-w-16",
};

const colorMap = {
  default: {
    filled: "bg-default text-default-foreground hover:bg-default-200",
    outlined:
      "border border-default text-default-foreground hover:border-default-400 hover:text-default-600",
    ghost: "text-default-foreground hover:bg-default-200",
    link: "text-default-foreground hover:underline",
  },
  primary: {
    filled: "bg-primary text-primary-foreground hover:bg-primary-600",
    outlined: "border border-primary text-primary hover:border-primary-600 hover:text-primary-600",
    ghost: "text-primary hover:bg-primary-100",
    link: "text-primary hover:underline",
  },
  secondary: {
    filled: "bg-secondary text-secondary-foreground hover:bg-secondary-500",
    outlined:
      "border border-secondary text-secondary hover:border-secondary-500 hover:text-secondary-500",
    ghost: "text-secondary hover:bg-secondary-100",
    link: "text-secondary hover:underline",
  },
  success: {
    filled: "bg-success text-success-foreground hover:bg-success-600",
    outlined: "border border-success text-success hover:border-success-600 hover:text-success-600",
    ghost: "text-success hover:bg-success-100",
    link: "text-success hover:underline",
  },
  danger: {
    filled: "bg-danger text-danger-foreground hover:bg-danger-600",
    outlined: "border border-danger text-danger hover:border-danger-600 hover:text-danger-600",
    ghost: "text-danger hover:bg-danger-100",
    link: "text-danger hover:underline",
  },
  warning: {
    filled: "bg-warning text-warning-foreground hover:bg-warning-600",
    outlined: "border border-warning text-warning hover:border-warning-600 hover:text-warning-600",
    ghost: "text-warning hover:bg-warning/30",
    link: "text-warning hover:underline",
  },
  info: {
    filled: "bg-info text-info-foreground hover:bg-info-600",
    outlined: "border border-info text-info hover:border-info-600 hover:text-info-600",
    ghost: "text-info hover:bg-info-100",
    link: "text-info hover:underline",
  },
};

const radiusClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
  none: "rounded-none",
};

export function Button({
  children,
  variant = "filled",
  size = "md",
  color = "default",
  radius = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  ripple = true, // <-- default true
  icon,
  iconPosition = "start",
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      const rippleInstance = new Ripple();
      rippleInstance.create(e, "dark");
    }
    onClick?.(e); // Call user-provided onClick handler
  };

  const baseClasses =
    "inline-flex items-center justify-center relative box-border outline-none appearance-none select-none font-normal cursor-pointer gap-2 transition-all overflow-hidden";

  const colorClasses = colorMap[color]?.[variant] || "";
  const classNames = twClassNames(
    baseClasses,
    radiusClasses[radius],
    sizeClasses[size],
    colorClasses,
    {
      "w-full": fullWidth,
      "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none": disabled || loading,
    },
    className,
  );

  return (
    <button
      ref={buttonRef}
      className={classNames}
      disabled={disabled || loading}
      onClick={handleClick}
      {...rest}
    >
      {loading ? (
        <>{/* <Spinner /> Loading */}</>
      ) : (
        <>
          {icon && iconPosition === "start" && icon}
          {children}
          {icon && iconPosition === "end" && icon}
        </>
      )}
    </button>
  );
}
