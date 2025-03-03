
import React from "react";
import Navbar from "../components/Navbar"
import Foot from "../components/Foot";

const Mentions = ()=>{
    return(
        <div>
            <Navbar></Navbar>
            <h1 className="text-center pt-5 pb-2">Mentions Légales</h1>
            <div className="border_title mb-5"></div>
            <div className="accordion  mb-5 pb-5" id="accordionExample">
                <div className="accordion-item">
                <div className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Editeur du site </button>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className='list-unstyled'>
                            <li><h2>John Doe</h2></li>
                            <li><i className="bi bi-map"></i> 40 rue Laure Diebold</li>
                            <li><i className="bi bi-geo-alt"></i>69009 Lyon, France</li>
                            <li><i className="bi bi-phone"></i> 10 20 30 40 50</li>
                            <li> <i className="bi bi-envelope-at"></i>john.doe@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Hébergeur</button>
                </div>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <h2>alwaysdata</h2>
                        <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
                        <p><i className="bi bi-globe"></i><a href="https://www.alwaysdata.com/fr/" target="blank"> https://www.alwaysdata.com/fr/</a> </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Crédits</button>
                </div>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h2>Crédits</h2>
                        <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="blank">centre Européen de Formation</a></p>
                        <p>Les images utilisées sur ce site sont libres de droits et ont étés obtenues sur le site <a href="https://pixabay.com/fr/" target="blank">Pixabay</a></p>
                        <p>Le Favicon de ce site a été fournie par <a href="https://www.flaticon.com/fr/icone-gratuite/anonyme_10946911?term=john+doe&page=1&position=1&origin=search&related_id=10946911" target="blank"> john doe Icons erstellt von Freepik-Falticon</a></p>
                    </div>
                </div>
            </div>
        </div>
    <Foot></Foot>
</div>
 )
}
export default Mentions;
