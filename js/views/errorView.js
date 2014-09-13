var ErrorView = function () {
    
    this.el = $("<div/>").attr("class", "view");
    
    this.render = function () {
        this.el.html(ErrorView.template());
        return this.el;
    };
};

ErrorView.template = Handlebars.compile($("#error_tpl").html());