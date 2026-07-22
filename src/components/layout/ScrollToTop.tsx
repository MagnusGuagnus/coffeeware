"use client"

import { useEffect, useState } from "react"
import styles from "./scroll-to-top.module.css"

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        function onScroll() {
            setVisible(window.scrollY > 300)
        }
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    function handleClick() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label="Torna in cima"
            className={`btn position-fixed bottom-0 end-0 d-flex align-items-center justify-content-center rounded-circle shadow-lg ${styles.scrollBtn} ${visible ? styles.visible : styles.hidden}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    )
}
