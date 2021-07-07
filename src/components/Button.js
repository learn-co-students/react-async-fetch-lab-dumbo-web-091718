import React, { Component } from 'react';

class Button extends Component {

  render() {
    console.log(this.props);
    return (
      <div>

        <button onClick={(e) => this.props.handleClick(e)}>
          I am a button
        </button>
      </div>
    )
  }

}

export default Button;
