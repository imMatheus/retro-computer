import React from "react";
import Clock from "./Clock";

interface DockProps {}

const Dock: React.FC<DockProps> = ({}) => {
  return (
    <nav className="flex items-center justify-between gap-2 bg-gray-300 px-3 py-2">
      <h2>im a dock</h2>
      <Clock />
    </nav>
  );
};

export default Dock;
