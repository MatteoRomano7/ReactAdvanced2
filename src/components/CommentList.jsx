import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      {comments.map((comment) => (
        <SingleComment comment={comment} key={comment._id} />
      ))}
    </div>
  );
};

export default CommentsList;