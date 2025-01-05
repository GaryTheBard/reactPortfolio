import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AlbumsByPlayer from "./AlbumData";
import AlbumLinks from "./AlbumLinks";
import PlayerSelector from "./PlayerSelector";
import AlbumSelector from "./AlbumSelector";
import "./App.css";
import "./css/style.css";

const MusicPage = () => {
  const albumKeys = Object.keys(AlbumsByPlayer);
  const x = AlbumsByPlayer;
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [currentAlbum, setCurrentAlbum] = useState(null);

  const link = useMemo(() => {
    if (currentAlbum && currentPlayer != null) {
      return x[currentPlayer].find(p => {return p.album === currentAlbum}).url;
    }
    return '';
  }, [currentAlbum, currentPlayer]);

  return (
    <Container className="music-page-container">
      <div className="text-center my-4">
        <h1 className="music-title">My Music</h1>
      </div>

      <Row className="text-center mb-4">
        <Col>
          <PlayerSelector callback={setCurrentPlayer} myNumber={7} />
        </Col>
        <Col>
          <AlbumSelector callback={setCurrentAlbum} myNumber={7} />
        </Col>
      </Row>

      <Row className="text-center mb-4">
        <Col>
          {link && (
            <iframe
              className="music-iframe"
              src={link}
              width="100%"
              height="400"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )}
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <AlbumLinks />
        </Col>
      </Row>
    </Container>
  );
};

export default MusicPage;
