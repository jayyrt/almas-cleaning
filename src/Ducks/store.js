import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import calendarReducer from './calendarReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    calendar: null,
    user: userReducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))