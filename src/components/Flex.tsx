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
    display,
    className,
    justifyContent && `justify-${justifyContent}`,
    alignItems && `items-${alignItems}`,
    direction && `flex-${direction}`
  );

  return <div className={flexClasses}>{children}</div>;
};

export default Flex;
