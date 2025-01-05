import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./App.css";
import "./css/style.css";
import "./animations.css";

const AboutPage = () => {
  const [view, setView] = useState("home");

  const renderView = () => {
    switch (view) {
      case "artist":
        return (
          <div className="content animate-left">
            <img src="placeholder.jpg" alt="Artist" className="styled-image" />
            <div className="text-section">
              <p className="styled-paragraph">
                I believe that art is the path to immortality. It can seem as if my interest in art is rooted in fear of death or the desire for recognition, but I like to think of it as a way to leave behind a trace of my existence. I'm a self-taught singer-songwriter and composer. I have made and released 4 solo albums under the stage name Gary The Bard. Musically, I strive to create music that is melodically and lyrically rich. I primarily operate within the genres of Folk and Rock, but often explore alternative genres such as Classical, Country, Jazz, and Electronic music. I do not like to confine myself to a single style. In addition to music, I also enjoy expressing my creativity in various mediums. With varying degrees of proficiency, I'm a Writer, Poet, 3D Modeler, 2D Artist, Animator, and Painter.
              </p>
            </div>
          </div>
        );
      case "professional":
        return (
          <div className="content animate-right">
            <div className="text-section">
              <p className="styled-paragraph">
                I'm currently working as a Software Developer for The Walt Disney Company. I am well-versed in the following programming languages: Java, C#, C, Javascript, HTML, CSS, and SQL. I possess a bachelor's degree from the University Of Florida. I have over 15 years of experience in the pharmaceutical and manufacturing industries. I have led numerous software implementations on a global scale. I am most fond of work that is mentally stimulating and allows for creativity.
              </p>
            </div>
            <img src="placeholder.jpg" alt="Professional" className="styled-image" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="about-me-container">
      <div className="button-header">
        <Button
          variant="primary"
          className={`header-button ${view === "artist" ? "pressed" : ""}`}
          onClick={() => setView("artist")}
        >
          The Artist
        </Button>
        <Button
          variant="secondary"
          className={`header-button ${view === "professional" ? "pressed" : ""}`}
          onClick={() => setView("professional")}
        >
          The Professional
        </Button>
      </div>
      {renderView()}
    </Container>
  );
};

export default AboutPage;
