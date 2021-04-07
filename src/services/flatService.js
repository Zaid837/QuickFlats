import http from "./httpService"
import {api} from "../config.json"

const apiEndpoint = api + '/listflat'

export function list(flat) {
    return http.post(apiEndpoint, {
        fullName: flat.fullName,
        email: flat.email,
        state: flat.state,
        city: flat.city,
        address: flat.address,
        paymentPlan: flat.paymentPlan,
        price: flat.price,
        rooms: flat.rooms,
        description: flat.flatDescription
    })
}