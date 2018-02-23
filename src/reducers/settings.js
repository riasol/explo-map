//import {} from '../actions/'
const initialState = {
    defaultMap:{url:'data/countries.geojson'}
}
export default function settings(state = initialState, action) {
    switch (action.type) {
        default:
            return { ...state }
    }
}