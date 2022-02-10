import {combineReducers} from 'redux';
import reducer from './reducer';

const rootReducer=combineReducers({
    booksReducer:reducer,
});

export default rootReducer;