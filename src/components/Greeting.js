import React, { Component } from 'react';

class Greeting extends Component {

  mapped =(person)=> {
      return (
        <div>
        <p>Hello! {person.name}</p>
        <p> Their Craft: {person.craft}</p>
        </div>
      );
  }


  render() {
    return(
      <div>
        {this.props.people.map(person => this.mapped(person))}
      </div>
    )
  }

}

export default Greeting;
