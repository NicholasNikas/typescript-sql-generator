import React from "react";

interface MessageProps {
  message: {
    role: string;
    content: string;
  };
}

const MessageDisplay = ({ message }: MessageProps) => {
  return (
    <div className="message-display">
      <p id="icon">⊚</p>
      {/* <p>{message.role}</p> */}
      <p>{message.content}</p>
    </div>
  );
};

export default MessageDisplay;
