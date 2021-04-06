const cors = require('cors');
const express = require('express') 
const mongoose = require('mongoose') 
const app = express()
const flat = require('./flats')
const Flats = require('../api/models/flats')

mongoose.connect('mongodb://localhost/quickhomes' , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to seedMongoDB..'))
    .catch(err => console.log('could not connect to MOngoDB..', err))

app.use(cors());
app.options('*', cors());
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const seedDb = async() => {
    try {
        await Flats.deleteMany({})
        for(let i= 0; i<=5; i++){
            const randomNumber = Math.floor(Math.random() * 5)
            const newFlat = new Flats({
                fullName: `${flat[randomNumber].fullName}`,
                email: `${flat[randomNumber].email}`,
                state: `${flat[randomNumber].state}`,
                city: `${flat[randomNumber].city}`,
                address: `${flat[randomNumber].address}`,
                paymentPlan: `${flat[randomNumber].paymentPlan}`,
                price: `${flat[randomNumber].price}`,
                rooms: `${flat[randomNumber].rooms}`,
                description: `${flat[randomNumber].description}`
        })
        await newFlat.save()
    }
    } catch (error) {
        console.log(error);
    }
    

}

// app.get('/flats', async(req, res) => {
//     const flat = await Flats.find({})
//     res.send({flat})
// })
seedDb().then(() => {
    mongoose.connection.close()
});