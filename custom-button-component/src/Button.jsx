import { useState } from 'react'
import './button.css';

function Button({text, onClick, color}) {

  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

export default Button