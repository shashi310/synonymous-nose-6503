
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'

import {reducer as UserReducer} from './UserReducer/reducer'
//import { CourseReducer } from './UserReducer/courseReducer'

import { CourseReducer } from './UserReducer/courseReducer'


import {reducer as AdminReducer} from "./AdminReducer/reducer"

const rootReducer=combineReducers({

AdminReducer,
UserReducer,
CourseReducer,
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store