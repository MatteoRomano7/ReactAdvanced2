import React, { useState, useEffect } from "react"
import axios from "axios"
import { Form, FormLabel } from "react-bootstrap"

const CommentArea = ({ bookAsin }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [newRate, setNewRate] = useState("1")

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmNhYmUwZGQxZDAwMTgyZDE3NjMiLCJpYXQiOjE3MDQ3MjE1NzksImV4cCI6MTcwNTkzMTE3OX0.O7VGMqlOP9afseag91o5MIEv6fdMhCG7dUn4CQZzb0k",
            },
          }
        )
        setComments(response.data)
      } catch (error) {
        console.error("Error fetching comments:", error)
        setComments([])
      }
    }

    fetchComments()
  }, [bookAsin])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    name === "newComment" ? setNewComment(value) : setNewRate(value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          comment: newComment,
          rate: newRate,
          elementId: bookAsin,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmNhYmUwZGQxZDAwMTgyZDE3NjMiLCJpYXQiOjE3MDQ3MjE1NzksImV4cCI6MTcwNTkzMTE3OX0.O7VGMqlOP9afseag91o5MIEv6fdMhCG7dUn4CQZzb0k",
          },
        }
      )
      setNewComment("")
      setNewRate("1")
    } catch (error) {
      console.error("Error posting comment:", error)
    }
  }

  return (
    <div>
      <h3>Commenti</h3>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.comment}</p>
          <p>Rate: {comment.rate}</p>
        </div>
      ))}
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Nuovo Commento:
          <textarea
            name="newComment"
            value={newComment}
            onChange={handleInputChange}
          />
        </FormLabel>
        <FormLabel>
          Valutazione:
          <select name="newRate" value={newRate} onChange={handleInputChange}>
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </select>
        </FormLabel>
        <button type="submit">Invia commento</button>
      </Form>
    </div>
  )
}

export default CommentArea
