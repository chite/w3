import React from 'react';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import { Main } from '../src/components/Main';
import Adapter from 'enzyme-adapter-react-16';
import state from '../src/constant/model';

configure({ adapter: new Adapter() });
let wrapper: ShallowWrapper;
const props = {
    state: JSON.parse(JSON.stringify(state)),
    follow: jest.fn(),
    switch: jest.fn(),
    handleAudio: {
        handleChangeAlbum: jest.fn(),
        clickSong: jest.fn()
    }
}

beforeEach(() => {
    wrapper = shallow(<Main {...props} />);
})

describe("test Main Component", () => {
    test('should render specific dom', () => {
        expect(wrapper.find("article")).toHaveLength(1);
    })
    test('should call handelChangeAlbum if clicking album card', () => {
        wrapper.find('.cards__item').first().simulate('click');
        expect(props.switch).toBeCalled();
        expect(props.handleAudio.handleChangeAlbum).toBeCalled();
    })
    test('should call clickSong if clicking playing button', ()=>{
        wrapper.find('.topSong-list__item:last-child li:last-child').simulate('click');
        expect(props.handleAudio.handleChangeAlbum).toBeCalled();
    })
    test('should call clickSong if clicking PLAY button',()=>{
        wrapper.find('.btn.btn__radius.btn__warm.main__submit').simulate('click');
        expect(props.handleAudio.clickSong).toBeCalled();
    })
    test('should call follow if clicking FOLLOW button',()=>{
        wrapper.find('.btn.btn__radius.btn__secondary.main__submit').simulate('click');
        expect(props.follow).toBeCalled();
    })
})