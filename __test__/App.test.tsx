import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure, ReactWrapper } from 'enzyme';
import App from '../src/components/App';
import Main from '../src/components/Main';
import Music from '../src/components/Music';
import Bar from '../src/components/Bar';
import Adapter from 'enzyme-adapter-react-16';
import store from '../src/store/configurestore';

configure({ adapter: new Adapter() });
let wrapper: ReactWrapper;

beforeEach(() => {
    wrapper = mount(
        <Provider store={store}>
            <App />
        </Provider>
    )
})

describe("test App Component", () => {
    test('should render Main component', () => {
        expect(wrapper.find(Main)).toHaveLength(1);
        expect(wrapper.find(Bar)).toHaveLength(1);
        expect(wrapper.find(Music)).toHaveLength(0);
    })
})
describe('unit test functions', () => {
    const pause = jest
        .spyOn(window.HTMLMediaElement.prototype, 'pause')
        .mockImplementation();
    const load = jest
        .spyOn(window.HTMLMediaElement.prototype, 'load')
        .mockImplementation();
    const play = jest
        .spyOn(window.HTMLMediaElement.prototype, 'play')
        .mockImplementation();
    test('[unit] chooseMusic()', () => {
        expect(wrapper.find(Main).props().handleAudio.chooseMusic(2)).toBe('https://raw.githubusercontent.com/chite/f2e/master/src/source/The%20Chainsmokers/The%20Chainsmokers-Something%20Just%20Like%20This.mp3');
    })
    test('[unit] handleChangeAlbum()', () => {
        const pre = 'https://raw.githubusercontent.com/chite/f2e/master/src/source/The%20Chainsmokers/The%20Chainsmokers-Something%20Just%20Like%20This.mp3';
        const next = 'https://raw.githubusercontent.com/chite/f2e/master/src/source/The%20Chainsmokers/The%20Chainsmokers-Dont%20Let%20Me%20Down.mp3'
        wrapper.find(Main).props().handleAudio.chooseMusic(2)
        expect(wrapper.find(Main).props().handleAudio.handleChangeAlbum()).toEqual([pre, next]);
    })
    test('[unit] handleSound()', () => {
        wrapper.find(Main).props().handleAudio.chooseMusic(2)
        expect(wrapper.find(Main).props().handleAudio.handleSound(0.5)).toBe(0.5)
    })
    test('[unit] toggleMusic()', () => {
        wrapper.find(Main).props().handleAudio.chooseMusic(2)
        expect(wrapper.find(Main).props().handleAudio.clickSong(2)).toBe(1);
    })
    test('[unit] clickSong()', () => {
        wrapper.find(Main).props().handleAudio.chooseMusic(2)
        expect(typeof wrapper.find(Main).props().handleAudio.clickSong(2)).toBe('number');
        expect(typeof wrapper.find(Main).props().handleAudio.clickSong(1)).toBe('string');
    })
    test('[unit] handleDuration()', () => {
        expect(wrapper.find(Main).props().handleAudio.handleDuration(300)).toBe(300);
    })
    test('[unit] handleState()', () => {
        expect(wrapper.find(Main).props().handleAudio.handleState('none')).toBe('none');
        expect(wrapper.find(Main).props().handleAudio.handleState('random')).toBe('random');
        expect(wrapper.find(Main).props().handleAudio.handleState('cycle')).toBe('cycle');
        expect(wrapper.find(Main).props().handleAudio.handleState('')).toBe(undefined);
    })
})