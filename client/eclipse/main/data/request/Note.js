goog.provide('eclipse.main.data.request.Note');

goog.require('prestans.net.HttpMethod');
goog.require('prestans.rest.json.Request');
goog.require('eclipse.data.model.Note');
goog.require('prestans.rest.json.Response');

eclipse.main.data.request.Note.fetchAll = function() {
    var config_ = {
        identifier: "NoteFetchAll",
        httpMethod: prestans.net.HttpMethod.GET,
        responseModel: eclipse.data.model.Note,
        isArray: true,
        urlFormat: "/note"
    };
    return new prestans.rest.json.Request(config_);
};

eclipse.main.data.request.Note.addNote = function(note) {
    var config_ = {
        identifier: "NoteAddNote",
        httpMethod: prestans.net.HttpMethod.POST,
        requestModel: note,
        responseModel: prestans.rest.json.Response.EMPTY_BODY,
        urlFormat: "/note"
    };
    return new prestans.rest.json.Request(config_);
};