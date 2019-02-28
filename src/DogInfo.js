import React from "react"

const DogInfo = (props) => {
console.log(props)
		const imgStyle = {
			boxShadow: `0 0 30px 15px yellow, 0 0 50px 15px yellow, 0 0 75px 45px yellow`
		}

		let clickHandler = (vale) =>{
			console.log('clicked',props.changed)
			props.onChange(props.dog)
		}

		return (
			// props.dog.isGoodDog?
			// (<div id="dog-info">
			// 	<img src={props.dog.image} style={imgStyle} alt="PLEASE SELECT A PUP NAME"/>
			//  	<h2>{props.dog.name}</h2>
			//  	<button onClick={() => clickHandler()}>Good Dog</button>
			// 	</div>)
			// 	:
			// 	(<div id="dog-info">
			//  	<img src={props.dog.image} style={imgStyle} alt="PLEASE SELECT A PUP NAME"/>
			// 	<h2>{props.dog.name}</h2>
			//  	<button onClick={() => clickHandler()}>Bad Dog</button>
			// 	 </div>)
				 
			// 	 props.changed.isGoodDog?
				 
			// 	 (<div id="dog-info">
			// 	 <img src={props.changed.image} style={imgStyle} alt="PLEASE SELECT A PUP NAME"/>
			// 	  <h2>{props.changed.name}</h2>
			// 	  <button onClick={() => clickHandler()}>Good Dog</button>
			// 	 </div>)
			// 	 :
			// 	 <div id="dog-info">
			// 	 <img src={props.changed.image} style={imgStyle} alt="PLEASE SELECT A PUP NAME"/>
			// 	  <h2>{props.chnaged.name}</h2>
			// 	  <button onClick={() => clickHandler()}>Bad Dog</button>
			// 	 </div>

				 

			
			// 
			props.changed.isGoodDog?
			(<div id="dog-info">
			<img src={props.changed.image} style={imgStyle} alt="pup pup"/>
			<h2>{props.changed.name}</h2>
			<button onClick={() => clickHandler()}>Good Dog</button>
			</div>)
			:

			props.dog.isGoodDog ?(
			<div id="dog-info">
				<img src={props.dog.image} style={imgStyle} alt="pup pup"/>
				<h2>{props.dog.name}</h2>
				<button onClick={() => clickHandler()}>BAd Dog</button>
				</div>)
				:
				(<div id="dog-info">
				<img src={props.dog.image} style={imgStyle} alt="PLEASE SELECT A DOG FROM DOG BAR"/>
				<h2>{props.dog.name}</h2>
				<button onClick={() => clickHandler()}> Bad Dog</button>
				</div>))
				

		

}

export default DogInfo
