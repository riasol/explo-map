import {MAP_CREATED} from '../actions/mapActions'
const initialState = {
    map:null,
    layers:[]
}
export default function changePosition(state = initialState, action) {
    switch (action.type) {
        case MAP_CREATED:
            return {...state,map:action.map}
        default:
            return { ...state }
    }
}
