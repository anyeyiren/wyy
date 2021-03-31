import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as rankReducer } from "../pages/discover/c-pages/ranking/store"

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  rank : rankReducer
});

export default cReducer;
