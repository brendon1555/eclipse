goog.provide('eclipse.signup');

goog.require('prestans.rest.json.Client');

goog.require('eclipse')

eclipse.signup = function() {};

eclipse.signup.GLOBALS = {
    API_CLIENT: new prestans.rest.json.Client({
        baseUrl: "/api",
        opt_numRetries: 0,
        opt_minified: false
    })
};