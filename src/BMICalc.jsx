import { useState } from "react";


function BMICalc({activeApp, setActiveApp}) {

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
        if(userHeight === "" || userWeight === "") {
            alert("Please complete both fields before proceeding")
        }else if(userHeight <= 0 || userWeight <= 0) {
            alert("Please input positive values")
        }else{
            setBMIValue((userWeight / ((userHeight/100) * (userHeight/100))).toFixed(2))
        }
       
    }
    const returnToMenu = () => {
        setActiveApp("MainMenu")
    }


    return(
        <>
            <h1 className="appTitle">BMI Calculator</h1>
            <div className="BMICalc-container">
                <input type="number" placeholder="Your Height (cm)" onChange={(e) => {handleHeightInput(e); }} className="appInput BMICalc-input" />
                <input type="number" placeholder="Your Weight (kg)" onChange={(e) => {handleWeightInput(e); }} className="appInput BMICalc-input" />
                <button onClick={calculateBMI} className="app-primary-btn BMICalc-button">Calculate BMI</button>
                <p className="app-text">Your BMI is <span style={{fontWeight:"550"}}>{BMIValue}</span></p>
            </div>
            <button onClick={returnToMenu} className="ageCalc-return-btn">Return to menu</button>
        </>
    )
}
export default BMICalc