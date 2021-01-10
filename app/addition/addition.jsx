import { useContext } from "react"
import context from "../context"

export const Addition = () => {
    const { state, dispatch } = useContext(context)
    const additionHandler = () => {
        dispatch({ type: "ADDITION" });
    }
    return <div>
        <button onClick={additionHandler}>+</button>
    </div>
}