var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res, next) => {
  return knex('pirates').select().orderBy('name').then(pirates => {
    res.json(pirates);
  });
});

router.post('/', (req, res, next) => {
  return knex('pirates').insert(req.body).then(pirates => {
    res.json(pirates);
  });
});

router.delete('/:id', (req, res, next) => {
  return knex('pirates').where({ id: req.params.id }).delete().then(function(err, pirates) {
    if (err)
    res.status(500).send({error: "problem deleting" });
    res.status(204).send('deleted');
  });
});

router.put('/', (req, res, next) => {
  console.log(req.body.id);
  var pirate = req.body;
  return knex('pirates').where({ id: pirate.id }).update({ name: pirate.name, poison: pirate.poison, accessory: pirate.accessory, image: pirate.image }).then(function(err, pirates) {
    if (err)
    res.status(500).send({error: "problem editing" });
    res.status(204).send('edited');
  });
});

module.exports = router;
