import React, { Component } from 'react';
import './OanTuTi.css';
import ThongTinGame from './ThongTinGame';
import { connect } from 'react-redux';
import { actOanTuTi, actPlayGame } from '../store/actions/oanTuTiActions';

const listSelect = [
    {
        type: 'keo',
        src: 'oanTuTi-img/keo.png',
    },
    {
        type: 'bua',
        src: 'oanTuTi-img/bua.png',
    },
    {
        type: 'bao',
        src: 'oanTuTi-img/bao.png',
    },
];
class OanTuTi extends Component {
    render() {
        const { me, you, oanTuTi, playGame } = this.props;

        return (
            <div className="game-container">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-4 d-block">
                            <div className="left">
                                <img src={`./oanTuTi-img/${me}.png`} width="60px" />
                            </div>
                            <img src="./oanTuTi-img/player.png" height="150px" />
                            <div className="d-flex align-items-center justify-content-center">
                                {/* khúc này cách em tạo điều kiện để add class rất tốt,
                                    nhưng a bổ sung thêm cách để generate các button để cho sạch code, để dữ liệu được động hơn
                                */}
                                {listSelect.map((item, key) => (
                                    <button
                                        key={'btn-' + key}
                                        className={`btnOanTuTi ${me === item.type && 'btnSelect'}`}
                                        onClick={() => oanTuTi(item.type)}
                                    >
                                        <img src={item.src} />
                                    </button>
                                ))}
                                {/* <button className={`btnOanTuTi ${me==='keo'&& "btnSelect"}`} onClick={() => oanTuTi('keo')}>
                                    <img src="./oanTuTi-img/keo.png"/>
                                </button>
                                <button className={`btnOanTuTi ${me==='bua'&& "btnSelect"}`} onClick={() => oanTuTi('bua')}>
                                    <img src="./oanTuTi-img/bua.png"/>
                                </button>
                                <button className={`btnOanTuTi ${me==='bao'&& "btnSelect"}`} onClick={() => oanTuTi('bao')}>
                                    <img src="./oanTuTi-img/bao.png"/>
                                </button> */}
                            </div>
                        </div>
                        <div className="col-4 py-5">
                            <div className="fact">I'm iron man, i love you 3000!!</div>
                            <ThongTinGame />
                            <button className="mt-5 btn-success" onClick={() => playGame()}>
                                Play Game
                            </button>
                        </div>
                        <div className="col-4">
                            <div className="right">
                                <img src={`./oanTuTi-img/${you}.png`} width="60px" />
                            </div>
                            <img src="./oanTuTi-img/playerComputer.png" height="150px" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    me: state.oanTuTiReducer.me,
    you: state.oanTuTiReducer.you,
});

const mapDispatchToProps = (dispatch) => ({
    oanTuTi: (tuTi) => {
        dispatch(actOanTuTi(tuTi));
    },

    playGame: () => {
        dispatch(actPlayGame());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(OanTuTi);
