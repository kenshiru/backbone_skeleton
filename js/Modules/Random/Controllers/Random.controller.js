Mod_Random.addControllerClass('RandomController', Backbone.Controller.extend({
    showRandom: function () {
        //App.Models.randomModel.fetch(...)
        var random = Math.random();
        this.module.getView('RandomView').render(random);
    }
}));
