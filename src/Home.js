import React from "react";
import { Container, Button } from "react-bootstrap";
import PlayerSelector from "./PlayerSelector";
import "./App.css";
import "./css/style.css";
import Carousel from "react-bootstrap/Carousel";

const HomePage = () => (
  <Container fluid className="p-0">
    <div className='tan2LightBackground' style={{ 
      color: 'white', 
      textShadow: '2px 2px 4px #000000',
      animation: 'fadeIn 2s ease-in-out' 
    }}>
      <br />
      <h1 className="medievalsharp-regular largeText text-center">
        <strong>
          <span className="burgColor">G</span>
          <span className="dkGreenColor">ary The Bard</span>
        </strong>
      </h1>
      <p className="medievalsharp-regular mediumText text-center">
        <strong>
          <span className="burgColor">M</span>usician; Game Developer; Software Engineer.
        </strong>
        <br />
        A <span className="burgColor">H</span>uman Artist.
      </p>
    </div>

    <div className='dkGreenBackground d-flex justify-content-center align-items-center p-0'>
      <Carousel style={{ animation: 'fadeIn 2s ease-in-out' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/dk.jpeg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/os.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/cos.jpeg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </Container>
);

export default HomePage;
