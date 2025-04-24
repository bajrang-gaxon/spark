"use client";
import React, { JSX } from "react";
import { twClassNames } from "@spark/utils";

export interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "paragraph" | "small";
  color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "default";
  textGradient?: boolean;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

const variantClasses = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  lead: "text-lg",
  paragraph: "text-base",
  small: "text-sm",
};

const colorClasses = {
  default: "text-gray-800",
  primary: "text-blue-600",
  secondary: "text-purple-600",
  success: "text-green-600",
  danger: "text-red-600",
  warning: "text-yellow-600",
  info: "text-cyan-600",
};

const gradientColorClasses = {
  primary: "from-blue-500 to-blue-700",
  secondary: "from-purple-500 to-purple-700",
  success: "from-green-500 to-green-700",
  danger: "from-red-500 to-red-700",
  warning: "from-yellow-500 to-yellow-700",
  info: "from-cyan-500 to-cyan-700",
  default: "from-gray-400 to-gray-600",
};

export const Typography = ({
  variant = "paragraph",
  color = "default",
  textGradient = false,
  as: Component = "p",
  className,
  children,
  ...rest
}: TypographyProps) => {
  const baseClasses = variantClasses[variant];
  const colorClass = colorClasses[color];

  const gradientClasses = textGradient
    ? `bg-clip-text text-transparent bg-gradient-to-r ${gradientColorClasses[color]}`
    : colorClass;

  const finalClasses = twClassNames(baseClasses, gradientClasses, className);

  return (
    <Component className={finalClasses} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
