import React, { useState } from "react";
import "./css/style.css";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

const Header = ({ brand, links }) => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter+1);
  };
  return (
    <Navbar  expand="lg" className="naviBar">
      {/* <div>{counter}</div>
      <div><button onClick={handleClick}>Click me</button></div> */}
      <LinkContainer to="/">
        <Navbar.Brand>{brand}</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="m-auto">
        <div className='headerImg'>
      <img
          className="d-block w-100"
          src={ require('./img/gtbLogoDraft.png') }
          alt="Third slide"
         
        />
        </div>
          {links.map((link) => {
            if (link.links && link.links.length > 0) {
              return (
                <NavDropdown title={link.label}>
                  {link.links.map((sublink) => {
                    return (
                      <LinkContainer to={sublink.path}>
                        <NavDropdown.Item>{sublink.label}</NavDropdown.Item>
                      </LinkContainer>
                    );
                  })}
                </NavDropdown>
              );
            }
            return link.path ? (
              <LinkContainer to={link.path}>
                <Nav.Link>{link.label} </Nav.Link>
              </LinkContainer>
            ) : (
              <></>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
