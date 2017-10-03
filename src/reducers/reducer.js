import {combineReducers } from 'redux'

import bookmarks from './bookmarkReducer'
import steam from './steamReducer'

const coreReducer = combineReducers( {
  steam, bookmarks
})

export default coreReducer

