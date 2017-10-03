import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import AutoComplete from 'material-ui/AutoComplete'

import { FetchAppsRequest, FetchNewsRequest } from '../sagas/steamSaga'

class steamView extends Component {
  constructor(props) {
    super(props)

    this.handleFetchRequest = this.handleFetchRequest.bind(this)
    this.handleAppSelection = this.handleAppSelection.bind(this)
  }

  handleFetchRequest(event) {
    this.props.dispatch(FetchAppsRequest())
  }

  handleAppSelection(event) {
    this.props.dispatch(FetchNewsRequest(event.appid))
  }

  render() {
    const appQty = this.props.apps.length

    return (
      <Card>
        <RaisedButton label="FETCH FROM STEAM API" primary onClick={this.handleFetchRequest} />
        <p><small>({appQty} Apps found)</small></p>
        <AutoComplete
          floatingLabelText="Search"
          hintText="Type here to search"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.props.apps}
          dataSourceConfig={ { text: 'name', value: 'appid' } }
          maxSearchResults={20}
          onNewRequest={this.handleAppSelection}
        />
      </Card>
    )
  }
}

const mapStateToProps = ({ steam: { apps = [] } }) => ({ apps })

export default connect(mapStateToProps)(steamView)