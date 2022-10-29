import React from "react";
import Dock from "../components/dock";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden">
      <div className="relative flex-1 bg-teal-400">{children}</div>
      <Dock />
    </div>
  );
};

export default Main;
