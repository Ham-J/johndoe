import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Row} from 'react-bootstrap';
function Mymodal(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Button variant="danger" onClick={handleShow}>
        En savoir plus
        </Button>

        <Modal show={show} onHide={handleClose} className='modal-lg' centered>
            <div className='bg-dark text-light'>
                <Modal.Header closeButton>
                    <Modal.Title>Mon profil GitHub</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-5 pb-5'>
                    <Row>
                        <Col lg="6" md='6'>
                            <img src="https://avatars.githubusercontent.com/u/19842736?v=4" alt="avatar"></img>
                        </Col>
                        <Col lg="6" md="6" className='pt-2'>
                            <div><i class="bi bi-person"></i> John Doe</div>
                            <hr></hr>
                            <div><i class="bi bi-geo-alt"></i></div>
                            <hr></hr>
                            <div><i class="bi bi-card-heading"></i> As we all know, John Doe's identity is unknown.\r\nI just wanted to contribute without being known.</div>
                            <hr></hr>
                            <div><i class="bi bi-box"></i> Repositories : 1</div>
                            <hr></hr>
                            <div><i class="bi bi-people"></i> Followers : 16</div>
                            <hr></hr>
                            <div><i class="bi bi-people"></i> Following : 0</div>
                        </Col>
                     </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer> 
            </div>
        </Modal>
        </>
    )
}
export default Mymodal;