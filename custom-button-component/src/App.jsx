import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  let clickCount = () => {
    setCount((count) => count + 1);
  };

  let takeawayCount=()=>{
    setCount((count) => count - 1);
  }

  let resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className="body-wrap">
        <Button
          onClick={() => alert("Hello there, play with the clicks!")}
          text="Click me!"
        />
        <div className="break"></div>
          <Button onClick={clickCount} text={"Add clicks!"} />
          <Button onClick={takeawayCount} text={"Takeaway clicks!"} />
          <div>Button has been clicked {count} times!</div>
         
          <Button onClick={resetCount} text={"Reset count"} />
      </div>
    </>
  );
}

export default App;
