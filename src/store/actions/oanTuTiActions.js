import * as oanTuTiConstants from '../constants/oanTuTiConstants';

export const actOanTuTi = (tuTi) => ({
    type: oanTuTiConstants.OAN_TU_TI,
    payload: tuTi,
});

export const actPlayGame = () => ({
    type: oanTuTiConstants.PLAY_GAME,
})