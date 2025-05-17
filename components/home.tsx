"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const [label, setLabel] = useState("");

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const hoverTargets = document.querySelectorAll<HTMLElement>("[data-cursor-label]");

        const handleEnter = (e: Event) => {
            const el = e.currentTarget as HTMLElement;
            const text = el.dataset.cursorLabel;
            if (text) setLabel(text);
        };

        const handleLeave = () => setLabel("");

        hoverTargets.forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            hoverTargets.forEach((el) => {
                el.removeEventListener("mouseenter", handleEnter);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full bg-white text-black mix-blend-difference"
            style={{
                x: springX,
                y: springY,
                width: label ? 100 : 20,
                height: label ? 100 : 20,
                translateX: "-50%",
                translateY: "-50%",
                transition: "width 0.2s, height 0.2s",
            }}
        >
            {label && (
                <span className="text-sm font-medium text-center px-2">
                    {label}
                </span>
            )}
        </motion.div>
    );
}
