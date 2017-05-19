/**
 * Created by haifeng on 17/1/10.
 */
import { combineReducers } from 'redux';

import News from './newsReducer';
import Invest from './investReducer';
import Message from './messageReducer'

const rootReducer = combineReducers({
    News,
    Invest,
    Message
})

export default rootReducer