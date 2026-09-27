import {useState} from "react"

import './App.css'
import Header from "./components/Header"
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
function App() {
  const [tasks,setTasks] = useState([
    {
      id:1,
      title:"Completed react lecture",
      completed: false
    },
    {
      id:2,
      title:"Practice JavaScript",
      completed: false
    },
    {
      id:3,
      title:"Revise DSA",
      completed: false
    },
  ]);
  
  return (

  
    <>
      <Header
      title="StudyFlow"
      subtitle="Smart Study Dashboard"
      message="Welcome to your productivity dashboard"
      />

      <Dashboard
      heading="Welcome Back"
      paragraph="Here's your study progress for today."
      tasks={tasks}
      />

      <TaskList
      tasks={tasks}
      setTasks={setTasks}
      />
    </>
  )
}

export default App
