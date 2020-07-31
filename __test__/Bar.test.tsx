import React from 'react';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import { Bar } from '../src/components/Bar';
import Adapter from 'enzyme-adapter-react-16';
import state from '../src/constant/model';

configure({ adapter: new Adapter() });
let wrapper: ShallowWrapper;
const props = {
    state: {...JSON.parse(JSON.stringify(state)), openBar: true },
    bar: jest.fn(),
    handleAudio: {
        clickSong: jest.fn(),
        handleSound: jest.fn()
    }
}

beforeEach(() => {
    wrapper = shallow(<Bar {...props} />);
})

describe('test Bar Component', () => {
    test('should render .bar dom',()=>{
        expect(wrapper.find('.bar')).toHaveLength(1);
    })
    test('should trigger bar() if clicking', ()=>{
        wrapper.find('.bar__btn').simulate('click');
        expect(props.bar).toHaveBeenCalledWith(false);
    })
    test('should trigger clickSong(pre) if clicking', ()=>{
        props.state.playing[1] = 1;
        wrapper.find('.svg--l:first-child').simulate('click');
        expect(props.handleAudio.clickSong).toHaveBeenCalledWith(0);
    })
    test('should trigger clickSong(next) if clicking', ()=>{
        props.state.playing[1] = 1;
        wrapper.find('.svg--l:last-child').simulate('click');
        expect(props.handleAudio.clickSong).toHaveBeenCalledWith(2);
    })
    test('should trigger clickSong() if play btn clicking', ()=>{
        wrapper.find('.bar__play').simulate('click');
        expect(props.handleAudio.clickSong).toHaveBeenCalledWith(props.state.playing[1]);
    })
    test('should trigger handleSound() if clicking', ()=>{
        wrapper.find('input').simulate('change',{
            target:{
                value: 0.5
            }
        });
        expect(props.handleAudio.handleSound).toHaveBeenCalledWith(0.5);
    })
})