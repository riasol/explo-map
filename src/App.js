import React from 'react'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import reducer from './reducers/index'
import './App.css';
import MapContainer from './components/MapContainer'

const store = createStore(reducer)

export const App = (
    <Provider store={store}>
        <MapContainer />
    </Provider>
)

