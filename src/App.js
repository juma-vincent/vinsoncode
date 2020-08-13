import React, { Component } from "react";
import "./App.css";

import Footer from "./components/footer/footer";
import { projectData } from "./projectData";
import Header from "./components/header/header";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ProjectsPage from "./pages/projectspage/projectspage";

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

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/projects"
            render={() => <ProjectsPage projects={projects} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
