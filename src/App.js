import React from 'react'
import TodoItem from './components/TodoItem'
import TodosData from './components/TodosData'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      todos: TodosData
    }
  }
  render(){
    const todosComponent = this.state.todos.map(item=><TodoItem key={item.id} item={item}/>)
    return(
        <div>
          {todosComponent}
        </div>
      )
  }
}

export default App