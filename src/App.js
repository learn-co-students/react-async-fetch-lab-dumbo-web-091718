// create your App component here
import React from 'react'
import Greeting from './components/Greeting'
import Button from './components/Button'
import ExampleComponent from './components/ExampleComponent'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting />
        <ExampleComponent />
        <Button />
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

}
