import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Form from "./Form";
import touch from "./images/touch.png";
import "./style.css";
import PageTitle from "../../PageTitle/PageTitle";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Contact extends Component {
  componentDidMount() {
      AOS.init();
  }
  
  render() {
    return (
      <div>
        <Container id="contact">
          <div className="wrapper">
            <PageTitle title="Get In " secondImage={touch} />
            <div
              className="skills_grid"
              data-aos-id="contact"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Form />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
