import React from 'react'
import TodoItem from './components/TodoItem'
import TodosData from './components/TodosData'

class App extends React.Component{
	constructor(){
		super()
		this.state={
			todos: TodosData
		}
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(id){
		this.setState(prevState=>{
			const updatedState=prevState.todos.map(todo=>{
				if(todo.id === id){
					todo.completed = !todo.completed
				}
				return todo
				})
			return{
				todos: updatedState
			}
		})
	}
	render(){
		let todosComponent = TodosData.map(item=><TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
		return(
				<div>
					{todosComponent}
				</div>
			)
	}
}

export default App
