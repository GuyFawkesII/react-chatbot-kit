import React from 'react';

import ChatbotMessage from '../ChatbotMessage/ChatbotMessage';

import './ChatbotError.css';

interface IChatbotErrorProps {
  message: string;
}

const ChatbotError = ({ message }: IChatbotErrorProps) => {
  return (
    <div className="kit-error">
      <h1 className="kit-error-header">
        Ooops. Something is missing.
      </h1>
      <div className="kit-error-container">
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
        href="https://fredrikoseberg.github.io/kit-docs/"
        rel="noopener norefferer"
        target="_blank"
        className="kit-error-docs"
      >
        View the docs
      </a>
    </div>
  );
};

export default ChatbotError;
