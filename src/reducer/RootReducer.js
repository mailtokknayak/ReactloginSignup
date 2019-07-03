import bookReducer from './BookReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    bookReducer
})

export default rootReducer;