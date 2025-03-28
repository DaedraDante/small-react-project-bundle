import { useState } from "react";



function ToDoList() {

    const [taskList, setTaskList] = useState(["a","b"]);
    const [currentTaskItem,setCurrentTaskItem] = useState("");
    const [taskItem, setTaskItem] = useState("");
    
    const addTaskToArray = () => {
        // taskList.push(taskItem);
        setTaskList([...taskList,taskItem]);
        console.log(taskList);
    }
    const removeTaskFromArray = (index) => {
        //create a new array with the new task removed
        const updatedTaskList = taskList.filter((_, taskIndex) => taskIndex !== index);
        //Set the state of the array to the new array
        setTaskList(updatedTaskList);
    }
    const handleTaskInput = (e) => {
        setTaskItem(e.target.value);
    }
    const renderArray = () => {
       return taskList.map((taskItem, index) => {
          return (
            <div key={index}>
                <p>{taskItem}<button onClick={() => removeTaskFromArray(index)}>Remove</button></p>
            </div>
          )
        })
    }
//<p>{taskItem} <button onClick={removeTaskFromArray}>remove</button></p>

    return (
        <>
            <div>
                <h1 className="appTitle">To Do List</h1>
                <div className="to-do-inputs">
                    <input className="appInput" placeholder="Enter task" onChange={handleTaskInput}/>
                    <button className="app-primary-btn" onClick={addTaskToArray}>Add Task</button>
                </div>
                <div className="to-do-task-list">
                    {renderArray()}
                </div>
                
            </div>
        </>
    )
}
export default ToDoList