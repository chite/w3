import React, { useState, useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './Main';
import Music from './Music';
import Bar from './Bar';
import { toggleSong, chooseSong, startSong, pauseSong, updateMode, handleAdvertise, handleBar } from '../action/action';
import { ModelType } from '../constant/type';

const mapDispatchToProps = (dispatch: Function) => ({
    choose: (value: number) => dispatch(chooseSong(value)),
    toggle: () => dispatch(toggleSong()),
    start: () => dispatch(startSong()),
    pause: () => dispatch(pauseSong()),
    updateMode: (value: string) => dispatch(updateMode(value)),
    advertise: (value: boolean) => dispatch(handleAdvertise(value)),
    bar: (value: boolean) => dispatch(handleBar(value))
});
const mapStateToProps = (data: ModelType) => ({ state: data });

const App = (props: any) => {
    const [audio] = useState<HTMLAudioElement>(new Audio);
    const [counting, setCounting] = useState(0);
    const handleAudio = {
        volume: audio.volume,
        counting: counting,
        chooseMusic,
        clickSong,
        handleState,
        handleSound,
        handleDuration,
        handleChangeAlbum
    }

    useEffect(() => {
        handleState(props.state.playingMode);
    }, []);

    useEffect(() => {
        let counter = setInterval(() => {
            setCounting(() => Math.floor(audio.currentTime));
        }, 1000);
        return () => clearInterval(counter);
    }, []);

    function clearMusic(): string {
        if (audio.src) {
            const url = audio.src;
            audio.pause();
            audio.src = '';
            props.pause();
            return url;
        }
        return '';
    }
    function chooseMusic(index: number): string {
        if (!audio) return '';
        const albumData = props.state.albums[props.state.playing[0]];
        audio.src = `https://raw.githubusercontent.com/chite/f2e/master/src/source/${albumData.singer}/${albumData.singer}-${albumData.songs[index].name}.mp3`;
        audio.load();
        props.choose(index);
        return audio.src;
    }
    function toggleMusic() {
        if (props.state.suspended) {
            startMusic();
            return 1;
        } else {
            pauseMusic();
            //廣告
            if (props.state.advertise) props.advertise(true);
            return 0;
        }
    }
    function pauseMusic() {
        if (audio.src) audio.pause();
        props.pause();
    }
    function startMusic() {
        if (audio.src) audio.play();
        props.start();
        //打開 Bar
        props.bar(true);
    }
    function handleChangeAlbum(): string[] {
        const preUrl = clearMusic();
        const nextUrl = chooseMusic(0);
        return [preUrl, nextUrl]
    }
    function clickSong(index: number): number | string {
        if (index === props.state.playing[1] && audio.src) {
            //切換暫停/開始
            return toggleMusic();
        } else {
            // 換歌
            clearMusic();
            chooseMusic(index);
            startMusic();
            return audio.src;
        }
    }
    function handleSound(value: number) {
        audio.volume = value;
        return audio.volume;
    }
    function handleDuration(second: number) {
        audio.currentTime = second;
        return audio.currentTime;
    }
    function handleState(mode: string) : string | void{
        switch (mode) {
            case 'none':
                props.updateMode('none');
                audio.onended = function () {
                    props.pause();
                }
                return 'none';
            case 'random':
                props.updateMode('random');
                audio.onended = function () {
                    const albumData = props.state.albums[props.state.playing[0]];
                    const nextSongIndex = Math.floor(Math.random() * albumData.songs.length);
                    clearMusic();
                    chooseMusic(nextSongIndex);
                    startMusic();
                }
                return 'random';
            case 'cycle':
                props.updateMode('cycle');
                audio.onended = function () {
                    const albumData = props.state.albums[props.state.playing[0]];
                    const boundary = albumData.songs.length;
                    const index = (props.state.playing[1] + 1 >= boundary) ? 0 : props.state.playing[1] + 1;
                    clearMusic();
                    chooseMusic(index);
                    startMusic();
                }
                return 'cycle';
            default:
                break;
        }

    }
    return (
        // <HashRouter>
        <HashRouter basename="/f2e/public">
            <>
                <Route exact path="/" render={() => <Main handleAudio={handleAudio} />}></Route>
                <Bar handleAudio={handleAudio} />
            </>
            <Route exact path="/music" render={() => <Music handleAudio={handleAudio} />}></Route>
        </HashRouter>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(App);