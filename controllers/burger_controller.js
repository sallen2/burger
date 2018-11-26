const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
  burger
    .allBurgers()
    .then((resp) => {
      res.render('index', { burgers: resp });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/', (req, res) => {
  burger
    .createBurger(req.body.burgerName)
    .then((resp) => {
      console.log(resp);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put('/:devoured', (req, res) => {
  burger
    .updateBurger(req.params.devoured, req.body.devour)
    .then((resp) => {
      console.log(resp);
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
