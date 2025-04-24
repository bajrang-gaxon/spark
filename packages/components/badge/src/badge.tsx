"use client";
import { ReactNode, HTMLAttributes } from "react";
import { twClassNames } from "@spark/utils";

type DivPropsWithoutContent = Omit<HTMLAttributes<HTMLDivElement>, "content">;

type Variant = "solid" | "flat" | "faded" | "shadow";
type Color = "info" | "primary" | "secondary" | "success" | "warning" | "danger";
type Size = "sm" | "md" | "lg";
type Shape = "circle" | "rectangle";
type Placement = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export interface BadgeProps extends DivPropsWithoutContent {
  content?: string | number | ReactNode;
  variant?: Variant;
  color?: Color;
  size?: Size;
  shape?: Shape;
  placement?: Placement;
  showOutline?: boolean;
  isDot?: boolean;
  className?: string;
  children: ReactNode;
}

// Styling maps
const colorMap: Record<Color, string> = {
  info: "bg-gray-500",
  primary: "bg-blue-500",
  secondary: "bg-gray-700",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
};

const sizeMap: Record<Size, string> = {
  sm: "h-4 min-w-[1rem] text-[10px]",
  md: "h-5 min-w-[1.25rem] text-xs",
  lg: "h-6 min-w-[1.5rem] text-sm",
};

const placementMap: Record<Placement, string> = {
  "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
};

export const Badge = ({
  content,
  variant = "solid",
  color = "primary",
  size = "md",
  shape = "circle",
  placement = "top-right",
  showOutline = true,
  isDot = false,
  className,
  children,
  ...rest
}: BadgeProps) => {
  const badgeColor = colorMap[color];
  const badgeSize = sizeMap[size];
  const badgePosition = placementMap[placement];
  const badgeShape = shape === "circle" ? "rounded-full" : "rounded-md";
  const badgeVariant =
    variant === "flat"
      ? "bg-opacity-50"
      : variant === "faded"
        ? "bg-opacity-80"
        : variant === "shadow"
          ? "shadow-lg"
          : "";

  const dotClass = "h-2 w-2 min-w-0 p-0";

  return (
    <div className="relative inline-block" {...rest}>
      {children}
      <span
        className={twClassNames(
          "absolute flex items-center justify-center",
          "text-white font-bold px-1.5",
          showOutline && "ring-2 ring-white",
          isDot ? dotClass : badgeSize,
          badgeShape,
          badgeColor,
          badgeVariant,
          badgePosition,
          className,
        )}
      >
        {!isDot && content}
      </span>
    </div>
  );
};

export default Badge;
