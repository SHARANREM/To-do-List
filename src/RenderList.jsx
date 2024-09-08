import React from 'react'

function RenderList() {
    const dict = [{id:1,name:"Name1"},
                  {id:2,name:"Name2"},
                  {id:3,name:"Name3"},
                ];
    var count = -1;
    let listElement = dict.map((item)=>{
        count++;
        return(<li key={item.id}>{item.name}</li>);
    });
    console.log(listElement);
    return (
    <div className='List'>
        <h1>Last test</h1>
        <ol>
            {listElement}
        </ol>
    </div>
  )
}
/*
import RenderList from './RenderList';


const Fruits = ['Orange','Apple','Lemon','Mango','Pineapple'];
const Vegetables = ['Tomato','Onion','Cabbage','Carrot'];
const DAnimals = ['Sheep','Goat','Dog','Cat','Parrot','Hamster'];
const WAnimals = ['Tiger','Lion','Elephant','Hippo','Giraffe','Cheetah'];
<RenderList List={DAnimals} title="Domestic-Animals"/>
<RenderList List={Fruits} title="Fruits"/>
<RenderList List={Vegetables} title="Vegetables"/>
<RenderList List={WAnimals} title="Wild-Animals"/>


.List{
  display: inline-block;
  width: 250px;
  margin: 10px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.603);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.575);
  border-radius: 20px;
  background-color: antiquewhite;
}
.List h1{
  background-color: aquamarine;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 5px;
}
.List li{
  list-style: none;
  font-size: 1.1em;
  padding-left: 30px;
  margin-bottom: 3px;
}


*/
export default RenderList