import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button
} from 'react-bootstrap';
import logo from "../logo.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Innewcompanies from '../Pages/Innewcompanies';
import Digitaldataops from '../Pages/Digitaldataops';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
                    {/*fixed="top"*/}
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="35"
                                width="60"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />DATA FABRIC
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="/About">О Data Fabric</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Innewcompanies" component={Innewcompanies} />
                        <Route exact path="/Digitaldataops" component={Digitaldataops} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Header;