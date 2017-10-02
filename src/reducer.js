const BOOKMARK = 'modernSteamViewer/Test/BOOKMARK'

export default function reduceBookmark(state = { bookmarks: [] }, action) {
    switch (action.type) {
    case BOOKMARK:
        return { bookmarks: [...state.bookmarks, action.value] }

        default :
            return state
    }
}

export function AddToBookmark(name) {
  return { type: BOOKMARK, value: name }
}