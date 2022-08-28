import React from "react";
import { Container, Image } from "semantic-ui-react";
import name from "./images/name_white.png";
import "./style.css";

const Home = () => (
  <Container id="home">
    <Image className="titleImage" src={name} />
    <h3 className="titleJob">WEB DEVELOPER</h3>
  </Container>
);

export default Home;
