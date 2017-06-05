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