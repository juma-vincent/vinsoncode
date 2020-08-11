import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import { projectData } from "./projectData";
import ProjectsDirectory from "./components/projectsDirectory/projectsDirectory";
import Header from "./components/header/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projectData,
    };
  }

  render() {
    const projects = this.state.projects;
    return (
      <div>
        <Header />

        {/* <div className="flex align-items-center banner tc">
          <img
            className="tc br-3 w-100 o-80"
            src="/images/banner.jpg"
            alt="Image"
          />
        </div> */}

        <ProjectsDirectory projects={projects} />

        <Footer />
      </div>
    );
  }
}

export default App;
