import teamStyles from "./team.module.css";
import chiSiamoStyles from "./chisiamo.module.css";

export default function Team() {
    return (
        <section className={`${teamStyles.teamSection}`}>
            <div className={"container"}>
                <h4 className={`${chiSiamoStyles.topTitle} text-center`}>I BEVITORI DI CAFFÈ</h4>
                <h2 className={`${chiSiamoStyles.title} text-center`}>Il nostro team</h2>
                <div className={"row justify-content-center"}>
                    <div data-aos="fade-right" className={`col-sm d-flex justify-content-center`}>
                        <div className={teamStyles.teamCard}>
                            <img
                                src="/img/matteo.png"
                                alt="Matteo"
                                className={teamStyles.teamImg}
                            />
                            <h3 className={`${teamStyles.cardTit}`}>Matteo</h3>
                            <h4 className={`${teamStyles.teamRole}`}>Backend developer</h4>
                            <p className={`${teamStyles.teamText}`}>
                                Progettato per resistere a qualsiasi sfida, il nostro codice è solido, scalabile e sempre pronto a evolversi con le tue esigenze.
                            </p>
                            <div className={teamStyles.socialContainer}>
                                <a href="https://github.com/MagnusGuagnus" target="_blank" rel="noopener noreferrer">
                                    <i className={`${teamStyles.socialIcon} ${teamStyles.github} bi bi-github fs-1 mb-3`}></i>
                                </a>

                                <a href="https://www.linkedin.com/in/matteo-magnaguagno-0b239726b/" target="_blank" rel="noopener noreferrer">
                                    <i className={`${teamStyles.socialIcon} ${teamStyles.linkedin} bi bi-linkedin fs-1 mb-3`}></i>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div data-aos="fade-left" className={`col-sm d-flex justify-content-center`}>
                        <div className={teamStyles.teamCard}>
                            <img
                                src="/img/tommaso.png"
                                alt="Tommaso"
                                className={teamStyles.teamImg}
                            />
                            <h3 className={teamStyles.cardTit}>Tommaso</h3>
                            <h4 className={teamStyles.teamRole}>Frontend & UX Designer</h4>
                            <p className={teamStyles.teamText}>
                                Tutto parte da un'idea creativa, ma è la passione per i dettagli che trasforma un progetto in un'esperienza unica.
                            </p>

                            <div className={teamStyles.socialContainer}>
                                <a href="https://github.com/niftyduck" target="_blank" rel="noopener noreferrer">
                                    <i className={`${teamStyles.socialIcon} ${teamStyles.github} bi bi-github fs-1 mb-3`}></i>
                                </a>

                                <a href="https://www.linkedin.com/in/tommaso-parlato-a64247221/" target="_blank" rel="noopener noreferrer">
                                    <i className={`${teamStyles.socialIcon} ${teamStyles.linkedin} bi bi-linkedin fs-1 mb-3`}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}