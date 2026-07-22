import ServizioCard from "./ServizioCard.tsx";
import faqStyles from "./faq.module.css";
import mobileStyles from "./mobilecontainer.module.css";

function Servizi() {
    return (
        <section id={"services"} className={`${mobileStyles.mobileContainer}`}>
            <div className="container text-center">
                <h3 className="fw-bold fs-2 mb-4">
                    Scopri i nostri servizi.
                </h3>
                <p className={`mb-4 ${faqStyles.ctaText}`}>
                    Offriamo un'ampia gamma di servizi in <strong>Veneto</strong> e <strong>Trentino</strong> di IT consultancy, sviluppo IA e web design per aiutare la tua azienda a crescere e innovare.
                </p>
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    <ServizioCard
                        name={"Sviluppo siti web professionali"}
                        icon={"img/webdesign-icon.png"}
                    />
                    <ServizioCard
                        name={"Creazione e-commerce su misura"}
                        icon={"img/ecommerce-icon.png"}
                    />
                    <ServizioCard
                        name={"AI per automazione dei processi"}
                        icon={"img/ai-automation-icon.png"}
                        newBadge={true}
                    />
                </div>
                <br/>
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    <ServizioCard
                        name={"Web scraping e raccolta automatica dati"}
                        icon={"img/webscraping-icon.png"}
                    />
                    <ServizioCard
                        name={"Landing page ad alta conversione"}
                        icon={"img/landingpage-icon.png"}
                    />
                    <ServizioCard
                        name={"Social media management"}
                        icon={"img/social-media-marketing-icon.png"}
                    />
                </div>

            </div>
        </section>
    );
}

export default Servizi;