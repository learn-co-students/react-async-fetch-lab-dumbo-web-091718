import React, { Component } from 'react';
import ExampleComponent from './components/ExampleComponent';


export default class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then( res => res.json())
        .then( json => this.setState({ people: json }), () => {console.log(this.state.people)})
    }


    render() {
        return(
            <React.Fragment>
                <ExampleComponent />
            </React.Fragment>
        );
    }
}