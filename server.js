const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const path = require('path');


const port = process.env.PORT || 3000;

const app = express();

// hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getyear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './views/intradayTrading.html'), {
		// title:'Home',
		// welcome:'welcome to my site'
		//year:new Date().getFullYear()
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		title: 'About',
		//year:new Date().getFullYear()
	});
});

app.get('/project', (req, res) => {
	res.render('project.hbs', {
		title: 'project',
		//year:new Date().getFullYear()
	});
});

app.listen(port);