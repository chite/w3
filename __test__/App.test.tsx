import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/components/App';
import Main from '../src/components/Main';
import Album from '../src/components/Album';
import Music from '../src/components/Music';
import Bar from '../src/components/Bar';
import Adapter from 'enzyme-adapter-react-16';
import store from '../src/store/configurestore';
configure({ adapter: new Adapter() });

describe("test App DOM", () => {
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