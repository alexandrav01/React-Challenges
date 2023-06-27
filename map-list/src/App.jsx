import { useState } from 'react'
import './App.css'

function App() {
  const animals= ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  const list = animals.map((animals)=>
  <li>{animals}</li>
  )

  return (
    <>
      <ul>{list}</ul>
    </>
  )
}

export default App
