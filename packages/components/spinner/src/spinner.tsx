"use client";
import React from "react";
import { twClassNames, twMerge } from "@spark/utils";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  className?: string;
  label?: React.ReactNode;
  variant?: "default" | "simple" | "gradient" | "spinner" | "wave" | "dots";
  labelColor?: string;
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

const borderSize = {
  sm: "border-2",
  md: "border-4",
  lg: "border-4",
};

const colorMap: Record<string, string> = {
  primary: "border-blue-600",
  secondary: "border-gray-600",
  success: "border-green-600",
  danger: "border-red-600",
  warning: "border-yellow-500",
  info: "border-cyan-600",
};

const dotSizeMap = {
  sm: "h-1 w-1",
  md: "h-2 w-2",
  lg: "h-3 w-3",
};

export default function Spinner({
  size = "md",
  color = "primary",
  className,
  label,
  variant = "default",
  labelColor = "text-gray-700",
}: SpinnerProps) {
  const sizeClass = sizeClasses[size];
  const border = borderSize[size];
  const borderColor = colorMap[color];
  const dotSize = dotSizeMap[size];

  const baseSpinnerClasses = twClassNames(sizeClass, border, borderColor, className);

  const renderBorderSpinner = (extra?: string) =>
    twClassNames("rounded-full animate-spin border-solid", baseSpinnerClasses, extra);

  const renderSpinner = () => {
    switch (variant) {
      case "default":
        return <div className={renderBorderSpinner("border-t-transparent")} />;
      case "simple":
        return <div className={renderBorderSpinner("border-t-transparent border-r-transparent")} />;
      case "gradient":
        return (
          <div
            className={twClassNames(
              "animate-spin rounded-full bg-gradient-to-tr from-transparent via-blue-600 to-transparent",
              sizeClass,
              className,
            )}
          />
        );
      case "spinner":
        return (
          <div className={twClassNames("relative", sizeClass)}>
            <div className={renderBorderSpinner("absolute inset-0 border-t-transparent")} />
          </div>
        );
      case "wave":
        return (
          <div className="flex items-end gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-blue-600 animate-wave"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  height: `${4 + i * 2}px`,
                }}
              />
            ))}
          </div>
        );
      case "dots":
        return (
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className={twClassNames("block rounded-full bg-blue-600 animate-bounce", dotSize)}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2">
      {renderSpinner()}
      {label && <span className={twMerge("text-sm", labelColor)}>{label}</span>}
    </div>
  );
}
