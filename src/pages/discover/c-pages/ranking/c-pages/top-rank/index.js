import React,{memo,useEffect} from 'react';
import classNames from "classnames";
import {useSelector,useDispatch,shallowEqual} from "react-redux"

import {getSizeImage} from "@/utils/format-utils"
import {
    getRankList,
    changeCurrentIndex
} from "../../store/action"
import {
    TopRankingWrapper
} from "./style"

function TopRank(props) {

    const state = useSelector(state =>({
        index : state.getIn(["rank","index"]),
        playList :state.getIn(["rank","rank"])
    }),shallowEqual);
    const currentIndex = state.index;
    //console.log(state.playList);
    console.log(currentIndex);
    console.log(state.playList)
    const dispatch = useDispatch();

    useEffect(()=>{
        const id = state.playList[currentIndex] && state.playList[currentIndex].id;
        if(!id) return;
        dispatch(getRankList(id))
    },[state,dispatch,currentIndex]);


    const handleItemClick = (index)=> {
        dispatch(changeCurrentIndex(index));
        const id =state.playList[currentIndex].id;
        dispatch(getRankList(id))
    };

    return (
        <TopRankingWrapper>
            {
                state.playList.map((item, index) => {
                    let header;
                    if (index === 0 || index === 4) {
                        header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
                    }
                    return (
                        <div key={item.id}>
                            {header}
                            <div className={classNames("item", { "active": index === currentIndex })}
                                 onClick={e => handleItemClick(index)}>
                                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="update">{item.updateFrequency}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </TopRankingWrapper>
    );
}

export default memo(TopRank);