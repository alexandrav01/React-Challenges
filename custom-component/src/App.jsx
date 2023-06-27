import { useState } from 'react'
import './App.css'

function App() {
  const button1 = () =>{
    alert ("You clicked on Button 1")
  }

  const button2 = () =>{
    alert ("You clicked on Button 2")
  }

  const button3 = () =>{
    alert ("You clicked on Button 3")
  }

  return (
    <>
     <div>
      <button onClick={button1}>Button 1</button>
      <button onClick={button2}>Button 2</button>
      <button onClick={button3}>Button 3</button>
     </div>
    </>
  )
}

export default App
