import styles from "./faq.module.css";
import mobileStyles from "./mobilecontainer.module.css";

export default function CTAContattaci() {
    return (
        <section className={mobileStyles.mobileContainer}>
            <div className="text-center mt-5">
                <p className={`mb-3 ${styles.ctaText}`}>
                    Non hai trovato quello che cercavi?
                </p>
                <a href={"#contact-form"}>
                <button className={`btn d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill ${styles.ctaButton}`}>
                    Trovatemi una soluzione!
                    <svg className={styles.ctaArrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button></a>
            </div>
        </section>
    );
}