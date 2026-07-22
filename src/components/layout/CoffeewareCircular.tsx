import { useState, useEffect, useRef } from "react";
import styles from "./logorotante.module.css";
const TEXT = "COFFEEWARE * COFFEEWARE * COFFEEWARE * ";
const RADIUS = 65;
const SIZE = 210;
const letters = Array.from(TEXT);

function ChicchiIcon() {
    return (
        <img className={`${styles.chicchiImg}`} src={"/img/chicchi.png"} alt="Chicchi" />
    );
}

export default function CoffeewareCircular({
                                               spinDuration = 18,
                                               onHover = "slowDown",
                                           }) {
    const [angle, setAngle] = useState(0);
    const [speed, setSpeed] = useState(spinDuration);
    const [hovered, setHovered] = useState(false);
    const rafRef = useRef<number | null>(null);
    const lastTime = useRef<number | null>(null);
    const angleRef = useRef<number | null>(0);

    useEffect(() => {
        const degsPerMs = 360 / (speed * 1000);

        const tick = (timestamp:number) => {
            if (lastTime.current !== null) {
                const delta = timestamp - lastTime.current;
                angleRef.current = ((angleRef.current ?? 0) + degsPerMs * delta) % 360;
                setAngle(angleRef.current);
            }
            lastTime.current = timestamp;
            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
            lastTime.current = null;
        };
    }, [speed]);

    const handleMouseEnter = () => {
        setHovered(true);
        if (onHover === "slowDown") setSpeed(spinDuration * 3);
        else if (onHover === "speedUp") setSpeed(spinDuration / 4);
        else if (onHover === "pause") setSpeed(99999);
        else if (onHover === "goBonkers") setSpeed(spinDuration / 15);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setSpeed(spinDuration);
    };

    return (
        <div className={`${styles.divCircle}`}>
            {/* The component */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                    position: "relative",
                    width: SIZE,
                    height: SIZE,
                    cursor: "pointer",
                }}
            >
                {/* Outer glow ring */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "transparent",
                    boxShadow: hovered
                        ? "0 0 60px 8px rgba(200,169,126,0.08), inset 0 0 40px rgba(200,169,126,0.04)"
                        : "0 0 30px 2px rgba(200,169,126,0.04)",
                    transition: "box-shadow 0.8s ease",
                    pointerEvents: "none",
                }} />


                {/* Rotating text ring */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        transform: `rotate(${angle}deg)`,
                        willChange: "transform",
                    }}
                >
                    {letters.map((letter, i) => {
                        const angleDeg = (360 / letters.length) * i - 90;
                        const angleRad = (angleDeg * Math.PI) / 180;
                        const cx = SIZE / 2 + RADIUS * Math.cos(angleRad);
                        const cy = SIZE / 2 + RADIUS * Math.sin(angleRad);

                        return (
                            <span
                                key={i}
                                style={{
                                    position: "absolute",
                                    left: cx,
                                    top: cy,
                                    transform: `translate(-50%, -50%) rotate(${angleDeg + 90}deg)`,
                                    fontFamily: "'Space mono', monospace",
                                    fontSize: letter === "*" ? "18px" : "16px",
                                    fontWeight: letter === "*" ? "400" : "700",
                                    letterSpacing: "0.09em",
                                    color: letter === "*" ? "#c8a97e" : "white",
                                    opacity: letter === "*" ? 0.6 : 0.85,
                                    userSelect: "none",
                                }}
                            >
                {letter}
              </span>
                        );
                    })}
                </div>

                {/* Center circle */}
                <div className={`${styles.centerCircle}`} >
                    <ChicchiIcon />
                </div>
            </div>

        </div>
    );
}