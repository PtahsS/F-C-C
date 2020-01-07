import React from 'react'
import TodoItem from './components/TodoItem'
import TodosData from './components/TodosData'

export default function App(){
  const TodosComponents=TodosData.map(item=><TodoItem key={item.id} item={item}/>)
  return(
      <div>
        {TodosComponents}
      </div>
    )
}
