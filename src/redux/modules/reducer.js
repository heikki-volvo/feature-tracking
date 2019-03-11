import { combineReducers } from 'redux';
import features from './features';
import users from './users';

const reducer = combineReducers({
    features,
    users
});

export default reducer;