goog.provide('eclipse.signup.ui.Renderer');

goog.require('goog.dom.classlist');
goog.require('goog.ui.Component');

goog.require('eclipse');

/**
 * @constructor
 * @extends {goog.ui.Component}
 * @suppress {undefinedVars}
 */
eclipse.signup.ui.Renderer = function() {

};
goog.inherits(eclipse.signup.ui.Renderer, goog.ui.Component);

eclipse.signup.ui.Renderer.prototype.canDecorate = function() { 
    return true;
};


eclipse.signup.ui.Renderer.prototype.enterDocument = function() {

    goog.base(this, 'enterDocument');

    var element_ = this.getElement();

    console.log("Signup");

    var h2_ = this.getDomHelper().createDom(goog.dom.TagName.H2);
    h2_.textContent = "Sign Up";
    this.getDomHelper().appendChild(element_, h2_);

    var signupForm_ = this.getDomHelper().createDom(goog.dom.TagName.FORM);
    this.getDomHelper().appendChild(element_, signupForm_);

    var formDiv_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
    this.getDomHelper().appendChild(signupForm_, formDiv_);


    
};


eclipse.signup.ui.Renderer.prototype.exitDocument = function() {
    goog.base(this, 'exitDocument');
};

/**
 * Start the application
 */
goog.events.listen(window, goog.events.EventType.LOAD, function(){
    
    var appUI_ = new eclipse.signup.ui.Renderer();

    goog.dom.removeChildren(document.body);
    appUI_.decorate(document.body);
});