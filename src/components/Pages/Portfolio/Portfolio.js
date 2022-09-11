import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import PageTitle from "../../PageTitle/PageTitle";
import Projects from "./Projects";
import titleImage from "./images/projects.png";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Portfolio extends Component {
  componentDidMount() {
    AOS.init();
  }
  
  render() {
    return (
      <div>
        <Container id="portfolio">
          <div className="wrapper">
            <PageTitle title="Recent" secondImage={titleImage} />
            <Projects />
          </div>
        </Container>
      </div>
    );
  }
}
