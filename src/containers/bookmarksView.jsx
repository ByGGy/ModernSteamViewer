import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'

import BookmarkView from './bookmarkView'

class BookmarksView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { bookmarks } = this.props

    return (
      <Paper style={{width:'100%', height:'100%'}}>
        <Subheader>Favorites</Subheader>
        {
          bookmarks.map((item) => <BookmarkView key={item.appid} app={item} />)
        }
      </Paper>
    )
  }
}

const mapStateToProps = ({ bookmarks }) => ({ bookmarks })

export default connect(mapStateToProps)(BookmarksView)