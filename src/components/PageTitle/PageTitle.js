import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import AOS from "aos";
import "./style.css";

class PageTitle extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <div
        className="section-title aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1000"
        id="pageTitle"
      >
        <Image className="titleImage first" src={this.props.image} />
        <h2 className="title">{this.props.title}</h2>
        <Image className="titleImage second" src={this.props.secondImage} />
      </div>
    );
  }
}

export default PageTitle;
