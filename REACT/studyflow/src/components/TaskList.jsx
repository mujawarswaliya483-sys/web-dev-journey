import { useState } from "react";
export default function TaskList() {
    const [tasks,setTasks] = useState([
        {
    id: 1,
    title: "Complete React lecture",
    completed: false
        },
        {
    id: 2,
    title: "Practice JavaScript",
    completed: false
},
        {
    id: 3,
    title: "Revise DSA",
    completed: false
}
    ]);

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
                >
                    {task.title} = {task.completed ? "Completed" : "Pending"}
                </p>
            ))}
        </>
    );
}