import React, { Component } from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'

import { FetchNewsRequest } from '../sagas/steamSaga'

class BookmarkView extends Component {
  constructor(props) {
    super(props)

    this.handleSelection = this.handleSelection.bind(this)
  }

  handleSelection(event) {
    const { app } = this.props
    this.props.dispatch(FetchNewsRequest(app))
  }

  render() {
    const { app } = this.props

    return (
      <RaisedButton
        style={{margin: '4px'}}
        buttonStyle={{textAlign: 'left', overflow: 'hidden'}}
        fullWidth
        label={app.name}
        onClick={this.handleSelection}
      />
    )
  }
}

export default connect()(BookmarkView)