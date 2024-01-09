import React from "react"

const SingleComment = ({ comment }) => {
  if (!comment || !comment.comment || !comment.rate || !comment.elementId) {
    return null
  }

  return (
    <div>
      <p>{comment.comment}</p>
      <p>Rate: {comment.rate}</p>
    </div>
  )
}

export default SingleComment
