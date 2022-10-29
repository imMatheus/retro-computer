import React, { useEffect, useRef, useState } from "react";
import { X, Minus, Maximize } from "react-feather";
import Button from "./Button";

interface WindowProps {
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ children }) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [positions, setPositions] = useState({ x: 50, y: 50 });

  const windowSize = "30rem";

  const mouseDownHandler = () => {
    console.log("hello world");

    isDragging.current = true;
  };

  useEffect(() => {
    // console.log(windowRef.current);
    console.log("we reerrende: ", isDragging);

    document.addEventListener("mousemove", function (e) {
      if (!isDragging.current || !windowRef.current) {
        return;
      }

      // windowRef.current.style.left = `clamp(0px, ${newPositions.x}px, calc(100vw - (${windowSize})))`;
      // windowRef.current.style.top = `clamp(0px, ${newPositions.y}px, calc(100vh - (${windowSize} + 30px)))`;
      setPositions((c) => ({
        x: c.x === e.clientX ? c.x : e.clientX + e.movementX,
        y: c.y === e.clientY ? c.y : e.clientY + e.movementY,
        // y: e.movementY / 2 + c.y,
      }));
      // windowRef.current.style.left = `clamp(0px, ${e.clientX}px, calc(100vw - (${windowSize})))`;
      // windowRef.current.style.top = `clamp(0px, ${e.clientY}px, calc(100vh - (${windowSize} + 30px)))`;
      // windowRef.current.style.transform = `translate(clamp(0px, ${e.clientX}px, calc(100vw - (${windowSize}))), clamp(0px, ${e.clientY}px, calc(100vh - (${windowSize} + 30px))))`;
    });

    document.addEventListener("mouseup", function (e) {
      // Turn off dragging flag when user mouse is up
      isDragging.current = false;
    });

    // return () => {
    //   document.removeEventListener("mousemove", () => {
    //     console.log("remoev it");
    //   });

    //   document.removeEventListener("mouseup", () => {
    //     console.log("remoev it mosue");
    //   });
    // };
  }, [isDragging.current]);

  return (
    <div
      onMouseDown={mouseDownHandler}
      ref={windowRef}
      className={`border-outset absolute cursor-move border-8 bg-gray-300`}
      style={{
        left: `clamp(0px, ${positions.x}px, calc(100vw - (${windowSize})))`,
        top: `clamp(0px, ${positions.y}px, calc(100vh - (${windowSize} + 30px)))`,
        width: windowSize,
        height: windowSize,
      }}
    >
      <div
        className="h-full w-full"
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between bg-bg-dark p-1">
          <h3 className="text-text-dimmed">Google</h3>
          <div className="flex gap-1">
            <Button Icon={Minus} />
            <Button Icon={X} />
            <Button Icon={Maximize} />
          </div>
        </div>
        {/* {children} */}
      </div>
    </div>
  );
};

export default Window;
