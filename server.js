"use strict";
const QuasR				= require('./app.js');
const BodyParser		= require('body-parser');
const JsonParser		= BodyParser.json();
const Rfr				= require('rfr');
const UrlParser			= BodyParser.urlencoded({extended: true});
const Ctrl				= Rfr('controllers/controllers.js');

/*******************************************************************************
*********************************** Main ***************************************
*******************************************************************************/

// App initialisation
__INIT_APP();

__EVENT_EMITTER.on(__READY_APP,() => {
	console.log('App is ready ! 🚀')
});
