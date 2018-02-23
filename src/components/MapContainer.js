import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Map from 'ol/map'
import GeoJSONFormat from 'ol/format/geojson'
import VectorSource from 'ol/source/vector'
import VectorLayer from 'ol/layer/vector'
import View from 'ol/view'
import {mapCreateAction} from '../actions/mapActions'
import '../Map.css'
import 'ol/ol.css'

export class MapContainer extends Component {
    componentDidMount() {
        const format=new GeoJSONFormat()
        const source=new VectorSource({
            format: format,
            url:this.props.defaultMap.url
        })
        const vectorLayer=new VectorLayer({
            source: source
        })
        const layers=[vectorLayer]
        const map = new Map({
            layers: layers,
            view:new View({
                center:[0,0],
                zoom:2
            })
        })
        map.setTarget(this.div)
        this.props.mapCreateAction(map)
    }

    render() {
        return (
            <div id={'map'} ref={e => this.div = e}/>
        )
    }
}

MapContainer.propTypes = {
    defaultMap:PropTypes.object
}
const mapStateToProps = (state) => {
    return {
        defaultMap:state.settings.defaultMap
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        mapCreateAction:(map)=>{
            dispatch(mapCreateAction(map))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);

