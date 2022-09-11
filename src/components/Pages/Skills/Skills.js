import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import PageTitle from "../../PageTitle/PageTitle";
import Project from "./Project";
import skillsTitle from "./images/skills.png";
import "./style.css";
import { IconContext } from "react-icons";
import {
  FaPhp,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaSalesforce,
  FaBootstrap,
  FaMailchimp,
  FaUikit,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJquery,
  SiVisualstudio,
  SiTailwindcss,
  SiGutenberg,
  SiAlpinedotjs,
  SiZapier,
  SiPhpmyadmin,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import jQuery from "jquery";

let skills = [
  ["PHP", "WordPress", "HTML5", "CSS3", "React"],
  ["JavaScript", "Git", "GitHub", "phpMyAdmin", "MySQL"],
  ["JQuery", "VSCode", "Gutenberg", "Bootstrap", "Tailwind"],
  ["Alpine", "UIKit", "Zapier", "Mailchimp", "Salesforce"],
];

export default class Skills extends Component {
  state = {
    activeItem: "",
  };

  componentDidMount() {
    AOS.init();
    jQuery("#skills .skill").on({
      mouseenter: function () {
        jQuery("#skills .projectRelation").addClass("hover");
        jQuery("#skills .projectRelation span").addClass("fadeIn");
      },
      mouseleave: function () {
        jQuery("#skills .projectRelation").removeClass("hover");
        jQuery("#skills .projectRelation span").removeClass("fadeIn");
      },
    });

    jQuery( window ).resize(function() {
      var viewportWidth = jQuery(window).width();
      if(viewportWidth < 750){
        jQuery('#skills .wrapper').append(jQuery('#skills .projectRelation'));
      }
    });
  }

  handleItemHoverEnter = (e, skill) => {
    this.setState({ activeItem: skill.skill });
    this.renderProjects(skill.skill);
  };

  renderProjects = (skill) => {
    let projects = [];
    if (skill !== "UIKit") {
      projects.push("Agent Elite");
      projects.push("Elite Informer");
    }
    switch (skill) {
      case "HTML5":
      case "CSS3":
      case "React":
      case "JavaScript":
      case "Git":
      case "GitHub":
      case "MySQL":
      case "JQuery":
      case "VSCode":
      case "Bootstrap":
      case "UIKit":
        projects.push("Bootcamp");
        break;
      default:
        break;
    }
    return <Project projects={projects} />;
  };

  renderIcon = (title) => {
    switch (title) {
      case "PHP":
        return <FaPhp />;
      case "WordPress":
        return <FaWordpress />;
      case "HTML5":
        return <FaHtml5 />;
      case "CSS3":
        return <FaCss3Alt />;
      case "React":
        return <FaReact />;
      case "JavaScript":
        return <SiJavascript />;
      case "Git":
        return <FaGitAlt />;
      case "GitHub":
        return <FaGithub />;
      case "phpMyAdmin":
        return <SiPhpmyadmin />;
      case "MySQL":
        return <GrMysql />;
      case "JQuery":
        return <SiJquery />;
      case "VSCode":
        return <SiVisualstudio />;
      case "Gutenberg":
        return <SiGutenberg />;
      case "Bootstrap":
        return <FaBootstrap />;
      case "Tailwind":
        return <SiTailwindcss />;
      case "UIKit":
        return <FaUikit />;
      case "Zapier":
        return <SiZapier />;
      case "Alpine":
        return <SiAlpinedotjs />;
      case "Mailchimp":
        return <FaMailchimp />;
      case "Salesforce":
        return <FaSalesforce />;
      default:
        break;
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Container id="skills">
          <div className="wrapper">
            <PageTitle title="My" secondImage={skillsTitle} />
            <div className="projectRelation">
              <span className="experience"> EXPERIENCE </span>
              {this.renderProjects(activeItem)}
            </div>
            <div
              className="skillsGrid"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-id="SKILLS"
            >
              <Grid columns="five" divided>
                {skills.map((row) => {
                  return (
                    <Grid.Row key={row}>
                      {row.map((skill) => {
                        return (
                          <Grid.Column key={skill}>
                            <div
                              className="skill"
                              name={skill}
                              onMouseOver={(event) =>
                                this.handleItemHoverEnter(event, { skill })
                              }
                            >
                              <IconContext.Provider value={{ size: 70 }}>
                                {this.renderIcon(skill)}
                              </IconContext.Provider>
                              <p>{skill}</p>
                            </div>
                          </Grid.Column>
                        );
                      })}
                    </Grid.Row>
                  );
                })}
              </Grid>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
