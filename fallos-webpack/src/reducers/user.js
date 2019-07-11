import types from '../actions/types';

const initialState = {
    name: "",
    loged: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.UPDATE_USERNAME:
            if(action.name !== ""){
                return{
                    name: action.name,
                    loged: true
                }
            }
            return{
                name: action.name,
                loged: false
            }
        default:
            return state;
    }
}

export default reducer;