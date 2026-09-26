import {useState} from "react"

import './App.css'
import Header from "./components/Header"
import Dashboard from "./components/Dashboard";
import TaskList from "./components/TaskList";
function App() {
  const [count,setCount] = useState(0);
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
      />

      <TaskList/>
    </>
  )
}

export default App
