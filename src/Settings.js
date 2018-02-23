import {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Settings extends Component{
    constructor(props){
        super(props)

    }
    render(){return null}
}
Settings.propTypes={}
const mapStateToProps = (state) => {return{}}
const mapDispatchToProps = (dispatch) => {return{}}
export default connect(mapStateToProps,mapDispatchToProps)(Settings)