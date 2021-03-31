import * as actionType from "./constants";

import {
    rank,
    rankList
} from "@/network/rank"

const changeRankAction = (res)=>({
    type:actionType.TOP_RANK,
    rank:res.list
});
const changeRankListAction = (res)=>({
    type:actionType.PLAY_LIST,
    playList:res.playlist
});

export const changeCurrentIndex = (index) =>({
    type:actionType.CURRENT_INDEX,
    index:index
})


export const getRank = () =>{
    return dispatch =>{
        rank().then(res=>{
            dispatch(changeRankAction(res))
        })
    }
};
export const getRankList = (id)=>{
    return dispatch =>{
        rankList(id).then(res=>{
            dispatch(changeRankListAction(res))
        })
    }
}