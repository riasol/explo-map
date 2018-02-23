import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import BoxContainer from './BoxContainer'

class ComposerDialog extends Component{

    render(){
        return(
            <BoxContainer
                open={this.props.open}
                title={'Compose with bitmap'}
                >
                <div>Im</div>
            </BoxContainer>
        )
    }
}
ComposerDialog.propTypes={}
const mapStateToProps = (state) => {return{
    showing:state.toolbar.btnName
}}
const mapDispatchToProps = (dispatch) => {return{}}
export default connect(mapStateToProps,mapDispatchToProps)(ComposerDialog)