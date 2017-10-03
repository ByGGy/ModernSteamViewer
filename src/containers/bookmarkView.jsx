import React, { Component } from 'react'
import { connect } from 'react-redux'

import { AddToBookmark } from '../reducers/bookmarkReducer'

class BookmarkView extends Component {
  constructor(props) {
    super(props)

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleAddRequest = this.handleAddRequest.bind(this)
  }

  handleTextChange(event) {
    this.text = event.target.value
  }

  handleAddRequest(event) {
    this.props.dispatch(AddToBookmark(this.text))
  }

  render() {
    const { bookmarks } = this.props

    return (
      <div>
        <div>
          <input type="text" name="name" onChange={this.handleTextChange} />
          <input type="button" value="ADD" onClick={this.handleAddRequest} />
        </div>
        <div>
        {
          bookmarks.map((bookmark) => (
            <p>{bookmark}</p>
          ))
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ bookmarks }) => ({ bookmarks })

export default connect(mapStateToProps)(BookmarkView)