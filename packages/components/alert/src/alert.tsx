"use client";
import React from "react";
import { twClassNames } from "@spark/utils";
import { InfoIcon, WarningIcon, CloseIcon, CheckedIcon } from "./icons";

export interface AlertProps {
  title?: string;
  description?: string;
  variant?: "filled" | "outlined" | "flat" | "faded";
  color?: "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  showIcon?: boolean;
  closable?: boolean;
  onClose?: () => void;
  className?: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
}

const colorMap = {
  default: {
    filled: "bg-default text-default-foreground",
    outlined: "border border-default text-default-foreground bg-transparent",
    flat: "bg-default/50 text-default-foreground",
    faded: "bg-default/50 text-default-foreground border border-default",
    icon: <InfoIcon />,
  },
  primary: {
    filled: "bg-primary text-primary-foreground",
    outlined: "border border-primary text-primary-800 bg-transparent",
    flat: "bg-primary/20 text-primary-800",
    faded: "bg-primary/20 text-primary-800 border border-primary",
    icon: <InfoIcon />,
  },
  secondary: {
    filled: "bg-secondary text-secondary-foreground",
    outlined: "border border-secondary text-secondary bg-transparent",
    flat: "bg-secondary/20 text-secondary",
    faded: "bg-secondary/20 text-secondary border border-secondary",
    icon: <InfoIcon />,
  },
  success: {
    filled: "bg-success text-success-foreground",
    outlined: "border border-success text-success-800 bg-transparent",
    flat: "bg-success/20 text-success-800",
    faded: "bg-success/20 text-success-800 border border-success",
    icon: <CheckedIcon />,
  },
  danger: {
    filled: "bg-danger text-danger-foreground",
    outlined: "border border-danger text-danger-800 bg-transparent",
    flat: "bg-danger/20 text-danger-800",
    faded: "bg-danger/20 text-danger-800 border border-danger",
    icon: <WarningIcon />,
  },
  warning: {
    filled: "bg-warning text-warning-foreground",
    outlined: "border border-warning text-warning-800 bg-transparent",
    flat: "bg-warning/20 text-warning-800",
    faded: "bg-warning/20 text-warning-800 border border-warning",
    icon: <WarningIcon />,
  },
  info: {
    filled: "bg-info text-info-foreground",
    outlined: "border border-info text-info-800 bg-transparent",
    flat: "bg-info/20 text-info-800",
    faded: "bg-info/20 text-info border border-info",
    icon: <InfoIcon />,
  },
};

const radiusMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export function Alert({
  title,
  description,
  variant = "flat",
  color = "default",
  showIcon = true,
  closable = false,
  onClose,
  className,
  radius = "md",
}: AlertProps) {
  const style = colorMap[color][variant];
  const icon = colorMap[color].icon;
  const radiusClass = radiusMap[radius];

  return (
    <div
      className={twClassNames(
        "flex w-full flex-grow items-start px-4 py-3 gap-3",
        style,
        radiusClass,
        className,
      )}
    >
      {showIcon && <div className="text-2xl shrink-0 py-1.5">{icon}</div>}
      <div className="flex flex-grow flex-col box-border text-inherit justify-center min-h-9">
        {title && <div className="text-base w-full font-medium text-inherit">{title}</div>}
        {description && <div className="text-sm font-normal text-inherit">{description}</div>}
      </div>
      {closable && <CloseIcon onClick={onClose} className="min-w-0" color={color} />}
    </div>
  );
}
