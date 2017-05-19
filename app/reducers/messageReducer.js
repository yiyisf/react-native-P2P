/**
 * Created by haifeng on 17/1/10.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    isLoading:true,
    messageList:[]
};

let MessageReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_MESSAGE_INIT:
            return state;
        case types.FETCH_MESSAGE_LIST:
            return {
                ...state,
                isLoading: false,
                messageList: action.response.data
            }
        default:
            return state
    }
}

export default MessageReducer;
