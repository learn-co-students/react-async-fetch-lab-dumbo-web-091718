import React, { Component } from 'react';
import { createDeflate } from 'zlib';

class ExampleComponent extends Component {
  state = {
    people:[]
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(res => this.setState({
      people: res.people
    }))
  }

  render() {
   let person = this.state.people && this.state.people.map(person => {
    const {craft, name } = person;
      return <li>{name} {craft}</li>
   })
    

    return (
      <strong>
        <ul>
          {person}
        </ul>
      </strong>
    )
  }

}

export default ExampleComponent;
