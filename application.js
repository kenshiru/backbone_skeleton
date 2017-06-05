var Mod = new Backbone.Module;

Mod._viewConstructor = Backbone.View.extend({
   el: '.wrapper',
   template: _.template($('#wrapper-form').text()),

   render: function (data) {
      this.$el.html(this.template());
      return this.$el;
   }
});

Mod._controllerConstructor = Backbone.Controller.extend({
   show: function () {
      var view = new Mod._viewConstructor;
      var el = view.render();
      console.log("Render to ", el);
   }
});

Mod.mController = new Mod._controllerConstructor;
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


Mod.addControllerClass('consoleController', Backbone.Controller.extend({
    log: function (message) {
        console.log(message);
    },

    error: function (message) {
        throw new Error(message);
    }
}));
Mod.addControllerClass('formController', Backbone.Controller.extend({
    showForm: function () {
        this.module.getView('form').render();
    }
}));
        
Mod_Random.addControllerClass('RandomController', Backbone.Controller.extend({
    showRandom: function () {
        //App.Models.randomModel.fetch(...)
        var random = Math.random();
        this.module.getView('RandomView').render(random);
    }
}));

Mod.addViewClass('form', Backbone.View.extend({
    el: '.form',
    template: _.template($('#form').text()),

    render: function () {
        console.log(this.template());
        this.$el.html(this.template());
        this.$el.find('.form__button').on('click', {view: this}, this.buttonClick);
    },

    buttonClick: function (event) {
        var msg = $(event.data.view.el).find(".form__input").val();
        var controller = event.data.view.module.getController('consoleController');
        controller.error(msg);
    }
}));
Mod_Random.addViewClass('RandomView', Backbone.View.extend({
    el: '.random',

    render: function (randomValue) {
        this.$el.text(randomValue);
        this.$el.append('<a href="#/random/asd">SHOW RANDOM</a> ')
    }
}));