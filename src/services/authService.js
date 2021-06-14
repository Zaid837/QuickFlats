import http from "./httpService"
import {api} from "../config.json"
import jwtDecode from 'jwt-decode'


const apiEndpoint = api + '/users/login'
const tokenKey = 'token'

export async function login(email, password, userName){
    const {data: result} =await http.post(apiEndpoint, {
        email, password, userName
    })
    localStorage.setItem(tokenKey, result.token);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey)
        return jwtDecode(jwt)    
      } catch (error) {
        return null
      }
}
export function loginWithJwt(result) {
    localStorage.setItem(tokenKey, result);
}
export function logout() {
    localStorage.removeItem(tokenKey);
}

