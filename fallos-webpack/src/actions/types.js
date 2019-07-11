const actions = [
    "ADD_TOLIST",
    "REMOVE_FROMLIST",
    "CLEAR_LIST",
    "PLAY_SONG",
    "UPDATE_USERNAME",
    "LOGED"
]

const actionsTypes = {};
actions.forEach(action => {
    actionsTypes[action] = action;
});

export default actionsTypes;