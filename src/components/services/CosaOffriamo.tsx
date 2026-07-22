import designProfessionale from '/public/img/DesignProfessionale.png';
import interfacciaMobileFriendly from '/public/img/InterfacciaMobileFriendly.png';
import graficaCreativa from '/public/img/GraficaCreativa.png';
import ottimizzazioneSEO from '/public/img/OttimizzazioneSEO.png';
import conformitaNorme from '/public/img/ConformitaNorme.png';
import creativita from '/public/img/creativita.png';


function CosaOffriamo() {
    return (
    <>
        <div id="cosa-offriamo-caratteristiche" className="wave2">
            <h2 style={{paddingTop: "80px", color: "white", fontSize: "40px", textAlign: "center"}}><b>Cosa offriamo</b></h2>
        </div>
        <section style={{ backgroundColor: "var(--sfondi)", paddingTop: "120px" }}>
            <div className="container">
                <div className="row" style={{ marginBottom: "40px" }}>
                    <div className="col-sm-6 text-center">
                        <img className="img-cosa-offriamo" src={designProfessionale} alt="pagina web in creazione" />
                    </div>
                    <div className="col-sm-6 titolo-cosa-offriamo">
                        <h2 className="cosa-offriamo" style={{ color: "white" }}>Design professionale</h2>
                        <p className="cosa-offriamo-text" style={{ color: "white" }}>
                            È fondamentale per un'azienda avere un design che, prima di tutto, la faccia risultare
                            <b>seria</b> e <b>affidabile</b>.
                        </p>
                    </div>
                </div>

                <div className="row" style={{ marginBottom: "40px" }}>
                    <div className="col-sm-6 titolo-cosa-offriamo">
                        <h2 className="cosa-offriamo" style={{ color: "white" }}>Interfaccia mobile-friendly</h2>
                        <p className="cosa-offriamo-text" style={{ color: "white" }}>
                            Circa il <b>60%</b> del traffico online viene da dispositivi <b>mobili</b>.
                            Questo vuol dire che è fondamentale che il proprio sito venga ottimizzato per 
                            <b>cellulari</b>.<br />
                            <a style={{ fontSize: "12px", color: "white" }} href="https://leelinesourcing.com/it/mobile-vs-desktop-statistics">
                                <i>(Fonte: leelinesourcing.com)</i>
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6 text-center">
                        <img className="img-cosa-offriamo" src={interfacciaMobileFriendly} alt="sito web ottimizzato per mobile" />
                    </div>
                </div>

                <div className="row" style={{ marginBottom: "40px" }}>
                    <div className="col-sm-6 text-center">
                        <img className="img-cosa-offriamo" src={graficaCreativa} alt="tavolozza con colori e pennello" />
                    </div>
                    <div className="col-sm-6 titolo-cosa-offriamo">
                        <h2 className="cosa-offriamo" style={{ color: "white" }}>Grafica creativa</h2>
                        <p className="cosa-offriamo-text" style={{ color: "white" }}>
                            Serietà a parte, è molto utile per un'azienda avere un lato <b>creativo</b> nel design.
                            Infatti, il nostro scopo sul sito non è sorgere timore nel cliente, bensì creare <b>vicinanza</b> con l'azienda.
                        </p>
                    </div>
                </div>

                <div className="row" style={{ marginBottom: "40px" }}>
                    <div className="col-sm-6 titolo-cosa-offriamo">
                        <h2 className="cosa-offriamo" style={{ color: "white" }}>Ottimizzazione SEO</h2>
                        <p className="cosa-offriamo-text" style={{ color: "white" }}>
                            L'ottimizzazione <b>SEO</b> (<i>Search Engine Optimization</i>) permette di far <b>salire</b> di "graduatoria" il tuo sito e 
                            mostrarlo in cima ai <b>risultati</b> di ricerca. Noi ci occuperemo anche di questo.
                        </p>
                    </div>
                    <div className="col-sm-6 text-center">
                        <img className="img-cosa-offriamo" src={ottimizzazioneSEO} alt="grafico in crescita" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 text-center">
                        <img className="img-cosa-offriamo" src={conformitaNorme} alt="contratto in regola" />
                    </div>
                    <div className="col-sm-6 titolo-cosa-offriamo">
                        <h2 className="cosa-offriamo" style={{ color: "white" }}>Conformità alle norme</h2>
                        <p className="cosa-offriamo-text" style={{ color: "white" }}>
                            Se necessario, ci occuperemo anche di implementare i banner dei <b>cookies</b> e le <b>policy</b> obbligatorie,
                            in modo da essere <b>conformi</b> a tutte le norme che tutelano la navigazione degli utenti nel web.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section style={{height: "340px", paddingTop: "100px", paddingBottom: "100px", backgroundColor: "var(--sfondi)"}}>
            <p style={{fontSize: "20px", textAlign: "center", color: "white"}}>La nostra parola chiave:</p>
            <div className="text-center container">
                <img id="creativita" src={creativita} alt="scritta creatività" style={{width: "90%", maxWidth: "600px"}}></img>
            </div>
        </section>
        <div className="wave"></div>
    </> 
    );
}

export default CosaOffriamo;

/*


*/