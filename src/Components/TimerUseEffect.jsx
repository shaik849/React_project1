import React, {useEffect, useState} from 'react'

function TimerUseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() =>{
  const timer = setInterval(() =>{
             setCount(count +1)   
        }, 1000)
        return function(){
            clearInterval(timer)
        }
    },[count])
  return (
   <>
   <h1>Timer</h1>
   <p>time is {count}</p>
   </>
  )
}

export default TimerUseEffect