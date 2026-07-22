import { useEffect, useState } from "react";
import LogoRotante from "../layout/LogoRotante";
import styles from "./headerwallpaper.module.css";

export default function HeaderWallpaper() {
    const [scrollOffset, setScrollOffset] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {
        const fullText = "Raccontaci la tua storia.";
        let index = 0;

        const typingInterval = setInterval(() => {
            index++;
            if (index <= fullText.length) {
                setText(fullText.slice(0, index) + "|");
            } else {
                clearInterval(typingInterval);
            }
        }, 90);

        return () => clearInterval(typingInterval);
    }, []);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollOffset(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const maxScroll = 500;
    const progress = Math.min(scrollOffset / maxScroll, 1);

    return (
        <div id={`${styles.headerWallpaper}`}
            className="d-flex  justify-content-center text-center"
        >
            <LogoRotante />
            {/*<div className={`${styles.logoRotanteContainer}`}>
                <a href="#services">
                    <img
                        src="/img/logo-rotante.png"
                        alt="Logo rotante"
                        id={`${styles.logoRotante}`}
                    />

                    <img
                        src="/img/testo-curvo-logo.png"
                        alt="Scritta del logo"
                        id={`${styles.testoRotante}`}
                    />
                </a>
            </div>*/}


            {/* Tazzina */}
            <img
                src="/img/tazza-animata.gif"
                id="tazza-animata"
                alt="Tazza di caffè con animazione del fumo"
            />

            <h1 id={`${styles.raccontaciStoriaMobile}`}>
                {text}
            </h1>

            <svg
                id={`${styles.raccontaciStoriaDesktop}`}
                viewBox="0 0 500 200"
                preserveAspectRatio="xMidYMid meet"
               >
                <path
                    id="high-curve"
                    fill="none"
                    stroke="none"
                    d="M50,80 C150,50 350,50 450,80"
                />
                <text id={`${styles.raccontaciStoriaText}`} >
                    <textPath
                        href="#high-curve"
                        startOffset="50%"
                        method="align"

                    >
                        {text}
                    </textPath>
                </text>
            </svg>

            {/* Cespuglio sinistro */}
            <img
                src="/img/cespugli-2.png"
                alt="Cespuglio sinistro"
                className="cespuglio-animato"
                style={{
                    position: "fixed",
                    bottom: "-20px",
                    left: "0",
                    width: "370px",
                    height: "auto",
                    transform: `translateX(-${progress * 100}%)`,
                    transition: "transform 0.05s linear",
                    zIndex: 10,
                }}
            />

            {/* Cespuglio destro */}
            <img
                src="/img/cespugli-1.png"
                alt="Cespuglio destro"
                className="cespuglio-animato"
                style={{
                    position: "fixed",
                    bottom: "-20px",
                    right: "0",
                    width: "370px",
                    height: "auto",
                    transform: `translateX(${progress * 100}%)`,
                    transition: "transform 0.05s linear",
                    zIndex: 10,
                }}
            />

        </div>
    );
}