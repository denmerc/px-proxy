/*

var proxy = require('redbird')({port:3000, secure:false});

proxy.register("help.pricexpert.com", "http://192.168.21.108:8080/secure/Dashboard.jspa",{ssl:false});

*/



/*
var http = require('http'),
    net = require('net'),
    url = require('url'),
    util = require('util');
var httpProxy = require('node-http-proxy');

var options = {
  changeOrigin: true,
  target: {
      https: false
  }
}

httpProxy.createServer(443, 'www.google.com', options).listen(8001);
*/

/*

var node_reverse_proxy = require('node-reverse-proxy');
 
var ip = '192.168.21.108';
var reverse_proxy = new node_reverse_proxy({
    'msn.com' : ip + ':8080',
    'my.second_host.com' : ip + ':8081',
    'my.second_host.com/page/' : ip + ':8080',
    '' : ip + ':8080' // catch all other routes 
});
 
reverse_proxy.start(3000);
 */



/*
var express = require('express');
var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/api', {
    target: 'http://www.example.org',
    changeOrigin: true   // for vhosted sites
});

var app = express();

app.use(apiProxy);
app.listen(3000);

*/



var RedWire = require('redwire');

/*
var options = {
    http: {
        port: 3000,
        websockets: false
    },
    https: {
        port: 443,
        key: 'path/to/key.pem',
        cert: 'path/to/cert.pem',
        ca: 'path/to/ca.pem (optional)'
    },
    proxy: {
        xfwd: true,
        prependPath: false,
        keepAlive: false
    },
    log: {
        debug: function() {},
        notice: function() {},
        error: function(err) {
            if (err.stack) {
                console.error(err.stack);
            } else {
                console.error(err);
            }
        }
    }
};
var redwire = new RedWire(options);
*/

var redwire = new RedWire({
    // more configuration is available, see below 
    http: { port: 3000 },
    proxy: {
        xfwd: true, 
        changeOrigin:false
    }
});

/*https: {
        port: 443,
        key: 'path/to/key.pem',
        cert: 'path/to/cert.pem',
        ca: 'path/to/ca.pem (optional)'
    }
 */
//redwire.http('http://example.com', redwire.sslRedirect());
//redwire.http('http://example.com').use(redwire.proxy('http://127.0.0.1:3000'));
// a shorthand form is available 
redwire.http('help.pricexpert.com', 'http://192.168.21.108:8090/display/PRIC/Help+Directory');
redwire.http('help.pricexpert.com/tickets', 'http://192.168.21.108:8080/servicedesk/customer/portal/1');
redwire.http('help.pricexpert.com/userguide', 'http://pxhelp.azurewebsites.net');


