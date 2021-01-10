import { StrictMode, useReducer } from 'react';
import { render } from 'react-dom';
import style from './app.css';
import reducer from './reducer';
import { Provider } from './context';
import { Inputs } from './inputs/inputs';
import { Addition } from './Addition/addition';

const App = () => {
    const initialState = {
        firstNumber: "",
        secondNumber: "",
        result: 0
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return <StrictMode>
        <Provider value={{ state, dispatch }}>
            {state.result}
            <Inputs></Inputs>
            <Addition></Addition>
        </Provider>
    </StrictMode>
};

render(<App />, document.querySelector('article'));