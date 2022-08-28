import React from "react";
import { Container } from "semantic-ui-react";
import Profile from "./Profile.js";
import PageTitle from "../../PageTitle/PageTitle";
import image from "./images/letsget.png";

import "./style.css";

const About = () => (
  <div>
    <Container id="about">
      <div className="wrapper">
        <PageTitle title="Familiar" image={image} />
        <Profile />
      </div>
    </Container>
  </div>
);

export default About;
