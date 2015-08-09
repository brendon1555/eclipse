goog.provide('eclipse.main.ui.Renderer');

goog.require('goog.dom.classlist');
goog.require('goog.ui.Component');
goog.require('goog.fx.DragListGroup');

goog.require('eclipse');
goog.require('eclipse.main.ui.container.Renderer');

/**
 * @constructor
 * @extends {goog.ui.Component}
 * @suppress {undefinedVars}
 */
eclipse.main.ui.Renderer = function() {

};
goog.inherits(eclipse.main.ui.Renderer, goog.ui.Component);

eclipse.main.ui.Renderer.prototype.canDecorate = function() { 
    return true;
};


eclipse.main.ui.Renderer.prototype.enterDocument = function() {

    goog.base(this, 'enterDocument');

    var element_ = this.getElement();

    var container_ = new eclipse.main.ui.container.Renderer();
    container_.render(element_);
    
};


eclipse.main.ui.Renderer.prototype.exitDocument = function() {
    goog.base(this, 'exitDocument');
};

/**
 * Start the application
 */
goog.events.listen(window, goog.events.EventType.LOAD, function(){
    
    var appUI_ = new eclipse.main.ui.Renderer();

    goog.dom.removeChildren(document.body);
    appUI_.decorate(document.body);
});