import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (

      <div className="center">
      {this.props.msg.author}: {this.props.msg.text}
      </div>
    )
  };
}

export default Message;
