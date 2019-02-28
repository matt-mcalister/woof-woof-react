import React from "react"

const DogItem = (props) => {
	// console.log(props)
	let clickHandler = () => {
		// console.log(props.dogs)
		props.onClick(props.dogs)
	}
	return (<span onClick={() => clickHandler()}>{props.dogs.name}</span>)
}

export default DogItem
