import { useState } from "react"

function TipCalc({activeApp, setActiveApp}) {

    const [orderCost, setOrderCost] = useState("");
    const [tip, setTip] = useState("2")

    const handleMoneyInput = (e) => {
        setOrderCost(e.target.value)
    }
    const returnToMenu = () => {
        setActiveApp("MainMenu")
    }

    return(
        <>
            <h1 className="tipCalc-title">Tip Calculator</h1>
            <div className="tipCalc-container">
                <input placeholder="Enter pay here" onChange={handleMoneyInput}
                className="tipCalc-input" type="number"/>
                <p className="tipCalc-p">You gotta tip {orderCost / 10} dollars</p>
            </div>  
            <button className="ageCalc-return-btn" onClick={returnToMenu}>Return to menu</button>
        </>
    )
}
export default TipCalc