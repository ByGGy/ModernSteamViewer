import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { Card, CardTitle, CardText } from 'material-ui/Card'
import NewsCard from '../components/newsCard'

class NewsView extends Component {
  render() {
    const { app, news } = this.props

    return (
      <Card style={{width:'100%', height:'100%'}}>
        <CardTitle
          title={app && app.name}
        />
        <CardText>
        {
          news.map((item) => <NewsCard key={item.gid} post={item} />)
        }
        </CardText>
      </Card>
    )
  }
}

const mapStateToProps = ({ steam: { appSelected: app, news = [] } }) => ({ app, news })

export default connect(mapStateToProps)(NewsView)