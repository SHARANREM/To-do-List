import React,{useState} from 'react'

function Counter() {
  const [count,setCount] = useState(0);
  const [counter,setCounter] = useState(1);

  const Increase = ()=>{
    setCount(count+counter);
  };
  const Decrease = ()=>{
    setCount(count-counter);
  };
  const Reset = ()=>{
    setCount(0);
  };
  const CounterIn = ()=>{
    setCounter(counter+1);
  };
  const CounterDe = ()=>{
    setCounter(counter-1);
  };
  const CounterRe = ()=>{
    setCounter(1);
  };

  return (
    <div className='Counter'>
        <h1>{count}</h1>
        <button onClick={Decrease}>Decre</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Increase}>Incre</button>
        <button onClick={CounterIn}>CounterIn:{counter}</button>
        <button onClick={CounterRe}>CounterRe:{counter}</button>
        <button onClick={CounterDe}>CounterDe:{counter}</button>
    </div>
  )
}
/*
<Counter/>

import Counter from './Counter';


.Counter{
  margin: auto;
  text-align: center;
  background-color: antiquewhite;
  max-width: 300px;
  border: 1px solid black;
  padding: 30px;
  border-radius: 20px;
}
.Counter h1{
  font-size: 3em;
  margin-bottom: 30px
}
.Counter button{
  margin: 3px;
  width: 90px;
  height: 35px;
  background-color: aquamarine;
  border-radius: 6px;
}
*/
export default Counter