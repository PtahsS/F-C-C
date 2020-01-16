import React, {Component} from 'react'

class App extends Component{
	constructor(){
		super()
		this.state={
			unreadMessages: ["www", "ddd", "rrr"]
		}
	}
	render(){
		return(
			<div>
				{this.state.unreadMessages.length>0 &&
					<h1>You have {this.state.unreadMessages.length} messages!</h1>
				}
			</div>
		)
	}
}

export default App