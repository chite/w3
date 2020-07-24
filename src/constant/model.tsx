import { ModelType } from '../constant/type';

const state: ModelType = {
    playingMode: 'none', // 播放模式: 'none'-無 'random'-隨機 'cycle'-循環
    suspended: true,
    playing: [0, 1], // album index, song index 
    advertise: true,
    openAdvertise: false,
    openBar: false,
    albums: [
        {
            singer: 'The Chainsmokers',
            info: '2019・3 songs・9 min',
            followers: 4423,
            followed: false,
            top: [0, 1, 2],
            latest: 0, // index
            songs: [
                {
                    name: 'Dont Let Me Down',
                    duration: 217,
                    pt: 'song01.jpg',
                    date: '2020.7.15'
                },
                {
                    name: 'Paris',
                    duration: 221,
                    pt: 'song02.jpg',
                    date: '2020.6.15'
                },
                {
                    name: 'Something Just Like This',
                    duration: 247,
                    pt: 'song03.jpg',
                    date: '2020.5.15'
                }
            ]
        },
        {
            singer: 'Camila Cabello',
            info: '2019・2 songs・6 min',
            followers: 5790,
            followed: true,
            top: [0, 1],
            latest: 0, // index
            songs: [
                {
                    name: 'Never Be the Same',
                    duration: 241,
                    pt: 'song01.jpg',
                    date: '2020.7.15'
                },
                {
                    name: 'Havana',
                    duration: 218,
                    pt: 'song02.jpg',
                    date: '2020.6.15'
                }
            ]
        },
        {
            singer: 'Imagine Dragons',
            info: '2019・3 songs・9 min',
            followers: 20212,
            followed: false,
            top: [0, 1, 2],
            latest: 2,
            songs: [
                {
                    name: 'Natural',
                    duration: 190,
                    pt: 'song01.jpg',
                    date: '2009.3.12'
                },
                {
                    name: 'Bad Liar',
                    duration: 262,
                    pt: 'song02.jpg',
                    date: '2011.7.15'
                },
                {
                    name: 'Thunder',
                    duration: 204,
                    pt: 'song03.jpg',
                    date: '2003.2.25'
                }
            ]
        }
    ]
}

export default state;