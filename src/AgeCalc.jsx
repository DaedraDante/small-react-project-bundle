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
            <h1 className="age-calc-title">This is an Age Calculator</h1>
            <div className="calc-container">
                <input type="number" name="" placeholder="Input your birth year!" onChange={handleBirthYearInput}/>
                <button onClick={calculateAge} onKeyUp={calculateAge}>Click to calculate age!</button>
                <p>{userAge}</p>
            </div>
            <button className="ageCalc-return-btn" id="returnToMenuBtn" onClick={returnToMenu}>Return to menu</button>
        </>
    )
}

export default AgeCalc