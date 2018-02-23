import { combineReducers } from 'redux'
import mapNavigator from './mapNavigator'
import settings from './settings'
import toolbar from './toolbar'
import gui from './gui'
export default combineReducers({
    mapNavigator,settings,toolbar,gui
})