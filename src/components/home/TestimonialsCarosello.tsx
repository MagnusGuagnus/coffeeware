"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import styles from "./testimonial-carousel.module.css"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michele Piccolo",
    role: "Agente Immobiliare",
    company: "Immobiliare Piccolo Barletta",
    content:
      "Tommaso e Matteo si sono sempre dimostrati all'altezza dei compiti assegnati. Si distinguono soprattutto per la pazienza e la disponibilità. Mostrano dedizione e interesse, qualità che non tutti dispongono! Prendono a cuore il lavoro e lo portano a termine. Li consiglio vivamente!",
    avatar: "MP",
  },
  {
    id: 2,
    name: "Francesco Tudini",
    role: "CEO",
    company: "Impermeo Roma",
    content:
      "Bravi, puntuali, consegna rapidissima!",
    avatar: "FT",
  },
  {
    id: 3,
    name: "Manuel Proietti",
    role: "Traslocatore",
    company: "Traslochi e Sgomberi Proietti Roma",
    content:
    "Tommaso e Matteo sono due professionisti seri, competenti e disponibili. Lavorare con loro è stato semplice: comunicazione chiara, grande attenzione ai dettagli e tempi rispettati. Consigliati per la loro affidabilità e professionalità.",
    avatar: "MP",
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className={`py-4 mt-5 ${styles.section}`}>
      <div className="container">
        <h2 className={`text-center mb-3 ${styles.title}`}>
          Cosa dicono di noi.
        </h2>
        <p className={`text-center mb-5 mx-auto ${styles.subtitle}`}>
          Le opinioni dei nostri clienti sono la nostra migliore referenza
        </p>

        <div
          className={`position-relative mx-auto ${styles.carouselWrapper}`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <div className={`position-relative overflow-hidden rounded-4 p-4 p-md-5 ${styles.card}`}>
            {/* Quote Icon */}
            <div className={`position-absolute ${styles.quoteIcon}`}>
              <Quote className={styles.quoteIconSvg} />
            </div>

            {/* Content */}
            <div className="position-relative" style={{ zIndex: 10 }}>
              <blockquote className={`mb-4 ${styles.quote}`}>
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>

              <div className="d-flex align-items-center gap-3">
                {/* Avatar */}
                <div className={`d-flex align-items-center justify-content-center rounded-circle ${styles.avatar}`}>
                  {testimonials[currentIndex].avatar}
                </div>

                {/* Author Info */}
                <div>
                  <p className={`mb-0 ${styles.authorName}`}>
                    {testimonials[currentIndex].name}
                  </p>
                  <p className={`mb-0 ${styles.authorRole}`}>
                    {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Coffee Bean Decorations */}
            <div className={`position-absolute ${styles.coffeeBeans}`}>
              <img src="img/coffeebean.png" alt="" className={styles.bean1} />
              <img src="img/coffeebean.png" alt="" className={styles.bean2} />
              <img src="img/coffeebean.png" alt="" className={styles.bean3} />
              <img src="img/coffeebean.png" alt="" className={styles.bean4} />
              <img src="img/coffeebean.png" alt="" className={styles.bean5} />
              <img src="img/coffeebean.png" alt="" className={styles.bean6} />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
            <button
              onClick={prevSlide}
              className={`btn rounded-circle p-0 ${styles.navButton}`}
              aria-label="Testimonianza precedente"
            >
              <ChevronLeft className={styles.navIcon} />
            </button>

            {/* Dots Indicator */}
            <div className="d-flex align-items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`btn p-0 rounded-pill ${styles.dot} ${
                    index === currentIndex ? styles.dotActive : ""
                  }`}
                  aria-label={`Vai alla testimonianza ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className={`btn rounded-circle p-0 ${styles.navButton}`}
              aria-label="Testimonianza successiva"
            >
              <ChevronRight className={styles.navIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
