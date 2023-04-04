import request from "./request"

export const querySong = async(id) => {
    return request.get('/song/url?id=33894312', {
        params: id
    })
}

export const queryLyrics = async() => {

}