var proxy = require('redbird')({port:3000});

proxy.register("google.com", "http://www.yahoo.com");

