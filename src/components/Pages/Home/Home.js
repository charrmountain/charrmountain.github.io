import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";
import name from "./images/name_white.png";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Home extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <Container id="home">
        <Image className="titleImage" src={name} />
        <h3 className="titleJob">WEB DEVELOPER</h3>
      </Container>
    );
  }
}

