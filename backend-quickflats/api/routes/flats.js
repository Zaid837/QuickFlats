const express = require('express');
const flatController = require("../controllers/flatControllers");
const router = express.Router();


router.get('/', flatController.flat_index)

router.post('/', flatController.flat_create_post)

router.get('/:id', flatController.flat_details)

// router.get('/:id/edit' async(req,res) => {
//     const flat = await Flats.findById(req.params.id)
//     res.send({flat})
// })

router.put('/:id', flatController.flat_edit)




module.exports = router;