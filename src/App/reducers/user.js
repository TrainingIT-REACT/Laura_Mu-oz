import types from '../actions/types';

const initialState = {
    name: "",
    loged: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.UPDATE_NAME: {
            return{
                name: action.name
            }
        }
        case types.LOGED:
        return {
          ...state,
          logedUser: action.logedUser
        }
        default:
            return state;
    }
}

export default reducer;