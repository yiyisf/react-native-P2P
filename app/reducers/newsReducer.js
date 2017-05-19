/**
 * Created by haifeng on 17/1/10.
 */

import * as types from '../actions/actionTypes';

const initialState = {
    isLoading:true,
    newsList:[]
};

let NewsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FETCH_NEWS_INIT:
            return state;
        case types.FETCH_NEWS_LIST:
            return {
                ...state,
                isLoading: false,
                newsList: action.response.data
            }
        default:
            return state
    }
}

export default NewsReducer;
