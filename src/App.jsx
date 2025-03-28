import { act, useState } from 'react'
import AgeCalc from './AgeCalc'
import TipCalc from './TipCalc'
import BMICalc from './BMICalc'
import ToDoList from './ToDoList'
function App() {
  let [activeApp, setActiveApp] = useState("")
  const btnsDiv = document.getElementById("btns-div")

  const activeAppIsAgeCalc = () => {
    setActiveApp("AgeCalc");
  }
  const activeAppIsTipCalc = () => {
    setActiveApp("TipCalc");
  }
  const activeAppIsBMICalc = () => {
    setActiveApp("BMICalc");
  }
  const activeAppIsToDoList = () => {
    setActiveApp("ToDoList");
  }

  const changeTheme = () => {
    alert("Changed Theme");
  }
  const changeScreen = () => {
    if(activeApp === "AgeCalc") {
      btnsDiv.style.display = "none";
      return <AgeCalc activeApp={activeApp} 
      setActiveApp={setActiveApp} />
    }else if(activeApp === "TipCalc") {
      btnsDiv.style.display = "none";
      return <TipCalc activeApp={activeApp} 
      setActiveApp={setActiveApp} />
    }else if(activeApp === "BMICalc") {
      btnsDiv.style.display = "none";
      return <BMICalc activeApp={activeApp}
      setActiveApp={setActiveApp} />
    }else if(activeApp === "ToDoList") {
      btnsDiv.style.display = "none";
      return <ToDoList activeApp={activeApp} 
      setActiveApp={setActiveApp} />
    }else if(activeApp === "MainMenu") {
      btnsDiv.style.display = "block";
    }
  }
  
  return (
    <>
      <div className='div-for-menu-btns' id="btns-div">     
        <button onClick={activeAppIsAgeCalc} className='app-primary-btn app-main-menu-btn'>Open Age Calculator</button>
        <button onClick={activeAppIsTipCalc} className='app-primary-btn app-main-menu-btn'>Open Tip Calculator</button>
        <button onClick={activeAppIsBMICalc} className='app-primary-btn app-main-menu-btn'>Open BMI Calculator</button>
        <button onClick={activeAppIsToDoList} className='app-primary-btn app-main-menu-btn'>Open Simple To-Do List</button>
        <button className='app-primary-btn app-main-menu-btn'>Open Simple Weather App</button>

      </div>
      <button onClick={changeTheme}>Change Theme</button>
      {changeScreen()}
    </>
  )
}

export default App
