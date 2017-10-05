import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardTitle, CardText } from 'material-ui/Card'
import NewsCard from '../components/newsCard'

class NewsView extends Component {
  render() {
    const { news } = this.props

    return (
      <Card>
        <CardTitle
          title='Latest App News'
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

const mapStateToProps = ({ steam: { news = [] } }) => ({ news })

export default connect(mapStateToProps)(NewsView)