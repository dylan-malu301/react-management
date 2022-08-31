import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import userReduce from './reduces/user'
const allReduces = combineReducers({
  user: userReduce
})
export default createStore(allReduces, applyMiddleware(thunk))