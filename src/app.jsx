import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import SteamView from './containers/steamView'
import NewsView from './containers/newsView'
import BookmarkView from './containers/bookmarkView'

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SteamView />
          <NewsView />
          {/* <BookmarkView /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}
