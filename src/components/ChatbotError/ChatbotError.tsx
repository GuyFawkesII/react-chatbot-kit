import React from 'react';

import ChatbotMessage from '../ChatbotMessage/ChatbotMessage';

import './ChatbotError.css';

interface IChatbotErrorProps {
  message: string;
}

const ChatbotError = ({ message }: IChatbotErrorProps) => {
  return (
    <div className="error">
      <h1 className="error-header">
        Ooops. Something is missing.
      </h1>
      <div className="error-container">
        <ChatbotMessage
          message={message}
          withAvatar
          loading={false}
          id={1}
          customStyles={{ backgroundColor: '' }}
          messages={[]}
        />
      </div>
      <a
        href="https://fredrikoseberg.github.io/docs/"
        rel="noopener norefferer"
        target="_blank"
        className="error-docs"
      >
        View the docs
      </a>
    </div>
  );
};

export default ChatbotError;
