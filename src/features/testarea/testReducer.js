import { createReducer } from '../../app/common/utils/reducerUtil'
import * as actionTypes from './testConstants';

/**
 * @ { inital state of test reducers }
 */
const initialState = {
    data: 455
}

/**
 * 
 * @param {*} state 
 * @param {*} payload 
 */
export const incrementcounter = (state, payload) => {
    return {
        ...state,
        data: state.data + 1
    };
}

/**
 * 
 * @param {*} state 
 * @param {*} payload 
 */
export const decrementcounter = (state, payload) => {
    return {
        ...state,
        data: state.data - 1
    };
}

export default createReducer(initialState, {
    [actionTypes.INCREMENT_COUNTER]: incrementcounter,
    [actionTypes.DECREMENT_COUNTER]: decrementcounter
});