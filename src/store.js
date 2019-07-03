import { createStore } from 'redux';
import rootReducer from './reducer/RootReducer'

export default (initialState) => {
           return createStore(rootReducer , initialState)
}