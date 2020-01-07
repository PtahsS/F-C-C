import React from 'react'

export default function TodoItem(props){
	return(
		<div>
			<input type="checkbox" checked={props.item.completed}/>
			<p>{props.item.text}</p>
		</div>
		)

}