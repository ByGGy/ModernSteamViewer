import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import AutoComplete from 'material-ui/AutoComplete'

import styled from 'styled-components'

import SteamIcon from '../icons/steamIcon'

import { FetchAppsRequest, FetchNewsRequest } from '../sagas/steamSaga'

const Layout = styled.div`
  padding: 10px 10px 10px 10px;
  display: grid;
  grid-template-columns: 200px 40px 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 2px;
  justify-items: stretch;
`

const SteamIconArea = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1;
  justify-self: stretch;
`

const StatusArea = styled.div`
  grid-row: 2;
  grid-column: 1;
  justify-self: end;
`

const NewsArea = styled.div`
  grid-row: 1;
  grid-column: 1;
  justify-self: end;
`

const NewsLabel = styled.h3`
  color: #439EBF;
`

const SearchArea = styled.div`
  grid-row: 1 / span 2;
  grid-column: 3;
`

class SearchView extends Component {
  constructor(props) {
    super(props)

    this.handleAppSelection = this.handleAppSelection.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(FetchAppsRequest())
  }

  handleAppSelection(event) {
    if (event.appid) {
      const selectedApp = this.props.apps.find((app) => app.appid === event.appid)
      if (selectedApp)
        this.props.dispatch(FetchNewsRequest(selectedApp))
    } else {
      const selectedApp = this.props.apps.find((app) => app.name === event)
      if (selectedApp)
        this.props.dispatch(FetchNewsRequest(selectedApp))
    }
  }

  render() {
    const appQty = this.props.apps.length

    return (
      <Paper>
        <Layout>
          <SteamIconArea>
            <SteamIcon style={{width: '100%', height: '100%'}} />
          </SteamIconArea>
          <StatusArea>
            <Subheader>{appQty} Apps found</Subheader>
          </StatusArea>
          <NewsArea>
            <NewsLabel>NEWS</NewsLabel>
          </NewsArea>
          <SearchArea>
            <AutoComplete
              fullWidth
              floatingLabelText="Search"
              hintText="Type here the app name"
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={this.props.apps}
              dataSourceConfig={ { text: 'name', value: 'appid' } }
              maxSearchResults={20}
              onNewRequest={this.handleAppSelection}
            />
          </SearchArea>
        </Layout>
      </Paper>
    )
  }
}

const mapStateToProps = ({ steam: { apps = [] } }) => ({ apps })

export default connect(mapStateToProps)(SearchView)