import { combineReducers, legacy_createStore as createStore } from 'redux'
// import { combineReducers, createStore } from 'redux'

import { devToolsEnhancer } from 'redux-devtools-extension'
import { CounterReducer } from './features/counter'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
