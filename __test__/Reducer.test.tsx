// import configureStore from 'redux-mock-store';
import state from '../src/constant/model';
import reducer from '../src/reducer/rootreducer';


describe('[unit] reducer', () => {
    test('return original one if no action matched', () => {
        const action = {
            type: ''
        }
        const expected = JSON.parse(JSON.stringify(state));
        const actual = JSON.parse(JSON.stringify(state));
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change playing data if CHOOSE_MUSIC action matched - 1', () => {
        const action = {
            type: 'CHOOSE_MUSIC',
            index: 3
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.playing[1] = 3;
        const actual = JSON.parse(JSON.stringify(state));
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change playing data if CHOOSE_MUSIC action matched - 2', () => {
        const action = {
            type: 'CHOOSE_MUSIC',
            index: 3
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.playing[1] = 3;
        const actual = JSON.parse(JSON.stringify(state));
        actual.playing[1] = 3;
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change suspended data if TOGGLE_PLAY action matched', () => {
        const action = {
            type: 'TOGGLE_PLAY'
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.suspended = true;
        const actual = JSON.parse(JSON.stringify(state));
        actual.suspended = false;
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change suspended data if START_SONG action matched', () => {
        const action = {
            type: 'START_SONG'
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.suspended = false;
        const actual = JSON.parse(JSON.stringify(state));
        actual.suspended = true;
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change suspended data if PAUSE_SONG action matched', () => {
        const action = {
            type: 'PAUSE_SONG'
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.suspended = true;
        const actual = JSON.parse(JSON.stringify(state));
        actual.suspended = false;
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change playing mode if UPDATE_MODE action matched - 1', () => {
        const action = {
            type: 'UPDATE_MODE',
            message: 'random'
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.playingMode = 'random';
        const actual = JSON.parse(JSON.stringify(state));
        actual.playingMode = 'none';
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change playing mode if UPDATE_MODE action matched - 2', () => {
        const action = {
            type: 'UPDATE_MODE',
            message: 'ABC'
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.playingMode = 'random';
        const actual = JSON.parse(JSON.stringify(state));
        actual.playingMode = 'random';
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change followers data if FOLLOW action matched', () => {
        const action = {
            type: 'FOLLOW'
        }
        const FOLLOWERS = 10;
        const expected = JSON.parse(JSON.stringify(state));
        expected.albums[expected.playing[0]].followers = FOLLOWERS;
        expected.albums[expected.playing[0]].followed = true;
        const actual = JSON.parse(JSON.stringify(state));
        actual.albums[actual.playing[0]].followers = FOLLOWERS - 1;
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change playing data if CHANGE_ALBUM action matched - 1', () => {
        const action = {
            type: 'CHANGE_ALBUM',
            index: 1
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.playing[0] = 1;
        const actual = JSON.parse(JSON.stringify(state));
        actual.playing[0] = 0;
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change playing data if CHANGE_ALBUM action matched - 2', () => {
        const action = {
            type: 'CHANGE_ALBUM',
        }
        const expected = JSON.parse(JSON.stringify(state));
        const actual = JSON.parse(JSON.stringify(state));
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change advertise state if GO_PREMIUM action matched', () => {
        const action = {
            type: 'GO_PREMIUM'
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.advertise = false;
        const actual = JSON.parse(JSON.stringify(state));
        actual.advertise = true;
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change advertise opening state if CHANGE_ADVERTISE_STATE action matched - 1', () => {
        const action = {
            type: 'CHANGE_ADVERTISE_STATE',
            state: true
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.openAdvertise = true;
        const actual = JSON.parse(JSON.stringify(state));
        actual.openAdvertise = false;
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change advertise opening state if CHANGE_ADVERTISE_STATE action matched - 2', () => {
        const action = {
            type: 'CHANGE_ADVERTISE_STATE',
        }
        const expected = JSON.parse(JSON.stringify(state));
        const actual = JSON.parse(JSON.stringify(state));
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change bar opening state if CHANGE_BAR_STATE action matched - 1', () => {
        const action = {
            type: 'CHANGE_BAR_STATE',
            state: true
        }
        const expected = JSON.parse(JSON.stringify(state));
        expected.openBar = true;
        const actual = JSON.parse(JSON.stringify(state));
        actual.openBar = false;
        expect(reducer(actual, action)).toEqual(expected);
    })
    test('change bar opening state if CHANGE_BAR_STATE action matched - 2', () => {
        const action = {
            type: 'CHANGE_BAR_STATE',
        }
        const expected = JSON.parse(JSON.stringify(state));
        const actual = JSON.parse(JSON.stringify(state));
        expect(reducer(actual, action)).toEqual(expected);
    })
})
