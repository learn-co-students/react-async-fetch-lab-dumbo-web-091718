import React from 'react'


const Show = props => {
  // debugger
  console.log("here", props);
  return (<div>
      <ul> Craft: {props.person.craft}  Name: {props.person.name}</ul>
  </div>)
}


export default Show;
