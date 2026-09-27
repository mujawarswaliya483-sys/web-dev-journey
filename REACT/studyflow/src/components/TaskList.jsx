import { useState } from "react";
export default function TaskList({ tasks,setTasks }) {

// newTask
//    ↓
// whatever the user has typed in the input
// setNewTask
//    ↓
// changes what is stored in newTask


const [newTask,setNewTask] = useState("");

    function toggleTask(id) 
    {
    const updatedTasks = tasks.map((task) =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    setTasks(updatedTasks);
    }

    // add task

    function addTask(){
        if(newTask.trim() === "")
        {
             return;
        }
           const task = {
            id:Date.now(),
            title:newTask,
            completed: false
           };
           setTasks([...tasks,task]);
           setNewTask("");
    }

    // delete task

    function deleteTask(id){
        const updatedTasks = tasks.filter((task)=> task.id !== id);
        setTasks(updatedTasks);
    }
    return (
        <>
        <input 
        type="text"
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
        placeholder="Enter your Task"
         />
         <br></br>
         <button
         onClick={addTask}>Add Task</button>
            <h1>Today's Tasks</h1>

            {tasks.map((task) => (
                <p 
                key={task.id}
                onClick={()=>toggleTask(task.id)}
                className={task.completed ? "completed-task" : ""}
                
                >
                    {task.title} = {task.completed ? "Completed" : "Pending"}  
                    <br/>
                    <button onClick={(e)=>{
                        e.stopPropagation();
                        deleteTask(task.id);
                    }}>
                        delete task
                    </button>
                </p>
            ))}
        </>
    );
}