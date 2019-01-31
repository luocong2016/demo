import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as home from '../reduces/home'
import * as production from '../reduces/production'

export default createStore(
  combineReducers({
    ...home,
    ...production
  }),
  applyMiddleware(thunk)
)
