import {combineReducers} from 'redux'
import ProductReducer from './product'
import CartReducer from './cart'
import MessageReducer from './message'

const appReducers = combineReducers({
    ProductReducer,
    CartReducer,
    MessageReducer
})

export default appReducers 