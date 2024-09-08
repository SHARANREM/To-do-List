import React,{useState} from 'react'

function UpdateArrOfObj() {
    const [foodreview,setFoodReview] = useState([]);
    const [food,setFood] = useState("");
    const [review,setReview] = useState("");

    function addReview(){
        const newReview = {
            Food:food,
            Review:review
        };
        setFoodReview(f=>[...f,newReview]);

        setFood("");
        setReview("");
    }

    function handleRemove(index){
        setFoodReview(f=>f.filter((_,i)=>i!==index))
    }

    function handleFood(e){
        setFood(e.target.value);
    }

    function handleReview(e){
        setReview(e.target.value);
    }
    return (
        <div>
            <h1>Food Review</h1>
            <ul>
                {foodreview.map((rev, index)=>(
                    <li className='jk' key={index} onClick={()=>handleRemove(index)}>
                        Food:{rev.Food},Review:{rev.Review}
                    </li>
                ))}
            </ul>
            <input type="text" placeholder='Food' value={food} onChange={handleFood}/>
            <br />
            <input type="text" placeholder='Rating(1-5)' value={review} onChange={handleReview}/>
            <button onClick={addReview}>Add</button>
        </div>
    )
}

/*
import UpdateArrOfObj from './UpdateArrOfObj';
<UpdateArrOfObj/>    
.jk{
  cursor: pointer;
}
 */

export default UpdateArrOfObj