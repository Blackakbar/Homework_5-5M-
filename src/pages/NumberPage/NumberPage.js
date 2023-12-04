import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumbers, divideNumbers, inputValue, subtractNumbers, timesNumbers } from "../../store/numberSlice";

export default function NumberPage() {
    const dispatch = useDispatch()

    const { inputValue1, inputValue2, result } = useSelector(state => state.numberReducer)

    const handleInputChange = (event, inputIndex) => {
        dispatch(inputValue({inputNumber: event.target.value, inputIndex}))
    }

    return(
        <>
        <div className="container">
            <p>{result}</p>
            <div className="input-container">
                <input type="number" value={inputValue1} onChange={(event) => handleInputChange(event, 1)}></input>
                <input type="number" value={inputValue2} onChange={(event) => handleInputChange(event, 2)}></input>
            </div>
            <div className="btn-container">
                <button onClick={() => dispatch(addNumbers())}>+</button>
                <button onClick={() => dispatch(subtractNumbers())}>-</button>
                <button onClick={() => dispatch(timesNumbers())}>&times;</button>
                <button onClick={() => dispatch(divideNumbers())}>&divide;</button>
            </div>
        </div>
        </>
    )
}