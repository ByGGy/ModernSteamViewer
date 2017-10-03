import React from 'react';

import SteamView from './containers/steamView'
import BookmarkView from './containers/bookmarkView'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SteamView />
        <BookmarkView />
      </div>
    );
  }
}
