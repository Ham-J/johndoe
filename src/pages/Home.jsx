
import React from "react";
import Foot from "../components/Foot";
import { Container, ProgressBar, Row, Col} from "react-bootstrap";
import Navbar from "../components/Navbar";
import Mymodal from "../components/Modal";
const Home = ()=>{

 return(
    <div> 
     <Navbar></Navbar>
        <Container className="fond" fluid>
            <h1 className="pb-4">Bonjour, je suis John Doe</h1>
            <h2 className="pb-4">Développeur web Full stack</h2>  
            <Mymodal></Mymodal> 
        </Container>
        <Container className="shadow-lg mb-5 mt-5 bg-white rounded" >
            <Row className="justify-content-center">
                <Col lg="6" md='6'>
                    <h3>A propos</h3>
                    <div className="line_title"></div>
                    <img src={require('../img/john-doe-about.jpg')}  alt="image1"/>
 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel auctor justo, 
                    bibendum gravida arcu. Morbi lobortis ut mi a fermentum. Vestibulum blandit bibendum mi. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel auctor justo, 
                    bibendum gravida arcu. Morbi lobortis ut mi a fermentum. Vestibulum blandit bibendum mi. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel auctor justo, 
                    bibendum gravida arcu. Morbi lobortis ut mi a fermentum. Vestibulum blandit bibendum mi. </p>
                </Col>
                <Col lg="6" md="6">
                    <h3>Mes compétences</h3>
                    <div className="line_title"></div>
                    <div>
                        <p>HTML5 90%</p>
                        <ProgressBar variant="success" now={90} />
                        <p>CSS3 80%</p>
                        <ProgressBar variant="info" now={80} />
                        <p>JAVASCRIPT 70%</p>
                        <ProgressBar variant="warning" now={70} />
                        <p>PHP 60%</p>
                        <ProgressBar variant="danger" now={60} />
                        <p>React 50%</p>
                        <ProgressBar variant="primary" now={50} />
                    </div>
                </Col>
            </Row>
        </Container>
    <Foot></Foot>
 </div>

 )
}
export default Home;