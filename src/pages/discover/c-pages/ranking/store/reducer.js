import {Map} from "immutable";
import * as actionType from "./constants"
const defaultState = Map({
    rank:[],
    index:0,
    playList:{}
});


export default (state = defaultState,action) =>{
    switch (action.type) {
        case actionType.TOP_RANK:
            return state.set("rank",action.rank);
        case actionType.CURRENT_INDEX:
            return state.set("index",action.index);
        case actionType.PLAY_LIST:
            return state.set("playList",action.playList);
        default:
            return state;
    }
}
