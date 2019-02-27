import React from "react"

const DogInfo = (props) => {
console.log(props)
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
				<img src="https://weloveanimals.me/wp-content/uploads/2017/10/gettyimages-590486672-e1508512743796.jpg" style={imgStyle} alt="pup pup"/>
				<h2>{props.dog.name}</h2>
				<button>Bad Dog</button>
				</div>)
		)

}

export default DogInfo
