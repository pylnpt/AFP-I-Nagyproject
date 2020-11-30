const express = require('express');
const router = express.Router();
let Admin = require('../models/admin.model');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/', (req, res) =>{
    Admin.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
    Admin.findById(req.params.id)
        .then(admin => res.json(admin))
        .catch(err => res.status(400).json('Error' + err));
});

router.delete('/:id', (req, res) => {
    Admin.findByIdAndDelete(req.params.id)
        .then(admin => res.json('Admin deleted!'))
        .catch(err => res.status(400).json('Error' + err));
});

router.post('/update/:id', (req, res) => {
    Admin.findById(req.params.id)
        .then(admin => {
            admin.username = req.body.username;
            admin.email = req.body.email;
            admin.password = req.body.password;

            admin.save()
                .then(admin => res.json('Admin updated!'))
                .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error' + err));
});

router.post('/login', function (req, res) {
  const {username, password} = req.body;
  
  Admin.findOne({username: username}, (err, userData) => {
    if(!err && userData !== null){
        if(password == userData.password){
          jwt.sign(
            { id: userData.id},
            config.get('jwtSecret'),
            { expiresIn: 3600},
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                userData
              })
            }
          )
        }
        else{
          res.status(401).send('Incorrect password!');
        }
    }
    else{
      res.status(401).send('Incorrect username!');
    }
  })
})

// Logout

router.all('/logout', (req, res) => {
  const sessUser = req.session.username;
  if(sessUser !== undefined){
    req.session.destroy();
    res.status(200).send('Logout successful!');
  }
  else{
    console.log(`${sessUser}`);
    res.status(401).send("You're not logged in!");
  }
})

module.exports = router;