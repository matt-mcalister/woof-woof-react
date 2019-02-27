import React, { Component } from 'react';

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {
  state = {
    dogs: [],
    clickedDog: {}
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
this.setState({
  clickedDog: dogObj

})
}

  render() {
console.log(this.state)  

    return (
      <div>
        <DogList onClick={this.handleClick}dogs={this.state.dogs}/>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          
          <DogInfo dog={this.state.clickedDog}/>
        </div>
      </div>
    );
  }
}

export default App;
