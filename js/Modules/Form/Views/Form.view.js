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