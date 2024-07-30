import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentArea = ({ bookAsin }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRate, setNewRate] = useState("1");

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
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([]);
      }
    };

    fetchComments();
  }, [bookAsin]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    name === "newComment" ? setNewComment(value) : setNewRate(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      );
      setNewComment("");
      setNewRate("1");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-10">
      <h3 className="text-2xl font-semibold mb-4">Comments</h3>
      <div className="space-y-4 mb-6">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-800">{comment.comment}</p>
            <p className="text-sm text-gray-600 mt-2">Rating: {comment.rate}/5</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="newComment" className="block text-sm font-medium text-gray-700 mb-1">
            New Comment:
          </label>
          <textarea
            id="newComment"
            name="newComment"
            value={newComment}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            rows="3"
          />
        </div>
        <div>
          <label htmlFor="newRate" className="block text-sm font-medium text-gray-700 mb-1">
            Rating:
          </label>
          <select
            id="newRate"
            name="newRate"
            value={newRate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentArea;