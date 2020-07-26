import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModelType } from '../constant/type';
import { faPlay, faVolumeUp, faCaretLeft, faCaretRight, faPause, faRandom, faRetweet, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import Advertise from './Advertise';

const mapStateToProps = (data: ModelType) => ({ state: data });

function Music(props: any) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {

        setPercentage(props.handleAudio.counting / albumData().songs[props.state.playing[1]].duration * 100)
    }, [props.handleAudio.counting])

    function handleClickBar(e: React.MouseEvent) {
        const target = e.target as HTMLDivElement;
        const percentage = Math.ceil(e.clientX - target.getBoundingClientRect().left) / Math.ceil(target.clientWidth) * 100;
        setPercentage(percentage);
        props.handleAudio.handleDuration(percentage / 100 * albumData().songs[props.state.playing[1]].duration);
    }

    function handleClickMusicMode(mode: string) {
        if (mode == props.state.playingMode) {
            props.handleAudio.handleState('none')
        } else {
            props.handleAudio.handleState(mode)
        }
    }

    function selectNext() {
        const boundary = albumData().songs.length;
        const index = (props.state.playing[1] + 1 >= boundary) ? 0 : props.state.playing[1] + 1;
        props.handleAudio.clickSong(index);
    }
    function selectPre() {
        const index = (props.state.playing[1] - 1 < 0) ? albumData().songs.length - 1 : props.state.playing[1] - 1;
        props.handleAudio.clickSong(index);
    }

    function albumData() {
        return props.state.albums[props.state.playing[0]];
    }

    return (
        <article
            className="text-center color-light music"
            style={{ 'background': 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg)' }}
        >
            {
                props.state.openAdvertise &&
                <Advertise />
            }
            <h1 className="music__title">{albumData().songs[props.state.playing[1]].name}</h1>
            <h4 className="music__subtitle">{albumData().singer}</h4>
            <main className="bottom-center board">
                <section className="length">
                    <span>{`${Math.floor(props.handleAudio.counting / 60)}:${('0' + (props.handleAudio.counting % 60)).slice(-2)}`}</span>
                    <div
                        className="length__bar"
                        onClick={(e) => handleClickBar(e)}
                        style={{ 'background': `linear-gradient(to right, #FF6C00 ${percentage}%, #FFF ${percentage}%)` }}
                    >
                    </div>
                    <span>{`${Math.floor(albumData().songs[props.state.playing[1]].duration / 60)}:${('0' + (albumData().songs[props.state.playing[1]].duration % 60)).slice(-2)}`}</span>
                </section>
                <section className="box bar--w">
                    <div className="box--2c">
                        <img
                            src={`https://raw.githubusercontent.com/chite/f2e/master/src/source/${albumData().singer}/song0${props.state.playing[1] + 1}.jpg`}
                            className="bar__img img--f"
                            alt="playing"
                        />
                    </div>
                    <div className="box--3c bar__namespace">
                        <span className="bar__title">{albumData().songs[props.state.playing[1]].name}</span>
                        <span className="bar__subtitle">{albumData().songs[props.state.playing[1]].date}</span>
                    </div>
                    <div className="box--3c bar__player" >
                        <span
                            className={`svg--s h-svg--s ${(props.state.playingMode == 'random') && 'svg--chose'}`}
                            onClick={() => handleClickMusicMode('random')}
                            title="隨機播放"
                        >
                            <FontAwesomeIcon icon={faRandom} />
                        </span>
                        <span
                            className="svg--s"
                            onClick={selectPre}
                        >
                            <FontAwesomeIcon icon={faCaretLeft} />
                        </span>
                        <span
                            className="bar__play"
                            onClick={() => props.handleAudio.clickSong(props.state.playing[1])}
                        >
                            <FontAwesomeIcon icon={!props.state.suspended ? faPause : faPlay} />
                        </span>
                        <span
                            className="svg--s"
                            onClick={selectNext}
                        >
                            <FontAwesomeIcon icon={faCaretRight} />
                        </span>
                        <span
                            className={`svg--s h-svg--s ${(props.state.playingMode == 'cycle') && 'svg--chose'}`}
                            onClick={() => handleClickMusicMode('cycle')}
                            title="循環播放"
                        >
                            <FontAwesomeIcon icon={faRetweet} />
                        </span>
                    </div>
                    <div className="box--2c bar__voice">
                        <FontAwesomeIcon icon={faVolumeUp} />
                        <input
                            type="range"
                            defaultValue={props.handleAudio.volume}
                            max="1"
                            min="0"
                            step="0.1"
                            onChange={(e) => props.handleAudio.handleSound(e.target.value)}
                        />
                    </div>
                    <div className="box--1c center-center">
                        <Link to="/">
                            <span className="color-light">
                                <FontAwesomeIcon icon={faCompressArrowsAlt} />
                            </span>
                        </Link>
                    </div>
                </section>
            </main>
        </article>
    )
}

export default connect(mapStateToProps)(Music);