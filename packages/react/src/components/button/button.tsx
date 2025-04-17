import React from "react";
import { twx } from "../../utils/twBase";
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
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-50",
    link: "text-blue-600 hover:underline",
  },
  secondary: {
    solid: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-50",
    ghost: "text-gray-600 hover:bg-gray-50",
    link: "text-gray-600 hover:underline",
  },
  success: {
    solid: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
    ghost: "text-green-600 hover:bg-green-50",
    link: "text-green-600 hover:underline",
  },
  danger: {
    solid: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-red-600 text-red-600 hover:bg-red-50",
    ghost: "text-red-600 hover:bg-red-50",
    link: "text-red-600 hover:underline",
  },
  warning: {
    solid: "bg-yellow-500 text-white hover:bg-yellow-600",
    outline: "border border-yellow-500 text-yellow-500 hover:bg-yellow-50",
    ghost: "text-yellow-500 hover:bg-yellow-50",
    link: "text-yellow-500 hover:underline",
  },
  info: {
    solid: "bg-cyan-600 text-white hover:bg-cyan-700",
    outline: "border border-cyan-600 text-cyan-600 hover:bg-cyan-50",
    ghost: "text-cyan-600 hover:bg-cyan-50",
    link: "text-cyan-600 hover:underline",
  },
  default: {
    solid: "bg-gray-300 text-black hover:bg-gray-400",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
    link: "text-gray-700 hover:underline",
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
  color = "primary",
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
    "inline-flex items-center justify-center relative box-border outline-none appearance-none select-none font-normal cursor-pointer transition-all";

  const colorClasses = colorMap[color]?.[variant] || "";
  const classNames = twx(
    baseClasses,
    radiusClasses[radius],
    sizeClasses[size],
    colorClasses,
    {
      "w-full": fullWidth,
      "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none":
        disabled || loading,
    },
    className
  );

  return (
    <button className={classNames} disabled={disabled || loading} {...rest}>
      {loading ? (
        <span className="flex">
          {`Loading ...` /* loading... {<Spinner color="success" />} */}
        </span>
      ) : (
        <>
          {icon && iconPosition === "start" && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === "end" && (
            <span className="ml-2">{icon}</span>
          )}
        </>
      )}
    </button>
  );
}

export default Button;
