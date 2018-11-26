// create your App component here
import React from 'react'

export default class App extends React.Component{
  state={
    people: []
  }
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(({json}) => this.setState({ people: json }))
  }

  render(){
  return (
    <div>
    {this.state.people.map(person => {
      <h1>{person.name}</h1>
    })}
    </div>
  )}


}
