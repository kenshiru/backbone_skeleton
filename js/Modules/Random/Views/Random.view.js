Mod_Random.addViewClass('RandomView', Backbone.View.extend({
    el: '.random',

    render: function (randomValue) {
        this.$el.text(randomValue);
        this.$el.append('<a href="#/random/asd">SHOW RANDOM</a> ')
    }
}));