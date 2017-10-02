import { createStore } from 'redux'

import reduceBookmark, { AddToBookmark } from './reducer'

const store = createStore(reduceBookmark)

// store.subscribe(() =>
//     console.log(store.getState())
// )

export default store