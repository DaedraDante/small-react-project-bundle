import { useState } from "react";
import App from "./App";

function AgeCalc({activeApp , setActiveApp}) {

    const [currentYear, setCurrentYear] = useState(2025);
    const [birthYear, setBirthYear] = useState("");
    const [userAge, setUserAge] = useState("");

    const returnToMenu = () => {
        setActiveApp("MainMenu");
    }

    const handleBirthYearInput = (e) => {
        setBirthYear(e.target.value);
    }
    const calculateAge = () => {
      setUserAge(`You are ${currentYear - birthYear} years old`);

   
    }
    
    return(
        <>
            <h1 className="appTitle">Age Calculator</h1>
            <div className="ageCalc-container">
                <input type="number" name="" placeholder="Input your birth year!" onChange={handleBirthYearInput}/>
                <p>{userAge}</p>
                <button onClick={calculateAge} className="app-primary-btn">Click to calculate age!</button>
            </div>
            <button className="ageCalc-return-btn" id="returnToMenuBtn" onClick={returnToMenu}>Return to menu</button>
        </>
    )
}

export default AgeCalc