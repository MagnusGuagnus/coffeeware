import computer from '/public/img/Computer.png';

function Header() {
    return (
        <>
            <section 
                id="home-section" 
                style={{ paddingTop: "100px", backgroundColor: "var(--sfondi)" }}
            >
                <div className="container">
                    <div className="row">
                        <div id="testo-titolo" className="col-md-6">
                            <h2 style={{ color: "var(--bianco-scuro)", fontSize: "32px"}}>
                                <b>Trasformiamo la tua idea in realtà.</b>
                            </h2>
                            <br />
                            <p style={{ fontSize: "20px", color: "var(--bianco-scuro)" }}>
                                Da studenti di ingegneria informatica a <strong>sviluppatori web</strong> per aziende e privati a <strong>Trento</strong> e <strong>Vicenza</strong>.
                                Ciò che ci rende forti nel settore è la nostra <b>passione</b>!
                            </p>           
                            <a href="#prezzi" style={{ color: "white", marginTop: "10px", marginRight: "5px" }} className="btn btn-principale button-href">
                                <b>Scopri i nostri piani</b>
                            </a>
                            <a href="#form-contatti" style={{ color: "white", marginTop: "10px" }} className="btn btn-contattaci button-href">
                                <b>Contattaci</b>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <img 
                                id="img-inizio" 
                                src={computer} 
                                alt="computer stilizzato con interfaccia grafica creativa" 
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="wave"></div>
        </>
    );
}

export default Header;
