// initial state
export const initialState = {
    term : null
}

// actionTypes explicitlly, 
export const actionTypes = {
    SET_SEARCH_TERM : 'SET_SEARCH_TERM'
}

// reducer function
export function reducer (state,action){
    // console.log(action);

    switch(action.type){
        case actionTypes.SET_SEARCH_TERM:
            return {...state, term : action.term};
        default : 
            return state;
    }
}
