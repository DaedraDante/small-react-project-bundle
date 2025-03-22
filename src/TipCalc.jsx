import { useState } from "react"

function TipCalc() {

    const [orderCost, setOrderCost] = useState("");
    const [tip, setTip] = useState("2")

    const handleMoneyInput = (e) => {
        setOrderCost(e.target.value)
    }

    return(
        <>
            <h1 className="tipCalc-title">Tip Calculator</h1>
            <div className="tipCalc-container">
                <input placeholder="Enter pay here" onChange={handleMoneyInput}/>
                <p>Your bill is {orderCost} dollars</p>
                <p>You gotta tip {orderCost / 10} dollars</p>
            </div>  
        </>
    )
}
export default TipCalc