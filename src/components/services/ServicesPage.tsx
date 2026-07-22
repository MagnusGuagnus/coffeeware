import Navbar from "../layout/Navbar.tsx";
import SubsectionWallpaper from "../about/SubsectionWallpaper.tsx";
import ServicesList from "./ServicesList.tsx";
import ContactForm from "../home/ContactForm.tsx";
import Footer from "../layout/Footer.tsx";
import ScrollToTop from "../layout/ScrollToTop.tsx";
import { Helmet } from 'react-helmet-async';

export default function ServicesPage() {
    return(
        <>
            <Helmet>
                <title>I nostri servizi | Coffeeware Designs</title>
                <meta
                    name="description"
                    content="Coffeeware offre servizi di web design, sviluppo personalizzato, branding e consulenza digitale."
                />
                <link rel="canonical" href="https://www.coffeewaredesigns.com/services" />
                <meta property="og:title" content="Servizi – Coffeeware" />
                <meta property="og:description" content="Web design, sviluppo, branding e consulenza digitale su misura." />
                <meta property="og:url" content="https://www.coffeewaredesigns.com/services" />
            </Helmet>

            <Navbar />
            <SubsectionWallpaper topTitle={"LA TUA NUOVA AGENZIA DIGITALE"}
                             title={"I nostri servizi."}
                             desc={"Soluzioni digitali su misura per far crescere il tuo business. Dalla progettazione alla strategia, ti accompagniamo in ogni passo."}
                             arrow={"services-list"} />
            <ServicesList />
            <ContactForm title="Mettici alla prova." subtitle="Se non hai trovato ciò che cercavi, non temere! Siamo sempre aperti a progetti nuovi."/>
            <Footer />
            <ScrollToTop />
        </>
    );
}
