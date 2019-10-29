import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: '' };
  }

  handleMessageChange = (event) => {
     this.setState( { message: event.target.value} )

  }

  remainingChars = () => {
    return ( <span>{280 - this.state.message.length } </span>)
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange={event => this.handleMessageChange(event)}
        value={this.state.message}
        type="text" 
        name="message" 
        id="message" />
        {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
