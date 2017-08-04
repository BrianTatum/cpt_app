var jsdom = require('jsdom');
//var jquery = require('jquery');

//global.document = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
//global.window = global.document.defaultView;

const dom = new jsdom.JSDOM('<!DOCTYPE html><html><head></head><body><div id="app"></div></body></html>');
const win = dom.defaultView; // tried doc.window;

global.document = dom.window.document;
global.window = dom.window;




global.navigator = {userAgent: 'node.js'};

//const $ = jquery(global.document.window);