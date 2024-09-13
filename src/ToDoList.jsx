import React, { useState, useEffect } from 'react';

function ToDoList() {
    const [taskList, setTaskList] = useState([]);
    const [id, setId] = useState(0);
    const [task, setTask] = useState("");
    const [filter, setFilter] = useState("all");

    
    function handleInput(e) {
        setTask(e.target.value);
    }
    useEffect(()=>{
        const savedt = JSON.parse(localStorage.getItem('taskList'))||[];
        if (savedt.length > 0) {
            setTaskList(savedt);

            const highestId = savedt.reduce((maxId, t) => Math.max(t.Id, maxId), 0);
            setId(highestId + 1);
        }
    },[]);  

    useEffect(()=>{
        if(taskList.length > 0){
            localStorage.setItem('taskList',JSON.stringify(taskList));
        }
        else{
            localStorage.removeItem('taskList');
        }
    },[taskList]);
    function AddTask() {
        if (!task.trim()){
            window.alert("Task can't be empty!");
            return;
        }
        const newTask = {
            Id: id,
            Task: task,
            Time: new Date().toLocaleString(),
            Status: false,
        };
        setTaskList(t => [...t, newTask]);
        setId(i => i + 1);
        setTask("");
    }

    function handleRemove(taskId) {
        setTaskList(t => t.filter(task => task.Id !== taskId));
    }

    function handleComplete(taskId) {
        const updatedTaskList = taskList.map(t =>
            t.Id === taskId ? { ...t, Status: !t.Status } : t
        );
        setTaskList(updatedTaskList);
    }

    function handleFilter(e) {
        setFilter(e.target.value);
    }

    const filteredTask = taskList.filter(t => {
        if (filter === "completed") return t.Status;
        if (filter === "pending") return !t.Status;
        return true;
    });
    
    
    return (
        <>
            <div className="AddingSection">
                <h1>To-Do-List</h1>
                <input
                    type="text"
                    placeholder="Enter the Task"
                    value={task}
                    onChange={handleInput}
                />
                <button onClick={AddTask}>Add-Task</button>
            </div>

            <div className="fS">
                <label htmlFor="filter">Filter tasks by: </label>
                <select id="filter" value={filter} onChange={handleFilter}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>

            <div className="tasks">
                <h3>Tasks📒</h3>
                <ul>
                    {filteredTask.map(task => (
                        <li key={task.Id}>
                            <span style={{ textDecoration: task.Status ? 'line-through' : 'none' }}>
                                {task.Task}
                            </span>
                            <h6>{task.Time}</h6>
                            <button onClick={() => handleComplete(task.Id)}>v</button>
                            <button onClick={() => handleRemove(task.Id)}>x</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ToDoList;
