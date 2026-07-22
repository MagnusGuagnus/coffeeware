import serviceListStyles from "./serviceslist.module.css";
import DetailedServiceCard from "./DetailedServiceCard.tsx";
import chiSiamoStyles from "../about/chisiamo.module.css";
import webDesignIcon from "/img/services/webdesign_icon.png";
import aiAutomationIcon from "/img/services/ai_automation_icon.png";
import eCommerceIcon from "/img/services/ecommerce_icon.png";
import webScrapingIcon from "/img/services/web_scraping_icon.png";
import landingPageIcon from "/img/services/landing_page_icon.png";
import appMobileIcon from "/img/services/mobile_app_icon.png";
import socialMediaIcon from "/img/services/social_media_icon.png";

export default function ServicesList() {
    return (
        <div id={"services-list"} className={`py-5 container ${serviceListStyles.serviceListContainer}`}>
            <h4 className={`${chiSiamoStyles.topTitle} text-center`}>COSA OFFRIAMO</h4>
            <h2 className={`${chiSiamoStyles.title} text-center`}>Di cosa hai bisogno?</h2>
            <div className={"row"}>
                <div className={"container mb-3"}>
                    <DetailedServiceCard
                        title={"AI Automation"}
                        imageUrl={aiAutomationIcon}
                        description={
                            <>
                                Automatizziamo <strong>processi ripetitivi e flussi di lavoro complessi</strong> integrando
                                <strong> soluzioni di intelligenza artificiale su misura</strong>.
                                Dalla gestione automatica dei dati ai <strong>chatbot intelligenti</strong>,
                                progettiamo sistemi che riducono i costi operativi e aumentano l’efficienza.
                            </>
                        }
                        highlight={true}
                    />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-sm mb-3"}>
                    <DetailedServiceCard
                        title={"Web Design"}
                        imageUrl={webDesignIcon}
                        description={
                            <>
                                Progettiamo <strong>siti web moderni, veloci e responsive</strong>, curando ogni dettaglio di
                                design e <strong>user experience (UX)</strong>.
                                Realizziamo interfacce ottimizzate per <strong>conversioni e performance</strong>,
                                garantendo un impatto professionale online.
                            </>
                        }
                    />
                </div>
                <div className={"col-sm mb-3"}>
                    <DetailedServiceCard
                        title={"E-Commerce"}
                        imageUrl={eCommerceIcon}
                        description={
                            <>
                                Sviluppiamo <strong>piattaforme e-commerce scalabili e sicure</strong>,
                                con integrazione pagamenti e gestione catalogo.
                                Creiamo <strong>esperienze d’acquisto ottimizzate</strong>
                                che trasformano i visitatori in clienti fidelizzati.
                            </>
                        }
                    />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-sm mb-3"}>
                    <DetailedServiceCard
                        title={"Web Scraping"}
                        imageUrl={webScrapingIcon}
                        description={
                            <>
                                Creiamo <strong>sistemi di raccolta dati automatizzata</strong> da fonti web,
                                ideali per <strong>monitoraggio prezzi e analisi di mercato</strong>.
                                Le nostre soluzioni di scraping sono <strong>stabili, performanti e conformi alle normative</strong>.
                            </>
                        }
                        popolare={true}
                    />
                </div>
                <div className={"col-sm mb-3"}>
                    <DetailedServiceCard
                        title={"Landing Page"}
                        imageUrl={landingPageIcon}
                        description={
                            <>
                                Realizziamo <strong>landing page ottimizzate per la conversione</strong> e la
                                <strong> lead generation</strong>.
                                Ogni pagina è progettata con copy strategico e
                                <strong> call-to-action efficaci</strong> per massimizzare i risultati.
                            </>
                        }
                    />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-sm mb-3"}>
                    <DetailedServiceCard
                        title={"App Mobile"}
                        imageUrl={appMobileIcon}
                        description={
                            <>
                                Sviluppiamo <strong>applicazioni mobile intuitive e performanti</strong>,
                                con progettazione <strong>UI/UX</strong> e
                                <strong> pubblicazione su App Store e Google Play</strong>.
                                Trasformiamo la tua idea in un’app concreta e funzionale.
                            </>
                        }
                    />
                </div>
                <div className={"col-sm mb-3"}>
                    <DetailedServiceCard
                        title={"Social Media"}
                        imageUrl={socialMediaIcon}
                        description={
                            <>
                                Gestiamo <strong>strategie di social media marketing</strong>,
                                creando contenuti coinvolgenti e
                                <strong> campagne pubblicitarie mirate</strong>.
                                Aumentiamo visibilità, interazioni e crescita del brand.
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
