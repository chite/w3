import React from 'react';
import Bar from './Bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


function Album(){
    return (
        <article className="box main">
            <section className="box--6">
                <div className="background-light main__bg"></div>
                <img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt1.jpg" className="img--f main__img" alt="main picture" />
                <h1 className="main__title">But I must explain to You (Deluxe)</h1>
                <div className="box main__addition">
                    <div className="box--4c">
                        <h6 className="main__subtitle main__subtitle--s color-secondary">2019・10 songs・59 min</h6>
                        <h6 className="main__subtitle">Richard Green</h6>
                    </div>
                    <div className="box--8c text-center">
                        <button className="btn btn__radius btn__warm main__submit">PLAY</button>
                    </div>
                </div>
            </section>
            <section className="box--6">
                <div className="box__container">
                    <ul className="topSong-list topSong-list--l">
                        <ul className="topSong-list__item">
                            <li>1</li>
                            <li><img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg" className="img--f topSong-list__img" /></li>
                            <li>Great Pleasure</li>
                            <li>5:34</li>
                            <li><FontAwesomeIcon icon={faPlay} /></li>
                        </ul>
                        <ul className="topSong-list__item">
                            <li>1</li>
                            <li><img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg" className="img--f topSong-list__img" /></li>
                            <li>Great Pleasure</li>
                            <li>5:34</li>
                            <li><FontAwesomeIcon icon={faPause} /></li>
                        </ul>
                        <ul className="topSong-list__item">
                            <li>1</li>
                            <li><img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg" className="img--f topSong-list__img" /></li>
                            <li>Great Pleasure</li>
                            <li>5:34</li>
                            <li><FontAwesomeIcon icon={faPlay} /></li>
                        </ul>
                        <ul className="topSong-list__item">
                            <li>1</li>
                            <li><img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg" className="img--f topSong-list__img" /></li>
                            <li>Great Pleasure</li>
                            <li>5:34</li>
                            <li><FontAwesomeIcon icon={faPlay} /></li>
                        </ul>
                        <ul className="topSong-list__item">
                            <li>1</li>
                            <li><img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg" className="img--f topSong-list__img" /></li>
                            <li>Great Pleasure</li>
                            <li>5:34</li>
                            <li><FontAwesomeIcon icon={faPlay} /></li>
                        </ul>
                        <ul className="topSong-list__item">
                            <li>1</li>
                            <li><img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg" className="img--f topSong-list__img" /></li>
                            <li>Great Pleasure</li>
                            <li>5:34</li>
                            <li><FontAwesomeIcon icon={faPlay} /></li>
                        </ul>
                    </ul>
                    <h2 className="multi-title">You May Like...
                        <span className="multi-title__group">
                            <FontAwesomeIcon icon={faAngleLeft} />
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    </h2>
                    <ul className="cards">
                        <ul className="cards__item">
                            <li>
                                <img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg" className="cards__img img--f" alt="new release" />
                            </li>
                            <li className="cards__title">Itself</li>
                            <li className="cards__subtitle">2018</li>
                        </ul>
                        <ul className="cards__item">
                            <li>
                                <img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg" className="cards__img img--f" alt="new release" />
                            </li>
                            <li className="cards__title">Itself</li>
                            <li className="cards__subtitle">2018</li>
                        </ul>
                        <ul className="cards__item">
                            <li>
                                <img src="https://raw.githubusercontent.com/chite/f2e/master/src/source/pt2.jpg" className="cards__img img--f" alt="new release" />
                            </li>
                            <li className="cards__title">Itself</li>
                            <li className="cards__subtitle">2018</li>
                        </ul>
                    </ul>
                </div>
                <Bar />
            </section>
        </article>
    )
}

export default Album;