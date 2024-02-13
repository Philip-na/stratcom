import React, { useState } from "react";
import axiosInstance from "../../assets/axioxApi";
import { useParams } from "react-router-dom";
const MessageForm = ({ authid }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const {user_id, name} = useParams()

  const handleSubmit = async (event) => {
    // event.preventDefault();
    const receiverId = user_id; 
    try {
      const response = await axiosInstance.post("messages", {
        senderId: authid,
        receiverId: receiverId,
        sender: "Your Sender Name", 
        receiver: name, 
        message: message,
        timestamp: new Date().toISOString(), 
      });
      console.log("Message sent:", response.data);
      setMessage("");
      setError(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Error sending message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="message"
        id="message"
        placeholder="Write your message here"
        cols="30"
        rows="3"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
