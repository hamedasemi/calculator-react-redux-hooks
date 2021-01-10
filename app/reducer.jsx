const reducer = (state, action) => {
    switch (action.type) {
        case 'SET-FIRST-NUMBER':
            return { ...state, firstNumber: action.payload }
        case 'SET-SECOND-NUMBER':
            return { ...state, secondNumber: action.payload }
        case "ADDITION":
            return { ...state, result: parseInt(state.firstNumber) + parseInt(state.secondNumber)}
        default:
            return state;
    }

};

export default reducer;