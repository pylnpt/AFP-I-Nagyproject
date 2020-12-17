const express = require('express');
const router = express.Router();
let Car = require('../models/car.model');

var query = { reserved: "NEM" };

router.get('/', (req, res) =>{
    Car.find()
        .then(cars => res.json(cars))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/filtered', (req, res) =>{
    Car.find(query)
        .then(cars => res.json(cars))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
        const make = req.body.make;
        const model = req.body.model;
        const mpg = Number(req.body.mpg);
        const plate = req.body.plate;
        const reserved = req.body.reserved;
    
        const newCar = new Car({
            make,
            model,
            mpg,
            plate,
            reserved
        });
    
        newCar.save()
        .then(() => res.json('Car added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.get('/:id', (req, res) => {
    Car.findById(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(400).json('Error' + err));
        
});

router.delete('/:id', (req, res) => {
    Car.findByIdAndDelete(req.params.id)
        .then(car => res.json('Car deleted!'))
        .catch(err => res.status(400).json('Error' + err));
});

router.post('/update/:id', (req, res) => {
    Car.findById(req.params.id)
        .then(car => {
            car.make = req.body.make;
            car.model = req.body.model;
            car.mpg = Number(req.body.mpg);
            car.plate = req.body.plate;
            car.reserved = req.body.reserved;

            car.save()
                .then(car => res.json('Car updated!'))
                .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;