import { combineReducers,applyMiddleware} from "redux"
import { legacy_createStore as createStore} from 'redux'
import {laptopReducer,mobileReducer,userReducer} from "./reducers"
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';;
const rootReducers=combineReducers({user:userReducer,mobile:mobileReducer,laptop:laptopReducer})
const store=createStore(rootReducers
    ,applyMiddleware(logger,thunk))

/* const store=createStore(rootReducers
,composeWithDevTools(applyMiddleware(logger,thunk)))*/


export default store
