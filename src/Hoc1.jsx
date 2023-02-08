import React,{useState} from 'react'
import Hoc2 from './Hoc2'
function Hoc1() {
    let [count, setCount] = useState(0)
    let increment=()=>{
        setCount(count++)
    }
  return (
    <div>
        <h1>hello:{count}</h1>
    <button onClick={increment}>count</button>
    </div>
  )
}

export default Hoc2(Hoc1,10)