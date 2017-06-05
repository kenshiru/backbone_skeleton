Mod.addControllerClass('formController', Backbone.Controller.extend({
    showForm: function () {
        this.module.getView('form').render();
    }
}));
        