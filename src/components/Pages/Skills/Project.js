import React, { Component } from "react";

export default class Project extends Component {
  render() {
    return (
      <div className="projects">
        {this.props.projects.map((project, index) => {
          let duration = index * 1 + "s";
          let classType = index > 0 ? "fadeIn" : "";
          return (
            <span className={classType} style={{ "--duration": duration }}>
              {project}
            </span>
          );
        })}
      </div>
    );
  }
}
