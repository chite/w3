import React from 'react';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import { Advertise } from '../src/components/Advertise';
import Adapter from 'enzyme-adapter-react-16';
import state from '../src/constant/model';

configure({ adapter: new Adapter() });
const props = {
    state: JSON.parse(JSON.stringify(state)),
    goPremium: jest.fn(),
    advertise: jest.fn(),
}

let wrapper: ShallowWrapper = shallow(<Advertise {...props} />);


describe('test Advertise Component', ()=>{
    test('should render .fixed-bg dom',()=>{
        expect(wrapper.find('.fixed-bg')).toHaveLength(1);
    })
    test('should trigger if clicking',()=>{
        wrapper.find('button:first-child').simulate('click');
        expect(props.advertise).toHaveBeenCalledWith(false);
        wrapper.find('button:last-child').simulate('click');
        expect(props.goPremium).toHaveBeenCalled();
        expect(props.advertise).toHaveBeenCalledWith(false);
    })
})