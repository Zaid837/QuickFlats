const cors = require('cors');
const express = require('express') 
const morgan = require('morgan')
const mongoose = require('mongoose') 
const app = express()



const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const userRoutes = require('./api/routes/users')

mongoose.connect('mongodb://localhost/quickhomes' , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to MongoDB..'))
    .catch(err => console.log('could not connect to MOngoDB..', err))

app.use(cors());
app.options('*', cors());
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')
        return res.status(200).json({})
    }
    next()
})

app.use('/products', productRoutes) 
app.use('/orders', orderRoutes)
app.use('/users', userRoutes)

app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404;
    next(error)
})
app.use((req, res, next) => {
    const error = new Error('Not Found')
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;
