// create your App component here
import React, {Component} from 'react'

export default class App extends Component {

  state = {
      peopleInSpace: []
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(({people}) => {this.setState({peopleInSpace: people})})
  }

  render(){
    let arrayOfPeople = this.state.peopleInSpace.map(person => <li key={person.name}>{person.name}</li>)

    return (
      <ul>
        {arrayOfPeople}
      </ul>
    )
  }
}
