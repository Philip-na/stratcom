import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const MsgBody = ({ authid, data }) => {
  const { senderId, message, timestamp } = data;
  const isCurrentUser = authid === senderId;

  const timeAgo = formatDistanceToNow(new Date(timestamp), {
    addSuffix: true,
    includeSeconds: true,
  });

  return (
    <div className={`mbody ${isCurrentUser ? 'me' : 'other'}`}>
      <div className="msg-img">
        <img src="/images/hero.png" alt="user" />
      </div>
      <div className="msg-content">
        <p className="msg-text">{message}</p>
        <span className="msg-timestamp">{timeAgo}</span>
      </div>
    </div>
  );
};

export default MsgBody;
