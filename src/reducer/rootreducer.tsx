import state from '../constant/model';
import { Action } from '../constant/type';

const reducer = (data = state, action: Action) => {
    switch (action.type) {
        case 'chooseMusic':
            if (action.index !== data.playing[1]) {
                const newPlaying = data.playing;
                newPlaying[1] = action.index;
                return {
                    ...data,
                    playing: newPlaying
                }
            }
            return data;
        case 'togglePlay':
            const isPause = !data.suspended;
            return {
                ...data,
                suspended: isPause
            }
        case 'startSong':
            return {
                ...data,
                suspended: false
            }
        case 'pauseSong':
            return {
                ...data,
                suspended: true
            }
        case 'updateMode':
            const options = ['none', 'random', 'cycle'];
            const correct = options.some((val: string) => val == action.message)
            if (correct) {
                return {
                    ...data,
                    playingMode: action.message
                }
            }
        case 'follow':
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
        case 'changeAlbum':
            let newPlayings = data.playing;
            newPlayings[0] = action.index;
            return {
                ...data,
                playing: newPlayings
            }
        case 'goPremium':
            return {
                ...data,
                advertise: false
            }
        case 'changeAdvertiseState':
            return {
                ...data,
                openAdvertise: action.state
            }
        case 'changeBarState':
            return {
                ...data,
                openBar: action.state
            }
        default:
            return data
    }
}
export default reducer;