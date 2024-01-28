import React from "react";
import clsx from "clsx";

interface FlexProps {
  display?: "flex" | "grid" | "none";
  justifyContent?: "start" | "end" | "center" | "between" | "around";
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  direction?: "row" | "row-reverse" | "col" | "col-reverse";
  className?: string;
  children?: React.ReactNode;
}

const Flex: React.FC<FlexProps> = ({
  display,
  justifyContent,
  alignItems,
  direction,
  className,
  children,
}) => {
  const flexClasses = clsx(
    display === "grid" && "grid",
    display === "flex" && "flex",
    display === "none" && "hidden",
    justifyContent && `justify-${justifyContent}`,
    alignItems && `items-${alignItems}`,
    direction && `flex-${direction}`,
    className
  );

  return <div className={flexClasses}>{children}</div>;
};

export default Flex;
