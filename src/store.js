import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import coreReducer from './reducers/reducer'
import steamSaga from './sagas/steamSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(coreReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(steamSaga)

// store.subscribe(() =>
//     console.log(store.getState())
// )

export default store