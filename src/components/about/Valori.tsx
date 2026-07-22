import valoriStyles from "./valori.module.css"
import chiSiamoStyles from "./chisiamo.module.css";

export default function Valori(){
    return (
        <section id={"valori"} className={`${valoriStyles.storiaSection}`}>
            <div className={"container"}>
                <h4 className={`${chiSiamoStyles.topTitle} text-center`}>I NOSTRI PRINCIPI</h4>
                <h2 className={`${chiSiamoStyles.title} text-center`}>I valori che ci guidano</h2>
                <div className={"row"}>


                    <div data-aos="zoom-in-up" className="col-lg d-flex justify-content-center">
                        <div className={`${valoriStyles.valoriCard} text-center`}>
                            <i className={`${valoriStyles.iconColor} bi bi-gem fs-1 mb-3`}></i>
                            <h3 className={`${valoriStyles.cardTit}`}>Qualità</h3>
                            <p className={`${valoriStyles.valoriText}`}>Ogni progetto è curato nei minimi dettagli. Non ci accontentiamo del buono, puntiamo sempre all'eccellenza.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="col-lg d-flex justify-content-center">
                        <div className={`${valoriStyles.valoriCard} text-center`}>
                            <i className={`${valoriStyles.iconColor} bi-clock fs-1 mb-3`}></i>
                            <h3 className={`${valoriStyles.cardTit}`}>Puntualità</h3>
                            <p className={`${valoriStyles.valoriText}`}>Sappiamo bene che il tempo dei nostri clienti è prezioso, per questo le scadenze per noi sono sacre.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="col-lg d-flex justify-content-center">
                        <div className={`${valoriStyles.valoriCard} text-center`}>
                            <i className={`${valoriStyles.iconColor} bi bi-rocket-takeoff fs-1 mb-3`}></i>
                            <h3 className={`${valoriStyles.cardTit}`}>Creatività</h3>
                            <p className={`${valoriStyles.valoriText}`}>Che sia un sito web o programma, nei nostri progetti ci spingiamo sempre oltre per trovare soluzioni innovative e, perché no, creative!</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="col-lg d-flex justify-content-center">
                        <div className={`${valoriStyles.valoriCard} text-center`}>
                            <i className={`${valoriStyles.iconColor} bi bi-chat-heart fs-1 mb-3`}></i>
                            <h3 className={`${valoriStyles.cardTit}`}>Relazione</h3>
                            <p className={`${valoriStyles.valoriText}`}>Non considerateci fornitori, siamo partner. Ci immergiamo nella vostra realtà per creare soluzioni su misura.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}