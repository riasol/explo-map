import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MapContainer from './MapContainer'
import MapToolbar from './MapToolbar'
import ComposerDialog from './ComposerDialog'
import LayerBox from './LayerBox'
import BboxView from './BboxView'

export class AppContainer extends Component {
    render() {
        return (
            <div>
                <LayerBox/>
                <BboxView/>
                <MapContainer/>
            </div>
        )
    }
}

AppContainer.propTypes = {}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)