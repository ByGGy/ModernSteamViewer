import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reduceBookmark from './reducers/bookmarkReducer'
import steamSaga from './sagas/steamSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reduceBookmark, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(steamSaga)

// store.subscribe(() =>
//     console.log(store.getState())
// )

export default store