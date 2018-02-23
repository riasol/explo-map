import React from 'react';
import {shallow, configure} from 'enzyme';
import configureStore from 'redux-mock-store';
import LayerBox from '../LayerBox'
import Adapter from 'enzyme-adapter-react-16'

describe('<LayerBox/>', () => {
    test('render', () => {
        configure({adapter: new Adapter()})
        const store = configureStore()({
            mapNavigator: {layers: []}
            , gui: {drawerOpened: false}
        })
        const wrapper = shallow(<LayerBox store={store}/>)
        expect(wrapper.length).toBe(1)
    })
})