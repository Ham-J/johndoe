
import React from "react";
import Navbar from "../components/Navbar"
import Foot from "../components/Foot";

const Portfolio = ()=>{
    return(
        <div>
            <Navbar></Navbar>
            <img src={require('../img/banner.jpg')}  alt="Image1"/>
            <div className="text-center pt-4 pb-4">
                <h1>Portfolio</h1>
                <p>Voici quelques unes de mes réalisations.</p>
                <div className="border_title"></div>
            </div>
            <div className="container">
                <div className="row gy-3">
                    <div className="col-sm">
                        <div className="card h-100">
                            <div className="card-head"><img src={require('../img/portfolio/fresh-food.jpg')}  alt="Image1"/> </div>
                            <div className="card-body">
                                <h2 className="card-title">Fresh Food</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="/portfolio" className="btn btn-primary">Voir le site</a>   
                            </div>
                            <div className="card-footer">Site réalisé avec PHP et MYSQL</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card h-100">
                            <div className="card-head"> <img src={require('../img/portfolio/restaurant-japonais.jpg')}  alt="Image1"/> </div>
                            <div className="card-body">
                                <h2 className="card-title">Restaurant Akira</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="/portfolio" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">Site réalisé avec Wordpress</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card h-100">
                            <div className="card-head"> <img src={require('../img/portfolio/espace-bien-etre.jpg')}  alt="Image1"/> </div>
                            <div className="card-body">
                                <h2 className="card-title">Espace bien-être</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="/portfolio" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">Site réalisé avec LARAVEL</div>
                        </div>
                    </div>
                </div>
                <div className="row gy-3">
                    <div className="col-sm">
                        <div className="card h-100">
                            <div className="card-head"> <img src={require('../img/portfolio/seo.jpg')}  alt="Image1"/> </div>
                            <div className="card-body">
                                <h2 className="card-title">SEO</h2>
                                <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                                <a href="/portfolio" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">Utilisation des outils du SEO</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card h-100">
                            <div className="card-head"> <img src={require('../img/portfolio/coder.jpg')}  alt="Image1"/> </div>
                            <div className="card-body">
                                <h2 className="card-title">Création d'une API</h2>
                                <p className="card-text">Création d'une API RESTFULL publique</p>
                                <a href="/portfolio" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">PHP-SYMPHONY</div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card h-100">
                            <div className="card-head"> <img src={require('../img/portfolio/coder.jpg')}  alt="Image1"/> </div>
                            <div className="card-body">
                                <h2 className="card-title">Maquette d'un site web</h2>
                                <p className="card-text">Création d'un prototype d'un site</p>
                                <a href="/portfolio" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">Réalisé avec Figma</div>
                        </div>
                    </div>
                </div>
            </div>
        <Foot></Foot>
    </div>
 )
}
export default Portfolio;

