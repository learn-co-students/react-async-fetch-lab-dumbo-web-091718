// create your App component here
import React, { Component} from 'react';
// import ReactDOM from 'react-dom';
import ExampleComponent from './components/ExampleComponent'
import Greeting from './components/Greeting'
import Button from './components/Button'

class App extends Component {

  state = {
    people: [],
    clicked: ["no"]
  }

  componentDidMount () {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then( json => {
      console.log(json);
      this.setState({
        people: json.people
      })
    })
  }

  handleClick = (e) => {
    console.log("I was clicked ");
    if (this.state.clicked === "yes") {
      this.setState({ clicked: "no"})
    } else {
      this.setState({ clicked: "yes"})
    }
  }
  render () {
    // console.log(this.state.people);
    return (
      <div>
      <Greeting />
      <ExampleComponent
          people={this.state.people}
          clicked={this.state.clicked} />
      <Button handleClick={this.handleClick}/>
      </div>
    )
  }

}

export default App;
