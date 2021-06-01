import {combineReducers} from 'redux'
import templateReducer from './reducer'

const reducer = combineReducers({
template:templateReducer
})

export default reducer