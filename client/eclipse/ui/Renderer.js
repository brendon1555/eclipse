goog.provide('eclipse.ui.Renderer');

goog.require('goog.dom.classlist');
goog.require('goog.ui.Component');

goog.require('eclipse');

/**
 * @constructor
 * @extends {goog.ui.Component}
 * @suppress {undefinedVars}
 */
eclipse.ui.Renderer = function() {

};
goog.inherits(eclipse.ui.Renderer, goog.ui.Component);

eclipse.ui.Renderer.prototype.canDecorate = function() { 
    return true;
};


eclipse.ui.Renderer.prototype.enterDocument = function() {

    goog.base(this, 'enterDocument');

    var element_ = this.getElement();

    console.log("Test");
};


eclipse.ui.Renderer.prototype.exitDocument = function() {
    goog.base(this, 'exitDocument');
};

/**
 * Start the application
 */
goog.events.listen(window, goog.events.EventType.LOAD, function(){
    
    var appUI_ = new eclipse.ui.Renderer();

    goog.dom.removeChildren(document.body);
    appUI_.decorate(document.body);
});