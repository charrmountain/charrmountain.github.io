import React, { Component } from "react";
import NavTabs from "../NavBar/NavTabs";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";
import Scroll from "../Scroll/Scroll";
import Footer from "../Footer/Footer";
import "./style.css";

class PortfolioContainer extends Component {
  state = {
    currentPage: "HOME",
    style: "",
    visible : false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const headerText = document.querySelector("#home .titleImage");
    const header = document.querySelector(".siteHeader");
    const scrollBar = document.getElementById("scrollBar");

    let value = window.scrollY;

    headerText.style.top = value * 0.15 + "px";
    header.classList.toggle("menuSticky", value > 178);
    scrollBar.classList.toggle("menuSticky", value > 0);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="homeContainer">
        <NavTabs
          className="MenuStyles"
          type={this.state.style}
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Scroll />
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;
