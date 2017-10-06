const BOOKMARK_ADD = 'modernSteamViewer/Test/BOOKMARK_ADD'
const BOOKMARK_REMOVE = 'modernSteamViewer/Test/BOOKMARK_REMOVE'

export default function reduceBookmark(state = [], action) {
    switch (action.type) {
        case BOOKMARK_ADD:
            return [...state, action.payload]

        case BOOKMARK_REMOVE:
            return state.filter((item) => item.appid !== action.payload)

        default:
            return state
    }
}

export function AddBookmark({ name, appid }) {
  return { type: BOOKMARK_ADD, payload: { name, appid } }
}

export function RemoveBookmark({ appid }) {
  return { type: BOOKMARK_REMOVE, payload: appid }
}