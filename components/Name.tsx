"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function TypingAnimation() {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const targetText = "Saleem Lawal";
  const typingSpeed = 200;
  const resetDelay = 1000;

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;
    let i = 0;

    const typeText = () => {
      setText("");
      i = 0;
      intervalId = setInterval(() => {
        if (i < targetText.length) {
          setText(targetText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(intervalId);
          timeoutId = setTimeout(typeText, resetDelay); 
        }
      }, typingSpeed);
    };

    typeText();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const blinkIntervalId = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkIntervalId);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {text}
        <motion.span
          animate={{ opacity: cursorVisible ? 1 : 0 }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ fontWeight: "bold" }}
        >
          _
        </motion.span>
      </motion.span>
    </div>
  );
}

export default TypingAnimation;
