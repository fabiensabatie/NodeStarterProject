"use strict";
const Express				= require('express');
const App					= Express();
const BodyParser			= require('body-parser');
const Server				= require('http').createServer(App);
const Rfr					= require('rfr');
const SocketIO				= require('socket.io')(Server);
const Globals				= Rfr('app_commons/globals_cm');

App.use('/', Express.static(__dirname + '/public'));
App.set('view engine', 'pug');

global.__SOCKETIO = SocketIO;
exports.App		= App;
exports.Server	= Server;
