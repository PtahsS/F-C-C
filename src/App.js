import React from 'react'

function App(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 100
  }

if (hours<12){
  timeOfDay = "morning"
  styles.color = "red"
} else if (hours<19){
  timeOfDay  = "afternoon"
  styles.color = "#00aa22"
} else if (hous<22){
  timeOfDay = "evening"
  styles.color = "#0000bb"
} else {
  timeOfDay = "night"
  styles.color = "#0000bb"
}

return(
    <div>
      <h1 style={styles}> Good {timeOfDay}</h1>
    </div>
  )

}

export default App