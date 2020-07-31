import configureStore from 'redux-mock-store';
import * as action from '../src/action/action';
const mockStore = configureStore([]);
let store: any;

beforeEach(() => {
    store = mockStore({});
})

describe('unit test action', () => {
    test('Should creates CHOOSE_MUSIC action when calling chooseSong()', () => {
        const expected = [{
            type: 'CHOOSE_MUSIC',
            index: 1
        }]
        store.dispatch(action.chooseSong(1));
        expect(store.getActions()).toEqual(expected);
    })
    test('Should creates TOGGLE_PLAY action when calling toggleSong()', () => {
        const expected = [{
            type: 'TOGGLE_PLAY'
        }]
        store.dispatch(action.toggleSong());
        expect(store.getActions()).toEqual(expected);
    })
    test('Should creates START_SONG action when calling startSong()', () => {
        const expected = [{
            type: 'START_SONG'
        }]
        store.dispatch(action.startSong());
        expect(store.getActions()).toEqual(expected);
    })
    test('Should creates PAUSE_SONG action when calling pauseSong()', () => {
        const expected = [{
            type: 'PAUSE_SONG'
        }]
        store.dispatch(action.pauseSong());
        expect(store.getActions()).toEqual(expected);
    })
    test('Should creates FOLLOW action when calling follow()', () => {
        const expected = [{
            type: 'FOLLOW'
        }]
        store.dispatch(action.follow());
        expect(store.getActions()).toEqual(expected);
    })
    test('Should creates UPDATE_MODE action when calling updateMode()', () => {
        const expected = [{
            type: 'UPDATE_MODE',
            message: 'none'
        }]
        store.dispatch(action.updateMode('none'));
        expect(store.getActions()).toEqual(expected);
    })
    test('Should creates CHANGE_ALBUM action when calling changeAlbum()', () => {
        const expected = [{
            type: 'CHANGE_ALBUM',
            index: 0
        }]
        store.dispatch(action.changeAlbum(0));
        expect(store.getActions()).toEqual(expected);
    })
    test('Should creates GO_PREMIUM action when calling premium()', () => {
        const expected = [{
            type: 'GO_PREMIUM'
        }]
        store.dispatch(action.premium());
        expect(store.getActions()).toEqual(expected);
    })
    test('Should creates CHANGE_ADVERTISE_STATE action when calling handleAdvertise()', () => {
        const expected = [{
            type: 'CHANGE_ADVERTISE_STATE',
            state: false
        }]
        store.dispatch(action.handleAdvertise(false));
        expect(store.getActions()).toEqual(expected);
    })
    test('Should creates CHANGE_BAR_STATE action when calling handleBar()', () => {
        const expected = [{
            type: 'CHANGE_BAR_STATE',
            state: true
        }]
        store.dispatch(action.handleBar(true));
        expect(store.getActions()).toEqual(expected);
    })
})