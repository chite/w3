import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { mount, shallow, configure } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/components/App';
import Main from '../src/components/Main';
import Album from '../src/components/Album';
import Music from '../src/components/Music';
import Bar from '../src/components/Bar';
import Adapter from 'enzyme-adapter-react-16';
import store from '../src/store/configurestore';
configure({ adapter: new Adapter() });

describe("test App Component", () => {
    const wrapper = mount(
        <Provider store={store}>
            <App />
        </Provider>
    )
    test('should render Main component', () => {
        expect(wrapper.find(Main)).toHaveLength(1);
        expect(wrapper.find(Bar)).toHaveLength(1);
        expect(wrapper.find(Music)).toHaveLength(0);
    })
})
describe("test Main Component", () => {
    test('should render dom', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Main />
            </Provider>);
        expect(wrapper.find("article")).toHaveLength(1)
    })
})
// describe("test Music Component", () => {
//     const wrapper = mount(
//     )
// })
// describe("test Bar Component", () => {
//     const wrapper = mount(
//     )
// })
// describe("test Advertise Component", () => {
//     const wrapper = mount(

//     )
// })