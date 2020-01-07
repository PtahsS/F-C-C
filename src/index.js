/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
	constructor(){
		super()
		this.state={
			answer: "yes"
		}
	}
	render(){
		return(
			<h2>Is it so important to know language? Oh, {this.state.answer}</h2>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))