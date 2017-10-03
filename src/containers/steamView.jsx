import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FetchAppsRequest, FetchNewsRequest } from '../sagas/steamSaga'

class steamView extends Component {
  constructor(props) {
    super(props)
    
    this.state = { filter: ' ' }

    this.handleFetchRequest = this.handleFetchRequest.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)    
    this.handleAppSelection = this.handleAppSelection.bind(this)
  }

  handleFetchRequest(event) {
    this.props.dispatch(FetchAppsRequest())
  }

  handleFilterChange(event) {
    this.setState({ filter: event.target.value })
  }

  handleAppSelection(event) {
    this.props.dispatch(FetchNewsRequest(event.target.value))
  }

  render() {
    const appQty = this.props.apps.length

    const { filter } = this.state
    const filteredApps = this.props.apps.filter((app) => app.name.toLowerCase().includes(filter.toLowerCase()))

    return (
      <div>
        <input type="button" value="FETCH FROM STEAM API" onClick={this.handleFetchRequest} />
        <p>Apps found : {appQty}</p>
        <p />
        <text>Filter</text>
        <input type="text" name="filter" onChange={this.handleFilterChange} />
        {
          filteredApps.length <= 50 ? (
            <div>
              <text>Select</text>
              <select onChange={this.handleAppSelection}>
                {
                  filteredApps.map((app) => <option value={app.appid}>{app.name}</option>)
                }
              </select>
            </div>
          ) : (
            <p>Please edit the filter to narrow the search</p>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = ({ steam: { apps = [] } }) => ({ apps })

export default connect(mapStateToProps)(steamView)