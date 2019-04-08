const Rfr			= require ('rfr');
const Views			= Rfr('app_commons/views_globals_cm.js');
const Mongo			= Rfr('app_commons/mongo_cm.js').Mongo;
const Events		= require('events');

/*******************************************************************************
************************** Environment variables *******************************
*******************************************************************************/

global.__BASEDIR			= __dirname;
global.__ROOT_URL			= 'http://localhost:8080';
global.__INPROD				= true;
global.__DEBUG				= true;

(__INPROD) ? Rfr('app_commons/prod_credentials_cm.js') : Rfr('app_commons/dev_credentials_cm.js');

// MongoDB info globals
global.__MONGO_URL_OPTIONS			= "?authSource=admin"; // Use the 'admin' database as authentication source
global.__MONGO_DBNAME				= 'startupwise'; // Database name
global.__MONGO_URL_CONNECT			= `mongodb://${__MONGO_USER}:${__MONGO_PWD}@${__MONGO_URL}:${__MONGO_PORT}/${__MONGO_URL_OPTIONS}`;
global.__MONGO_ACTIVE_DBS			= {};

// Mongo collections
global.__MONGO_COLLECTION_USERS	= 'programs';
global.__MONGO_COLLECTION_COMPANIES = 'functions';

// Events magnagement
global.__READY_APP				 	= 'appReady';
global.__EVENT_EMITTER				= new Events.EventEmitter();

// Controllers constants (avoiding double inclusion)
global.__CONTROLLERS_JS = false;

/*******************************************************************************
************************** Environment functions *******************************
*******************************************************************************/

// Initialise the app (calls for mongodb client and makes them glablly accessible)
global.__INIT_APP = function() {
	new Mongo(__MONGO_URL_CONNECT, (err, client) => {
		if (err) return console.log(err);
		__MONGO_ACTIVE_DBS.quasr = client;
		__EVENT_EMITTER.emit(__READY_APP);
	});
}

// Error function
global.__CONSOLE_DEBUG = function(arguments) {
	if (__DEBUG) console.log(arguments);
}
