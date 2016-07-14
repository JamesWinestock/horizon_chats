import React, { Component } from 'react';
import Message from './message';

class MessageList extends Component {
  constructor(props) {
  super(props);

  this.state = {
    convo: [
        { author: 'James', text: 'Justin sucks1'},
        { author: 'James', text: 'Justin sucks2'},
        { author: 'James', text: 'Justin sucks3'},
        { author: 'James', text: 'Justin sucks4'},
        { author: 'James', text: 'Justin sucks5'},
        { author: 'James', text: 'Opposite day'}
    ]
  };
}
  render() {

    let Msgs = this.state.convo.map((message, i) => {
      return <Message msg={message} key={i} />
    })
    return (
      <div>
        {Msgs}
      </div>
    )
  };
}

export default MessageList;
