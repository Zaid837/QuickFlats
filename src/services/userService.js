import http from "./httpService"
import {api} from "../config.json"


const apiEndpoint = api + '/users/signup'

export function register(user) {
    return http.post(apiEndpoint, {
        fullName: user.fullName,
        userName: user.userName,
        password: user.password,
        email: user.email,
        phoneNumber: user.phoneNumber
    })
}