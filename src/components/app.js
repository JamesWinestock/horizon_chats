import React, { Component } from 'react';
import MessageList from './message-list';
import MessageForm from './message-form';

class App extends Component {
  render() {
    return (
      <div>
        <MessageForm />
        <MessageList />
      </div>
    )
  };
}

export default App;
