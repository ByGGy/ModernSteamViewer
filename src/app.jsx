import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import styled from 'styled-components'

import SearchView from './containers/searchView'
import NewsView from './containers/newsView'
import BookmarkView from './containers/bookmarkView'

const Layout = styled.div`
  background-color: #262626;
  margin: 4px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 4px;
  justify-items: stretch;
`

const SearchArea = styled.div`
  grid-row: 1;
  grid-column: 1 / span 2;
  overflow: hidden;
`

const BookmarkArea = styled.div`
  grid-row: 2;
  grid-column: 1;
  overflow: hidden;
`

const NewsArea = styled.div`
  grid-row: 2;
  grid-column: 2;
  overflow: hidden;
`

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Layout>
          <SearchArea>
            <SearchView />
          </SearchArea>
          <BookmarkArea>

          </BookmarkArea>
          <NewsArea>
            <NewsView />
          </NewsArea>
        </Layout>
      </MuiThemeProvider>
    );
  }
}
