import { call, put, takeLatest } from 'redux-saga/effects'

import steamAPI from './steamAPI'
import { FetchAppsSuccess, FetchAppsFailure, FetchNewsSuccess, FetchNewsFailure } from '../reducers/steamReducer'

const FETCH_APPS_REQUEST = 'modernSteamViewer/Steam/FETCH_APPS_REQUEST'
const FETCH_NEWS_REQUEST = 'modernSteamViewer/Steam/FETCH_NEWS_REQUEST'

function* fetchApps() {
  try {
    const data = yield call(steamAPI.FetchApps)
    yield put(FetchAppsSuccess({ apps: data.applist.apps }))
  } catch (error) {
    yield put(FetchAppsFailure(error))
  }
}

function* fetchNews(action) {
  try {
    const data = yield call(steamAPI.FetchNews, action.payload.appid)
    yield put(FetchNewsSuccess({ appSelected: action.payload, news: data.appnews.newsitems }))
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

export function FetchNewsRequest({ name, appid }) {
  return { type: FETCH_NEWS_REQUEST, payload: { name, appid } }
}