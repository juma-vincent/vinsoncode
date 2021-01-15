import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ProjectsPage from "./pages/projectspage/projectspage";
import { connect } from "react-redux";
import { getProjectData } from "./redux/project/project.actions";

class App extends Component {
  componentDidMount() {
    const { getProjectData } = this.props;
    getProjectData();
  }

  render() {
    const { projects } = this.props;
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

const mapStateToProps = ({ project: { projects } }) => ({
  projects,
});

const mapDispatchToProps = (dispatch) => ({
  getProjectData: () => dispatch(getProjectData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
