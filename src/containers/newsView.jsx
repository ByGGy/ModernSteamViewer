import React, { Component } from 'react'
import { connect } from 'react-redux'

import NewsCard from '../components/newsCard'

class newsView extends Component {
  render() {
    const { news } = this.props

    return (
      <div>
        {
          news.map((item) => <NewsCard post={item} />)
        }
      </div>
    )
  }
}

const mapStateToProps = ({ steam: { news = [] } }) => ({ news })

export default connect(mapStateToProps)(newsView)