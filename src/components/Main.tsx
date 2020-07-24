import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { follow, changeAlbum } from '../action/action';
import { SongType, ModelType, AlbumsType } from '../constant/type';

const mapDispatchToProps = (dispatch: Function) => ({
    follow: () => dispatch(follow()),
    switch: (value: number) => dispatch(changeAlbum(value))
});
const mapStateToProps = (data: ModelType) => ({ state: data });

function Main(props: any) {
    
    function albumData(){
        return props.state.albums[props.state.playing[0]];
    }
    function handleChangeAlbum(index: number){
        props.switch(index);
        props.handleAudio.handleChangeAlbum(index);
    }

    return (
        <article className="box main">
            <section className="box--6">
                <div className="background-light main__bg"></div>
                <img src={`http://localhost:9000/src/source/${albumData().singer}/head.jpg`} className="img--f main__img" alt="main picture" />
                <h1 className="main__title">{albumData().singer}</h1>
                <div className="box main__addition">
                    <div className="box--4c">
                        <h6 className="main__subtitle main__subtitle--s color-secondary">FOLLOWERS</h6>
                        <h6 className="main__subtitle">{(albumData().followers).toLocaleString()}</h6>
                    </div>
                    <div className="box--8c">
                        <button
                            className="btn btn__radius btn__secondary main__submit"
                            onClick={props.follow} disabled={albumData().followed}
                        >FOLLOW</button>
                        <button
                            className="btn btn__radius btn__warm main__submit"
                            onClick={() => props.handleAudio.clickSong(0)}
                        >PLAY</button>
                    </div>
                </div>
            </section>
            <section className="box--6">
                <div className="box__container">
                    <h2 className="m-none">Top Songs</h2>
                    <ul className="topSong-list">
                        {
                            albumData().songs.map((val: SongType, index: number) => (
                                <ul className="topSong-list__item" key={val.name}>
                                    <li>{index + 1}</li>
                                    <li><img src={`http://localhost:9000/src/source/${albumData().singer}/${val.pt}`} className="img--f topSong-list__img" /></li>
                                    <li>{val.name}</li>
                                    <li>{`${Math.floor(val.duration / 60)}:${('0' + (val.duration % 60)).slice(-2)}`}</li>
                                    <li onClick={() => props.handleAudio.clickSong(index)}><FontAwesomeIcon icon={(props.state.playing[1] == index && !props.state.suspended) ? faPause : faPlay} /></li>
                                </ul>
                            ))
                        }
                    </ul>
                    <h2>New Release</h2>
                    <div className="box">
                        <div className="box--4c">
                            <img src={`http://localhost:9000/src/source/${albumData().singer}/${albumData().songs[albumData().latest].pt}`} className="album-img img--f" alt="new release" />
                        </div>
                        <div className="box--8c background-light center-column">
                            <h4 className="text-center">{albumData().songs[albumData().latest].name}</h4>
                            <span className="color-secondary">{albumData().songs[albumData().latest].date}</span>
                        </div>
                    </div>
                    <h2 className="multi-title">Recent Albums</h2>
                    <ul className="cards">
                        {
                            props.state.albums.map((val: AlbumsType, index: number) => (
                                <ul 
                                className="cards__item" 
                                key={val.singer}
                                onClick={()=>handleChangeAlbum(index)}
                                >
                                    <li>
                                        <img src={`http://localhost:9000/src/source/${val.singer}/head.jpg`} className="cards__img img--f" alt="new release" />
                                    </li>
                                    <li className="cards__title">{val.singer}</li>
                                    <li className="cards__subtitle">{val.info.slice(0,4)}</li>
                                </ul>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </article>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);