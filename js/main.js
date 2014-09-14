var app = {

	init: function () {
        this.colors= [
            "#75D9B4",
            "#70D0E6",
            "#F2896F",
            "#FFB87F",
            "#FFEC72"
        ];
        this.blockcolor = {};
		this.model = new EqtStore();
        this.registerEvents();
        this.registerHelpers();
        this.route();
	},
    
    registerHelpers: function () {
        Handlebars.registerHelper('times', function (n, block) {
            var accum = '';
            for (var i = 0; i < n; ++i)
                accum += block.fn(i);
            return accum;
        });
        Handlebars.registerHelper('color', function(block) {
            if (app.colors.length == 0) return "#999999";
            if (!app.blockcolor[block]) {
                var index = Math.floor(Math.random()*app.colors.length);
                app.blockcolor[block] = app.colors[index];
                app.colors.splice(index, 1);
            };
            return app.blockcolor[block];
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