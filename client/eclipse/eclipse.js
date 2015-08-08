goog.provide('eclipse');

goog.require('prestans.rest.json.Client');

eclipse = function() {};

eclipse.GLOBALS = {
    API_CLIENT: new prestans.rest.json.Client({
        baseUrl: "/api",
        opt_numRetries: 0,
        opt_minified: false
    })
};