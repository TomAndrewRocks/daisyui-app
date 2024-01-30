import React from "react";
import clsx from "clsx";

interface FlexProps {
  className?: string;
  children?: React.ReactNode;
}

const Flex: React.FC<FlexProps> = ({ className, children }) => {
  const flexClasses = clsx(className);

  return <div className={flexClasses}>{children}</div>;
};

export default Flex;
