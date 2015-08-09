goog.provide('eclipse.main.ui.container.Renderer');

goog.require('goog.dom.classlist');
goog.require('goog.ui.Component');
goog.require('goog.fx.DragListGroup');

goog.require('eclipse');

/**
 * @constructor
 * @extends {goog.ui.Component}
 * @param {goog.dom.DomHelper=} opt_domHelper
 */
eclipse.main.ui.container.Renderer = function(opt_domHelper) {
    goog.base(this, opt_domHelper);
};
goog.inherits(eclipse.main.ui.container.Renderer, goog.ui.Component);

/**
 * @override
 */
eclipse.main.ui.container.Renderer.prototype.createDom = function() {
    this.decorateInternal(this.getDomHelper().createDom(goog.dom.TagName.DIV));
};

/**
 * @override
 */
eclipse.main.ui.container.Renderer.prototype.decorateInternal = function(element) {
    eclipse.main.ui.container.Renderer.superClass_.decorateInternal.call(this, element);
    goog.dom.classlist.add(element, goog.getCssName("container"));
};

/**
 * @override
 */
eclipse.main.ui.container.Renderer.prototype.enterDocument = function() {

    goog.base(this, 'enterDocument');

    var element_ = this.getElement();

    var h4_ = this.getDomHelper().createDom(goog.dom.TagName.H4);
    h4_.textContent = "Vertical List";
    this.getDomHelper().appendChild(element_, h4_);

    var vertList_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
    this.getDomHelper().appendChild(element_, vertList_);

    var vertListItem1_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
    vertListItem1_.textContent = "Vertical List1";
    this.getDomHelper().appendChild(vertList_, vertListItem1_);

    var vertListItem2_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
    vertListItem2_.textContent = "Vertical List2";
    this.getDomHelper().appendChild(vertList_, vertListItem2_);

    var vertListItem3_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
    vertListItem3_.textContent = "Vertical List3";
    this.getDomHelper().appendChild(vertList_, vertListItem3_);


    var dragListGroup = new goog.fx.DragListGroup();
    dragListGroup.setDragItemHandleHoverClass(goog.getCssName("cursor_move"));
    dragListGroup.addDragList(vertList_, goog.fx.DragListDirection.DOWN);
    dragListGroup.setDraggerElClass(goog.getCssName('cursor_move opacity_40'));
    dragListGroup.init();
    
};

/**
 * @override
 */
eclipse.main.ui.container.Renderer.prototype.exitDocument = function() {
    goog.base(this, 'exitDocument');
};