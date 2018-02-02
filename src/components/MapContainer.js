import React, {Component} from 'react'
const ol=require('openlayers/dist/ol-debug')
import {countries} from '../resources/countries.js'
import {mapCreateAction} from '../actions/mapActions'
import { connect } from 'react-redux'
import Dialog,{ DialogTitle } from 'material-ui/Dialog'

export class MapContainer extends Component {
    componentDidMount() {
        const format=new ol.format.GeoJSON()
        const c=countries
        format.readFeatures(c)
        const map = new ol.Map({
            layers: new ol.layer.Vector({
                source: new ol.source.Vector({
                    format: format
                })
            }),
            target:'map',
            view:new ol.View({
                center:[0,0],
                zoom:2
            })
        })
        this.props.mapCreateAction(map)
    }

    render() {
        return (
            <Dialog open={true}>
                <DialogTitle>|{this.props.title}</DialogTitle>
            </Dialog>
        )
    }
}

MapContainer.propTypes = {}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        mapCreateAction:(map)=>{
            dispatch(mapCreateAction(map))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);

