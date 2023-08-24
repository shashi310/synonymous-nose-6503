
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import {reducer as UserReducer} from './UserReducer/reducer'

const rootReducer=combineReducers({
UserReducer
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store