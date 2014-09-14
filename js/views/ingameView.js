var IngameView = function () {
    
    this.init = function () {
        this.eqtobject = app.model.getEQT();
        this.el = $("<div/>").attr("class", "view");
        this.el.on("change", "input[type=range]", this.recalculateBlocks);
        this.el.on("change", "input[type=range]", $.proxy(function () {this.check(); }, this));
        this.el.on("click", "#next", app.route);
    };
    
    this.render = function () {
        this.el.html(IngameView.template(this.eqtobject));
        return this.el;
    };
        
    this.recalculateBlocks = function () {
        var id = $(this).attr("id"),
            height = $(this).val() * 10 + "px";
        $(".block[data-slider-binding=" + id + "]").each(function () {$(this).css("height", height); });
    };
    
    this.check = function () {
        var params = $("input[type=range]").map(function () {return parseInt($(this).val()); }).get();
        if (this.eqtobject.eqt.apply(undefined, params)) {
            this.showAlert("Super!", "Richtig gelöst ;)");
        } else {
            this.hideAlert();
        }
    };
    
    this.hideAlert = function () {
        $("#alertarea:visible").slideUp();
    }
    
    this.showAlert = function (title, text) {
        $("#alertarea").html("<b>"+title+":</b> "+text).slideDown();
    };
    
    this.openDialog = function (title, text, buttontext) {
        var dialog = $("<div/>").attr("class", "screenfill dialog"),
            contentobj = {title: title, text: text, button: buttontext};
        dialog.html(IngameView.dialogtemplate(contentobj));
        $("body").append(dialog);
    };
            
    this.init();
};

IngameView.template = Handlebars.compile($("#ingame_tpl").html());
IngameView.dialogtemplate = Handlebars.compile($("#dialog_tpl").html());