

import React from 'react'
function Product(props){
	return(
	<div>
		<h2>This is a {props.name}</h2>
		<p>{props.price.toLocaleString("en-Us", {stye:"currency", currency:"USD"})} - {props.description}</p>
	</div>
	)
}

export default Product