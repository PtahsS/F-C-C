import React, {Component} from 'react'

class App extends Component{
	constructor(){
		super()
		this.state = {
			isLogged: false
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.setState({
			isLogged: !this.state.isLogged
		})
	}
	render(){
		const buttonText = this.state.isLogged? "Log out" : "Log in"
		const paragraphText = this.state.isLogged? "You are logged" : "Please, log out"
		return(
			<div>
				<button onClick={this.handleClick}>{buttonText}</button>
				<h2>{paragraphText}</h2>
			</div>
			)
	}
}

export default App