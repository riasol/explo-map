export const SELECT_BTN='SELECT_BTN'
export const BTN_COMPOSER='BTN_COMPOSER'
export const LAYER_OPEN_SELECTED = 'LAYER_OPEN_SELECTED'

export const btnSelected=(name)=>({type:SELECT_BTN,btnName:name})
export const layerDrawerAction = () => ({type: LAYER_OPEN_SELECTED })