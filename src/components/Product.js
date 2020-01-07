import React from 'react'

export default function Product(props){
	return(
			<div>
				<h3 style={{display: !props.name && "none"}}>{props.name}</h3>
				<p>{props.price.toLocaleString("en-US", {style: "currency", currency: "USD"})} - {props.description}</p>
			</div>
		)
}