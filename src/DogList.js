import React from "react"
import DogItem from "./DogItem"


const DogList = (props) => {
  console.log(props.dogs)
  
  let dogList = props.dogs.map((dogObj)=>{
      console.log(dogObj)
      return <DogItem key={dogObj.id} dogs={dogObj}/>
    })
  return (
    <div id="dog-list">
      {dogList}
      
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
