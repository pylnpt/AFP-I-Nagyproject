const router = require('express').Router();
let Reservation = require('../models/reservation.model');

router.route('/').get((req, res) => {
    Reservation.find()
        .then(reservations => res.json(reservations))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const plateNumber = req.body.plateNumber;

    const newReservation = new Reservation({
        firstName,
        lastName,
        email,
        phoneNumber,
        plateNumber
    });

    newReservation.save()
        .then(() => res.json('Reservation added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').get((req, res) => {
    Reservation.findById(req.params.id)
        .then(reservation => res.json(reservation))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res) => {
    Reservation.findByIdAndDelete(req.params.id)
        .then(reservation => res.json('Reservation deleted!'))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/update/:id').post((req, res) => {
    Reservation.findById(req.params.id)
        .then(reservation => {
            reservation.firstName = req.body.firstName;
            reservation.lastName = req.body.lastName;
            reservation.email = req.body.email;
            reservation.phoneNumber = req.body.phoneNumber;
            reservation.plateNumber = Number(req.body.plateNumber);

            reservation.save()
                .then(reservation => res.json('Reservation updated!'))
                .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;
