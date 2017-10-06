import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import Checkbox from 'material-ui/Checkbox'

import NewsCard from '../components/newsCard'
import StarEmptyIcon from '../icons/starEmptyIcon'
import StarFullIcon from '../icons/starFullIcon'

import { AddBookmark, RemoveBookmark } from '../reducers/bookmarkReducer'

class NewsView extends Component {
  constructor(props) {
    super(props)

    this.handleBookmarkUpdate = this.handleBookmarkUpdate.bind(this)
  }

  handleBookmarkUpdate(event, isInputChecked) {
    const { app } = this.props
    if (app) {
      if (isInputChecked)
        this.props.dispatch(AddBookmark(app))
      else
        this.props.dispatch(RemoveBookmark(app))
    }
  }

  render() {
    const { app, isAppBookmarked, news } = this.props

    return (
      <Paper style={{width:'100%', height:'100%'}}>
        <Toolbar style={{background:'#1F4A59'}}>
          <ToolbarGroup style={{justifyContent:'flex-start'}}>
            <Checkbox
              defaultChecked={isAppBookmarked}
              style={{width:'auto'}}
              checkedIcon={<StarFullIcon />}
              uncheckedIcon={<StarEmptyIcon />}
              onCheck={this.handleBookmarkUpdate}
            />
            <ToolbarTitle style={{color:'white'}} text={app && app.name} />
          </ToolbarGroup>
        </Toolbar>
        <Paper style={{width:'100%', height:'100%', overflow:'auto'}}>
          {
            news.map((item) => <NewsCard key={item.gid} post={item} />)
          }
        </Paper>
      </Paper>
    )
  }
}

function mapStateToProps({ steam: { appSelected: app, news = [] }, bookmarks }) {
  const isAppBookmarked = app && bookmarks.some((item) => item.appid === app.appid)
  return { app, isAppBookmarked, news }
}

export default connect(mapStateToProps)(NewsView)