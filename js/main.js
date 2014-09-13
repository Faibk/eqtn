var app = {

	init: function () {
		this.model = new EqtStore();
        this.registerEvents();
        this.registerHelper();
        this.route();
	},
    
    registerHelper: function () {
        Handlebars.registerHelper('times', function(n, block) {
            var accum = '';
            for(var i = 0; i < n; ++i)
                accum += block.fn(i);
            return accum;
        });  
    },
    
    registerEvents: function () {
        $(window).on('hashchange', this.route);
    },
    
    route: function () {
        var hash = window.location.hash;
        if (!hash) {
            $("body").html(new StartView().render());
        } else if (hash == "#ingame") {
            $("body").html(new IngameView().render());
        } else {
            $("body").html(new ErrorView().render());
        }
    }
    
};

app.init();