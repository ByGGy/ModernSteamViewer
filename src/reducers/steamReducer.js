const FETCH_APPS_SUCCESS = 'modernSteamViewer/Steam/FETCH_APPS_SUCCESS'
const FETCH_APPS_FAILURE = 'modernSteamViewer/Steam/FETCH_APPS_FAILURE'

const FETCH_NEWS_SUCCESS = 'modernSteamViewer/Steam/FETCH_NEWS_SUCCESS'
const FETCH_NEWS_FAILURE = 'modernSteamViewer/Steam/FETCH_NEWS_FAILURE'

export default function reduceSteam(state = { }, action) {
  switch (action.type) {
    case FETCH_APPS_SUCCESS:
      return { ...state, apps: action.payload.applist.apps }

    case FETCH_APPS_FAILURE:
      console.log(action.payload)
      return state

    case FETCH_NEWS_SUCCESS:
      return { ...state, news: action.payload.appnews.newsitems }

    case FETCH_NEWS_FAILURE:
      console.log(action.payload)
      return { ...state, news: [] }

    default:
      return state
  }
}

export function FetchAppsSuccess(data) {
  return { type: FETCH_APPS_SUCCESS, payload: data }
}

export function FetchAppsFailure(error) {
  return { type: FETCH_APPS_FAILURE, payload: error }
}

export function FetchNewsSuccess(data) {
  return { type: FETCH_NEWS_SUCCESS, payload: data }
}

export function FetchNewsFailure(error) {
  return { type: FETCH_NEWS_FAILURE, payload: error }
}