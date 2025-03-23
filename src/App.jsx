import { act, useState } from 'react'
import AgeCalc from './AgeCalc'
import TipCalc from './TipCalc'
function App() {
  let [activeApp, setActiveApp] = useState("")
  const btnsDiv = document.getElementById("btns-div")

  const activeAppIsAgeCalc = () => {
    setActiveApp("AgeCalc");
  }
  const activeAppIsTipCalc = () => {
    setActiveApp("TipCalc");
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
    }else if(activeApp === "MainMenu") {
      btnsDiv.style.display = "block";
    }
  }
  
  return (
    <>
      <div className='div-for-menu-btns' id="btns-div">     
        <button onClick={activeAppIsAgeCalc} className='app-primary-btn app-main-menu-btn'>Open Age Calculator</button>
        <button onClick={activeAppIsTipCalc} className='app-primary-btn app-main-menu-btn'>Open Tip Calculator</button>
        <button className='app-primary-btn app-main-menu-btn'>Open BMI Calculator</button>
        <button className='app-primary-btn app-main-menu-btn'>the active app is {activeApp}</button>
        <button className='app-primary-btn app-main-menu-btn'>Open Age Calculator</button>

      </div>
      {changeScreen()}
    </>
  )
}

export default App
