"use client"

import styles from "./servizio-card.module.css"

interface ServizioCardProps {
    name: string
    url?: string
    icon?: string
    newBadge?: boolean
}

export default function ServizioCard({ name, icon, newBadge }: ServizioCardProps) {
    return (
        <div className="col" data-aos="flip-up">
            <a className={`${styles.noUnderline}`} href={"/services"}>
            <div className={`card h-100 border-0 ${styles.cardWrapper}`}>
            <div className={`card-body d-flex flex-column p-4 position-relative ${styles.cardBody}`}>
                {newBadge && ( <span className={styles.newBadge}>NEW!</span> ) }
                {icon && ( <img src={icon} alt={name} className={styles.icon} /> )}

                <h2 className={`card-title h5 fw-bold ${styles.title}`}>
                    {name}
                </h2>
                <p
                    className={`text-decoration-none fw-semibold d-inline-flex align-items-center gap-2 mt-auto ${styles.link}`}
                >
                    <span className={styles.linkText}>Scopri</span>
                    →
                </p>
            </div>
        </div></a>
        </div>
    )
}
