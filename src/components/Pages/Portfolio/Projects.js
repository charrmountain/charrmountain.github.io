import React, { Component } from "react";
import satellite from "./images/sat.png";
import met from "./images/met.png";
import ferociousimg from "./images/ferocious.png";
// import weatherimg from "./images/weather.png";
import news from "./images/news.png";
// import burger from "./images/burger.png";
// import note from "./images/notes.png";
// import work from "./images/planner.png";
import satelliteGif from "./gifs/whatsup.gif";
import metGif from "./gifs/ADayOut.gif";
// import weatherGif from "./gifs/weather.gif";
// import burgerGif from "./gifs/Burger.gif";
// import noteGif from "./gifs/noteDemo.gif";
// import workGif from "./gifs/work.gif";
import { Menu, Modal, Grid, Transition, Image } from "semantic-ui-react";
import { IconContext } from "react-icons";
import {
  FaPhp,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaWordpress,
  FaGithub,
  FaBootstrap,
  FaUikit,
} from "react-icons/fa";
import { SiJavascript, SiJquery, SiGutenberg } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

let pages = {
    greenPro: {
    title: "Green Pro Cleaning",
    source: "Lead Developer",
    employee: "Ferocious Media",
    about:
      "WordPress site created for Green Pro Cleaning.",
    image: ferociousimg,
    gif: "",
    github: "",
    href: "https://gogreenprocleaning.com/",
  },
  craigs: {
    title: "Craig's Services",
    source: "Lead Developer",
    employee: "Ferocious Media",
    about:
      "WordPress site created for Craig's Services.",
    image: ferociousimg,
    gif: "",
    github: "",
    href: "https://craigsserivces.com/",
  },
  silverado: {
    title: "Silverado Mechanical",
    source: "Lead Developer",
    employee: "Ferocious Media",
    about:
      "WordPress site created for Silverado Mechanical.",
    image: ferociousimg,
    gif: "",
    github: "",
    href: "https://silveradomechanical.com/",
  },
  emerald: {
    title: "Emerald Home Services",
    source: "Lead Developer",
    employee: "Ferocious Media",
    about:
      "WordPress site created for Emerald Home Services.",
    image: ferociousimg,
    gif: "",
    github: "",
    href: "https://emeraldhomeservices.com/",
  },
  informer: {
    title: "Elite Informer",
    source: "Lead Developer",
    employee: " Agent Elite",
    about:
      "Exclusive Real Estate Articles and Offers Geared toward Professionals looking to get the most out of their business",
    image: news,
    gif: "",
    github: "",
    href: "https://eliteinformer.com",
  },
  whatsup: {
    title: "What's Up There?",
    source: "Bootcamp",
    about:
      "An application that finds the satellites in orbit above you and allows you to track your favorites.",
    image: satellite,
    gif: satelliteGif,
    github: "https://github.com/charrmountain/whats-up-there/",
    href: "https://whats-up-there.herokuapp.com/",
  },
  dayout: {
    title: "Day Out",
    source: "Bootcamp",
    about:
      "An arts education application utilizing the Metropolitan Museum of Art's collections.",
    image: met,
    gif: metGif,
    github: "https://github.com/charrmountain/a-day-out/",
    href: "https://charrmountain.github.io/a-day-out/",
  },
  // weather: {
  //   title: "Weather Dashboard",
  //   source: "Bootcamp",
  //   about:
  //     "Weather dashboard that will retrieve a city's current weather and forecast from the user's choice.",
  //   image: weatherimg,
  //   gif: weatherGif,
  //   github: "https://github.com/charrmountain/weather-forecast/",
  //   href: "https://charrmountain.github.io/weather-forecast/",
  // },
  // burger: {
  //   title: "Burger Devour",
  //   source: "Bootcamp",
  //   about:
  //     "An entertaining application that allows the user to create and devour burgers.",
  //   image: burger,
  //   gif: burgerGif,
  //   github: "https://github.com/charrmountain/burger/",
  //   href: "https://evening-thicket-44264.herokuapp.com/",
  // },
  // notes: {
  //   title: "Note Taker",
  //   source: "Bootcamp",
  //   about: "An application that can be used to write, save, and delete notes.",
  //   image: note,
  //   gif: noteGif,
  //   github: "https://github.com/charrmountain/note-taker/",
  //   href: "https://blooming-forest-27574.herokuapp.com/",
  // },
  // planner: {
  //   title: "Daily Planner",
  //   source: "Bootcamp",
  //   about:
  //     "A daily work planner that displays hourly storable sections that changes color to display past, current, and future hours.",
  //   image: work,
  //   gif: workGif,
  //   github: "https://github.com/charrmountain/work-day-scheduler/",
  //   href: "https://charrmountain.github.io/work-day-scheduler",
  // },
};

export default class Projects extends Component {
  state = {
    activeItem: "Elite Informer",
    currentPage: pages.informer,
  };

  componentDidMount() {
    AOS.init();
  }

  handleItemClick = (e, { name, title }) =>
    this.setState({ activeItem: name, currentPage: pages[title] });

  renderIcons = (title) => {
    switch (title) {
      case "What's Up There?":
      case "Day Out":
      case "Weather Dashboard":
      case "Burger Devour":
        return (
          <div className="codingLanguages">
            <IconContext.Provider value={{ size: 20 }}>
              <FaHtml5 />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <FaCss3Alt />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <FaUikit />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <SiJavascript />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <SiJquery />
            </IconContext.Provider>
          </div>
        );
      case "Note Taker":
      case "Daily Planner":
        return (
          <div className="codingLanguages">
            <IconContext.Provider value={{ size: 20 }}>
              <FaHtml5 />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <FaCss3Alt />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <FaBootstrap />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <SiJavascript />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <SiJquery />
            </IconContext.Provider>
          </div>
        );
      case "Green Pro Cleaning":
      case "Craig's Services":
      case "Silverado Mechanical":
      case "Emerald Home Services":
      case "Elite Informer":
        return (
          <div className="codingLanguages">
            <IconContext.Provider value={{ size: 20 }}>
              <FaPhp />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <FaReact />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <FaWordpress />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <SiGutenberg />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: 20 }}>
              <GrMysql />
            </IconContext.Provider>
          </div>
        );
      default:
        break;
    }
  };

  render() {
    const { activeItem } = this.state;

    const projectsMenu = Object.keys(pages).map((key) => (
      <Menu.Item
        className="projects"
        title={key}
        name={pages[key].title}
        active={activeItem === pages[key].title}
        onClick={this.handleItemClick}
      />
    ));

    return (
      <div
        className="projects_grid"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <Grid className="ticker" divided="vertically">
          <Grid.Row columns={2} className="ticker">
            <Grid.Column className="ticker tickerMenu">
              <Menu
                size="large"
                pointing
                secondary
                inverted
                vertical
                className="ticker"
              >
                {projectsMenu}
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <Transition animation="scale" duration={500}>
                <figure className="project">
                  <Image
                    className="projectImg"
                    wrapped
                    ui={false}
                    src={this.state.currentPage.image}
                  />
                  <figcaption>
                    <h3>
                      <a
                        className="projectTitle"
                        href={this.state.currentPage.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {this.state.currentPage.title}
                      </a>
                    </h3>
                    {this.renderIcons(this.state.currentPage.title)}
                    <p className="about">{this.state.currentPage.about}</p>
                    <div className="footer">
                      {this.state.currentPage.href !== "" && (
                        <a
                          className="demoModal"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={this.state.currentPage.href}
                        >
                          LIVE
                        </a>
                      )}
                      {this.state.currentPage.gif !== "" && (
                        <Modal
                          size="tiny"
                          trigger={
                            <button className="demoModal demo">DEMO</button>
                          }
                          closeIcon
                        >
                          <Modal.Content>
                            <Image fluid src={this.state.currentPage.gif} />
                          </Modal.Content>
                        </Modal>
                      )}
                    </div>
                    <span className="projectSource">
                      {this.state.currentPage.source}
                      {this.state.currentPage.employee !== undefined && (
                        <span className="projectEmployee">
                          Employed: {this.state.currentPage.employee}
                        </span>
                      )}
                    </span>
                  </figcaption>
                  {this.state.currentPage.github !== "" && (
                    <a
                      className="gitHubPort"
                      href={this.state.currentPage.github}
                    >
                      <div className="gitHubWrapper">
                        <IconContext.Provider value={{ size: 70 }}>
                          <FaGithub className="gitHub" />
                        </IconContext.Provider>
                      </div>
                    </a>
                  )}
                </figure>
              </Transition>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
