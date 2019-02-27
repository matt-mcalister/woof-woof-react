import React from "react"
import DogItem from "./DogItem"


const DogList = (props) => {
  // console.log(props.dogs)
  
  let handleClick = (dog) => {
console.log('clicked the dog',dog)
props.onClick(dog)

  };
  let dogItem = props.dogs.map((dogObj)=>{
      // console.log(dogObj)
      return <DogItem onClick={handleClick}key={dogObj.id} dogs={dogObj}/>
    })
  return (
    <div id="dog-list">
      {dogItem}
      
      {/* <DogItem />
      <DogItem />
      <DogItem />
      <DogItem />
      <DogItem />
      <DogItem />
      <DogItem />
      <DogItem />
      <DogItem />
      <DogItem /> */}
    </div>
  )
}

export default DogList
