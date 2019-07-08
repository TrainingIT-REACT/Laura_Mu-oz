const actions = [
    "ADD_MYLIST",
    "REMOVE_MYLIST",
    "UPDATE_NAME",
    "LOGED",
    "SELECT_ALBUM",
    "PLAY_SONG"

];

const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;