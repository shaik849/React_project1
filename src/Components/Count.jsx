import React, {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("hello");
    // const [value, setValue] = useState("even");
  return (
    <div>
        <p>The count is {count}</p>
        <h6>The number is {count %2 === 0 ? "Even" : "Odd"}</h6> 
        <button onClick={() => setCount( count + 1 )}>Increment</button>
        <button onClick={() => setCount( count - 1 )}>Decrement</button>
        <input onChange={(e) =>setValue(e.target.value)}></input>
        <p>You typed: {value}</p>
        <button onClick={() => setValue("hello")}>Reset</button>

        
    </div>
  )
}

export default Count