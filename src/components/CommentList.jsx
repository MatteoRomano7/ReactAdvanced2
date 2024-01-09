import React from "react"
import SingleComment from "./SingleComment"

const CommentsList = ({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <SingleComment comment={comment} key={comment._id} />
      ))}
    </div>
  )
}

export default CommentsList
