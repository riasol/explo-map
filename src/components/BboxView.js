import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import BoxContainer from './BoxContainer'

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        top: 90
    },
});

const STORAGE_KEY = 'BboxViewConf'

class BboxView extends Component {
    layers = []
    state={model:{layers:[]}}
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const saved = localStorage.getItem(STORAGE_KEY)
        this.setState(saved ?
            {model:JSON.parse(saved)} : {
                model: {layers: []}
            })
    }

    update() {
        let model = this.state.model
        model.host = this.hostInput.value
        const c = this.centerInput.value.split(' ').map(v => parseFloat(v))
        const r = parseInt(this.radiusInput.value)
        model.bbox = `${c[0] - r},${c[1] - r},${c[0] + r},${c[1] + r}`
        model.layers = this.layers
        localStorage.setItem(STORAGE_KEY, JSON.stringify(model))
        this.setState({model})
    }

    render() {
        const {classes} = this.props
        return (<BoxContainer title="layers" open={true} className={classes.root}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <List>
                            {this.layers.map((l, i) => {
                                    return (<ListItem key={i}>
                                        <Checkbox checked={l.visible}/>
                                        <input value={l.value} onChange={e => l.value = e.target.value}/>
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={e => {
                                                this.layers.splice(i, 1)
                                                this.update()
                                            }}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>)
                                }
                            )}
                        </List>
                        <Button variant="fab" color="primary" onClick={e => {
                            this.layers.unshift({visible: false, value: 'layers='})
                            this.update()
                        }}>
                            <AddIcon/>
                        </Button>
                    </td>
                    <td>
                        host <input value={this.state.model.host} onChange={e=>{}}/>
                        <br/>center <input ref={r => this.centerInput = r}/>
                        <br/>radius <input ref={r => this.radiusInput = r}/>
                        <br/>
                        <button onClick={e=>this.update()}>apply</button>
                    </td>
                </tr>
                </tbody>
            </table>

            <div style={{position: 'relative'}}>
                {this.state.model.layers.filter(l => l.visible).map(l => {
                    return (<img
                        src={`${this.state.model.host}/wms?service=WMS&version=1.1.0&request=GetMap&layers=gisplus:trawy_na_go&styles=&bbox=${this.state.bbox}&width=${this.state.imgSize[0]}&height=${this.state.imgSize[1]}&srs=${this.state.model.srs}&format=image/png`}
                        style={{position: 'absolute'}}/>)
                })}
            </div>
        </BoxContainer>)
    }
}

BboxView.propTypes = {}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BboxView))