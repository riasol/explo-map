import React from 'react';
import {shallow,configure} from 'enzyme';
import configureStore from 'redux-mock-store';
import BoxContainer from '../BoxContainer'
import Adapter from 'enzyme-adapter-react-16'

describe('<BoxContainer/>',()=>{
    test('render',()=>{
        configure({ adapter: new Adapter() })
        const store=configureStore()({})
        const props={
            title:'cos'
        }
        const wrapper=shallow(<BoxContainer store={store} {...props}/>)
        expect(wrapper.length).toBe(1)
    })
})