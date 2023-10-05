import React from 'react'

import '../App.css';

function Main(props) {
  return (
   <li className='todo-Item'>
    <span>
        {props.complete ? <></> :  <input type='checkbox'></input>}
        <span>{props.text}</span>
        </span>
        <p>...</p></li>
  )
}

export default Main