import React, { useState } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import ModalLeitner from './ModalLeitner'
function Header() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='pt-4'>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="#home">Simple Memrise</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/leitner">
                                <Nav.Link className='text-light' >leitner</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="learnedwords">
                                <Nav.Link className='text-light' >Learned Words</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-light' onClick={() => setModalShow(true)}> About leitner</Nav.Link>
                            <ModalLeitner
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header
