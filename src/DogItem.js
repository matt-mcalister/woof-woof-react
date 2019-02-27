import React from "react"

const DogItem = (props) => {
	console.log(props)
	return (<span>{props.dogs.name}</span>)
}

export default DogItem
