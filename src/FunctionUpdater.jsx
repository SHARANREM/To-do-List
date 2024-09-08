import React,{useState} from 'react'

function FunctionUpdater() {
    const [color,setColor] = useState("#FFFFFF")

    function handleColor(e){
        setColor((c)=>c=e.target.value);
    }
  return (
    <div>
        <h1>Color Picker</h1>
        <div style={{backgroundColor:color}}>
            <p>Selected Color: {color}</p>
        </div>
        <input type="color" value={color} onChange={handleColor} />
    </div>
    );
}
/*
import FunctionUpdater from './FunctionUpdater';
<FunctionUpdater/>
*/
export default FunctionUpdater