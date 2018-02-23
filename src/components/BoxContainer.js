import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const styleInvisible = {
    display: 'none'
}
const styleVisible = {
    display: 'block'
}
const titleStyle = {
    background: '#cccccc',
    userSelect: 'none'
}
const containerStyle={
    zIndex:100,
    position:'absolute',

}

class DragMan {
    constructor(content) {
        this.content = content
        this.drag = false
    }

    event(e) {
        switch (e.type) {
            case 'mousedown':
            case 'dragstart':
                this.drag = true
                this.pos = [e.target.clientX, e.target.clientY]
                this.pointerPos = [e.target.pageX, e.target.pageY]
                break
            case 'mouseup':
            case 'dragend':
                this.drag = false
                break
            case 'mousemove':
            case 'dragmove':
                if (this.drag) {
                    this.move([e.target.pageX, e.target.pageY])
                }
                break
            default:
                console.log(`Unprocessed event ${e.type}`)
        }
    }
    move(pos){
        this.content.style.left=this.pos[0]+pos[0]-this.pointerPos[0]
    }
}

export class BoxContainer extends Component {
    componentDidMount() {
        this.dragMan = new DragMan(this.mainElem)
    }

    render() {
        return (
            <div
                ref={e => this.mainElem = e}
                style={{...containerStyle,...(this.props.open ? styleVisible : styleInvisible)}}
            >
                <Typography
                    style={titleStyle}
                    ref={e => this.titleElem = e}
                    onTouchStart={e => this.dragMan.event(e)}
                    onTouchEnd={e => this.dragMan.event(e)}
                    onTouchMove={e => this.dragMan.event(e)}
                    onMouseDown={e => this.dragMan.event(e)}
                    onMouseUp={e => this.dragMan.event(e)}
                    onMouseMove={e => this.dragMan.event(e)}

                >{this.props.title}</Typography>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

BoxContainer.propTypes = {
    title: PropTypes.string.isRequired,
    open: PropTypes.bool
}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(BoxContainer);
