/**
 * Created by zgx on 17/5/17.
 */
import * as types from './actionTypes';
import Util from '../common/Common';

export let messageFetch = () => {
    let URL = 'http://tz88.com.cn/cmfx/posts/all';
    return dispatch => {
        Util.get(URL, (response) => {
            console.log("Fetch thee data："+ response.data);
            dispatch(fetchMessageList(response));
        }, (error) => {
            dispatch(fetchMessageError());
            console.log(error)
        })
    }
}

let fetchMessageList = (response) => {
    return {
        type: types.FETCH_MESSAGE_LIST,
        response
    }
}

let fetchMessageError = () => {
    return {
        type: types.FETCH_MESSAGE_INIT,
    }
}

