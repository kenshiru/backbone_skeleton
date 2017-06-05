Mod_Random = new Backbone.Module();

Mod_Random._viewConstructor = Backbone.View.extend({
    el: '.wrapper',
    template: _.template($('#wrapper-random').text()),

    render: function () {
        this.$el.html(this.template());
        return this.$el;
    }
});

Mod_Random._controllerConstructor = Backbone.Controller.extend({
    module: Mod_Random,
    show: function () {
        var view = new this.module._viewConstructor;
        console.log('Render to:', view.render());
    }
});

Mod_Random.mController = new Mod_Random._controllerConstructor;