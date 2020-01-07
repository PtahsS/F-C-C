import React from 'react'
import Joke from './components/Joke.js'

export default function App(){
  return(
    <div>
      <Joke
      question = "111"
      answer = "222"
      />
      <Joke
      question = "333"
      answer = "444"
      />
      <Joke
      question = "555"
      answer = "666"
      />
      <Joke
      answer = "666"
      />
      </div>
    )
}