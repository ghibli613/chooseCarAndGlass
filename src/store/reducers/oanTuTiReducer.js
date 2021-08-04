import * as oanTuTiConstants from '../constants/oanTuTiConstants';

const initialState = {
    me: 'keo',
    soBanThang: 0,
    soBanChoi: 0,
    you: 'keo',
}

const oanTuTiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case oanTuTiConstants.OAN_TU_TI:
            state.me = payload;

            return { ...state };
        case oanTuTiConstants.PLAY_GAME:

            // Tăng tổng số bàn chơi 1 đơn vị mỗi khi bấm Play Game
            state.soBanChoi += 1;

            // Random 
            const soNgauNhien = Math.floor(Math.random() * 3) + 1;

            if(soNgauNhien === 1) {
                state.you = 'keo';
            } else if(soNgauNhien === 2) {
                state.you = 'bua';
            } else {
                state.you = 'bao';
            }

            // Kiểm tra số bàn thắng
            if ((state.me === 'keo' && state.you === 'bao') || (state.me === 'bua' && state.you === 'keo') || (state.me === 'bao' && state.you === 'bua')) {
                state.soBanThang += 1;
            }

            return { ...state};
        default:
            return state;
    }
};

export default oanTuTiReducer;