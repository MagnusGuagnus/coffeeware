"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import styles from "./faq.module.css"
import mobileStyles from "./mobilecontainer.module.css";

const faqs = [
  {
    question: "Quali servizi offrite?",
    answer:
      "Offriamo una gamma completa di servizi digitali: Web Design, AI Automation, Social Media Management, Web Scraping, SEO, Manutenzione siti, Gestione siti ed E-Commerce. Ogni servizio è personalizzato sulle esigenze specifiche del cliente.",
  },
  {
    question: "Quanto tempo ci vuole per realizzare un sito web?",
    answer:
      "I tempi variano in base alla complessità del progetto. Un sito vetrina può essere pronto in 1-2 settimane (o meno tempo in caso di tempistiche strette da parte del cliente), mentre un e-commerce completo richiede generalmente 4-8 settimane. Durante la consulenza iniziale definiremo insieme una timeline precisa.",
  },
  {
    question: "Dove lavorate?",
    answer:
        "Siamo basati a Trento e Vicenza, ma lavoriamo con clienti in tutta Italia e all'estero. In queste regioni siamo disponibili per incontri di persona, ma offriamo anche consulenze e supporto completamente online per garantire la massima flessibilità.",
  },
  {
    question: "Offrite assistenza dopo la consegna del progetto?",
    answer:
      "Assolutamente sì! Offriamo pacchetti di manutenzione mensili che includono aggiornamenti, backup, monitoraggio della sicurezza e supporto tecnico. Il vostro successo online è la nostra priorità anche dopo il lancio.",
  },
  {
    question: "Come funziona il processo di lavoro?",
    answer:
      "Il nostro processo si articola in 4 fasi: Discovery (analisi delle esigenze), Progettazione (wireframe e design), Sviluppo (codifica e test) e Lancio (pubblicazione e formazione). Vi teniamo aggiornati ad ogni step.",
  },
  {
    question: "Posso vedere esempi dei vostri lavori precedenti?",
    answer:
      "Certamente! Abbiamo un portfolio completo di progetti realizzati per clienti di diversi settori. Contattateci per una consulenza gratuita e vi mostreremo case study rilevanti per il vostro business.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`py-5 px-3 position-relative overflow-hidden ${styles.section} ${mobileStyles.mobileContainer}`}>
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {/* Header */}
            <div className="text-center mb-5">
              <h2 className={`mb-3 ${styles.title}`}>
                Domande Frequenti.
              </h2>
              <p className={styles.subtitle}>
                Trova le risposte alle domande più comuni sui nostri servizi
              </p>
            </div>

            {/* FAQ Items */}
            <div className="d-flex flex-column gap-3">
              {faqs.map((faq, index) => (
                  <div data-aos="flip-up">
                  <div
                    key={index}
                    className={`rounded-4 border overflow-hidden ${styles.faqItem} ${openIndex === index ? styles.faqItemOpen : ""}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className={`w-100 px-4 py-4 d-flex align-items-center justify-content-between text-start gap-3 border-0 bg-transparent ${styles.faqButton}`}
                    >
                      <span className={styles.question}>
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center ${styles.iconWrapper} ${openIndex === index ? styles.iconWrapperOpen : ""}`}
                      >
                        <ChevronDown
                          className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ""}`}
                        />
                      </span>
                    </button>
                    <div
                      className={`${styles.answerWrapper} ${openIndex === index ? styles.answerWrapperOpen : ""}`}
                    >
                      <p className={`px-4 pb-4 mb-0 ${styles.answer}`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
