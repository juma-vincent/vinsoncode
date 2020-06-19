import React from "react";
import Post from "../components/Post";

const PostList = ({ posts }) => {
  return (
    <div className=" flex justify-center postlist tc">
      {posts.map((post, i) => (
        <Post
          key={posts[i].id}
          title={posts[i].title}
          image={posts[i].image}
          body={posts[i].body}
        />
      ))}
    </div>
  );
};

export default PostList;
