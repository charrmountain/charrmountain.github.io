import React, { Component } from "react";
import "./style.css";
import { Segment, Container, Image, List, Divider } from "semantic-ui-react";
import logo from "../Container/images/CM_logo_white.png";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import resume  from "../../docs/Resume2022.pdf";


class Footer extends Component {
  // This function returns jsx for a nav-item for a given page.
  render() {
    return (
      <Segment id="footer" inverted vertical>
        <Container textAlign="center">
          <Image centered size="tiny" src={logo} />
          <div className="socials">
            <a href="https://www.linkedin.com/in/charlotte-mountain/" target="_blank" rel="noopener noreferrer">
            <button className="ui icon button" >
              <IconContext.Provider value={{ size: 20 }}>
                <FaLinkedin />
              </IconContext.Provider>
            </button>
            </a>
            <a href="https://github.com/charrmountain/" target="_blank" rel="noopener noreferrer">
            <button className="ui icon button">
              <IconContext.Provider value={{ size: 20 }}>
                <FaGithub />
              </IconContext.Provider>
            </button>
             </a>
            <a href="mailto:charr.mt@gmail.com">
            <button className="ui icon button">
              <IconContext.Provider value={{ size: 20 }}>
                <FiMail />
              </IconContext.Provider>
            </button>
             </a>
             <a href={resume} download="Charlotte Mountain Resume">
            <button className="ui icon button">
              <IconContext.Provider value={{ size: 20 }}>
                <BsDownload />
              </IconContext.Provider>
            </button>
             </a>
          </div>
          <Divider inverted section />
          <p>Made by Charlotte Mountain 2022</p>
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#contact">
              Contact
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
