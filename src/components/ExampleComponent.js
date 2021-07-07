import React, { Component } from 'react';
import Show from './Show'

class ExampleComponent extends Component {



  render() {
    let text;


    text = this.props.people.map( arr => {
      // debugger
      return <Show key={arr.name} person={arr} />
    })

    return (
      <div>
        <strong>
          Example
        </strong>
        <br />
          {this.props.clicked === "yes" ? <div> {text} </div> : "Show me"}
      </div>

    )
  }

}
// {this.props.clicked === "yes" ?
//
//   {text}
// :
//   "Not Clicked"
// }
export default ExampleComponent;
