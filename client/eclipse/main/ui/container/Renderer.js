goog.provide('eclipse.main.ui.container.Renderer');

goog.require('goog.dom.classlist');
goog.require('goog.ui.Component');
goog.require('goog.fx.DragListGroup');

goog.require('eclipse');
goog.require('eclipse.data.model.Note');
goog.require('eclipse.data.filter.Note');
goog.require('eclipse.main.data.request.Note');

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

    var notes_ = this.getModel();

    var input_ = this.getDomHelper().createDom(goog.dom.TagName.INPUT);
    input_.setAttribute("type", "text");
    this.getDomHelper().appendChild(element_, input_);

    var button_ = this.getDomHelper().createDom(goog.dom.TagName.BUTTON);
    button_.textContent = "Submit";
    this.getDomHelper().appendChild(element_, button_);

    goog.events.listen(button_, goog.events.EventType.CLICK, goog.bind(function() {
        var note_ = new eclipse.data.model.Note();
        note_.setNoteText(input_.value);

        eclipse.GLOBALS.API_CLIENT.dispatchRequest(
            eclipse.main.data.request.Note.addNote(note_),
            goog.bind(function(response) {
                console.log("submitted");
            }, this),
            goog.bind(function(response) {
                console.log("fail submit");
            }, this)
        );

    }))



    var h4_ = this.getDomHelper().createDom(goog.dom.TagName.H4);
    h4_.textContent = "Vertical List";
    this.getDomHelper().appendChild(element_, h4_);

    var vertList_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
    this.getDomHelper().appendChild(element_, vertList_);

    var notes_ = null;

    eclipse.GLOBALS.API_CLIENT.dispatchRequest(
        eclipse.main.data.request.Note.fetchAll(),
        goog.bind(function(response) {
            notes_ = response.getUnpackedBody();
            console.log(notes_);

            goog.iter.forEach(notes_, function(note) {
                var vertListItem_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
                vertListItem_.textContent = note.getNoteText();
                this.getDomHelper().appendChild(vertList_, vertListItem_);
            }, this)

            var dragListGroup = new goog.fx.DragListGroup();
            dragListGroup.setDragItemHandleHoverClass(goog.getCssName("cursor_move"));
            dragListGroup.addDragList(vertList_, goog.fx.DragListDirection.DOWN);
            dragListGroup.setDraggerElClass(goog.getCssName('cursor_move opacity_40'));
            dragListGroup.init();
            
        }, this),
        goog.bind(function(response) {
            console.log("fail fetchAll");
        }, this)
    );

    

    // var vertListItem1_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
    // vertListItem1_.textContent = "Vertical List1";
    // this.getDomHelper().appendChild(vertList_, vertListItem1_);

    // var vertListItem2_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
    // vertListItem2_.textContent = "Vertical List2";
    // this.getDomHelper().appendChild(vertList_, vertListItem2_);

    // var vertListItem3_ = this.getDomHelper().createDom(goog.dom.TagName.DIV);
    // vertListItem3_.textContent = "Vertical List3";
    // this.getDomHelper().appendChild(vertList_, vertListItem3_);

    
    
};

eclipse.main.ui.container.Renderer.prototype.fetchAll_ = function() {
    
};

/**
 * @override
 */
eclipse.main.ui.container.Renderer.prototype.exitDocument = function() {
    goog.base(this, 'exitDocument');
};