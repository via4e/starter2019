import { combineReducers } from 'redux'
import { tutorialReducer } from './tutorial'
import { userReducer } from './user'
import { initReducer } from './init'


export const rootReducer = combineReducers ({
        init: initReducer,
    tutorial: tutorialReducer,
        user: userReducer,
})
