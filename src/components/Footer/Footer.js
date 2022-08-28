import React, { Component } from "react";
import "./style.css";
import { Segment, Container, Image, List, Divider } from "semantic-ui-react";
import logo from "../Container/images/CM_logo_white.png";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

class Footer extends Component {
  // This function returns jsx for a nav-item for a given page.
  render() {
    return (
      <Segment id="footer" inverted vertical>
        <Container textAlign="center">
          <Image centered size="tiny" src={logo} />
          <div className="socials">
            <button className="ui icon button">
              <IconContext.Provider value={{ size: 20 }}>
                <FaLinkedin />
              </IconContext.Provider>
            </button>
            <button className="ui icon button">
              <IconContext.Provider value={{ size: 20 }}>
                <FaGithub />
              </IconContext.Provider>
            </button>
            <button className="ui icon button">
              <IconContext.Provider value={{ size: 20 }}>
                <BsDownload />
              </IconContext.Provider>
            </button>
          </div>
          <Divider inverted section />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#contact">
              Contact Me
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
