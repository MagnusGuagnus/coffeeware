"use client"
import styles from "./footer.module.css"
import PrivacyPolicy from "./PrivacyPolicy.tsx";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Servizi", href: "/services" },
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Contattaci", href: "/#contact-form" },
]

const services = [
    "Web Design",
    "E-Commerce",
    "AI Automation",
    "Web Scraping",
    "Landing Page",
    "Social Media"
]

export default function     Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            {/* Main Footer */}
            <div className="container py-5">
                <div className="row gy-5">
                    {/* Logo & Description */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <a href="/" className={`d-flex align-items-center gap-2 text-decoration-none mb-3 ${styles.logoLink}`}>
                            <img src="img/logo.png" alt="Coffeeware Logo" className={styles.logoImage} />
                        </a>
                        <p className={styles.description}>
                            Trasformiamo le tue idee in esperienze digitali uniche. Il tuo successo online inizia qui.
                        </p>

                    </div>

                    {/* Navigation */}
                    <div className="col-6 col-md-6 col-lg-3">
                        <h4 className={styles.columnTitle}>Navigazione</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className={styles.footerLink}>
                                        <span className={styles.linkBullet} />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-6 col-md-6 col-lg-3">
                        <h4 className={styles.columnTitle}>Servizi</h4>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            {services.map((service) => (
                                <li key={service}>
                                    <a href="/#contact-form" className={styles.footerLink}>
                                        <span className={styles.linkBullet} />
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h4 className={styles.columnTitle}>Contatti</h4>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li>
                                <a href="tel:+393884994996" className={styles.contactLink}>
                                    <div className={styles.contactIcon}>
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    +39 3884994996
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@coffeewaredesigns.com" className={styles.contactLink}>
                                    <div className={styles.contactIcon}>
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    info@coffeewaredesigns.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/393884994996" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                    <div className={`${styles.contactIcon} ${styles.whatsappIcon}`}>
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    </div>
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/tomparlato" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                    <div className={`${styles.contactIcon} ${styles.telegramIcon}`}>
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9.999 15.172l-.396 4.019c.567 0 .813-.244 1.108-.538l2.659-2.52 5.511 4.033c1.011.558 1.725.264 1.987-.933l3.6-16.86h.001c.308-1.437-.519-2-1.504-1.63L1.35 9.094C-.053 9.64-.032 10.4 1.105 10.75l5.874 1.835 13.634-8.6c.641-.425 1.225-.19.745.235"/>
                                        </svg>
                                    </div>
                                    Telegram
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className="container py-3">
                    <div className="row align-items-center gy-3">
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <p className={styles.copyright}>
                                © {currentYear} Coffeeware – All rights reserved. <br/>
                                Coffeeware è solo un nome di fantasia. Siamo sviluppatori indipendenti e liberi professionisti.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex justify-content-center justify-content-md-end gap-4">
                                <PrivacyPolicy />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
