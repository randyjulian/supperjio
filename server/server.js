require('./config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const mongoose = require('mongoose');

const {FoodList} = require('./db/models/foodList');
const {Menu} = require('./db/models/menu');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const app = new express();
const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{
	res.send('html');
})
//---------------GET---------------


app.get('/:id',(req,res)=>{
	var id = req.params.id;

	var menu = new Menu({
		section: 'Thai Food',
		title: 'Fried Rice',
		price: 23.45
	})

	menu.save().then((doc)=>{
		res.send(id);
	})
})

app.post('/create/',(req,res)=>{
	
	var menu = new Menu({
		sectio: 'Thai Food',
		title: 'Fried Rice',
		price: 23.45
	})

	menu.save().then((doc)=>{
		res.send(doc);
	})


})

// /:id
// Get the supper page by id


//---------------POST---------------

// /create
// Create a supper list. 

//---------------PATCH---------------

// /:id
// update the order list.

//---------------DELETE---------------



app.listen(port,()=>{
	console.log('Started on Port ',port);
});