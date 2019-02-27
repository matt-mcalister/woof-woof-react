import React, { Component } from 'react';

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {
  state = {
    dogs: [],
    clickedDog: {},
    change:{}
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
  // console.log('in app', dogObj)
this.setState({
  clickedDog: dogObj

})
}
handleChange = (dog) => {
  console.log('back in app',dog)
let status = dog.isGoodDog
console.log(status)
fetch(`http://localhost:3001/dogs/${dog.id}`,{
  method:"PATCH",
    headers:{ "Content-type": "application/json",
              'Accept': "application/json"
  },
  body: JSON.stringify({isGoodDog:!status})
})
  .then(res => res.json())
  .then(changedDog => this.setState({
    change: changedDog

  }))
}




  render() {
    console.log(this.state)
console.log(this.state.change)  

    return (
      <div>
        <DogList onClick={this.handleClick}dogs={this.state.dogs}/>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          
          <DogInfo changed={this.state.change}onChange={this.handleChange}dog={this.state.clickedDog}/>
        </div>
      </div>
    );
  }
}

export default App;
