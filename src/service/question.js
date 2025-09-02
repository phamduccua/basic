import request from "../request"
export const questions = async (type) => {
    const response = await request.get("api/question/get", {
        params: { type: type }
    })
    return response.data
}