import types from '../actions/types';

const initialState = {
    albums: [],
    myList: [],
    selectedAlbum: false,
    actualSong: {
        id: 0,
        audio: "",
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_MYLIST: 
            return{
                ...state,
                myList: [...state.myList, {...action.song}]
            };
        case types.REMOVE_LIST:
            return {
                ...state,
                myList: state.myList.filter((song) => song.id !== action.song.id
            )};
        case types.SELECT_ALBUM:
            return {
                ...state,
                selectAlbum: action.selectAlbum
            };
        case types.PLAY_SONG:
            return {
                ...state,
                actualSong: action.actualSong
            };
        default:
            return state;
    }
}

export default reducer;