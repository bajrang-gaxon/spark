"use client";
import React from "react";
import { twClassNames } from "@spark/utils";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "rounded" | "square" | "circle";
  size?: "sm" | "md" | "lg" | "xl";
  withBorder?: boolean;
  borderColor?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "gray";
  className?: string;
}

// Tailwind variant classes
const variantMap = {
  rounded: "rounded-md",
  square: "rounded-none",
  circle: "rounded-full",
};

// Tailwind size classes
const sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-20 h-20",
};

// Tailwind border color classes
const borderColorMap = {
  primary: "border-blue-600",
  secondary: "border-purple-600",
  success: "border-green-600",
  danger: "border-red-600",
  warning: "border-yellow-500",
  info: "border-cyan-600",
  gray: "border-gray-400",
};

export const Avatar = ({
  variant = "circle",
  size = "md",
  withBorder = false,
  borderColor = "gray",
  className,
  ...rest
}: AvatarProps) => {
  const classes = twClassNames(
    "object-cover inline-block",
    variantMap[variant],
    sizeMap[size],
    {
      "border-2": withBorder,
      [borderColorMap[borderColor]]: withBorder,
    },
    className,
  );

  return <img className={classes} {...rest} />;
};

export default Avatar;
