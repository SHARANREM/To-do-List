import React,{useState} from 'react'

function ColorPicker() {
    const [color,setColor] = useState("#FFFFFF")

    function handleColor(e){
        setColor(e.target.value);
    }
  return (
    <div>
        <h1>Color Picker</h1>
        <div style={{backgroundColor:color}}>
            <p>Selected Color: {color}</p>
        </div>
        <input type="color" onChange={handleColor} />
    </div>
  )
}
/*
import ColorPicker from './ColorPicker';
<ColorPicker/>
*/
export default ColorPicker