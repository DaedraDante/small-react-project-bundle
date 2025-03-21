import { useState } from "react"

function TipCalc() {

    const [orderCost, setOrderCost] = useState("");
    const [tip, setTip] = useState("2")

    const handleMoneyInput = (e) => {
        setOrderCost(e.target.value)
    }

    return(
        <>
            <h1>Tip Calculator</h1>
            <div>
                <input placeholder="Enter pay here" onChange={handleMoneyInput}/>
                <p>You paying {orderCost}</p>
                <p>You gotta tip:{orderCost / 10}</p>
            </div>  
        </>
    )
}
export default TipCalc