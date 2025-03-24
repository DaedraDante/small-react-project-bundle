import { useState } from "react";


function BMICalc() {

    const [userHeight, setUserHeight] = useState("");
    const [userWeight, setUserWeight] = useState("");
    const [BMIValue , setBMIValue] = useState("");

    const handleHeightInput = (e) => {
        (setUserHeight(e.target.value))
    }
    const handleWeightInput = (e) => {
        setUserWeight(e.target.value)
    }
    const calculateBMI = () => {
        console.log(userHeight);
        console.log(userWeight);
        setBMIValue(userWeight / ((userHeight/100) * (userHeight/100)))
    }


    return(
        <>
            <h1>BMI Calculator</h1>
            <div className="BMICalc-container">
                <input type="number" placeholder="Your Height" onChange={(e) => {handleHeightInput(e); }}/>
                <input type="number" placeholder="Your Weight" onChange={(e) => {handleWeightInput(e); }}/>
                <p>{userHeight}</p>
                <p>{userWeight}</p>
                <button onClick={calculateBMI}>Calculate BMI</button>
                <p>Your BMI is {BMIValue}</p>
            </div>
        </>
    )
}
export default BMICalc