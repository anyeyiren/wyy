import React, { memo ,useEffect} from 'react'
import {useDispatch} from "react-redux";

import {getRank} from "./store/action";

import RankHeader from "./c-pages/rank-header";
import RankList from "./c-pages/rank-list";
import TopRank from "./c-pages/top-rank";
import {
    RankingLeft,
    RankingRight,
    RankingWrapper
} from "./style"

export default memo(function Ranking() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRank());
    },[dispatch]);
  return (
    <RankingWrapper className="wrap-v2">
        <RankingLeft>
            <TopRank/>
        </RankingLeft>
        <RankingRight>
            <RankHeader/>
            <RankList/>
        </RankingRight>
    </RankingWrapper>
  )
})
