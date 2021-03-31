import request from "./axios";



export function rank() {
    return request({
        url:"./toplist"
    })
}
//榜单详情
export function rankList(id) {
    return request({
        url:"./playlist/detail",
        params:{
            id
        }
    })
}