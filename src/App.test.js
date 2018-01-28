import React from 'react';
import ReactDOM from 'react-dom';
import BoxContainer from './components/BoxContainer'
import MapContainer from './components/MapContainer'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BoxContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
    ReactDOM.render(<MapContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
