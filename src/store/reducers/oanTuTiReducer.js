import * as oanTuTiConstants from '../constants/oanTuTiConstants';

const initialState = {
    // cần bổ sung thêm 1 state result nữa là thắng, hòa hoặc thua để hiển thị
    // result được xử lý theo thuật toán bên dưới
    me: 'keo',
    soBanThang: 0,
    soBanChoi: 0,
    you: 'keo',
};

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

            if (soNgauNhien === 1) {
                state.you = 'keo';
            } else if (soNgauNhien === 2) {
                state.you = 'bua';
            } else {
                state.you = 'bao';
            }
            // thuật toán để check thắng hòa thua như sau:
            // tạo ra 1 list [keo,bua,bao]; mỗi lần người dùng chọn hoặc máy chọn thì dùng hàm findIndex để lấy index ra
            // để ý thấy cái mảng này, thì index của nó có quy luật thắng thua như sau
            // mình chọn cái gì bạn chọn đúng cái đó thì hòa, cái này dễ
            // mình chọn bất cứ cái gì, nếu bạn chọn sau mình 1 index, mình thua ("bua" thắng "keo", "bao" thang "bua"),
            // hoặc bạn chọn trước mình 2 đơn vị mình cũng thua(mình chọn "bao" bạn chọn "keo")
            // if(indexYou===indexMe){
            //     result ="DRAW";
            // }else if(indexMe===indexYou-1|| indexMe === indexYou+2){
            //     result ="LOSE";
            // }else{
            //     result ="WIN";
            // }

            // Kiểm tra số bàn thắng
            if (
                (state.me === 'keo' && state.you === 'bao') ||
                (state.me === 'bua' && state.you === 'keo') ||
                (state.me === 'bao' && state.you === 'bua')
            ) {
                state.soBanThang += 1;
            }

            return { ...state };
        default:
            return state;
    }
};

export default oanTuTiReducer;
