import { useState } from "react";


function AgeCalc() {

    const [currentYear, setCurrentYear] = useState(2025);
    const [birthYear, setBirthYear] = useState("");
    const [userAge, setUserAge] = useState("");

    const handleBirthYearInput = (e) => {
        setBirthYear(e.target.value);
    }
    const calculateAge = () => {
        setUserAge(currentYear - birthYear);
    }

    return(
        <>
            <h1 className="age-calc-title">This is an Age Calculator</h1>
            <div className="calc-container">
                <input type="number" name="" placeholder="Input your birth year!" onChange={handleBirthYearInput}/>
                <button onClick={calculateAge}>Click to calculate age!</button>
                <p>You're: {userAge}</p>
            </div>
        </>
    )
}

export default AgeCalc