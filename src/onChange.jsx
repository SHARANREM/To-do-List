import React,{useState} from 'react'

const onChange = () => {
    
    const [text,setText] = useState("");
    const [select, setSelect] = useState("");
    const [radio,setRadio] = useState("");

    function handleChange(e){
        setText(e.target.value)
    }
    function handleSelect(e){
        setSelect(e.target.value);
    }
    function handelRadio(e){
        setRadio(e.target.value);
    }
    return (
        <div>
            <input type="text" value={text} onChange={handleChange}/>
            <p>Text: {text}</p>
            <select onChange={handleSelect}>
                <option value="">select</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
            <p>Val: {select}</p>
            <label><input type="radio" name='1' value="Gpay" checked={radio === "Gpay"} onChange={handelRadio}/>Gpay</label><br />
            <label><input type="radio" name='1' value="Phonepe" checked={radio === "Phonepe"} onChange={handelRadio}/>Phonepe</label>
            <p>Pay: {radio}</p>

        </div>
  )
}
/*
import OnChange from './onChange';
<OnChange/>
*/
export default onChange