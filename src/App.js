
import React, {Component} from 'react'
import Conditional from './components/Conditional'

class App extends Component{
	constructor(){
		super()
		this.state = {
			isLoading:true
		}
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				isLoading: false
			})
		}, 3000)
	}
	render(){

		return(
			<div>
			<h1>Header</h1>
			{(this.state.isLoading)? 
				<h1>...isLoading</h1> : <Conditional isLoading={this.state.isLoading}/>
			}
			<h1>footer</h1>
			</div>
			)
	}
}

export default App