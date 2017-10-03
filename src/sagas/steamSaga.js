import { call, put, takeLatest } from 'redux-saga/effects'

import steamAPI from './steamAPI'
import { FetchAppsSuccess, FetchAppsFailure, FetchNewsSuccess, FetchNewsFailure } from '../reducers/steamReducer'

const FETCH_APPS_REQUEST = 'modernSteamViewer/Steam/FETCH_APPS_REQUEST'
const FETCH_NEWS_REQUEST = 'modernSteamViewer/Steam/FETCH_NEWS_REQUEST'

function* fetchApps() {
  try {
    const data = yield call(steamAPI.FetchApps)
    yield put(FetchAppsSuccess(data))
  } catch (error) {
    yield put(FetchAppsFailure(error))
  }
}

function* fetchNews(action) {
  try {
    const data = yield call(steamAPI.FetchNews, action.payload)
    yield put(FetchNewsSuccess(data))
  } catch (error) {
    yield put(FetchNewsFailure(error))
  }
}

export default function* steamSaga() {
  yield takeLatest(FETCH_APPS_REQUEST, fetchApps)
  yield takeLatest(FETCH_NEWS_REQUEST, fetchNews)  
}

export function FetchAppsRequest() {
  return { type: FETCH_APPS_REQUEST }
}

export function FetchNewsRequest(appid) {
  return { type: FETCH_NEWS_REQUEST, payload: appid }
}