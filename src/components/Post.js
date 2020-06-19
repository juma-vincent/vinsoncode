import React from "react";

const Post = ({ title, image, body }) => {
  return (
    <div className="flex justify-center tc w-70 bg-washed-blue { background-color: #F6FFFE }  br2 db pa3 ma2 grow bw3 shadow-5">
      <div className="w-80 br2 tc">
        <h3>{title}</h3>
        <img className=" br2 " src={image} alt="Image" />

        <p>
          <small>{body}</small>
        </p>
      </div>
    </div>
  );
};

export default Post;
