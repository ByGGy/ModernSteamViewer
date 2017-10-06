import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import NewsCard from '../components/newsCard'

class NewsView extends Component {
  render() {
    const { app, news } = this.props

    return (
      <Paper style={{width:'100%', height:'100%'}}>
        <Toolbar style={{background:'#439EBF'}}>
          <ToolbarGroup>
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

const mapStateToProps = ({ steam: { appSelected: app, news = [] } }) => ({ app, news })

export default connect(mapStateToProps)(NewsView)