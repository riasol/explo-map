import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Draver from 'material-ui/Drawer'
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        top:60
    },
});
class LayerBox extends Component {
    render() {
        const { classes } = this.props
        return (
            <Draver open={this.props.open} anchor="left" className={classes.root} ModalProps={{hideBackdrop:true}}>
                <List>
                    {this.props.layers.map((layer,i)=>
                    <ListItem key={i}>
                        <Avatar src={layer.previewImg}/>
                        <ListItemText primary={layer.title}/>
                        <ListItemSecondaryAction>
                            <Checkbox checked={layer.visible}/>
                        </ListItemSecondaryAction>
                    </ListItem>
                    )}
                </List>
            </Draver>
        )
    }
}

LayerBox.propTypes = {
    layers: PropTypes.array,
    open:PropTypes.bool

}
const mapStateToProps = (state) => {
    return {
        layers:state.mapNavigator.layers,
        open:state.gui.drawerOpened
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LayerBox))