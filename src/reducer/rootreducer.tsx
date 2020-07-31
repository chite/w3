import state from '../constant/model';
import { Action } from '../constant/type';

const reducer = (data = state, action: Action) => {
    switch (action.type) {
        case 'CHOOSE_MUSIC':
            if (action.index !== data.playing[1] && action.index !== undefined) {
                const newPlaying = data.playing;
                newPlaying[1] = action.index;
                return {
                    ...data,
                    playing: newPlaying
                }
            }
            return data;
        case 'TOGGLE_PLAY':
            const isPause = !data.suspended;
            return {
                ...data,
                suspended: isPause
            }
        case 'START_SONG':
            return {
                ...data,
                suspended: false
            }
        case 'PAUSE_SONG':
            return {
                ...data,
                suspended: true
            }
        case 'UPDATE_MODE':
            if (action.message === undefined) return data;
            const options = ['none', 'random', 'cycle'];
            const correct = options.some((val: string) => val == action.message)
            if (correct) {
                return {
                    ...data,
                    playingMode: action.message
                }
            }
            return data
        case 'FOLLOW':
            const index = data.playing[0];
            const newAlbums = JSON.parse(JSON.stringify(data.albums));
            let currentAlbum = JSON.parse(JSON.stringify(data.albums[data.playing[0]]));
            currentAlbum.followers++;
            currentAlbum.followed = true;
            newAlbums[index] = currentAlbum;
            return {
                ...data,
                albums: newAlbums
            }
        case 'CHANGE_ALBUM':
            if (action.index === undefined) return data;
            let newPlayings = data.playing;
            newPlayings[0] = action.index;
            return {
                ...data,
                playing: newPlayings
            }
        case 'GO_PREMIUM':
            return {
                ...data,
                advertise: false
            }
        case 'CHANGE_ADVERTISE_STATE':
            if (action.state === undefined) return data;
            return {
                ...data,
                openAdvertise: action.state
            }
        case 'CHANGE_BAR_STATE':
            if (action.state === undefined) return data;
            return {
                ...data,
                openBar: action.state
            }
        default:
            return data
    }
}
export default reducer;