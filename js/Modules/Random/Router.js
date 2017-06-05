Mod_Random.setRouter(Backbone.Router.extend({
    routes: {
        'random': 'showModule',
        'random/:msg': 'showMsgAndRandom'
    },

    showModule: function () {
        this.module.mController.show();
    },

    showMsgAndRandom: function () {
        this.module.getController('RandomController').showRandom();
    }
}));

