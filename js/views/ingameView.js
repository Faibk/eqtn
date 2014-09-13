var IngameView = function () {
    
    this.el = $("<div/>").attr("class", "view");
    
    this.render = function () {
        this.el.html(IngameView.template(app.model.getEQT()));
        return this.el;
    };
    
};

IngameView.template = Handlebars.compile($("#ingame_tpl").html());