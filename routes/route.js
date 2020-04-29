var express = require('express');
var router = express.Router();
var restaurantlist = [
	{"id": 1,"name": "La Casino","place": "Arizona","cuisine_type": "Itailian",rating:4.5},
	{"id": 2,"name": "Roberta's Pizza","place": "Brooklyn","cuisine_type": "American",rating:4.3},
	{"id": 3,"name": "Hometown BBQ","place": "New York","cuisine_type": "American",rating:4.2},
	{"id": 4,"name": "Superiority Burger","place": "Manhattan","cuisine_type": "Asian",rating:4},
	{"id": 5,"name": "Mu Ramen","place": "Manhattan","cuisine_type": "Asian",rating:3.8}
];

router.get('/',function(req,res){
	res.json(restaurantlist);
});
router.get('/api/restaurant/:id', function(req, res){
   const restra = restaurantlist.find(c=>c.id === parseInt(req.params.id));
   if(!restra) res.status(404).send('Restaurant data not found');
   res.send(restra);
});

router.post('/api/restaurant/',function(req,res){
	const newrest = {
		id:restaurantlist.length+1,
		name:req.body.name,
		place:req.body.name,
		cuisine_type:req.body.name,
		rating:req.body.rating
	};
	restaurantlist.push(newrest);
	res.send(newrest);
});

router.put('/api/restaurant/:id',function(req,res){
	const restra = restaurantlist.find(c=>c.id === parseInt(req.params.id));
	if(!restra){
		return res.status(400).send('Restaurant data not found');
	}
	restra.name=req.body.name;
	restra.place=req.body.place;
	restra.cuisine_type=req.body.cuisine_type;
	res.send(restra);
});

router.delete('/api/restaurant/:id',function(req,res){
	const delrest = restaurantlist.find(c=>c.id === parseInt(req.params.id));
	if(!delrest){
		return res.status(400).send('Restaurant data not found');
	}
	const index = restaurantlist.indexOf(delrest);
	restaurantlist.splice(index,1);
	res.send(delrest);
})
module.exports = router;