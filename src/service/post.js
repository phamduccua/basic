import request from "../request"
export const posts = async () => {
    const response = await request.get("post/get")
    return response.data
}