Mod.setRouter(Backbone.Router.extend({
    routes: {
        'form': 'showModule',
        'error/:msg': 'error',
        'show/form': 'showForm'
    },

    showModule: function () {
        this.module.mController.show();
    },

    error: function (msg) {
        console.log(msg);
    },

    showForm: function () {
        this.module.getController('formController').showForm();
    }
}));