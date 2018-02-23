import React from 'react'
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import reducer from './reducers/index'
import AppContainer from './components/AppContainer'
import {createLogger} from 'redux-logger'

const logger = createLogger({
    predicate: (getState, action) => action.type !== ''
});
const store = createStore(reducer,applyMiddleware(logger))

const App = (
    <Provider store={store}>
        <AppContainer/>
    </Provider>
)
export default App

