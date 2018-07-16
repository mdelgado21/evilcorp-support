import React from 'react';
import MdCancel from 'react-icons/lib/md/cancel';

export default function({ name, close }) {
  return (
    <div className="chat-header">
      <div className="chat-info">
        <div className="chat-name">{name}</div>
      </div>
      <span
        className="close"
        onClick={() => {
          close();
        }}
        title="Close Session"
      >
        <MdCancel />
      </span>
    </div>
  );
}
