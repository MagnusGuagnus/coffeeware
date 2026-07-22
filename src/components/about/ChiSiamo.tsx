import Navbar from '../layout/Navbar';
import SubsectionWallpaper from "./SubsectionWallpaper.tsx";
import Valori from "./Valori.tsx";
import Team from "./Team.tsx";
import ServiziContattiCTA from "./ServiziContattiCTA.tsx";
import Footer from "../layout/Footer.tsx";
import ScrollToTop from "../layout/ScrollToTop.tsx";
import { Helmet } from 'react-helmet-async';

export default function ChiSiamo() {
    return (
        <>
            <Helmet>
                <title>Chi Siamo | Coffeeware Designs</title>
                <meta
                    name="description"
                    content="Scopri il team di Coffeeware, la nostra missione e la nostra esperienza nello sviluppo di soluzioni digitali innovative."
                />
                <link rel="canonical" href="https://www.coffeewaredesigns.com/chi-siamo" />
                <meta property="og:title" content="Chi Siamo – Coffeeware" />
                <meta property="og:description" content="Il team di Coffeeware e la nostra missione digitale." />
                <meta property="og:url" content="https://www.coffeewaredesigns.com/chi-siamo" />
            </Helmet>
            <Navbar />
            <SubsectionWallpaper
                topTitle={"LA NOSTRA STORIA"}
                title={"Chi Siamo"}
                desc={"Sviluppatori e creativi appassionati di tecnologia e design, pronti a trasformare le vostre idee in realtà digitali straordinarie."}
                arrow={"valori"}/>
            <Valori />
            <Team />
            <ServiziContattiCTA />
            <Footer />
            <ScrollToTop />
        </>
    );
}
