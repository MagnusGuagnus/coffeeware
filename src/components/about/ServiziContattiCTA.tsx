import chiSiamoStyles from "./chisiamo.module.css";
import serviziContattiCTAStyles from "./servizicontatticta.module.css";
import styles from "../home/faq.module.css";

export default function ServiziContattiCTA() {
    return (
        <section className={`${serviziContattiCTAStyles.ctaSection}`}>
            <div className={"container mt-5"}>
                <h4 className={`${chiSiamoStyles.topTitle} text-center`}>INIZIAMO INSIEME</h4>
                <h2 className={`${chiSiamoStyles.title} text-center`}>Beviamoci un caffè.</h2>
                <p className={`${serviziContattiCTAStyles.ctaText} ${styles.ctaText} text-center mb-5`}>Dal progetto più modesto al più ambizioso, noi non ci fermiamo. Siamo qui per ascoltarvi e creare insieme qualcosa di straordinario.</p>
                <a href={"/#contact-form"} className={`btn d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill ${styles.ctaButton}`}>
                    Contattaci
                    <svg className={styles.ctaArrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a><br />
                <a href={"/#services"} className={`btn d-inline-flex align-items-center mt-3 mb-5 gap-2 px-4 py-2 rounded-pill ${serviziContattiCTAStyles.ctaServiziBtn}`}>
                    I nostri servizi
                    <svg className={styles.ctaArrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
