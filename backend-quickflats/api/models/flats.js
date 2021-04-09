const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flatsSchema = new Schema({
    fullName: String,
    email: String,
    state: String,
    city: String,
    address: String,
    paymentPlan: String,
    price: Number,
    rooms: Number,
    images: String,
    description: String,
})

module.exports = mongoose.model('flats', flatsSchema)