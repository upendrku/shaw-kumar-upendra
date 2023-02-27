import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = ({ open, children }) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">.U.K.</Navbar.Brand>
                <Nav className="text-right">
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
