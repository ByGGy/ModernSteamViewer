import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import AutoComplete from 'material-ui/AutoComplete'

import styled from 'styled-components'

import SteamIcon from '../icons/steamIcon'
import RefreshIcon from '../icons/refreshIcon'

import { FetchAppsRequest, FetchNewsRequest } from '../sagas/steamSaga'

const Layout = styled.div`
  padding: 10px 10px 10px 10px;
  display: grid;
  grid-template-columns: 20% auto 40px 1fr;
  grid-template-rows: 60% 40%;
  grid-gap: 4px;
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
  grid-row: 1 / span 2;
  grid-column: 2;
  justify-self: start;
`

const NewsLabel = styled.h3`
  color: #439EBF;
`

const FetchArea = styled.div`
  grid-row: 2;
  grid-column: 2;
`

const SearchArea = styled.div`
  grid-row: 1 / span 2;
  grid-column: 4;
`

class SearchView extends Component {
  constructor(props) {
    super(props)

    this.handleFetchRequest = this.handleFetchRequest.bind(this)
    this.handleAppSelection = this.handleAppSelection.bind(this)
  }

  handleFetchRequest(event) {
    this.props.dispatch(FetchAppsRequest())
  }

  handleAppSelection(event) {
    if (event.appid) {
      this.props.dispatch(FetchNewsRequest(event.appid))
    } else {
      const selectedApp = this.props.apps.find((app) => app.name === event)
      if (selectedApp && selectedApp.appid)
        this.props.dispatch(FetchNewsRequest(selectedApp.appid))
    }
  }

  render() {
    const appQty = this.props.apps.length

    return (
      <Card>
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
          <FetchArea>
            <IconButton tooltip="Fetch data from Steam API" onClick={this.handleFetchRequest}>
              <RefreshIcon />
            </IconButton>
          </FetchArea>
          <SearchArea>
            <AutoComplete
              fullWidth
              floatingLabelText="Search"
              hintText="Type here to search"
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={this.props.apps}
              dataSourceConfig={ { text: 'name', value: 'appid' } }
              maxSearchResults={20}
              onNewRequest={this.handleAppSelection}
            />
          </SearchArea>
        </Layout>
      </Card>
    )
  }
}

const mapStateToProps = ({ steam: { apps = [] } }) => ({ apps })

export default connect(mapStateToProps)(SearchView)