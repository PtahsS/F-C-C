import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      isLoggedIn: true
    }
  }
  render(){
    return(
      <h2>Are you Logged? {this.state.isLoggedIn? "yes":"no"}</h2>
      )
  }
}

export default App