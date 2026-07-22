import styles from "./detailedservicecard.module.css";
import {JSX} from "react";

type Props = {
    title: string;
    description: string | JSX.Element;
    imageUrl: string;
    highlight?: boolean;
    popolare?: boolean;
};

export default function DetailedServiceCard({
                                                title,
                                                description,
                                                imageUrl,
                                                highlight = false,
                                                popolare = false
                                            }: Props) {

    const cardClass = highlight ? styles.highlightedServiceCard : styles.normalServiceCard;
    const titleClass = highlight ? styles.highlightedTitle : styles.normalTitle;
    const descriptionClass = highlight ? styles.highlightedDescription : styles.normalDescription;
    const iconColumn = highlight ? 1 : 2;

    const animation = highlight ? "zoom-in-up" : "fade-up";

    return (
        <div data-aos={animation} className={`${styles.serviceCardContainer} h-100 d-flex flex-column`}>
            <div className={`${styles.serviceCard} ${cardClass} ${styles.cardWrapper} `}>
                {highlight && (
                    <div className={styles.inEvidenza}>
                        <i className={"bi bi-fire"}></i> In Evidenza
                    </div>
                )}
                {
                    popolare && (
                        <div className={styles.inEvidenza} style={{backgroundColor: "rgb(68 146 165)"}}>
                            <i className={"bi bi-award-fill"}></i> Popolare
                        </div>
                    )}

                <div className="row align-items-center">
                    <div className={`col-12 col-md-${iconColumn} d-flex justify-content-center`}>
                        <img
                            src={imageUrl}
                            className={styles.serviceIcon}
                            alt={title}
                        />
                    </div>

                    <div className={`col-12 col-md-${12 - iconColumn}`}>
                        <h3 className={`${styles.title} ${titleClass}`}>
                            {title}
                        </h3>
                        <p className={`${styles.description} ${descriptionClass}`}>
                            {description}
                        </p>
                        { highlight && (
                            <>
                                {/*<button className={`${styles.scopriDiPiuBtn} text-decoration-none fw-semibold d-inline-flex align-items-center gap-2 mt-auto`}>
                                    <span className={`${styles.scopriDiPiuText}`}>Scopri di più</span>→</button>*/}
                                <a href={"#contact-form"} className={`text-decoration-none fw-semibold d-inline-flex align-items-center gap-2 mt-auto ${styles.linkHighlight}`}>
                                    <span className={`${styles.linkTextHighlight}`}>Consulenza gratuita</span>→</a>

                            </>

                        )}

                        { !highlight && (
                            <a
                                href="#contact-form"
                                className={`text-decoration-none fw-semibold d-inline-flex align-items-center gap-2 mt-auto ${styles.link}`}
                            >
                                <span className={`${styles.linkText}`}>Consulenza gratuita</span> →
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}