
import React from "react";
import Navbar from "../components/Navbar"
import Foot from "../components/Foot";
import { Container, Col, Row } from "react-bootstrap";

const Contact = ()=>{
    return(
        <div>
            <Navbar></Navbar>
            <div className="text-center pt-4 pb-4">
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir
                le formulaire de contact.
                </p>
                <div className="border_title"></div>
            </div>
            <Container className="shadow-lg mb-5 mt-5 bg-white rounded" >
                <Row className="justify-content-center">
                    <Col lg="6" md='6'>
                        <h2>Formulaire de contact</h2>
                        <div className="line_title"></div>
                        <form action="index.html" method="post" className="pt-2">
                        <div className="mb-2">
                            <input type="text" className="form-control" id="nom" required placeholder="Votre nom"></input>
                        </div>
                        <div className="mb-2">
                            <input type="email" className="form-control" id="email" required  placeholder="Votre adresse mail"></input>
                        </div>
                        <div class="mb-2">
                            <input type="tel" className="form-control" id="phone" required placeholder="Votre numéro de téléphone"></input>
                        </div>
                        <div class="mb-2">
                            <input type="text" className="form-control" id="nom" required placeholder="Sujet"></input>
                        </div>
                        <div class="mb-2">
                            <textarea rows="10" cols="50" className="form-control" id="message"  placeholder="Votre message" required></textarea>
                        </div>
                        <div class="d-grid col-2  mx-auto">
                            <button className="btn btn-primary" type="submit">Envoyer</button>
                        </div>
                    </form>
                </Col>
                <Col lg="6" md="6">
                    <h2>Mes coordonnées</h2>
                    <div className="line_title"></div>
                    <div className="pt-2">
                        <p>John Doe</p>
                        <address>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-map"></i> 40 rue Laure Diebold</li>
                                <li><i className="bi bi-geo-alt"></i> 69009 Lyon,France</li>
                                <li> <i className="bi bi-phone"></i> 10 20 30 40 50</li>
                                <li><i className="bi bi-envelope-at"></i> john.doe@gmail.com</li>
                            </ul>
                        </address>
                        <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=40%20rue%20Laure%20diebold,%20Lyon+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="google"></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    <Foot></Foot>
    </div>
        
    )
}
export default Contact;
