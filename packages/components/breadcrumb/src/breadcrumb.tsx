"use client";
import React, { Children, isValidElement } from "react";
import { twClassNames } from "@spark/utils";

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
  fullWidth?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

const sizeMap = {
  sm: "text-xs gap-1",
  md: "text-sm gap-2",
  lg: "text-base gap-3",
};

const colorMap = {
  default: "text-default",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
  info: "text-info",
};

export const Breadcrumbs = ({
  separator = "/",
  fullWidth = false,
  color = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BreadcrumbsProps) => {
  const listClasses = twClassNames(
    "inline-flex items-center",
    sizeMap[size],
    colorMap[color],
    fullWidth && "w-full",
    className,
  );

  return (
    <nav aria-label="Breadcrumb" {...rest}>
      <ol className={listClasses}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return null;
          const isLast = index === Children.count(children) - 1;

          return (
            <li className="inline-flex items-center">
              {child}
              {!isLast && <span className="px-1 text-gray-400">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
