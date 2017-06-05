Backbone.Module = function () {
    _.extend(this, Backbone.Events);

    this.mView = false;
    this.mController = false;

    this._viewConstructor = false;
    this._controllerConstructor = false;

    //Сюда пихаем классы
    /**
     * Classes/Constructors
     * @type {{views: {}, controllers: {}, Router: boolean}}
     */
    this.constructors = {
        views: {},
        controllers: {},
        Router: false
    };

    /**
     * Views instances
     * @type {{}}
     */
    this.views = {};
    /**
     * Controllers instances
     * @type {{}}
     */
    this.controllers = {};

    /**
     *
     * @type {boolean}
     */
    this.Router = false;
};


/**
 * Set alone router
 * @param routerClass
 * @returns {Backbone.Module}
 */
Backbone.Module.prototype.setRouter = function (routerClass) {
    var module = this;
    var router = routerClass.extend({
        module: module,
        constructors: module.constructors
    });
    this.Router = new router;
    this.Router.on('route', function () {
        var cHash = document.location.hash;
        document.location.hash = '!' + cHash
    });
    if (!Backbone.History.started) Backbone.history.start();
    return this;
};

/**
 * Set view class
 * @param viewName
 * @param viewClass
 * @returns {Backbone.Module}
 */
Backbone.Module.prototype.addViewClass = function (viewName, viewClass) {
    var module = this;
    viewClass.prototype.module = module;
    viewClass.prototype.constructors = module.constructors;
    this.constructors.views[viewName] = viewClass;
    console.log("Добавил:", 'VIEW', this.constructors.views);
    return this;

};

/**
 * Set controller class
 * @param controllerName
 * @param controllerClass
 * @returns {Backbone.Module}
 */
Backbone.Module.prototype.addControllerClass = function (controllerName, controllerClass) {
    var module = this;
    controllerClass.prototype.module = module;
    controllerClass.prototype.constructors = module.constructors;
    this.constructors.controllers[controllerName] = controllerClass;
    return this;
};

/**
 * Get view instance
 * @param viewName
 */
Backbone.Module.prototype.getView = function (viewName) {
    this.views[viewName] = new this.constructors.views[viewName];
    this.views[viewName].module = this;
    return this.views[viewName];
};

/**
 * Get controller instance
 * @param controllerName
 */
Backbone.Module.prototype.getController = function (controllerName) {
    var controller = new this.constructors.controllers[controllerName];
    controller.module = this;
    return controller;
};

Backbone.Module.prototype.setView = function (viewName, viewInstance) {
    this.views[viewName] = viewInstance;
};

Backbone.Module.prototype.setController = function (controllerName, controllerInstance) {
    this.controllers[controllerName] = controllerInstance;
};
