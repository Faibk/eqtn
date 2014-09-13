var StartView = function () {
    
    this.el = $("<div/>").attr("class", "view");
    
    this.render = function () {
        this.el.html(StartView.template());
        return this.el;
    };
};

StartView.template = Handlebars.compile($("#start_tpl").html());

