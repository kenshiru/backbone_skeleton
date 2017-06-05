Backbone.Controller = function () {
    _.extend(this, Backbone.Events);
};


Backbone.Controller.extend = function (options) {
    return (function () {
        Backbone.Controller.apply(this, arguments);
        _.extend(this, options);
    });
};




