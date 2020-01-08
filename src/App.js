import React from 'react'

function handleClick(){
  console.log("Hello again")
}

function App(){
  return(
    <div>
      <img alt="Nature" src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" height="200px"/>
      <h1>It`s a nature</h1>
      <button onClick={handleClick}>Push me</button>
      <p>... look at console</p>
    </div>
    )
}

export default App