
import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      name: "PtahS",
      age: "18"
    }
  }
  render(){
    return(
      <div>
        <h2>My name is {this.state.name}</h2>
        <h3>{this.state.age}</h3>
      </div>
      )
  }
}

export default App 