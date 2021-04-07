const Flats = require('../models/flats')
//flat_index, flat_details, flat_create_post, flat_edit

const flat_index = async (req, res) => {
    const flats = await Flats.find({})
    res.send({flats})
}

const flat_details = async(req, res) => {
    const flat = await Flats.findById(req.params.id)
    res.send({flat})
}

const flat_create_post = async(req,res) => {
    const flat = await new Flats(req.body)
    flat.save()
    res.send({flat})
}

const flat_edit = async(req, res) => {
    const {id} = req.params
    const flat = await Flats.findByIdAndUpdate(id, {...req.body})
    res.send({flat})
}

module.exports = {
    flat_index, 
    flat_details,
    flat_create_post,
    flat_edit
}