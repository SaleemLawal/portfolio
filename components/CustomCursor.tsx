"use client";
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        setIsMouseDevice(true);
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) {
        setHidden(true);
      }
    };

    const handlePointerOver = () => {
      setHidden(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("pointerover", handlePointerOver);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("pointerover", handlePointerOver);
    };
  }, []);

  if (!isMouseDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed z-[999] transition-opacity bg-white p-2 rounded-full ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="pointer-events-none z-[999] w-2 h-2 rounded-full bg-black shadow-md" />
    </div>
  );
}
