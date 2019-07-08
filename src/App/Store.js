import {createStore, combineReducers} from 'redux';
import music from './reducers/music';
import user from './reducers/user';

const store = createStore(
    combineReducers({
        music,
        user
    })
);

export default store;