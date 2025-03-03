import React from "react";
import Navbar from "../components/Navbar"
import Foot from "../components/Foot";
import "bootstrap-icons/font/bootstrap-icons.css";

const Services = ()=>{
   return(
    <div>
        <Navbar></Navbar>
        <img src={require('../img/banner.jpg')}  alt="Image1"/>
        <div className="text-center pt-4 pb-4">
            <h1>Mes offres de services</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
            <div className="border_title"></div>
        </div>
        <div className="container">
            <div className="row gy-3">
                <div className="col-sm">
                    <div className="card h-100 pt-5 pb-5">
                        <div className="card-body">
                            <i className="text-primary bi bi-brush h2 "></i>
                            <h2 className="card-title pt-5">UX Design</h2>
                            <p className="card-text"> L'UX Design est une discipline qui consiste à concevoir des produits (sites web,
                            applications mobiles, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations.
                            L'objectif est de rendre l'expérience utilisateur la plus fuide et agréable possible.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card h-100 pt-5 pb-5">
                        <div className="card-body">
                            <i className="text-primary bi bi-code-slash h2 "></i>
                            <h2 className="card-title pt-5">Développement Web</h2>
                            <p className="card-text">Le Développement de sites web consiste à créer des sites internets
                            en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
                             et des frameworks (Bootstrap, React, Angular, etc.)</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card h-100 pt-5 pb-5">
                        <div className="card-body">
                            <i className=" text-primary bi bi-search h2"></i> 
                            <h2 className="card-title pt-5">Référencement</h2>
                            <p className="card-text"> Le Référencement naturel (SEO) est une technique qui consiste à optimiser un site web 
                            pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, ect.).
                            L'objectif est d'attirer un maximun de visiteurs qualifiés sur le site.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Foot></Foot>
</div>
   )
}
export default Services;



