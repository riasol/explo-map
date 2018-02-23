import {SELECT_BTN} from '../actions/toolbarActions'
const initialState = {
    btnName:null
}
export default function toolbar(state = initialState, action) {
    switch (action.type) {
        case SELECT_BTN:
            return {...state,btnName:action.btnName}
        default:
            return { ...state }
    }
}