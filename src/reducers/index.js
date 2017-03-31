/**
 * Created by Wu Jian Ping on 2017/2/8.
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { readme } from './readme'

export default combineReducers({
  routing: routerReducer,
  readme
});
