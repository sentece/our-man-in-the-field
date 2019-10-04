import { combineReducers } from 'redux';
import * as gigs from './Gigs'


const reducer = combineReducers({ gigs : gigs.default });

export default reducer;