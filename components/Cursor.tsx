import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { COLORS } from "../styles/theme/lightThemeOptions";

const Cursor = () => {
  const cursorSize = 40;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  });

  return (
    <motion.div
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: COLORS.main,
        position: "fixed",
        borderRadius: "50%",
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
    ></motion.div>
  );
};

export default Cursor;
