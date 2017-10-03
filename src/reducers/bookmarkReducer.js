const BOOKMARK = 'modernSteamViewer/Test/BOOKMARK'

export default function reduceBookmark(state = [], action) {
    switch (action.type) {
        case BOOKMARK:
            return [...state, action.payload]

        default:
            return state
    }
}

export function AddToBookmark(name) {
  return { type: BOOKMARK, payload: name }
}