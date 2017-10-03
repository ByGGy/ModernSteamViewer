import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FetchAppsRequest } from '../sagas/steamSaga'

class steamView extends Component {
  constructor(props) {
    super(props)

    this.handleFetchRequest = this.handleFetchRequest.bind(this)
  }

  handleFetchRequest(event) {
    this.props.dispatch(FetchAppsRequest())
  }

  render() {
    return (
      <div>
        <input type="button" value="FETCH FROM STEAM API" onClick={this.handleFetchRequest} />
      </div>
    )
  }
}

export default connect()(steamView)