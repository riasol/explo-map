import {LAYER_OPEN_SELECTED} from '../actions/toolbarActions'

const initialState = {
    drawerOpened: false
}
export default function gui(state = initialState, action) {
    switch (action.type) {
        case LAYER_OPEN_SELECTED:
            return {...state, drawerOpened: !state.drawerOpened}
        default:
            return {...state}
    }
}