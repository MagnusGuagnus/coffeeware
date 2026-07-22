"use client"

import { useState } from "react";
import styles from "./privacypolicy.module.css"; // opzionale per lo stile
import faqStyle from "../home/faq.module.css";

export default function PrivacyPolicy() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <span>
                <a className={`${faqStyle.ctaText}`} href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>
                    Privacy policy
                </a>
            </span>

            {isOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal} className={styles.closeButton}>
                            &times;
                        </button>

                        {/* Qui dentro puoi mettere qualsiasi contenuto */}
                        <div className={styles.modalBody}>
                            <h3>Privacy Policy – Coffeeware</h3>
                            <p>
                                <strong>Titolari del trattamento:</strong> Tommaso Parlato e Matteo Magnaguagno, professionisti indipendenti operanti sotto il nome di fantasia <strong>Coffeeware</strong>.<br/>
                                Email: <a href="mailto:coffeeware.web@gmail.com">coffeeware.web@gmail.com</a>
                            </p>
                            <p>
                                <strong>Dati raccolti:</strong> Nome, email, telefono, preferenze di contatto e messaggio inviati tramite il form.
                            </p>
                            <p>
                                <strong>Finalità:</strong> Rispondere alle richieste di servizi o informazioni inviate tramite il form.
                            </p>
                            <p>
                                <strong>Base giuridica:</strong> Consenso espresso dall’interessato (art. 6 GDPR).
                            </p>
                            <p>
                                <strong>Modalità di trattamento e sicurezza:</strong> I dati sono trattati con strumenti informatici in sicurezza. Possono transitare attraverso servizi di terze parti come Cloudflare (protezione e ottimizzazione del sito) ed EmailJS (invio dei messaggi via email).
                            </p>
                            <p>
                                <strong>Conservazione:</strong> I dati vengono conservati solo per il tempo necessario a gestire la richiesta.
                            </p>
                            <p>
                                <strong>Diritti dell’interessato:</strong> Accedere ai dati, richiedere rettifica o cancellazione, limitare o opporsi al trattamento, richiedere portabilità dei dati. Per esercitare i diritti: <a href="mailto:coffeeware.web@gmail.com">coffeeware.web@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
