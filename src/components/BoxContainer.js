import { Dialog } from 'material-ui'
import React,{ Component } from 'react'
import { connect } from 'react-redux'
class BoxContainer extends Component {
    render() {
        return (
            <Dialog >
            </Dialog>
        )
    }
}
BoxContainer.propTypes = {}
const mapStateToProps = (state) => { return {} }
const mapDispatchToProps = (dispatch) => { return {} }
export default connect(mapStateToProps, mapDispatchToProps)(BoxContainer);
