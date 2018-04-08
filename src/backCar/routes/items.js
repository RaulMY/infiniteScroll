var express = require('express');
var router = express.Router();
const request = require('request');
const Item       = require('../models/Item');

/* GET users listing. */
router.get('/new', function(req, res, next) {
  const item = new Item({
    title: "Xal'atath, Blade of the Black Empire",
    description: "Xal'atath has a mind of its own. Ignore its maddening whispers. Do not trust the lies it spins. Take from it what you need, but always remember that the dark presence in the blade is not your ally.",
    imageURL: `/images/artifacts/xalatath`,
    price: Math.floor(Math.random()*100)+1
  });
  item.save()
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(e));;
});

router.get('/:start/:segment', function(req, res, next) {
  Item.find()
  .then(lists=>{
    console.log(req.params.start);
    console.log(lists.length);
    var start = Number(req.params.start);
    var segment = Number(req.params.segment);
    var seg = lists.slice(start, start + segment)
    console.log(seg.length);
    if (seg.length<segment){
      seg = seg.concat(lists.slice(0,segment-seg.length))
    }
    console.log(seg.length)
    res.status(200).json(seg)
  })
  .catch(e=>res.status(500).send(e));
});



module.exports = router;
