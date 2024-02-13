import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MessageForm from "./MessageForm";
import MsgBody from "./MsgBody";
import axiosInstance from "../../assets/axioxApi";
import "./msg.css";

const Message = () => {
  const { name, user_id } = useParams();
  const authid = '2';
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const response1 = await axiosInstance.get(`messages?senderId=${authid}&receiverId=${user_id}`);
      const response2 = await axiosInstance.get(`messages?senderId=${user_id}&receiverId=${authid}`);

      const userToFriendMessages = response1.data;
      const friendToUserMessages = response2.data;

      const allMessagesBetweenUsers = [...userToFriendMessages, ...friendToUserMessages];

      const sortedMessages = allMessagesBetweenUsers.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

      setMessages([...sortedMessages]);
      setError(null);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setError(error.message || 'Error fetching messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [authid, user_id]);

  return (
    <div className="msg-cont">
      <div className="head">
        <h2>Messaging {name}</h2>
      </div>
      <div className="msg-body">
        {loading && <p>Loading messages...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && messages.map((msg) => (
          <MsgBody key={msg.id} data={msg} authid={authid} />
        ))}
      </div>
      <div className="msg-form">
        <MessageForm authid={authid} />
      </div>
    </div>
  );
};

export default Message;
