import { createStore, combineReducers } from 'redux';

import myList from './reducers/myList';
import user from './reducers/user';

const store = createStore(
    combineReducers({
        myList,
        user
    })
)

export default store;