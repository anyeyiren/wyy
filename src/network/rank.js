import request from "./axios";



export function getRank() {
    return request({
        url:"/toplist"
    })
}
//榜单详情
export function getRankList(id) {
    return request({
        url:"./playlist/detail",
        params:{
            id
        }
    })
}