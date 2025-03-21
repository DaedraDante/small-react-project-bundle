import { act, useState } from 'react'
import AgeCalc from './AgeCalc'

function App() {
  const [activeApp, setActiveApp] = useState("")
  const btnsDiv = document.getElementById("btns-div")
  const activeAppIsAgeCalc = () => {
    setActiveApp("AgeCalc")
  }

  const changeScreen = () => {
    if(activeApp === "AgeCalc") {
      btnsDiv.style.display = "none";
      return <AgeCalc activeApp={activeApp} 
      setActiveApp={setActiveApp} />
    }else if(activeApp === "MainMenu") {
      btnsDiv.style.display = "block";
    }
  }
  
  return (
    <>
      <div className='div-for-section-btns' id="btns-div">     
        <button onClick={activeAppIsAgeCalc}>Open Age Calculator</button>
        <button>Open Tip Calculator</button>
        <button>Open BMI Calculator</button>
        <button>the active app is {activeApp}</button>
        <button>Open Age Calculator</button>
      </div>
      {changeScreen()}
    </>
  )
}

export default App
