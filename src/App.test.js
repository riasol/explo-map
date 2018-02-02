import React from 'react';
import {BoxContainer} from './components/BoxContainer'
import {MapContainer} from './components/MapContainer'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });
const setupBoxContainer=()=>{
    const props={
        title:'cos'
    }
    const enzymeWrapper=mount(<BoxContainer {...props}/>)
    return{wrapBox: enzymeWrapper,props}
}
const setupMapContainer=()=>{
    const props={
        mapCreateAction:jest.fn()
    }
    const enzymeWrapper=mount(<MapContainer {...props}/>)
    return{wrapMap: enzymeWrapper,props}
}
it('Without crashing', () => {
    const {wrapBox}=setupBoxContainer()
    const props=wrapBox.props()
    expect(props.title).toBe('cos')
    const {wrapMap}=setupMapContainer()
});
