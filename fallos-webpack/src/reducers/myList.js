import types from '../actions/types';

const initialState = {
    list: []
}

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case types.ADD_TOLIST: 
            return {
                list: [
                    ...state.list,
                    {
                        song: action.song,
                        added: true
                    }
                ]
            }
                
        case types.CLEAR_LIST:
            return{
                list: []
            };
        case types.PLAY_SONG:
            return {
                list: [
                    ...state.list.slice(0, action.index),
                    {
                        ...state.list[action.index],
                        playing: true
                    },
                    ...state.list.slice(action.index + 1)
                ]
            }; 
        default:
            return state;   
    }
}

export default reducer;