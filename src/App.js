import React, {Component} from 'react';
import Greeting from './components/Greeting'

class App extends Component {

  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(people => {
      this.setState({people: people.people})
    })
  }

  render(){
    return (
        <div>
        <Greeting people={this.state.people}/>
        </div>
    )
  }
}

export default App;
