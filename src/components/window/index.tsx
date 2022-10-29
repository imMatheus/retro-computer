"use client";

import React, { useEffect, useRef } from "react";

interface WindowProps {
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ children }) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  console.log("hej");

  const mouseDownHandler = () => {
    isDragging.current = true;
  };

  // useEffect(() => {
  if (typeof window === "undefined") return null;

  // console.log(windowRef.current);

  document.addEventListener("mousemove", function (e) {
    // Don't do anything if dragging flag is false
    // console.log("hej värden");

    if (!isDragging.current || !windowRef.current) {
      return false;
    }
    //setting width to the mouse x cord or to a min or max value specified in the css
    var pointerRelativeXpos = e.clientX;
    // console.log(pointerRelativeXpos);
    console.log(e.movementX);
    windowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.addEventListener("mouseup", function (e) {
    // Turn off dragging flag when user mouse is up
    isDragging.current = false;
  });
  // }, [windowRef]);

  return (
    <div
      onMouseDown={() => {
        // console.log("hello worlds");

        mouseDownHandler();
        console.log(isDragging.current);
      }}
      className="border-outset absolute h-40 w-40 cursor-move border-8 bg-gray-300"
    >
      <div>{isDragging.current + ""}</div>
      {/* <div>{children}</div> */}
    </div>
  );
};

export default Window;
