import mobileStyles from "./mobilecontainer.module.css";

function ChiSiamoCTA() {
    return (
        <section className={`${mobileStyles.mobileContainer} mt-5`}>
            <div className="container text-left">
                <div className="row justify-content-center align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-7 ps-4 pe-4 ps-md-5">
                        <h3 className="fw-bold mb-3 fs-2">
                            Chi siamo?
                        </h3>
                        <p className="chi-siamo-text mb-4">
                            Siamo sviluppatori che progettano soluzioni digitali su misura. Realizziamo siti web, software, automazioni in Python, sistemi di web scraping e integrazioni AI per semplificare processi e migliorare l’efficienza.
                        </p>

                        <a
                            href={"/chi-siamo"}
                            className="btn btn-primary btn-principale btn-lg mt-4 waving-btn"
                            style={{ minWidth: "200px", border: "none", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                            aria-label="Inizia la configurazione del tuo sito"
                        >
                            <span id={"hello"}>👋</span> Scopri chi siamo
                        </a>
                    </div>
                    <div className="col-md-5" style={{ textAlign: "center" }}>
                        <img id="caffe-img" src="img/caffe-immagine.png" alt="Tazza di caffè con logo Coffeeware"/>
                    </div>
                </div>
                <div id={"divisorio-coffee"}></div>
            </div>
        </section>
    );
}

export default ChiSiamoCTA;




/*export default function ChiSiamoCTA() {
    return (
        <>
            <div className="chi-siamo-cta-div">
                <div className="wave"></div>
                <div className="container d-flex flex-column-reverse flex-md-row justify-content-center align-items-center chi-siamo-div-container">
                    <div className="col-md-8" id="titolo-chi-siamo-CTA">
                        <h3 className="fw-bold mb-3 text-white" style={{ fontSize: "2rem" }}>
                            Non ti abbiamo convinto?
                        </h3>
                        <p style={{ fontSize: "1.2rem"}} className="mb-4 text-white">
                            Prendiamoci del tempo per conoscerci meglio.<br />
                            Potremmo sorprenderti.
                        </p>
                        <button
                            className="btn btn-primary btn-principale btn- btn-lg mt-4"
                            style={{ minWidth: "200px", border: "none", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                            aria-label="Scopri chi siamo"
                        >
                            Scopri chi siamo
                        </button>
                    </div>
                    <div className="col-md-4">
                        <img src="img/caffe-immagine.png" id="immagine_chi_siamo" alt="Foto di Tommaso e Matteo"/>
                    </div>
                </div>


            </div>
            <div className="wave3"></div>
        </>
    );
}*/
