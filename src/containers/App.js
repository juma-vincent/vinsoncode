import React, { Component } from "react";
import "./App.css";
import { postsArray } from "../PostArray";
import PostList from "../components/PostList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: postsArray,
      searchField: "",
    };
  }

  handleSearch = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredPosts = this.state.posts.filter((post) =>
      post.title.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <div>
        <Navbar onSearch={this.handleSearch} />

        <div className="flex align-items-center banner tc">
          <img
            className="tc br-3 w-100 o-80"
            src="/images/banner.jpg"
            alt="Image"
          />
        </div>

        <PostList posts={filteredPosts} />
        {/* <Scroll></Scroll> */}
        <Footer />
      </div>
    );
  }
}

export default App;
