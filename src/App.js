import React, { Component } from 'react';

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {
  state = {
    dogs: []
  }
  
componentDidMount(){
  // console.log('mounted in app')
  fetch('http://localhost:3001/dogs')
  .then(res => res.json())
  .then(dogsFromFetch => this.setState({
    dogs: dogsFromFetch
  }))
}
 handleClick = (dogObj) => {
  console.log('in app', dogObj)

}

  render() {
console.log(this.handleClick)  

    return (
      <div>
        <DogList onClick={this.handleClick}dogs={this.state.dogs}/>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          
          <DogInfo/>
        </div>
      </div>
    );
  }
}

export default App;
