import React from "react";

const SingleComment = ({ comment }) => {
  if (!comment || !comment.comment || !comment.rate || !comment.elementId) {
    return null;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <p className="text-gray-700 mb-2">{comment.comment}</p>
      <p className="text-sm text-gray-600">Rating: {comment.rate} / 5</p>
    </div>
  );
};

export default SingleComment;