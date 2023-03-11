ATLAS_URI = "mongodb+srv://Jp_lana00:Placeholder*01@cluster0.l0ajxfv.mongodb.net/?retryWrites=true&w=majority"



const routes = require('./routes/routes');

app.use('/api', routes)

const express = require('express');

const router = express.Router()

module.exports = router;

//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})