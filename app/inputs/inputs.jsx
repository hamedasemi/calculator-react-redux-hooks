import { useContext } from "react";
import context from "../context";


export const Inputs = () => {
    const { state, dispatch } = useContext(context)
    const fisrtNumberChangeHandler = (event) => {
        dispatch({ type: "SET-FIRST-NUMBER", payload: event.target.value})
    }
    const secondNumberChangeHandler = (event) => {
        dispatch({ type: "SET-SECOND-NUMBER", payload: event.target.value})
    }
    return <div>
        <input value={state.firstNumber} type="text" onChange={fisrtNumberChangeHandler} />
        <input value={state.secondNumber} type="text" onChange={secondNumberChangeHandler}/>
    </div>
}