import React,{ useEffect, useState } from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0);
    useEffect(() =>{
         console.log("use Effect")
         return function(){
            console.log("un mountting....")
         }
    }, [])
    useEffect(() =>{
        console.log("display when count updates")
    }, [count])
  return (
   <>
    <p>The count is {count}</p>
    <button onClick={() => setCount( count + 1 )}>Increment</button>
   </>
  )
}

export default UseEffectHook