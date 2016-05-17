

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
redwire.http('help.pricexpert.com', 'http://192.168.21.108:8090/display/PRIC/Help+Directory');
redwire.http('help.pricexpert.com/tickets', 'http://192.168.21.108:8080/servicedesk/customer/portal/1');
redwire.http('help.pricexpert.com/userguide', 'http://pxhelp.azurewebsites.net');


