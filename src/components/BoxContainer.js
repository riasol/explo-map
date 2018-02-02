import Dialog,{ DialogTitle } from 'material-ui/Dialog'
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import PropTypes  from 'prop-types'

export class BoxContainer extends Component {
    render() {
        return (
            <Dialog open={true}>
                <DialogTitle>|{this.props.title}</DialogTitle>
            </Dialog>
        )
    }
}
BoxContainer.propTypes = {
    title:PropTypes.string.isRequired
}
const mapStateToProps = (state) => { return {} }
const mapDispatchToProps = (dispatch) => { return {} }
export default connect(mapStateToProps, mapDispatchToProps)(BoxContainer);
