Mod.addControllerClass('consoleController', Backbone.Controller.extend({
    log: function (message) {
        console.log(message);
    },

    error: function (message) {
        throw new Error(message);
    }
}));