import React from 'react';
import { shallow,mount, configure, ShallowWrapper } from 'enzyme';
import { Music } from '../src/components/Music';
import Adapter from 'enzyme-adapter-react-16';
import state from '../src/constant/model';

configure({ adapter: new Adapter() });
let props: any;
let wrapper: ShallowWrapper;

beforeEach(() => {
    props = {
        state: state,
        handleAudio: {
            handleSound: jest.fn(),
            handleDuration: jest.fn(),
            handleState: jest.fn(),
            clickSong: jest.fn(),
            counting: 0
        }
    }
    wrapper = shallow(<Music {...props} />);
})


describe("test Music Component", () => {
    test('should render specific dom', () => {
        expect(wrapper.find("article")).toHaveLength(1);
    })
    test('should call handleSound with certain value if changing volume', () => {
        wrapper.find('.bar__voice input').simulate("change", {
            target: {
                value: 50
            }
        })
        expect(props.handleAudio.handleSound).toHaveBeenCalledWith(50);
    })
    test('should change mode to cycle if clicking', () => {
        wrapper.find('.h-svg--s:last-child').simulate('click');
        expect(props.handleAudio.handleState).toBeCalledWith('cycle')
    })
    test('should change mode to random if clicking', () => {
        wrapper.find('.h-svg--s:first-child').simulate('click');
        expect(props.handleAudio.handleState).toBeCalledWith('random')
    })
    test('should select next song if clicking', () => {
        const index = 1;
        props.state.playing[1] = index;
        wrapper.find('.svg--s').at(2).simulate('click');
        expect(props.handleAudio.clickSong).toBeCalledWith(index + 1);
    })
    test('should select previous song if clicking', () => {
        const index = 1;
        props.state.playing[1] = index;
        wrapper.find('.svg--s').at(1).simulate('click');
        expect(props.handleAudio.clickSong).toBeCalledWith(index - 1);
    })
    test('should call clickSong if clicking playing button', () => {
        const index = props.state.playing[1] = 1;
        wrapper.find('.bar__play').simulate('click');
        expect(props.handleAudio.clickSong).toBeCalledWith(index);
    })
    test('should counting percentage if clicking bar', () => {
        const song = {
            playingIndex: 1,
            albumIndex: 0,
            duration: 100
        }
        const data = {
            clientX: 120,
            clientWidth: 50,
            left: 20
        }
        props.state.playing[0] = song.albumIndex;
        props.state.playing[1] = song.playingIndex;
        props.state.albums[song.albumIndex].songs[song.playingIndex].duration = song.duration;

        wrapper.find('.length__bar').simulate('click', {
            clientX: data.clientX,
            target: {
                clientWidth: data.clientWidth,
                getBoundingClientRect: function () {
                    return {
                        left: data.left
                    }
                }
            }
        })
        const answer = (data.clientX - data.left) / data.clientWidth * song.duration
        expect(props.handleAudio.handleDuration).toBeCalledWith(answer);
    })
})

describe('unit test functions', () => {
    test('handleClickMusicMode', () => {
        props.state.playingMode = 'random';
        wrapper.find('.h-svg--s:first-child').simulate('click');
        expect(props.handleAudio.handleState).toBeCalledWith('none')
    })
})