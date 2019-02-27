import React from "react"

const DogInfo = (props) => {
// console.log(props)
		const imgStyle = {
			boxShadow: `0 0 30px 15px yellow, 0 0 50px 15px yellow, 0 0 75px 45px yellow`
		}

		return (
			props.dog.isGoodDog ?(
			<div id="dog-info">
				<img src={props.dog.image} style={imgStyle} alt="pup pup"/>
				<h2>{props.dog.name}</h2>
				<button>Good Dog</button>
				</div>)
				:
				(<div id="dog-info">
				<img src={props.dog.image} style={imgStyle} alt="PLEASE SELECT A DOG FROM DOG BAR"/>
				<h2>{props.dog.name}</h2>
				<button>Bad Dog</button>
				</div>)
		)

}

export default DogInfo
