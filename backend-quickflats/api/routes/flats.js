const express = require('express');
const router = express.Router();
const Flats = require('../models/flats')



// router.get('/', async(req, res) => {
//     const flat = new Flats({address: '3,ayato street lagos', description: 'cheap affordable houses'})
//     await flat.save()
//     res.send(flat)
// })

router.get('/', async(req, res) => {
    const flats = await Flats.find({})
    res.send({flats})
})

router.post('/', async(req,res) => {
    const flat = await new Flats(req.body)
    flat.save()
    res.send({flat})
})

router.get('/:id', async(req, res) => {
    const flat = await Flats.findById(req.params.id)
    res.send({flat})
})

// router.get('/:id/edit' async(req,res) => {
//     const flat = await Flats.findById(req.params.id)
//     res.send({flat})
// })

router.put('/:id', async(req, res) => {
    const {id} = req.params
    const flat = await Flats.findByIdAndUpdate(id, {...req.body})
    res.send({flat})
})




module.exports = router;