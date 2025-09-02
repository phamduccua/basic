import request from '../request'
export const login = async (option = {}) => {
    const response =  await request.post("login", option)
    return response.data
}