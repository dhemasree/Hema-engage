import React from "react";
import { Container } from "react-bootstrap";

import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing flex__center">
      <div className="landing-overlay overlay"></div>
      <Container className="landing-container">
        <div className="landing-hero">
          <p className="text__subtitle landing__hero-top">
            {" "}
            Binge Night 
          </p>

          <h2 className="header__one">Binge watch</h2>
          <h2 className="header__one">All night with</h2>
          <h2 className="header__one">Hundreds of movies</h2>

          <p className="text__subtitle landing__hero-bottom">
            We Recommend, You Watch{" "}
          </p>
          
        </div>
      </Container>
    </div>
  );
}
