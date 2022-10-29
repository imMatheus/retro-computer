import React from "react";
import type { Icon as IconType } from "react-feather";

interface ButtonProps {
  Icon: IconType;
}

const Button: React.FC<ButtonProps> = ({ Icon }) => {
  return (
    <button className="flex items-center justify-center bg-bg-dimmed px-2">
      <Icon className="h-5 w-5" />
    </button>
  );
};

export default Button;
