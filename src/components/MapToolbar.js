import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Menu, {MenuItem} from 'material-ui/Menu'
import IconButton from 'material-ui/IconButton'
import {BTN_COMPOSER,LAYER_OPEN_SELECTED,layerDrawerAction, btnSelected} from '../actions/toolbarActions'

import MenuIcon from 'material-ui-icons/Menu'

class MapToolbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <IconButton
                        onClick={this.props.onDrawerClick}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

MapToolbar.propTypes = {}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDrawerClick: () => {
            dispatch(layerDrawerAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapToolbar)