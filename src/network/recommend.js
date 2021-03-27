import request from "./axios"

export function getBanners() {
    return request({
        url:"/banner"
    })
}