import React, {useState} from 'react'

function ToDoList() {
    const [taskList,setTaskList] = useState([]);
    const [id,setId] = useState(0);
    const [task,setTask]=useState("");

    function handleInput(e){
        setTask(e.target.value);
    }
    function AddTask(){
        setId(i=>i=i+1);
        const newTask ={
            Id:id,
            Task:task,
            Time:new Date().toLocaleString(),
        };
        console.log(id);
        setTaskList(t=>[...t,newTask]);
        setTask("");
    }
    function handleRemove(index){
        setTaskList(t=>t.filter((_,i)=>i!==index));
    }
  return (
    <>
    <div className="AddingSection">
        <h1>To-Do-List</h1>
        <input type="text" placeholder='Enter the Task' value={task} onChange={handleInput}/>
        <button onClick={AddTask}>Add-Task</button>
    </div>
    <div className="tasks">
        <h3>Tasks📒</h3>
        <ul>
            {taskList.map((task,index)=>(<li key={task.Id}>
                <span>{task.Task}<h6>{task.Time}</h6></span>
                <button onClick={()=>handleRemove(index)}>x</button>
                </li>))}
        </ul>
    </div>
    </>
  )
}
//<li><span>Task-1ljkasdnladFJHKN </span><button>x</button></li>
export default ToDoList