"use client";
import React from "react";
import { twClassNames } from "@spark/utils";
import { ButtonProps } from "./button";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "default";
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantMap: Record<string, "filled" | "outlined" | "ghost" | "link"> = {
  solid: "filled",
  outlined: "outlined",
  ghost: "ghost",
  link: "link",
};

export const ButtonGroup = ({
  variant = "solid",
  size = "md",
  color = "primary",
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonGroupProps) => {
  const totalChildren = React.Children.count(children);

  const containerClass = twClassNames(
    "inline-flex isolate overflow-hidden",
    {
      "w-full": fullWidth,
    },
    className,
  );

  const clonedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement<ButtonProps>(child)) return child;

    const isFirst = index === 0;
    const isLast = index === totalChildren - 1;

    return React.cloneElement(child, {
      variant: variantMap[variant],
      size,
      color,
      fullWidth,
      radius: "none",
      className: twClassNames(
        child.props.className,
        !isFirst && "rounded-l-none",
        !isLast && "rounded-r-none -ml-px",
      ),
    });
  });

  return (
    <div {...rest} className={containerClass}>
      {clonedChildren}
    </div>
  );
};

export default ButtonGroup;
