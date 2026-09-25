import {useState} from "react"
import './App.css'
import Header from "./components/Header"
function App() {
  const [count,setCount] = useState(0);
  return (

  
    <>
      <Header
      title="StudyFlow"
      subtitle="Smart Study Dashboard"
      message="Welcome to your productivity dashboard"
      />

      <button onClick={(count=count+1)}>increase</button>
    </>
  )
}

export default App
