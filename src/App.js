import React from 'react'

function HandleClick(){
	console.log('It`s a button!')
}

function App(){
	return(
		<div>
			<img
				src="https://imagevars.gulfnews.com/2019/11/13/Reader-picture_16e6517ed86_original-ratio.jpeg"
				width="200px"
				onMouseOver={()=>{console.log('Hovered')}}
			/>
			<h3>It`s a picture</h3>
			<button onClick={HandleClick}>Push me</button>
		</div>
		
		)
}

export default App