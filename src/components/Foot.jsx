import React from 'react';

import "bootstrap-icons/font/bootstrap-icons.css";

function foot(){
 return(
    <footer className="text-center text-lg-start bg-dark text-light">
        <div className="container text-center text-md-start pt-5 pb-5">
            <div className="row mt-3">
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <strong className="text-uppercase fw-bold"> John Doe</strong>
                    <ul className="list-unstyled mt-4">
                        <li>40 rue Laure Diebold</li>
                        <li>69009 Lyon, France </li>
                        <li>10 20 30 40 50</li>
                        <li>john.doe@gmail.com</li>
                        <li>
                            <a href="https://github.com/" target="blank" className="social" rel="nofollow"><i class="bi bi-github"></i></a>
                            <a href='https://x.com/?lang=fr' className="social" target="blank" rel="nofollow"><i class="bi bi-twitter"></i></a>
                            <a href='https://fr.linkedin.com/' className="social" target="blank" rel="nofollow"><i class="bi bi-linkedin"></i></a>
                        </li>
                    </ul>
                </div>


                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <strong className="text-uppercase fw-bold">Liens utiles</strong>
                    <ul className='list-unstyled mt-4'>
                        <li><a href="/" className="text-reset text-decoration-none">Accueil</a></li>
                        <li> <a href="/services" className="text-reset text-decoration-none">Services</a></li>
                        <li><a href="/portfolio" className="text-reset text-decoration-none">Portfolio</a></li>
                        <li><a href="/contact" className="text-reset text-decoration-none">Me Contacter</a></li>
                        <li><a href="/mentions" className="text-reset text-decoration-none">Mentions légales</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <strong className="text-uppercase fw-bold">Mes dernières réalisations</strong>
                    <ul className='list-unstyled mt-4'>
                        <li><a href="/portfolio" className="text-reset text-decoration-none">Fresh Food</a></li>
                        <li><a href="/portfolio" className="text-reset text-decoration-none">Restaurant Akira</a></li>
                        <li><a href="/portfolio" className="text-reset text-decoration-none">Espace bien-être</a></li>
                        <li><a href="/portfolio" className="text-reset text-decoration-none">SEO</a></li>
                        <li><a href="/portfolio" className="text-reset text-decoration-none">Création d'une API</a></li>
                        <li><a href="/portfolio" className="text-reset text-decoration-none">Maquette d'un site</a></li>
                    </ul>
                </div>
             </div>

         </div>

    </footer>
 )
}
export default foot;