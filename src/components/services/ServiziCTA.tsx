function ServiziCTA() {
    return (
        <section
            style={{
                paddingTop: "90px",
                paddingBottom: "90px",
            }}
        >
            <div className="container text-center position-relative z-1">
                <h3 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
                    Non solo web design.
                </h3>
                <p style={{paddingLeft: "15%", paddingRight: "15%", fontSize: "1.2rem"}} className="mb-4">
                    Realizziamo siti web professionali… e sì, <b>beviamo tanto caffè!</b>☕
                    Ma non finisce qui: offriamo un ampio catalogo di <strong>servizi informatici</strong>.<br/>
                </p>
                <button
                    className="btn btn-primary btn-principale btn-lg mt-4 "
                    style={{ minWidth: "200px", border: "none", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
                    aria-label="Inizia la configurazione del tuo sito"
                >
                    💡️ Scopri come possiamo aiutarti
                </button>
            </div>
        </section>
    );
}
export default ServiziCTA;