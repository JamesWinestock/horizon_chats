import React, { Component } from 'react';

const MessageForm = () => {
  return (
    <div>
      <form>
        <button>Post</button>
        <input placeholder="author"></input>
        <input placeholder="text"></input>
      </form>
    </div>
  )
}

export default MessageForm;
