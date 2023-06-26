import { useState } from 'react'


function App() {

  let [show, setShow]=useState()

  function toggleShow(){
    setShow(!show)
  }

  let buttonText= show ? "Hide" : "Show";

  return (
    <>
     <div>
      <button onClick={toggleShow}>{buttonText}</button>
      {show ? <p>Welcome to React Challenges</p> : null}
     </div>
    </>
  )
}

export default App
