import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp, faExpandArrowsAlt, faCaretLeft, faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModelType } from '../constant/type';
import { handleBar } from '../action/action';


const mapStateToProps = (data: ModelType) => ({ state: data });
const mapDispatchToProps = (dispatch: Function) => ({
    bar: (value: boolean) => dispatch(handleBar(value))
});

function Bar(props: any) {
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
        (!props.state.openBar) ? <></> :
            <section className="box bar">
                <span
                    className="bar__btn"
                    onClick={() => props.bar(false)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </span>
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
                <div className="box--3c bar__player">
                    <span
                        className="svg--l"
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
                        className="svg--l"
                        onClick={selectNext}
                    >
                        <FontAwesomeIcon icon={faCaretRight} />
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
                    <Link to="/music">
                        <span className="color-light">
                            <FontAwesomeIcon icon={faExpandArrowsAlt} />
                        </span>
                    </Link>
                </div>
            </section>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Bar);