import { call, put, takeLatest } from 'redux-saga/effects'

import { AddToBookmark } from '../reducers/bookmarkReducer'

import steamAPI from './steamAPI'

const FETCH_APPS_REQUEST = 'modernSteamViewer/Steam/FETCH_APPS_REQUEST'
const FETCH_APPS_SUCCESS = 'modernSteamViewer/Steam/FETCH_APPS_SUCCESS'
const FETCH_APPS_FAILURE = 'modernSteamViewer/Steam/FETCH_APPS_FAILURE'

function* fetchApps(action) {
  try {
    const data = yield call(steamAPI.FetchApps)
    console.log(data)
    yield put(FetchAppsSuccess(data))
  } catch (error) {
    console.log(error)
    yield put(FetchAppsFailure(error))
  }
}

export default function* steamSaga() {
  yield takeLatest(FETCH_APPS_REQUEST, fetchApps)
}

function FetchAppsSuccess(data) {
  return { type: FETCH_APPS_SUCCESS, payload: data }
}

function FetchAppsFailure(error) {
  return { type: FETCH_APPS_FAILURE, payload: error }
}

export function FetchAppsRequest() {
  return { type: FETCH_APPS_REQUEST }
}