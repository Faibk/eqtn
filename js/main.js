var app = {

	init: function () {
		this.model = new EqtStore();
        this.registerEvents();
        this.route();
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