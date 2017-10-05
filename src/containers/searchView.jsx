import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'material-ui/Card'
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
      </Card>
    )
  }
}

const mapStateToProps = ({ steam: { apps = [] } }) => ({ apps })

export default connect(mapStateToProps)(SearchView)