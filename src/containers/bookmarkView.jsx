import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import DeleteIcon from '../icons/deleteIcon'

import { RemoveBookmark } from '../reducers/bookmarkReducer'
import { FetchNewsRequest } from '../sagas/steamSaga'

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: stretch;
`

const RemoveArea = styled.div`
  grid-row: 1;
  grid-column: 1;
  overflow: hidden;
`

const SelectArea = styled.div`
  grid-row: 1;
  grid-column: 2;
  overflow: hidden;
`

class BookmarkView extends Component {
  constructor(props) {
    super(props)

    this.handleRemove = this.handleRemove.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }

  handleRemove(event) {
    const { app } = this.props
    this.props.dispatch(RemoveBookmark(app))
  }

  handleSelection(event) {
    const { app } = this.props
    this.props.dispatch(FetchNewsRequest(app))
  }

  render() {
    const { app } = this.props

    return (
      <Layout>
        <RemoveArea>
          <FlatButton
            style={{minWidth: '0px', height:'100%'}}
            icon={<DeleteIcon />}
            onClick={this.handleRemove}
          />
        </RemoveArea>
        <SelectArea>
          <RaisedButton
            style={{margin: '4px'}}
            buttonStyle={{textAlign: 'left', overflow: 'hidden'}}
            fullWidth
            label={app.name}
            onClick={this.handleSelection}
          />
        </SelectArea>
      </Layout>
    )
  }
}

export default connect()(BookmarkView)