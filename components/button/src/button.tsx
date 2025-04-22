import React from "react";
import { twClassNames } from "@spark/utils";
//import { twx } from "@/utils/twBase";
//import Spinner from "../Spinner";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "full" | "none";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  className?: string;
  children?: React.ReactNode;
}

// Tailwind-compatible color classes
const colorMap = {
  primary: {
    solid: "bg-primary text-primary-foreground hover:opacity-75",
    outline: "border border-primary text-primary hover:opacity-75",
    ghost: "text-primary hover:bg-primary/30",
    link: "text-primary hover:underline",
  },
  secondary: {
    solid: "bg-secondary text-secondary-foreground hover:opacity-75",
    outline: "border border-secondary text-secondary hover:opacity-75",
    ghost: "text-secondary hover:bg-secondary/30",
    link: "text-secondary hover:underline",
  },
  success: {
    solid: "bg-success text-success-foreground hover:opacity-75",
    outline: "border border-success text-success hover:opacity-75",
    ghost: "text-success hover:bg-success/30",
    link: "text-success hover:underline",
  },
  danger: {
    solid: "bg-danger text-danger-foreground hover:opacity-75",
    outline: "border border-danger text-danger hover:opacity-75",
    ghost: "text-danger hover:bg-danger/30",
    link: "text-danger hover:underline",
  },
  warning: {
    solid: "bg-warning text-warning-foreground hover:opacity-75",
    outline: "border border-warning text-warning hover:opacity-75",
    ghost: "text-warning hover:bg-warning/30",
    link: "text-warning hover:underline",
  },
  info: {
    solid: "bg-info text-info-foreground hover:opacity-75",
    outline: "border border-info text-info hover:opacity-75",
    ghost: "text-info hover:bg-info/30",
    link: "text-info hover:underline",
  },
  default: {
    solid: "bg-default text-default-foreground hover:opacity-75",
    outline: "border border-default text-default-default hover:opacity-75",
    ghost: "text-default-default hover:bg-default/30",
    link: "text-default-default hover:underline",
  },
};

const sizeClasses = {
  sm: "text-xs px-3 h-8 min-w-14",
  md: "text-sm px-4 h-10 min-w-16",
  lg: "text-base px-6 h-12 min-w-16",
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
  variant = "solid",
  size = "md",
  color = "default",
  radius = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "start",
  className,
  ...rest
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center relative box-border outline-none appearance-none select-none font-normal cursor-pointer gap-2 transition-all";

  const colorClasses = colorMap[color]?.[variant] || "";
  const classNames = baseClasses;

  return (
    <button className={classNames} disabled={disabled || loading} {...rest}>
      {loading ? (
        <>Loading</>
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
