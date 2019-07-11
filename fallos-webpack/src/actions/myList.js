import types from './types';

export const addToList = (song) => ({
    type: types.ADD_TOLIST,
    song
});

export const clearList = () => ({
    type: types.CLEAR_LIST
});