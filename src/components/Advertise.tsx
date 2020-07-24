import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { premium, handleAdvertise } from '../action/action';

const mapDispatchToProps = (dispatch: Function) => ({
    goPremium: () => dispatch(premium()),
    advertise: (value: boolean) => dispatch(handleAdvertise(value))
});


function Advertise(props: any) {
    function handleClick() {
        props.goPremium();
        props.advertise(false);
    }
    return (
        <aside className="fixed-bg">
            <section className="fixed-board">
                <h2>Join Premium Plan Now!</h2>
                <h5>Try Premium free for 30 days. Only $5.49/month after.</h5>
                <div className="box fixed-board__main">
                    <div className="box--6c fixed-board__body">
                        <h3 className="fixed-board__title">Free</h3>
                        <h3>$0.00<span className="fixed-board__title--s">/month</span></h3>
                        <ul className="fixed-board__list">
                            <li className="fixed-board__element">
                                <span className="fixed-board__sign">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Shuffle play
                            </li>
                            <li className="color-secondary fixed-board__element">
                                <span className="fixed-board__sign">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Listen offline
                            </li>
                            <li className="color-secondary fixed-board__element">
                                <span className="fixed-board__sign">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                No ad interruptions
                            </li>
                            <li className="color-secondary fixed-board__element">
                                <span className="fixed-board__sign">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Unlimited skips
                            </li>
                            <li className="color-secondary fixed-board__element">
                                <span className="fixed-board__sign">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                High quality audio
                            </li>
                        </ul>
                    </div>
                    <div className="box--6c fixed-board__body">
                        <h3 className="fixed-board__title fixed-board__title--warning">Premium</h3>
                        <h3>$5.49<span className="fixed-board__title--s">/month</span></h3>
                        <ul className="fixed-board__list">
                            <li className="fixed-board__element">
                                <span className="fixed-board__sign fixed-board__sign--warning">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Shuffle play
                            </li>
                            <li className="fixed-board__element">
                                <span className="fixed-board__sign fixed-board__sign--warning">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Listen offline
                            </li>
                            <li className="fixed-board__element">
                                <span className="fixed-board__sign fixed-board__sign--warning">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                No ad interruptions
                            </li>
                            <li className="fixed-board__element">
                                <span className="fixed-board__sign fixed-board__sign--warning">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Unlimited skips
                            </li>
                            <li className="fixed-board__element">
                                <span className="fixed-board__sign fixed-board__sign--warning">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                High quality audio
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fixed-board__group">
                    <button
                        className="btn btn__radius fixed-board__btn"
                        onClick={() => props.advertise(false)}
                    >FREE TRAIL</button>
                    <button
                        className="btn btn__radius btn__warm fixed-board__btn"
                        onClick={handleClick}
                    >GET PREMIUM</button>
                </div>
            </section>
        </aside>
    )
}

export default connect(null, mapDispatchToProps)(Advertise);