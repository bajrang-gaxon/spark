"use client";
import React, { HTMLAttributes, ReactNode } from "react";
import { twClassNames } from "@spark/utils";

type DivProps = HTMLAttributes<HTMLDivElement>;

type Variant = "filled" | "outlined" | "ghost";
type Color = "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info";
type Size = "sm" | "md" | "lg";
type Radius = "none" | "sm" | "md" | "lg" | "xl" | "full";

export interface ChipProps extends DivProps {
  value: string | number | ReactNode;
  variant?: Variant;
  color?: Color;
  size?: Size;
  icon?: ReactNode;
  onClose?: () => void;
  className?: string;
  radius?: Radius;
}

// Tailwind classes for each semantic color (filled)
const filledColorMap: Record<Color, string> = {
  default: "bg-gray-500 text-white",
  primary: "bg-blue-500 text-white",
  secondary: "bg-zinc-700 text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-white",
  info: "bg-cyan-500 text-white",
};

const outlinedColorMap: Record<Color, string> = {
  default: "border border-gray-500 text-gray-700",
  primary: "border border-blue-500 text-blue-700",
  secondary: "border border-zinc-700 text-zinc-700",
  success: "border border-green-500 text-green-700",
  danger: "border border-red-500 text-red-700",
  warning: "border border-yellow-500 text-yellow-700",
  info: "border border-cyan-500 text-cyan-700",
};

const ghostColorMap: Record<Color, string> = {
  default: "text-gray-700 bg-transparent",
  primary: "text-blue-700 bg-transparent",
  secondary: "text-zinc-700 bg-transparent",
  success: "text-green-700 bg-transparent",
  danger: "text-red-700 bg-transparent",
  warning: "text-yellow-700 bg-transparent",
  info: "text-cyan-700 bg-transparent",
};

const sizeMap: Record<Size, string> = {
  sm: "text-xs px-2 py-0.5 gap-1",
  md: "text-sm px-3 py-1 gap-2",
  lg: "text-base px-4 py-1.5 gap-2",
};

const radiusMap: Record<Radius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export const Chip = ({
  value,
  icon,
  onClose,
  variant = "filled",
  color = "primary",
  size = "md",
  radius = "full",
  className,
  ...rest
}: ChipProps) => {
  const base = "inline-flex items-center";

  const variantStyle =
    variant === "outlined"
      ? outlinedColorMap[color]
      : variant === "ghost"
        ? ghostColorMap[color]
        : filledColorMap[color];

  const sizeStyle = sizeMap[size];
  const radiusStyle = radiusMap[radius];

  return (
    <div {...rest} className={twClassNames(base, variantStyle, sizeStyle, radiusStyle, className)}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{value}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-white/80 hover:text-white hover:cursor-pointer"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Chip;
