var IngameView = function () {
    
    this.init = function () {
        this.eqtobject = app.model.getEQT();
        this.el = $("<div/>").attr("class", "view");
        this.el.on("change", "input[type=range]", this.recalculateBlocks);
        this.el.on("change", "input[type=range]", $.proxy(function () {this.check()}, this));
    };
    
    this.render = function () {
        console.log(this.eqtobject);
        this.el.html(IngameView.template(this.eqtobject));
        return this.el;
    };
        
    this.recalculateBlocks = function () {
        var id = $(this).attr("id");
        var height = $(this).val()*10+"px";
        $(".block[data-slider-binding="+id+"]").each(function () {$(this).css("height", height)});
    };
    
    this.check = function () {
        var params = $("input[type=range]").map(function () {return parseInt($(this).val());}).get();
        console.log(params);
        if (this.eqtobject.eqt.apply(undefined, params)) alert("Gewonnen!");
    };
            
    this.init();
};

IngameView.template = Handlebars.compile($("#ingame_tpl").html());