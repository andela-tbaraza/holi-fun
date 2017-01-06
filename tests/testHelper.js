/* eslint-disable no-var */


// Set test node environment
// Registers babel for transpilingour code
// Require jsdom to test ia in-memory DOM in node
// Set up global vars that mimic a browser
process.env.NODE_ENV = 'test';

require('babel-register');

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document; // eslint-disable-line no-undef
