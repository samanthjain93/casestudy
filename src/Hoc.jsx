import React,{ useReducer} from 'react'




let initialState = { count : 0 }

function reduce(state,action) {
    switch(action.type){
        case'increase': return{count: state.count + 1}
        case'decrease': return{count: state.count - 1}
        case'multiply': return{count: state.count *2}

        case'Reset': return{count: state.count=0}
        default:throw console.error();

    }
}

function Hoc() {
    



    const [state, dispatch] = useReducer(reduce, initialState)


  return (
    <div>
        <h1>{ state.count}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>add</button>
        <button onClick={()=>dispatch({type:'decrease'})}>decrease</button>
        <button onClick={()=>dispatch({type:'Reset'})}>res</button>
        <button onClick={()=>dispatch({type:'multiply'})}>multiply</button>
        
        

    </div>
  )
}

export default Hoc