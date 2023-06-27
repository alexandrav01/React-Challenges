import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [reset, setReset]=useState(0)

  let clickCount = () => {
    setCount((count) => count + 1)
  }

  let resetCount= ()=>{
    setCount(0)
  }

return(
<>
  <div className='wrapper'>

      <div> Button has been clicked {count} times </div>

    <button onClick={clickCount}> Click me </button>

    <button onClick={resetCount}>Reset count</button>

  </div>
</>
)
}

export default App
