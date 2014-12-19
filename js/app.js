require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, Application, Backbone, Chaplin,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

window.jQuery = $ = require('jquery');

require('../bower_components/bootstrap/dist/js/bootstrap');

Backbone = require('backbone');

Backbone.$ = $;

Chaplin = require('chaplin');

module.exports = Application = (function(_super) {
  __extends(Application, _super);

  function Application() {
    return Application.__super__.constructor.apply(this, arguments);
  }

  return Application;

})(Chaplin.Application);


},{"../bower_components/bootstrap/dist/js/bootstrap":55,"backbone":"5kFNoY","chaplin":57,"jquery":"HlZQrA"}],2:[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!doctype html>\n<!--[if IE 8]>    <html class=\"no-js lt-ie9\" lang=\"en\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n<head>\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n  <title>Chaplin Generator</title>\n  <meta name=\"viewport\" content=\"width=device-width\">\n  <link rel=\"stylesheet\" href=\"/css/app.css\">\n</head>\n<body>\n  <script src=\"/js/vendor.js\"></script>\n  <script src=\"/js/app.js\"></script>\n</body>\n</html>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"controllers/base/controller":[function(require,module,exports){
module.exports=require('PL6FY2');
},{}],"PL6FY2":[function(require,module,exports){
var Chaplin, Controller, SiteView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

SiteView = require('../../views/site-view');

module.exports = Controller = (function(_super) {
  __extends(Controller, _super);

  function Controller() {
    return Controller.__super__.constructor.apply(this, arguments);
  }

  Controller.prototype.beforeAction = function() {
    return this.reuse('site', SiteView);
  };

  return Controller;

})(Chaplin.Controller);


},{"../../views/site-view":49,"chaplin":57}],"JJmJVO":[function(require,module,exports){
var Controller, FooterView, HeaderView, HomeController, HomePageView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('./base/controller');

FooterView = require('../views/footer');

HeaderView = require('../views/header');

HomePageView = require('../views/home/home-page');

module.exports = HomeController = (function(_super) {
  __extends(HomeController, _super);

  function HomeController() {
    return HomeController.__super__.constructor.apply(this, arguments);
  }

  HomeController.prototype.beforeAction = function() {
    HomeController.__super__.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, {
      region: 'header'
    });
    return this.reuse('footer', FooterView, {
      region: 'footer'
    });
  };

  HomeController.prototype.index = function() {
    this.view = new HomePageView({
      region: 'main'
    });
    return this;
  };

  return HomeController;

})(Controller);


},{"../views/footer":43,"../views/header":44,"../views/home/home-page":45,"./base/controller":"PL6FY2"}],"controllers/home":[function(require,module,exports){
module.exports=require('JJmJVO');
},{}],"d+nCH3":[function(require,module,exports){
var Collection, Controller, FooterView, HeaderView, Module, ModuleController, ModuleView, ModulesList, ThingsList, data, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('./base/controller');

Collection = require('../models/base/collection');

Module = require('../models/module');

FooterView = require('../views/footer');

HeaderView = require('../views/header');

ModuleView = require('../views/module/show');

ModulesList = require('../views/module/index');

ThingsList = require('../views/thing/index');

data = require('../../data.json');

_ = require('underscore');

module.exports = ModuleController = (function(_super) {
  __extends(ModuleController, _super);

  function ModuleController() {
    return ModuleController.__super__.constructor.apply(this, arguments);
  }

  ModuleController.prototype.beforeAction = function() {
    ModuleController.__super__.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, {
      region: 'header'
    });
    return this.reuse('footer', FooterView, {
      region: 'footer'
    });
  };

  ModuleController.prototype.index = function() {
    var things;
    things = data['@graph'].filter(function(obj) {
      return obj.type === 'Module';
    });
    this.things = new Collection(things, {
      model: Module
    });
    this.view = new ModulesList({
      collection: this.things,
      region: 'main'
    });
    return this;
  };

  ModuleController.prototype.show = function(params) {
    this.thing = new Module(_.find(data['@graph'], function(obj) {
      return obj.id === params.id;
    }));
    this.view = new ModuleView({
      model: this.thing,
      region: 'main'
    });
    this.thing.initCollections();
    this.view.subview('input', new ThingsList({
      collection: this.thing.input,
      region: 'left'
    }));
    this.view.subview('output', new ThingsList({
      collection: this.thing.output,
      region: 'right'
    }));
    return this;
  };

  return ModuleController;

})(Controller);


},{"../../data.json":56,"../models/base/collection":16,"../models/module":18,"../views/footer":43,"../views/header":44,"../views/module/index":46,"../views/module/show":48,"../views/thing/index":52,"./base/controller":"PL6FY2","underscore":58}],"controllers/module":[function(require,module,exports){
module.exports=require('d+nCH3');
},{}],"controllers/thing":[function(require,module,exports){
module.exports=require('PEtp5o');
},{}],"PEtp5o":[function(require,module,exports){
var Collection, Controller, FooterView, HeaderView, ModulesList, Thing, ThingController, ThingView, ThingsList, data, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Controller = require('./base/controller');

Collection = require('../models/base/collection');

Thing = require('../models/thing');

FooterView = require('../views/footer');

HeaderView = require('../views/header');

ThingView = require('../views/thing/show');

ThingsList = require('../views/thing/index');

ModulesList = require('../views/module/index');

data = require('../../data.json');

_ = require('underscore');

module.exports = ThingController = (function(_super) {
  __extends(ThingController, _super);

  function ThingController() {
    return ThingController.__super__.constructor.apply(this, arguments);
  }

  ThingController.prototype.beforeAction = function() {
    ThingController.__super__.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, {
      region: 'header'
    });
    return this.reuse('footer', FooterView, {
      region: 'footer'
    });
  };

  ThingController.prototype.index = function() {
    var things;
    things = data['@graph'].filter(function(obj) {
      return obj.type === 'Thing';
    });
    this.things = new Collection(things, {
      model: Thing
    });
    this.view = new ThingsList({
      collection: this.things,
      region: 'main'
    });
    return this;
  };

  ThingController.prototype.show = function(params) {
    this.thing = new Thing(_.find(data['@graph'], function(obj) {
      return obj.id === params.id;
    }));
    this.view = new ThingView({
      model: this.thing,
      region: 'main'
    });
    this.thing.initCollections();
    this.view.subview('inputOf', new ModulesList({
      collection: this.thing.inputOf,
      region: 'right'
    }));
    this.view.subview('outputOf', new ModulesList({
      collection: this.thing.outputOf,
      region: 'left'
    }));
    return this;
  };

  return ThingController;

})(Controller);


},{"../../data.json":56,"../models/base/collection":16,"../models/thing":19,"../views/footer":43,"../views/header":44,"../views/module/index":46,"../views/thing/index":52,"../views/thing/show":54,"./base/controller":"PL6FY2","underscore":58}],11:[function(require,module,exports){
var $, Application, routes;

$ = require('jquery');

Application = require('./application');

routes = require('./routes');

$(function() {
  return new Application({
    title: 'ipotables',
    controllerSuffix: '',
    routes: routes
  });
});


},{"./application":1,"./routes":20,"jquery":"HlZQrA"}],12:[function(require,module,exports){
var $;

$ = require('jquery');

module.exports = {
  edit: function(property, type) {
    var val;
    val = $('[property="' + property + '"]').html();
    $('[property="' + property + '"]').empty();
    if (type === 'input') {
      $('[property="' + property + '"]').append('<input type="input" class="edit form-control">');
      return $('[property="' + property + '"] ' + type).val(val);
    } else if (type === 'textarea') {
      $('[property="' + property + '"]').append('<textarea class="edit form-control" rows="5"></textarea>');
      return $('[property="' + property + '"] ' + type).val(val);
    }
  },
  save: function(property) {
    return $('[property="' + property + '"]').html($('[property="' + property + '"] .edit').val());
  }
};


},{"jquery":"HlZQrA"}],13:[function(require,module,exports){
var Chaplin, utils;

Chaplin = require('chaplin');

utils = Chaplin.utils.beget(Chaplin.utils);

if (typeof Object.seal === "function") {
  Object.seal(utils);
}

module.exports = utils;


},{"chaplin":57}],14:[function(require,module,exports){
var Chaplin, Handlebars, register,
  __slice = [].slice;

Chaplin = require('chaplin');

Handlebars = require('hbsfy/runtime');

register = function(name, fn) {
  return Handlebars.registerHelper(name, fn);
};

register('with', function(context, options) {
  if (!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(context);
  }
});

register('without', function(context, options) {
  var inverse;
  inverse = options.inverse;
  options.inverse = options.fn;
  options.fn = inverse;
  return Handlebars.helpers["with"].call(this, context, options);
});

register('url', function() {
  var options, params, routeName, _i;
  routeName = arguments[0], params = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), options = arguments[_i++];
  return Chaplin.utils.reverse(routeName, params);
});


},{"chaplin":57,"hbsfy/runtime":"pu95bm"}],15:[function(require,module,exports){
var Chaplin, mediator;

Chaplin = require('chaplin');

mediator = module.exports = Chaplin.mediator;


},{"chaplin":57}],16:[function(require,module,exports){
var Chaplin, Collection, Model,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

Model = require('./model');

module.exports = Collection = (function(_super) {
  __extends(Collection, _super);

  function Collection() {
    return Collection.__super__.constructor.apply(this, arguments);
  }

  Collection.prototype.model = Model;

  return Collection;

})(Chaplin.Collection);


},{"./model":17,"chaplin":57}],17:[function(require,module,exports){
var Chaplin, Model, UUID,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

UUID = require('uuid');

module.exports = Model = (function(_super) {
  __extends(Model, _super);

  function Model() {
    return Model.__super__.constructor.apply(this, arguments);
  }

  Model.prototype.initialize = function(attr) {
    Model.__super__.initialize.apply(this, arguments);
    if (!attr.id) {
      return this.set('id', UUID.v4());
    }
  };

  return Model;

})(Chaplin.Model);


},{"chaplin":57,"uuid":60}],18:[function(require,module,exports){
var Collection, Model, Module, data, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Model = require('./base/model');

Collection = require('./base/collection');

data = require('../../data.json');

_ = require('underscore');

module.exports = Module = (function(_super) {
  __extends(Module, _super);

  function Module() {
    this.initCollections = __bind(this.initCollections, this);
    return Module.__super__.constructor.apply(this, arguments);
  }

  Module.prototype.initCollections = function() {
    this.input = new Collection(_.map(this.attributes.input, function(id) {
      return _.find(data['@graph'], function(obj) {
        return obj.id === id;
      });
    }));
    return this.output = new Collection(_.map(this.attributes.output, function(id) {
      return _.find(data['@graph'], function(obj) {
        return obj.id === id;
      });
    }));
  };

  return Module;

})(Model);


},{"../../data.json":56,"./base/collection":16,"./base/model":17,"underscore":58}],19:[function(require,module,exports){
var Collection, Model, Thing, data, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Model = require('./base/model');

Collection = require('./base/collection');

data = require('../../data.json');

_ = require('underscore');

module.exports = Thing = (function(_super) {
  __extends(Thing, _super);

  function Thing() {
    return Thing.__super__.constructor.apply(this, arguments);
  }

  Thing.prototype.initCollections = function() {
    this.inputOf = new Collection(_.map(this.attributes.inputOf, function(id) {
      return _.find(data['@graph'], function(obj) {
        return obj.id === id;
      });
    }));
    return this.outputOf = new Collection(_.map(this.attributes.outputOf, function(id) {
      return _.find(data['@graph'], function(obj) {
        return obj.id === id;
      });
    }));
  };

  return Thing;

})(Model);


},{"../../data.json":56,"./base/collection":16,"./base/model":17,"underscore":58}],20:[function(require,module,exports){
module.exports = function(match) {
  match('', 'home#index');
  match('modules', 'module#index');
  match('modules/:id', 'module#show');
  match('things', 'thing#index');
  return match('things/:id', 'thing#show');
};


},{}],"9RsPKC":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <p><a href=\"https://github.com/hackers4peace/ipotables\">fork ipotables on Github</a></p>\n  </div>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/footer":[function(require,module,exports){
module.exports=require('9RsPKC');
},{}],"../templates/header":[function(require,module,exports){
module.exports=require('j00Jnv');
},{}],"j00Jnv":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar-header\">\n  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">IPOtables</a>\n</div>\n<div class=\"navbar-collapse collapse\">\n  <form class=\"navbar-form navbar-right\">\n    <button type=\"submit\" class=\"btn btn-success\">Sign in</button>\n  </form>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"s/yNEm":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2>Modules</h2>\n    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n    <p><a class=\"btn btn-default\" href=\"modules\" role=\"button\">Modules &raquo;</a></p>\n  </div>\n  <div class=\"col-md-6\">\n    <h2>Things</h2>\n    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n    <p><a class=\"btn btn-default\" href=\"things\" role=\"button\">Things &raquo;</a></p>\n </div>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/home":[function(require,module,exports){
module.exports=require('s/yNEm');
},{}],"rN5+ME":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n  <h1>Hello, world!</h1>\n  <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n  <p><a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more &raquo;</a></p>\n</div>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/jumbotron":[function(require,module,exports){
module.exports=require('rN5+ME');
},{}],"baIBhY":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"/modules/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n";
  return buffer;
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/module/list-item":[function(require,module,exports){
module.exports=require('baIBhY');
},{}],"4XqoQJ":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<button id=\"edit\" class=\"btn btn-info\">edit</button>\n<button id=\"save\" class=\"btn btn-success\">save</button>\n\n<h1 property=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n<p property=\"description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<div class=\"row\">\n  <div id=\"left\" class=\"col-md-4\"></div>\n  <div id=\"process\" property=\"process\" class=\"col-md-4\">";
  if (helper = helpers.process) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.process); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  <div id=\"right\" class=\"col-md-4\"></div>\n<div>\n";
  return buffer;
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/module/show":[function(require,module,exports){
module.exports=require('4XqoQJ');
},{}],"../templates/site":[function(require,module,exports){
module.exports=require('cL1PB2');
},{}],"cL1PB2":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header id=\"header\" class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\"></header>\n\n<div id=\"outer-page-container\"></div>\n\n<footer id=\"footer\"></footer>\n";
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/thing/edit-item":[function(require,module,exports){
module.exports=require('IR2xWU');
},{}],"IR2xWU":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<button type=\"button\" class=\"edit remove btn btn-danger btn-xs\">-</button>\n<a href=\"/things/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n";
  return buffer;
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/thing/list-item":[function(require,module,exports){
module.exports=require('TNw6UK');
},{}],"TNw6UK":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"/things/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n";
  return buffer;
  });

},{"hbsfy/runtime":"pu95bm"}],"MtWnG6":[function(require,module,exports){
// hbsfy compiled Handlebars template
var Handlebars = require('hbsfy/runtime');
module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<button id=\"edit\" class=\"btn btn-info\">edit</button>\n<button id=\"save\" class=\"btn btn-success\">save</button>\n\n<h1 property=\"name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n<p property=\"description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n\n<div class=\"row\">\n  <div id=\"left\" class=\"col-md-6\"></div>\n  <div id=\"right\" class=\"col-md-6\"></div>\n<div>\n";
  return buffer;
  });

},{"hbsfy/runtime":"pu95bm"}],"../templates/thing/show":[function(require,module,exports){
module.exports=require('MtWnG6');
},{}],41:[function(require,module,exports){
var Chaplin, CollectionView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

View = require('./view');

module.exports = CollectionView = (function(_super) {
  __extends(CollectionView, _super);

  function CollectionView() {
    return CollectionView.__super__.constructor.apply(this, arguments);
  }

  CollectionView.prototype.animationDuration = 0;

  CollectionView.prototype.useCssAnimation = true;

  CollectionView.prototype.getTemplateFunction = View.prototype.getTemplateFunction;

  return CollectionView;

})(Chaplin.CollectionView);


},{"./view":42,"chaplin":57}],42:[function(require,module,exports){
var Chaplin, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Chaplin = require('chaplin');

require('../../lib/view-helper');

module.exports = View = (function(_super) {
  __extends(View, _super);

  function View() {
    return View.__super__.constructor.apply(this, arguments);
  }

  View.prototype.getTemplateFunction = function() {
    return this.template;
  };

  return View;

})(Chaplin.View);


},{"../../lib/view-helper":14,"chaplin":57}],43:[function(require,module,exports){
var FooterView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./base/view');

module.exports = FooterView = (function(_super) {
  __extends(FooterView, _super);

  function FooterView() {
    return FooterView.__super__.constructor.apply(this, arguments);
  }

  FooterView.prototype.autoRender = true;

  FooterView.prototype.className = 'container';

  FooterView.prototype.template = require('../templates/footer');

  return FooterView;

})(View);


},{"../templates/footer":"9RsPKC","./base/view":42}],44:[function(require,module,exports){
var HeaderView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./base/view');

module.exports = HeaderView = (function(_super) {
  __extends(HeaderView, _super);

  function HeaderView() {
    return HeaderView.__super__.constructor.apply(this, arguments);
  }

  HeaderView.prototype.autoRender = true;

  HeaderView.prototype.className = 'container';

  HeaderView.prototype.template = require('../templates/header');

  return HeaderView;

})(View);


},{"../templates/header":"j00Jnv","./base/view":42}],45:[function(require,module,exports){
var HomePageView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view');

module.exports = HomePageView = (function(_super) {
  __extends(HomePageView, _super);

  function HomePageView() {
    return HomePageView.__super__.constructor.apply(this, arguments);
  }

  HomePageView.prototype.autoRender = true;

  HomePageView.prototype.className = 'container';

  HomePageView.prototype.template = require('../../templates/home');

  return HomePageView;

})(View);


},{"../../templates/home":"s/yNEm","../base/view":42}],46:[function(require,module,exports){
var CollectionView, ListItemView, ModulesList,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

CollectionView = require('../base/collection-view');

ListItemView = require('./list-item');

module.exports = ModulesList = (function(_super) {
  __extends(ModulesList, _super);

  function ModulesList() {
    return ModulesList.__super__.constructor.apply(this, arguments);
  }

  ModulesList.prototype.className = 'container';

  ModulesList.prototype.itemView = ListItemView;

  ModulesList.prototype.tagName = 'ul';

  return ModulesList;

})(CollectionView);


},{"../base/collection-view":41,"./list-item":47}],47:[function(require,module,exports){
var ListItemView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view');

module.exports = ListItemView = (function(_super) {
  __extends(ListItemView, _super);

  function ListItemView() {
    return ListItemView.__super__.constructor.apply(this, arguments);
  }

  ListItemView.prototype.autoRender = true;

  ListItemView.prototype.className = 'module';

  ListItemView.prototype.tagName = 'li';

  ListItemView.prototype.template = require('../../templates/module/list-item');

  return ListItemView;

})(View);


},{"../../templates/module/list-item":"baIBhY","../base/view":42}],48:[function(require,module,exports){
var $, EditThingsList, Editor, ModuleView, ThingsList, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view');

Editor = require('../../lib/editor');

ThingsList = require('../thing/index');

EditThingsList = require('../thing/index-edit');

$ = require('jquery');

module.exports = ModuleView = (function(_super) {
  __extends(ModuleView, _super);

  function ModuleView() {
    return ModuleView.__super__.constructor.apply(this, arguments);
  }

  ModuleView.prototype.autoRender = true;

  ModuleView.prototype.className = 'container';

  ModuleView.prototype.regions = {
    left: '#left',
    right: '#right'
  };

  ModuleView.prototype.template = require('../../templates/module/show');

  ModuleView.prototype.events = {
    'click button#edit': 'edit',
    'click button#save': 'save',
    'keyup .io': 'add',
    'click button.remove': 'remove'
  };

  ModuleView.prototype.render = function() {
    ModuleView.__super__.render.apply(this, arguments);
    return console.log('render');
  };

  ModuleView.prototype.edit = function(e) {
    console.log('edit');
    $('button#edit').hide();
    $('button#save').show();
    Editor.edit('name', 'input');
    Editor.edit('description', 'textarea');
    Editor.edit('process', 'textarea');
    $('#left').append('<input type="input" property="input" class="edit io form-control" placeholder="new intput">');
    $('#right').append('<input type="input" property="output" class="edit io form-control" placeholder="new output">');
    this.subview('input', new EditThingsList({
      collection: this.model.input,
      region: 'left'
    }));
    return this.subview('output', new EditThingsList({
      collection: this.model.output,
      region: 'right'
    }));
  };

  ModuleView.prototype.save = function(e) {
    console.log('save');
    $('button#save').hide();
    $('button#edit').show();
    $('.edit').hide();
    Editor.save('name');
    Editor.save('description');
    Editor.save('process');
    $('#left input, #right input').remove();
    this.subview('input', new ThingsList({
      collection: this.model.input,
      region: 'left'
    }));
    return this.subview('output', new ThingsList({
      collection: this.model.output,
      region: 'right'
    }));
  };

  ModuleView.prototype.add = function(e) {
    if (e.keyCode === 13) {
      console.log(e.target);
      if (e.target.attributes.property.value === 'input') {
        if (e.target.value !== "") {
          this.model.input.add({
            name: e.target.value
          });
        }
        console.log('input', this.model.input);
      } else {
        if (e.target.value !== "") {
          this.model.output.add({
            name: e.target.value
          });
        }
        console.log('output', this.model.output);
      }
      return e.target.value = '';
    }
  };

  ModuleView.prototype.remove = function(e) {
    var model, uri;
    uri = $($(e.target).parent()).find('a').attr('href').split('/').pop();
    console.log(uri);
    model = this.model.input.find(function(obj) {
      return obj.id === uri;
    });
    if (model) {
      return this.model.input.remove(model);
    } else {
      model = this.model.output.find(function(obj) {
        return obj.id === uri;
      });
      return this.model.output.remove(model);
    }
  };

  ModuleView.prototype.listen = {
    'addedToDOM': 'hide'
  };

  ModuleView.prototype.hide = function() {
    return $('button#save').hide();
  };

  return ModuleView;

})(View);


},{"../../lib/editor":12,"../../templates/module/show":"4XqoQJ","../base/view":42,"../thing/index":52,"../thing/index-edit":51,"jquery":"HlZQrA"}],49:[function(require,module,exports){
var SiteView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./base/view');

module.exports = SiteView = (function(_super) {
  __extends(SiteView, _super);

  function SiteView() {
    return SiteView.__super__.constructor.apply(this, arguments);
  }

  SiteView.prototype.container = 'body';

  SiteView.prototype.id = 'site-container';

  SiteView.prototype.regions = {
    header: '#header',
    main: '#outer-page-container',
    footer: '#footer'
  };

  SiteView.prototype.template = require('../templates/site');

  return SiteView;

})(View);


},{"../templates/site":"cL1PB2","./base/view":42}],50:[function(require,module,exports){
var EditListItemView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view');

module.exports = EditListItemView = (function(_super) {
  __extends(EditListItemView, _super);

  function EditListItemView() {
    return EditListItemView.__super__.constructor.apply(this, arguments);
  }

  EditListItemView.prototype.autoRender = true;

  EditListItemView.prototype.className = 'thing';

  EditListItemView.prototype.tagName = 'li';

  EditListItemView.prototype.template = require('../../templates/thing/edit-item');

  return EditListItemView;

})(View);


},{"../../templates/thing/edit-item":"IR2xWU","../base/view":42}],51:[function(require,module,exports){
var CollectionView, EditListItemView, EditThingsList,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

CollectionView = require('../base/collection-view');

EditListItemView = require('./edit-item');

module.exports = EditThingsList = (function(_super) {
  __extends(EditThingsList, _super);

  function EditThingsList() {
    return EditThingsList.__super__.constructor.apply(this, arguments);
  }

  EditThingsList.prototype.className = 'container';

  EditThingsList.prototype.itemView = EditListItemView;

  EditThingsList.prototype.tagName = 'ul';

  return EditThingsList;

})(CollectionView);


},{"../base/collection-view":41,"./edit-item":50}],52:[function(require,module,exports){
var CollectionView, ListItemView, ThingsList,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

CollectionView = require('../base/collection-view');

ListItemView = require('./list-item');

module.exports = ThingsList = (function(_super) {
  __extends(ThingsList, _super);

  function ThingsList() {
    return ThingsList.__super__.constructor.apply(this, arguments);
  }

  ThingsList.prototype.className = 'container';

  ThingsList.prototype.itemView = ListItemView;

  ThingsList.prototype.tagName = 'ul';

  return ThingsList;

})(CollectionView);


},{"../base/collection-view":41,"./list-item":53}],53:[function(require,module,exports){
var ListItemView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view');

module.exports = ListItemView = (function(_super) {
  __extends(ListItemView, _super);

  function ListItemView() {
    return ListItemView.__super__.constructor.apply(this, arguments);
  }

  ListItemView.prototype.autoRender = true;

  ListItemView.prototype.className = 'thing';

  ListItemView.prototype.tagName = 'li';

  ListItemView.prototype.template = require('../../templates/thing/list-item');

  return ListItemView;

})(View);


},{"../../templates/thing/list-item":"TNw6UK","../base/view":42}],54:[function(require,module,exports){
var $, Editor, ThingView, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('../base/view');

Editor = require('../../lib/editor');

$ = require('jquery');

module.exports = ThingView = (function(_super) {
  __extends(ThingView, _super);

  function ThingView() {
    return ThingView.__super__.constructor.apply(this, arguments);
  }

  ThingView.prototype.autoRender = true;

  ThingView.prototype.className = 'container';

  ThingView.prototype.regions = {
    left: '#left',
    right: '#right'
  };

  ThingView.prototype.template = require('../../templates/thing/show');

  ThingView.prototype.events = {
    'click button#edit': 'edit',
    'click button#save': 'save'
  };

  ThingView.prototype.render = function() {
    ThingView.__super__.render.apply(this, arguments);
    return console.log('render');
  };

  ThingView.prototype.edit = function(e) {
    console.log('edit');
    $('button#edit').hide();
    $('button#save').show();
    Editor.edit('name', 'input');
    return Editor.edit('description', 'textarea');
  };

  ThingView.prototype.save = function(e) {
    console.log('save');
    $('button#save').hide();
    $('button#edit').show();
    Editor.save('name');
    return Editor.save('description');
  };

  ThingView.prototype.listen = {
    'addedToDOM': 'hideSave'
  };

  ThingView.prototype.hideSave = function() {
    console.log($('button#save'));
    return $('button#save').hide();
  };

  return ThingView;

})(View);


},{"../../lib/editor":12,"../../templates/thing/show":"MtWnG6","../base/view":42,"jquery":"HlZQrA"}],55:[function(require,module,exports){
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',
      'MozTransition'    : 'transitionend',
      'OTransition'      : 'oTransitionEnd otransitionend',
      'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return this.sliding = false

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
    this.$element.trigger(e)
    if (e.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid.bs.carousel', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid.bs.carousel')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).focus()
  }

  function clearMenus(e) {
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return
      var that = this;

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.hoverState = null

      var complete = function() {
        that.$element.trigger('shown.bs.' + that.type)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth,
      height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$window.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (this.affixed == 'top') position.top += scrollTop

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(jQuery);

},{}],56:[function(require,module,exports){
module.exports={
  "@context": {
    "@vocab": "http://ld.ipotables.net/schema#",
    "id": "@id",
    "type": "type",
    "input": { "@type": "@id", "@container": "@set" },
    "output": { "@type": "@id", "@container": "@set" },
    "inputOf": { "@type": "@id", "@container": "@set" },
    "outputOf": { "@type": "@id", "@container": "@set" }
  },
  "@graph": [
    {
      "id": "urn:uuid:5bc1633a-bf5b-4ae6-bf63-e04e654d42b3",
      "type": "Thing",
      "name": "coffee powder",
      "description": "coffee beans do not make best coffee if used in their original form, powder works much better for brewing",
      "inputOf": ["urn:uuid:042fbbdf-5276-4ab4-b59b-daee35b6db31"]
    }, {
      "id": "urn:uuid:d0027b57-b6dd-44f7-af63-6811e1526507",
      "type": "Thing",
      "name": "coffee grounds",
      "description": "after brewing coffee using powder, we get grounds which still contain some nutritions",
      "inputOf": ["urn:uuid:239964b7-b591-47f0-bb15-820ec023c8d7"],
      "outputOf": ["urn:uuid:042fbbdf-5276-4ab4-b59b-daee35b6db31"]
    }, {
      "id": "urn:uuid:042fbbdf-5276-4ab4-b59b-daee35b6db31",
      "type": "Module",
      "name": "making coffee",
      "description": "this module explains how to make coffe so you do not fall asleep",
      "input": ["urn:uuid:5bc1633a-bf5b-4ae6-bf63-e04e654d42b3"],
      "output": ["urn:uuid:d0027b57-b6dd-44f7-af63-6811e1526507"],
      "process": "pour hot water over coffee and stir, easy peasy lemon squeezin"
    }, {
      "id": "urn:uuid:239964b7-b591-47f0-bb15-820ec023c8d7",
      "type": "Module",
      "name": "growing mushrooms",
      "description": "this module explains how to make coffe so you do not fall asleep",
      "input": ["urn:uuid:d0027b57-b6dd-44f7-af63-6811e1526507"],
      "process": "mix all the stuff together and put some spores on it"
    }
  ]
}

},{}],57:[function(require,module,exports){
/*!
 * Chaplin 1.0.0
 *
 * Chaplin may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://chaplinjs.org
 */

(function(){

var loader = (function() {
  var modules = {};
  var cache = {};

  var dummy = function() {return function() {};};
  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, dummy(), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var loader = function(path) {
    if (cache.hasOwnProperty(path)) return cache[path];
    if (modules.hasOwnProperty(path)) return initModule(path, modules[path]);
    throw new Error('Cannot find module "' + path + '"');
  };

  loader.register = function(bundle, fn) {
    modules[bundle] = fn;
  };
  return loader;
})();

loader.register('chaplin/application', function(e, r, module) {
'use strict';

var Application, Backbone, Composer, Dispatcher, EventBroker, Layout, Router, mediator, _;

_ = loader('underscore');

Backbone = loader('backbone');

Dispatcher = loader('chaplin/dispatcher');

Layout = loader('chaplin/views/layout');

Composer = loader('chaplin/composer');

Router = loader('chaplin/lib/router');

EventBroker = loader('chaplin/lib/event_broker');

mediator = loader('chaplin/mediator');

module.exports = Application = (function() {

  Application.extend = Backbone.Model.extend;

  _.extend(Application.prototype, EventBroker);

  Application.prototype.title = '';

  Application.prototype.dispatcher = null;

  Application.prototype.layout = null;

  Application.prototype.router = null;

  Application.prototype.composer = null;

  Application.prototype.started = false;

  function Application(options) {
    if (options == null) {
      options = {};
    }
    this.initialize(options);
  }

  Application.prototype.initialize = function(options) {
    if (options == null) {
      options = {};
    }
    if (this.started) {
      throw new Error('Application#initialize: App was already started');
    }
    this.initRouter(options.routes, options);
    this.initDispatcher(options);
    this.initLayout(options);
    this.initComposer(options);
    this.initMediator();
    return this.start();
  };

  Application.prototype.initDispatcher = function(options) {
    return this.dispatcher = new Dispatcher(options);
  };

  Application.prototype.initLayout = function(options) {
    var _ref;
    if (options == null) {
      options = {};
    }
    if ((_ref = options.title) == null) {
      options.title = this.title;
    }
    return this.layout = new Layout(options);
  };

  Application.prototype.initComposer = function(options) {
    if (options == null) {
      options = {};
    }
    return this.composer = new Composer(options);
  };

  Application.prototype.initMediator = function() {
    return mediator.seal();
  };

  Application.prototype.initRouter = function(routes, options) {
    this.router = new Router(options);
    return typeof routes === "function" ? routes(this.router.match) : void 0;
  };

  Application.prototype.start = function() {
    this.router.startHistory();
    this.started = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  Application.prototype.disposed = false;

  Application.prototype.dispose = function() {
    var prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    properties = ['dispatcher', 'layout', 'router', 'composer'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      if (this[prop] != null) {
        this[prop].dispose();
      }
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Application;

})();

});;loader.register('chaplin/mediator', function(e, r, module) {
'use strict';

var Backbone, handlers, mediator, support, utils, _,
  __slice = [].slice;

Backbone = loader('backbone');

_ = loader('underscore');

support = loader('chaplin/lib/support');

utils = loader('chaplin/lib/utils');

mediator = {};

mediator.subscribe = Backbone.Events.on;

mediator.unsubscribe = Backbone.Events.off;

mediator.publish = Backbone.Events.trigger;

mediator._callbacks = null;

handlers = mediator._handlers = {};

mediator.setHandler = function(name, method, instance) {
  return handlers[name] = {
    instance: instance,
    method: method
  };
};

mediator.execute = function() {
  var args, handler, name, nameOrObj, silent;
  nameOrObj = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  silent = false;
  if (typeof nameOrObj === 'object') {
    silent = nameOrObj.silent;
    name = nameOrObj.name;
  } else {
    name = nameOrObj;
  }
  handler = handlers[name];
  if (handler) {
    return handler.method.apply(handler.instance, args);
  } else if (!silent) {
    throw new Error("mediator.execute: " + name + " handler is not defined");
  }
};

mediator.removeHandlers = function(instanceOrNames) {
  var handler, name, _i, _len;
  if (!instanceOrNames) {
    mediator._handlers = {};
  }
  if (utils.isArray(instanceOrNames)) {
    for (_i = 0, _len = instanceOrNames.length; _i < _len; _i++) {
      name = instanceOrNames[_i];
      delete handlers[name];
    }
  } else {
    for (name in handlers) {
      handler = handlers[name];
      if (handler.instance === instanceOrNames) {
        delete handlers[name];
      }
    }
  }
};

utils.readonly(mediator, 'subscribe', 'unsubscribe', 'publish', 'setHandler', 'execute', 'removeHandlers');

mediator.seal = function() {
  if (support.propertyDescriptors && Object.seal) {
    return Object.seal(mediator);
  }
};

utils.readonly(mediator, 'seal');

module.exports = mediator;

});;loader.register('chaplin/dispatcher', function(e, r, module) {
'use strict';

var Backbone, Dispatcher, EventBroker, mediator, utils, _;

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

utils = loader('chaplin/lib/utils');

EventBroker = loader('chaplin/lib/event_broker');

module.exports = Dispatcher = (function() {

  Dispatcher.extend = Backbone.Model.extend;

  _.extend(Dispatcher.prototype, EventBroker);

  Dispatcher.prototype.previousRoute = null;

  Dispatcher.prototype.currentController = null;

  Dispatcher.prototype.currentRoute = null;

  Dispatcher.prototype.currentParams = null;

  Dispatcher.prototype.currentQuery = null;

  function Dispatcher() {
    this.initialize.apply(this, arguments);
  }

  Dispatcher.prototype.initialize = function(options) {
    if (options == null) {
      options = {};
    }
    this.settings = _.defaults(options, {
      controllerPath: 'controllers/',
      controllerSuffix: '_controller'
    });
    return this.subscribeEvent('router:match', this.dispatch);
  };

  Dispatcher.prototype.dispatch = function(route, params, options) {
    var _ref, _ref1,
      _this = this;
    params = params ? _.extend({}, params) : {};
    options = options ? _.extend({}, options) : {};
    if (!(options.query != null)) {
      options.query = {};
    }
    if (options.forceStartup !== true) {
      options.forceStartup = false;
    }
    if (!options.forceStartup && ((_ref = this.currentRoute) != null ? _ref.controller : void 0) === route.controller && ((_ref1 = this.currentRoute) != null ? _ref1.action : void 0) === route.action && _.isEqual(this.currentParams, params) && _.isEqual(this.currentQuery, options.query)) {
      return;
    }
    return this.loadController(route.controller, function(Controller) {
      return _this.controllerLoaded(route, params, options, Controller);
    });
  };

  Dispatcher.prototype.loadController = function(name, handler) {
    var fileName, moduleName,
      _this = this;
    fileName = name + this.settings.controllerSuffix;
    moduleName = this.settings.controllerPath + fileName;
    if (typeof define !== "undefined" && define !== null ? define.amd : void 0) {
      return require([moduleName], handler);
    } else {
      return setTimeout(function() {
        return handler(require(moduleName));
      }, 0);
    }
  };

  Dispatcher.prototype.controllerLoaded = function(route, params, options, Controller) {
    var controller, prev, previous;
    if (this.nextPreviousRoute = this.currentRoute) {
      previous = _.extend({}, this.nextPreviousRoute);
      if (this.currentParams != null) {
        previous.params = this.currentParams;
      }
      if (previous.previous) {
        delete previous.previous;
      }
      prev = {
        previous: previous
      };
    }
    this.nextCurrentRoute = _.extend({}, route, prev);
    controller = new Controller(params, this.nextCurrentRoute, options);
    return this.executeBeforeAction(controller, this.nextCurrentRoute, params, options);
  };

  Dispatcher.prototype.executeAction = function(controller, route, params, options) {
    if (this.currentController) {
      this.publishEvent('beforeControllerDispose', this.currentController);
      this.currentController.dispose(params, route, options);
    }
    this.currentController = controller;
    this.currentParams = params;
    this.currentQuery = options.query;
    controller[route.action](params, route, options);
    if (controller.redirected) {
      return;
    }
    return this.publishEvent('dispatcher:dispatch', this.currentController, params, route, options);
  };

  Dispatcher.prototype.executeBeforeAction = function(controller, route, params, options) {
    var before, executeAction, promise,
      _this = this;
    before = controller.beforeAction;
    executeAction = function() {
      if (controller.redirected || _this.currentRoute && route === _this.currentRoute) {
        _this.nextPreviousRoute = _this.nextCurrentRoute = null;
        controller.dispose();
        return;
      }
      _this.previousRoute = _this.nextPreviousRoute;
      _this.currentRoute = _this.nextCurrentRoute;
      _this.nextPreviousRoute = _this.nextCurrentRoute = null;
      return _this.executeAction(controller, route, params, options);
    };
    if (!before) {
      executeAction();
      return;
    }
    if (typeof before !== 'function') {
      throw new TypeError('Controller#beforeAction: function expected. ' + 'Old object-like form is not supported.');
    }
    promise = controller.beforeAction(params, route, options);
    if (promise && promise.then) {
      return promise.then(executeAction);
    } else {
      return executeAction();
    }
  };

  Dispatcher.prototype.disposed = false;

  Dispatcher.prototype.dispose = function() {
    if (this.disposed) {
      return;
    }
    this.unsubscribeAllEvents();
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Dispatcher;

})();

});;loader.register('chaplin/composer', function(e, r, module) {
'use strict';

var Backbone, Composer, Composition, EventBroker, mediator, utils, _;

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

utils = loader('chaplin/lib/utils');

Composition = loader('chaplin/lib/composition');

EventBroker = loader('chaplin/lib/event_broker');

module.exports = Composer = (function() {

  Composer.extend = Backbone.Model.extend;

  _.extend(Composer.prototype, EventBroker);

  Composer.prototype.compositions = null;

  function Composer() {
    this.initialize.apply(this, arguments);
  }

  Composer.prototype.initialize = function(options) {
    if (options == null) {
      options = {};
    }
    this.compositions = {};
    mediator.setHandler('composer:compose', this.compose, this);
    mediator.setHandler('composer:retrieve', this.retrieve, this);
    return this.subscribeEvent('dispatcher:dispatch', this.cleanup);
  };

  Composer.prototype.compose = function(name, second, third) {
    if (typeof second === 'function') {
      if (third || second.prototype.dispose) {
        if (second.prototype instanceof Composition) {
          return this._compose(name, {
            composition: second,
            options: third
          });
        } else {
          return this._compose(name, {
            options: third,
            compose: function() {
              var autoRender, disabledAutoRender;
              this.item = new second(this.options);
              autoRender = this.item.autoRender;
              disabledAutoRender = autoRender === void 0 || !autoRender;
              if (disabledAutoRender && typeof this.item.render === 'function') {
                return this.item.render();
              }
            }
          });
        }
      }
      return this._compose(name, {
        compose: second
      });
    }
    if (typeof third === 'function') {
      return this._compose(name, {
        compose: third,
        options: second
      });
    }
    return this._compose(name, second);
  };

  Composer.prototype._compose = function(name, options) {
    var composition, current, isPromise, returned;
    if (typeof options.compose !== 'function' && !(options.composition != null)) {
      throw new Error('Composer#compose was used incorrectly');
    }
    if (options.composition != null) {
      composition = new options.composition(options.options);
    } else {
      composition = new Composition(options.options);
      composition.compose = options.compose;
      if (options.check) {
        composition.check = options.check;
      }
    }
    current = this.compositions[name];
    isPromise = false;
    if (current && current.check(composition.options)) {
      current.stale(false);
    } else {
      if (current) {
        current.dispose();
      }
      returned = composition.compose(composition.options);
      isPromise = typeof (returned != null ? returned.then : void 0) === 'function';
      composition.stale(false);
      this.compositions[name] = composition;
    }
    if (isPromise) {
      return returned;
    } else {
      return this.compositions[name].item;
    }
  };

  Composer.prototype.retrieve = function(name) {
    var active;
    active = this.compositions[name];
    if (active && !active.stale()) {
      return active.item;
    } else {
      return void 0;
    }
  };

  Composer.prototype.cleanup = function() {
    var composition, name, _ref;
    _ref = this.compositions;
    for (name in _ref) {
      composition = _ref[name];
      if (composition.stale()) {
        composition.dispose();
        delete this.compositions[name];
      } else {
        composition.stale(true);
      }
    }
  };

  Composer.prototype.dispose = function() {
    var composition, name, _ref;
    if (this.disposed) {
      return;
    }
    this.unsubscribeAllEvents();
    mediator.removeHandlers(this);
    _ref = this.compositions;
    for (name in _ref) {
      composition = _ref[name];
      composition.dispose();
    }
    delete this.compositions;
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Composer;

})();

});;loader.register('chaplin/controllers/controller', function(e, r, module) {
'use strict';

var Backbone, Controller, EventBroker, mediator, utils, _,
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty;

_ = loader('underscore');

Backbone = loader('backbone');

EventBroker = loader('chaplin/lib/event_broker');

utils = loader('chaplin/lib/utils');

mediator = loader('chaplin/mediator');

module.exports = Controller = (function() {

  Controller.extend = Backbone.Model.extend;

  _.extend(Controller.prototype, Backbone.Events);

  _.extend(Controller.prototype, EventBroker);

  Controller.prototype.view = null;

  Controller.prototype.redirected = false;

  function Controller() {
    this.initialize.apply(this, arguments);
  }

  Controller.prototype.initialize = function() {};

  Controller.prototype.beforeAction = function() {};

  Controller.prototype.adjustTitle = function(subtitle) {
    return mediator.execute('adjustTitle', subtitle);
  };

  Controller.prototype.reuse = function(name) {
    var method;
    method = arguments.length === 1 ? 'retrieve' : 'compose';
    return mediator.execute.apply(mediator, ["composer:" + method].concat(__slice.call(arguments)));
  };

  Controller.prototype.compose = function() {
    throw new Error('Controller#compose was moved to Controller#reuse');
  };

  Controller.prototype.redirectTo = function(pathDesc, params, options) {
    this.redirected = true;
    return utils.redirectTo(pathDesc, params, options);
  };

  Controller.prototype.disposed = false;

  Controller.prototype.dispose = function() {
    var obj, prop;
    if (this.disposed) {
      return;
    }
    for (prop in this) {
      if (!__hasProp.call(this, prop)) continue;
      obj = this[prop];
      if (!(obj && typeof obj.dispose === 'function')) {
        continue;
      }
      obj.dispose();
      delete this[prop];
    }
    this.unsubscribeAllEvents();
    this.stopListening();
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Controller;

})();

});;loader.register('chaplin/models/collection', function(e, r, module) {
'use strict';

var Backbone, Collection, EventBroker, Model, utils, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

EventBroker = loader('chaplin/lib/event_broker');

Model = loader('chaplin/models/model');

utils = loader('chaplin/lib/utils');

module.exports = Collection = (function(_super) {

  __extends(Collection, _super);

  function Collection() {
    return Collection.__super__.constructor.apply(this, arguments);
  }

  _.extend(Collection.prototype, EventBroker);

  Collection.prototype.model = Model;

  Collection.prototype.serialize = function() {
    return this.map(utils.serialize);
  };

  Collection.prototype.disposed = false;

  Collection.prototype.dispose = function() {
    var prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    this.trigger('dispose', this);
    this.reset([], {
      silent: true
    });
    this.unsubscribeAllEvents();
    this.stopListening();
    this.off();
    properties = ['model', 'models', '_byId', '_byCid', '_callbacks'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      delete this[prop];
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Collection;

})(Backbone.Collection);

});;loader.register('chaplin/models/model', function(e, r, module) {
'use strict';

var Backbone, EventBroker, Model, serializeAttributes, serializeModelAttributes, utils, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

utils = loader('chaplin/lib/utils');

EventBroker = loader('chaplin/lib/event_broker');

serializeAttributes = function(model, attributes, modelStack) {
  var delegator, key, otherModel, serializedModels, value, _i, _len, _ref;
  delegator = utils.beget(attributes);
  if (modelStack == null) {
    modelStack = {};
  }
  modelStack[model.cid] = true;
  for (key in attributes) {
    value = attributes[key];
    if (value instanceof Backbone.Model) {
      delegator[key] = serializeModelAttributes(value, model, modelStack);
    } else if (value instanceof Backbone.Collection) {
      serializedModels = [];
      _ref = value.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        otherModel = _ref[_i];
        serializedModels.push(serializeModelAttributes(otherModel, model, modelStack));
      }
      delegator[key] = serializedModels;
    }
  }
  delete modelStack[model.cid];
  return delegator;
};

serializeModelAttributes = function(model, currentModel, modelStack) {
  var attributes;
  if (model === currentModel || model.cid in modelStack) {
    return null;
  }
  attributes = typeof model.getAttributes === 'function' ? model.getAttributes() : model.attributes;
  return serializeAttributes(model, attributes, modelStack);
};

module.exports = Model = (function(_super) {

  __extends(Model, _super);

  function Model() {
    return Model.__super__.constructor.apply(this, arguments);
  }

  _.extend(Model.prototype, EventBroker);

  Model.prototype.getAttributes = function() {
    return this.attributes;
  };

  Model.prototype.serialize = function() {
    return serializeAttributes(this, this.getAttributes());
  };

  Model.prototype.disposed = false;

  Model.prototype.dispose = function() {
    var prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    this.trigger('dispose', this);
    this.unsubscribeAllEvents();
    this.stopListening();
    this.off();
    properties = ['collection', 'attributes', 'changed', '_escapedAttributes', '_previousAttributes', '_silent', '_pending', '_callbacks'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      delete this[prop];
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Model;

})(Backbone.Model);

});;loader.register('chaplin/views/layout', function(e, r, module) {
'use strict';

var $, Backbone, EventBroker, Layout, View, mediator, utils, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

utils = loader('chaplin/lib/utils');

EventBroker = loader('chaplin/lib/event_broker');

View = loader('chaplin/views/view');

$ = Backbone.$;

module.exports = Layout = (function(_super) {

  __extends(Layout, _super);

  Layout.prototype.el = 'body';

  Layout.prototype.keepElement = true;

  Layout.prototype.title = '';

  Layout.prototype.globalRegions = null;

  Layout.prototype.listen = {
    'beforeControllerDispose mediator': 'scroll'
  };

  function Layout(options) {
    if (options == null) {
      options = {};
    }
    this.openLink = __bind(this.openLink, this);

    this.globalRegions = [];
    this.title = options.title;
    if (options.regions) {
      this.regions = options.regions;
    }
    this.settings = _.defaults(options, {
      titleTemplate: function(data) {
        var st;
        st = data.subtitle ? "" + data.subtitle + " \u2013 " : '';
        return st + data.title;
      },
      openExternalToBlank: false,
      routeLinks: 'a, .go-to',
      skipRouting: '.noscript',
      scrollTo: [0, 0]
    });
    mediator.setHandler('region:show', this.showRegion, this);
    mediator.setHandler('region:register', this.registerRegionHandler, this);
    mediator.setHandler('region:unregister', this.unregisterRegionHandler, this);
    mediator.setHandler('region:find', this.regionByName, this);
    mediator.setHandler('adjustTitle', this.adjustTitle, this);
    Layout.__super__.constructor.apply(this, arguments);
    if (this.settings.routeLinks) {
      this.startLinkRouting();
    }
  }

  Layout.prototype.scroll = function() {
    var position;
    position = this.settings.scrollTo;
    if (position) {
      return window.scrollTo(position[0], position[1]);
    }
  };

  Layout.prototype.adjustTitle = function(subtitle) {
    var title,
      _this = this;
    if (subtitle == null) {
      subtitle = '';
    }
    title = this.settings.titleTemplate({
      title: this.title,
      subtitle: subtitle
    });
    setTimeout(function() {
      document.title = title;
      return _this.publishEvent('adjustTitle', subtitle, title);
    }, 50);
    return title;
  };

  Layout.prototype.startLinkRouting = function() {
    var route;
    route = this.settings.routeLinks;
    if (!route) {
      return;
    }
    if ($) {
      return this.$el.on('click', route, this.openLink);
    } else {
      return this.delegate('click', route, this.openLink);
    }
  };

  Layout.prototype.stopLinkRouting = function() {
    var route;
    route = this.settings.routeLinks;
    if ($) {
      if (route) {
        return this.$el.off('click', route);
      }
    } else {
      return this.undelegate('click', route, this.openLink);
    }
  };

  Layout.prototype.isExternalLink = function(link) {
    var _ref, _ref1;
    return link.target === '_blank' || link.rel === 'external' || ((_ref = link.protocol) !== 'http:' && _ref !== 'https:' && _ref !== 'file:') || ((_ref1 = link.hostname) !== location.hostname && _ref1 !== '');
  };

  Layout.prototype.openLink = function(event) {
    var el, external, href, isAnchor, skipRouting, type;
    if (utils.modifierKeyPressed(event)) {
      return;
    }
    el = $ ? event.currentTarget : event.delegateTarget;
    isAnchor = el.nodeName === 'A';
    href = el.getAttribute('href') || el.getAttribute('data-href') || null;
    if (!(href != null) || href === '' || href.charAt(0) === '#') {
      return;
    }
    skipRouting = this.settings.skipRouting;
    type = typeof skipRouting;
    if (type === 'function' && !skipRouting(href, el) || type === 'string' && ($ ? $(el).is(skipRouting) : Backbone.utils.matchesSelector(el, skipRouting))) {
      return;
    }
    external = isAnchor && this.isExternalLink(el);
    if (external) {
      if (this.settings.openExternalToBlank) {
        event.preventDefault();
        window.open(href);
      }
      return;
    }
    utils.redirectTo({
      url: href
    });
    event.preventDefault();
  };

  Layout.prototype.registerRegionHandler = function(instance, name, selector) {
    if (name != null) {
      return this.registerGlobalRegion(instance, name, selector);
    } else {
      return this.registerGlobalRegions(instance);
    }
  };

  Layout.prototype.registerGlobalRegion = function(instance, name, selector) {
    this.unregisterGlobalRegion(instance, name);
    return this.globalRegions.unshift({
      instance: instance,
      name: name,
      selector: selector
    });
  };

  Layout.prototype.registerGlobalRegions = function(instance) {
    var name, selector, version, _i, _len, _ref;
    _ref = utils.getAllPropertyVersions(instance, 'regions');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      version = _ref[_i];
      for (name in version) {
        selector = version[name];
        this.registerGlobalRegion(instance, name, selector);
      }
    }
  };

  Layout.prototype.unregisterRegionHandler = function(instance, name) {
    if (name != null) {
      return this.unregisterGlobalRegion(instance, name);
    } else {
      return this.unregisterGlobalRegions(instance);
    }
  };

  Layout.prototype.unregisterGlobalRegion = function(instance, name) {
    var cid, region;
    cid = instance.cid;
    return this.globalRegions = (function() {
      var _i, _len, _ref, _results;
      _ref = this.globalRegions;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        region = _ref[_i];
        if (region.instance.cid !== cid || region.name !== name) {
          _results.push(region);
        }
      }
      return _results;
    }).call(this);
  };

  Layout.prototype.unregisterGlobalRegions = function(instance) {
    var region;
    return this.globalRegions = (function() {
      var _i, _len, _ref, _results;
      _ref = this.globalRegions;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        region = _ref[_i];
        if (region.instance.cid !== instance.cid) {
          _results.push(region);
        }
      }
      return _results;
    }).call(this);
  };

  Layout.prototype.regionByName = function(name) {
    var reg, _i, _len, _ref;
    _ref = this.globalRegions;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      reg = _ref[_i];
      if (reg.name === name && !reg.instance.stale) {
        return reg;
      }
    }
  };

  Layout.prototype.showRegion = function(name, instance) {
    var region;
    region = this.regionByName(name);
    if (!region) {
      throw new Error("No region registered under " + name);
    }
    return instance.container = region.selector === '' ? $ ? region.instance.$el : region.instance.el : region.instance.noWrap ? $ ? $(region.instance.container).find(region.selector) : region.instance.container.querySelector(region.selector) : region.instance[$ ? '$' : 'find'](region.selector);
  };

  Layout.prototype.dispose = function() {
    var prop, _i, _len, _ref;
    if (this.disposed) {
      return;
    }
    this.stopLinkRouting();
    _ref = ['globalRegions', 'title', 'route'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      prop = _ref[_i];
      delete this[prop];
    }
    mediator.removeHandlers(this);
    return Layout.__super__.dispose.apply(this, arguments);
  };

  return Layout;

})(View);

});;loader.register('chaplin/views/view', function(e, r, module) {
'use strict';

var $, Backbone, EventBroker, View, attach, bind, mediator, setHTML, utils, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

EventBroker = loader('chaplin/lib/event_broker');

utils = loader('chaplin/lib/utils');

$ = Backbone.$;

bind = (function() {
  if (Function.prototype.bind) {
    return function(item, ctx) {
      return item.bind(ctx);
    };
  } else if (_.bind) {
    return _.bind;
  }
})();

setHTML = (function() {
  if ($) {
    return function(elem, html) {
      return elem.html(html);
    };
  } else {
    return function(elem, html) {
      return elem.innerHTML = html;
    };
  }
})();

attach = (function() {
  if ($) {
    return function(view) {
      var actual;
      actual = $(view.container);
      if (typeof view.containerMethod === 'function') {
        return view.containerMethod(actual, view.el);
      } else {
        return actual[view.containerMethod](view.el);
      }
    };
  } else {
    return function(view) {
      var actual;
      actual = typeof view.container === 'string' ? document.querySelector(view.container) : view.container;
      if (typeof view.containerMethod === 'function') {
        return view.containerMethod(actual, view.el);
      } else {
        return actual[view.containerMethod](view.el);
      }
    };
  }
})();

module.exports = View = (function(_super) {

  __extends(View, _super);

  _.extend(View.prototype, EventBroker);

  View.prototype.autoRender = false;

  View.prototype.autoAttach = true;

  View.prototype.container = null;

  View.prototype.containerMethod = $ ? 'append' : 'appendChild';

  View.prototype.regions = null;

  View.prototype.region = null;

  View.prototype.stale = false;

  View.prototype.noWrap = false;

  View.prototype.keepElement = false;

  View.prototype.subviews = null;

  View.prototype.subviewsByName = null;

  View.prototype.optionNames = ['autoAttach', 'autoRender', 'container', 'containerMethod', 'region', 'regions', 'noWrap'];

  function View(options) {
    var optName, optValue, region, render,
      _this = this;
    if (options) {
      for (optName in options) {
        optValue = options[optName];
        if (__indexOf.call(this.optionNames, optName) >= 0) {
          this[optName] = optValue;
        }
      }
    }
    render = this.render;
    this.render = function() {
      if (_this.disposed) {
        return false;
      }
      render.apply(_this, arguments);
      if (_this.autoAttach) {
        _this.attach.apply(_this, arguments);
      }
      return _this;
    };
    this.subviews = [];
    this.subviewsByName = {};
    if (this.noWrap) {
      if (this.region) {
        region = mediator.execute('region:find', this.region);
        if (region != null) {
          this.el = region.instance.container != null ? region.instance.region != null ? $(region.instance.container).find(region.selector) : region.instance.container : region.instance.$(region.selector);
        }
      }
      if (this.container) {
        this.el = this.container;
      }
    }
    View.__super__.constructor.apply(this, arguments);
    this.delegateListeners();
    if (this.model) {
      this.listenTo(this.model, 'dispose', this.dispose);
    }
    if (this.collection) {
      this.listenTo(this.collection, 'dispose', function(subject) {
        if (!subject || subject === _this.collection) {
          return _this.dispose();
        }
      });
    }
    if (this.regions != null) {
      mediator.execute('region:register', this);
    }
    if (this.autoRender) {
      this.render();
    }
  }

  View.prototype.delegate = function(eventName, second, third) {
    var bound, event, events, handler, list, selector;
    if (Backbone.utils) {
      return Backbone.utils.delegate(this, eventName, second, third);
    }
    if (typeof eventName !== 'string') {
      throw new TypeError('View#delegate: first argument must be a string');
    }
    if (arguments.length === 2) {
      handler = second;
    } else if (arguments.length === 3) {
      selector = second;
      if (typeof selector !== 'string') {
        throw new TypeError('View#delegate: ' + 'second argument must be a string');
      }
      handler = third;
    } else {
      throw new TypeError('View#delegate: ' + 'only two or three arguments are allowed');
    }
    if (typeof handler !== 'function') {
      throw new TypeError('View#delegate: ' + 'handler argument must be function');
    }
    list = (function() {
      var _i, _len, _ref, _results;
      _ref = eventName.split(' ');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        event = _ref[_i];
        _results.push("" + event + ".delegate" + this.cid);
      }
      return _results;
    }).call(this);
    events = list.join(' ');
    bound = bind(handler, this);
    this.$el.on(events, selector || null, bound);
    return bound;
  };

  View.prototype._delegateEvents = function(events) {
    var bound, eventName, handler, key, match, selector, value;
    if (Backbone.View.prototype.delegateEvents.length === 2) {
      return Backbone.View.prototype.delegateEvents.call(this, events, true);
    }
    for (key in events) {
      value = events[key];
      handler = typeof value === 'function' ? value : this[value];
      if (!handler) {
        throw new Error("Method '" + value + "' does not exist");
      }
      match = key.match(/^(\S+)\s*(.*)$/);
      eventName = "" + match[1] + ".delegateEvents" + this.cid;
      selector = match[2];
      bound = bind(handler, this);
      this.$el.on(eventName, selector || null, bound);
    }
  };

  View.prototype.delegateEvents = function(events, keepOld) {
    var classEvents, _i, _len, _ref;
    if (!keepOld) {
      this.undelegateEvents();
    }
    if (events) {
      return this._delegateEvents(events);
    }
    _ref = utils.getAllPropertyVersions(this, 'events');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      classEvents = _ref[_i];
      if (typeof classEvents === 'function') {
        throw new TypeError('View#delegateEvents: functions are not supported');
      }
      this._delegateEvents(classEvents);
    }
  };

  View.prototype.undelegate = function(eventName, second, third) {
    var event, events, handler, list, selector;
    if (Backbone.utils) {
      return Backbone.utils.undelegate(this, eventName, second, third);
    }
    if (eventName) {
      if (typeof eventName !== 'string') {
        throw new TypeError('View#undelegate: first argument must be a string');
      }
      if (arguments.length === 2) {
        if (typeof second === 'string') {
          selector = second;
        } else {
          handler = second;
        }
      } else if (arguments.length === 3) {
        selector = second;
        if (typeof selector !== 'string') {
          throw new TypeError('View#undelegate: ' + 'second argument must be a string');
        }
        handler = third;
      }
      list = (function() {
        var _i, _len, _ref, _results;
        _ref = eventName.split(' ');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          event = _ref[_i];
          _results.push("" + event + ".delegate" + this.cid);
        }
        return _results;
      }).call(this);
      events = list.join(' ');
      return this.$el.off(events, selector || null);
    } else {
      return this.$el.off(".delegate" + this.cid);
    }
  };

  View.prototype.delegateListeners = function() {
    var eventName, key, method, target, version, _i, _len, _ref, _ref1;
    if (!this.listen) {
      return;
    }
    _ref = utils.getAllPropertyVersions(this, 'listen');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      version = _ref[_i];
      for (key in version) {
        method = version[key];
        if (typeof method !== 'function') {
          method = this[method];
        }
        if (typeof method !== 'function') {
          throw new Error('View#delegateListeners: ' + ("" + method + " must be function"));
        }
        _ref1 = key.split(' '), eventName = _ref1[0], target = _ref1[1];
        this.delegateListener(eventName, target, method);
      }
    }
  };

  View.prototype.delegateListener = function(eventName, target, callback) {
    var prop;
    if (target === 'model' || target === 'collection') {
      prop = this[target];
      if (prop) {
        this.listenTo(prop, eventName, callback);
      }
    } else if (target === 'mediator') {
      this.subscribeEvent(eventName, callback);
    } else if (!target) {
      this.on(eventName, callback, this);
    }
  };

  View.prototype.registerRegion = function(name, selector) {
    return mediator.execute('region:register', this, name, selector);
  };

  View.prototype.unregisterRegion = function(name) {
    return mediator.execute('region:unregister', this, name);
  };

  View.prototype.unregisterAllRegions = function() {
    return mediator.execute({
      name: 'region:unregister',
      silent: true
    }, this);
  };

  View.prototype.subview = function(name, view) {
    var byName, subviews;
    subviews = this.subviews;
    byName = this.subviewsByName;
    if (name && view) {
      this.removeSubview(name);
      subviews.push(view);
      byName[name] = view;
      return view;
    } else if (name) {
      return byName[name];
    }
  };

  View.prototype.removeSubview = function(nameOrView) {
    var byName, index, name, otherName, otherView, subviews, view;
    if (!nameOrView) {
      return;
    }
    subviews = this.subviews;
    byName = this.subviewsByName;
    if (typeof nameOrView === 'string') {
      name = nameOrView;
      view = byName[name];
    } else {
      view = nameOrView;
      for (otherName in byName) {
        otherView = byName[otherName];
        if (!(otherView === view)) {
          continue;
        }
        name = otherName;
        break;
      }
    }
    if (!(name && view && view.dispose)) {
      return;
    }
    view.dispose();
    index = utils.indexOf(subviews, view);
    if (index !== -1) {
      subviews.splice(index, 1);
    }
    return delete byName[name];
  };

  View.prototype.getTemplateData = function() {
    var data, source;
    data = this.model ? utils.serialize(this.model) : this.collection ? {
      items: utils.serialize(this.collection),
      length: this.collection.length
    } : {};
    source = this.model || this.collection;
    if (source) {
      if (typeof source.isSynced === 'function' && !('synced' in data)) {
        data.synced = source.isSynced();
      }
    }
    return data;
  };

  View.prototype.getTemplateFunction = function() {
    throw new Error('View#getTemplateFunction must be overridden');
  };

  View.prototype.render = function() {
    var el, html, templateFunc;
    if (this.disposed) {
      return false;
    }
    templateFunc = this.getTemplateFunction();
    if (typeof templateFunc === 'function') {
      html = templateFunc(this.getTemplateData());
      if (this.noWrap) {
        el = document.createElement('div');
        el.innerHTML = html;
        if (el.children.length > 1) {
          throw new Error('There must be a single top-level element when ' + 'using `noWrap`.');
        }
        this.undelegateEvents();
        this.setElement(el.firstChild, true);
      } else {
        setHTML(($ ? this.$el : this.el), html);
      }
    }
    return this;
  };

  View.prototype.attach = function() {
    if (this.region != null) {
      mediator.execute('region:show', this.region, this);
    }
    if (this.container && !document.body.contains(this.el)) {
      attach(this);
      return this.trigger('addedToDOM');
    }
  };

  View.prototype.disposed = false;

  View.prototype.dispose = function() {
    var prop, properties, subview, _i, _j, _len, _len1, _ref;
    if (this.disposed) {
      return;
    }
    this.unregisterAllRegions();
    _ref = this.subviews;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      subview = _ref[_i];
      subview.dispose();
    }
    this.unsubscribeAllEvents();
    this.off();
    if (this.keepElement) {
      this.undelegateEvents();
      this.undelegate();
      this.stopListening();
    } else {
      this.remove();
    }
    properties = ['el', '$el', 'options', 'model', 'collection', 'subviews', 'subviewsByName', '_callbacks'];
    for (_j = 0, _len1 = properties.length; _j < _len1; _j++) {
      prop = properties[_j];
      delete this[prop];
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return View;

})(Backbone.View);

});;loader.register('chaplin/views/collection_view', function(e, r, module) {
'use strict';

var $, Backbone, CollectionView, View, addClass, endAnimation, filterChildren, insertView, startAnimation, toggleElement, utils, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

View = loader('chaplin/views/view');

utils = loader('chaplin/lib/utils');

$ = Backbone.$;

filterChildren = function(nodeList, selector) {
  var node, _i, _len, _results;
  if (!selector) {
    return nodeList;
  }
  _results = [];
  for (_i = 0, _len = nodeList.length; _i < _len; _i++) {
    node = nodeList[_i];
    if (Backbone.utils.matchesSelector(node, selector)) {
      _results.push(node);
    }
  }
  return _results;
};

toggleElement = (function() {
  if ($) {
    return function(elem, visible) {
      return elem.toggle(visible);
    };
  } else {
    return function(elem, visible) {
      return elem.style.display = (visible ? '' : 'none');
    };
  }
})();

addClass = (function() {
  if ($) {
    return function(elem, cls) {
      return elem.addClass(cls);
    };
  } else {
    return function(elem, cls) {
      return elem.classList.add(cls);
    };
  }
})();

startAnimation = (function() {
  if ($) {
    return function(elem, useCssAnimation, cls) {
      if (useCssAnimation) {
        return addClass(elem, cls);
      } else {
        return elem.css('opacity', 0);
      }
    };
  } else {
    return function(elem, useCssAnimation, cls) {
      if (useCssAnimation) {
        return addClass(elem, cls);
      } else {
        return elem.style.opacity = 0;
      }
    };
  }
})();

endAnimation = (function() {
  if ($) {
    return function(elem, duration) {
      return elem.animate({
        opacity: 1
      }, duration);
    };
  } else {
    return function(elem, duration) {
      elem.style.transition = "opacity " + (duration / 1000) + "s";
      return elem.opacity = 1;
    };
  }
})();

insertView = (function() {
  if ($) {
    return function(list, viewEl, position, length, itemSelector) {
      var children, childrenLength, insertInMiddle, isEnd, method;
      insertInMiddle = (0 < position && position < length);
      isEnd = function(length) {
        return length === 0 || position === length;
      };
      if (insertInMiddle || itemSelector) {
        children = list.children(itemSelector);
        childrenLength = children.length;
        if (children[position] !== viewEl) {
          if (isEnd(childrenLength)) {
            return list.append(viewEl);
          } else {
            if (position === 0) {
              return children.eq(position).before(viewEl);
            } else {
              return children.eq(position - 1).after(viewEl);
            }
          }
        }
      } else {
        method = isEnd(length) ? 'append' : 'prepend';
        return list[method](viewEl);
      }
    };
  } else {
    return function(list, viewEl, position, length, itemSelector) {
      var children, childrenLength, insertInMiddle, isEnd, last;
      insertInMiddle = (0 < position && position < length);
      isEnd = function(length) {
        return length === 0 || position === length;
      };
      if (insertInMiddle || itemSelector) {
        children = filterChildren(list.children, itemSelector);
        childrenLength = children.length;
        if (children[position] !== viewEl) {
          if (isEnd(childrenLength)) {
            return list.appendChild(viewEl);
          } else if (position === 0) {
            return list.insertBefore(viewEl, children[position]);
          } else {
            last = children[position - 1];
            if (list.lastChild === last) {
              return list.appendChild(viewEl);
            } else {
              return list.insertBefore(viewEl, last.nextElementSibling);
            }
          }
        }
      } else if (isEnd(length)) {
        return list.appendChild(viewEl);
      } else {
        return list.insertBefore(viewEl, list.firstChild);
      }
    };
  }
})();

module.exports = CollectionView = (function(_super) {

  __extends(CollectionView, _super);

  CollectionView.prototype.itemView = null;

  CollectionView.prototype.autoRender = true;

  CollectionView.prototype.renderItems = true;

  CollectionView.prototype.animationDuration = 500;

  CollectionView.prototype.useCssAnimation = false;

  CollectionView.prototype.animationStartClass = 'animated-item-view';

  CollectionView.prototype.animationEndClass = 'animated-item-view-end';

  CollectionView.prototype.listSelector = null;

  CollectionView.prototype.$list = null;

  CollectionView.prototype.fallbackSelector = null;

  CollectionView.prototype.$fallback = null;

  CollectionView.prototype.loadingSelector = null;

  CollectionView.prototype.$loading = null;

  CollectionView.prototype.itemSelector = void 0;

  CollectionView.prototype.filterer = null;

  CollectionView.prototype.filterCallback = function(view, included) {
    if ($) {
      view.$el.stop(true, true);
    }
    return toggleElement(($ ? view.$el : view.el), included);
  };

  CollectionView.prototype.visibleItems = null;

  CollectionView.prototype.optionNames = View.prototype.optionNames.concat(['renderItems', 'itemView']);

  function CollectionView(options) {
    this.renderAllItems = __bind(this.renderAllItems, this);

    this.toggleFallback = __bind(this.toggleFallback, this);

    this.itemsReset = __bind(this.itemsReset, this);

    this.itemRemoved = __bind(this.itemRemoved, this);

    this.itemAdded = __bind(this.itemAdded, this);
    this.visibleItems = [];
    CollectionView.__super__.constructor.apply(this, arguments);
  }

  CollectionView.prototype.initialize = function(options) {
    if (options == null) {
      options = {};
    }
    this.addCollectionListeners();
    if (options.filterer != null) {
      return this.filter(options.filterer);
    }
  };

  CollectionView.prototype.addCollectionListeners = function() {
    this.listenTo(this.collection, 'add', this.itemAdded);
    this.listenTo(this.collection, 'remove', this.itemRemoved);
    return this.listenTo(this.collection, 'reset sort', this.itemsReset);
  };

  CollectionView.prototype.getTemplateData = function() {
    var templateData;
    templateData = {
      length: this.collection.length
    };
    if (typeof this.collection.isSynced === 'function') {
      templateData.synced = this.collection.isSynced();
    }
    return templateData;
  };

  CollectionView.prototype.getTemplateFunction = function() {};

  CollectionView.prototype.render = function() {
    var listSelector;
    CollectionView.__super__.render.apply(this, arguments);
    listSelector = _.result(this, 'listSelector');
    if ($) {
      this.$list = listSelector ? this.$(listSelector) : this.$el;
    } else {
      this.list = listSelector ? this.find(this.listSelector) : this.el;
    }
    this.initFallback();
    this.initLoadingIndicator();
    if (this.renderItems) {
      return this.renderAllItems();
    }
  };

  CollectionView.prototype.itemAdded = function(item, collection, options) {
    return this.insertView(item, this.renderItem(item), options.at);
  };

  CollectionView.prototype.itemRemoved = function(item) {
    return this.removeViewForItem(item);
  };

  CollectionView.prototype.itemsReset = function() {
    return this.renderAllItems();
  };

  CollectionView.prototype.initFallback = function() {
    if (!this.fallbackSelector) {
      return;
    }
    if ($) {
      this.$fallback = this.$(this.fallbackSelector);
    } else {
      this.fallback = this.find(this.fallbackSelector);
    }
    this.on('visibilityChange', this.toggleFallback);
    this.listenTo(this.collection, 'syncStateChange', this.toggleFallback);
    return this.toggleFallback();
  };

  CollectionView.prototype.toggleFallback = function() {
    var visible;
    visible = this.visibleItems.length === 0 && (typeof this.collection.isSynced === 'function' ? this.collection.isSynced() : true);
    return toggleElement(($ ? this.$fallback : this.fallback), visible);
  };

  CollectionView.prototype.initLoadingIndicator = function() {
    if (!(this.loadingSelector && typeof this.collection.isSyncing === 'function')) {
      return;
    }
    if ($) {
      this.$loading = this.$(this.loadingSelector);
    } else {
      this.loading = this.find(this.loadingSelector);
    }
    this.listenTo(this.collection, 'syncStateChange', this.toggleLoadingIndicator);
    return this.toggleLoadingIndicator();
  };

  CollectionView.prototype.toggleLoadingIndicator = function() {
    var visible;
    visible = this.collection.length === 0 && this.collection.isSyncing();
    return toggleElement(($ ? this.$loading : this.loading), visible);
  };

  CollectionView.prototype.getItemViews = function() {
    var itemViews, name, view, _ref;
    itemViews = {};
    if (this.subviews.length > 0) {
      _ref = this.subviewsByName;
      for (name in _ref) {
        view = _ref[name];
        if (name.slice(0, 9) === 'itemView:') {
          itemViews[name.slice(9)] = view;
        }
      }
    }
    return itemViews;
  };

  CollectionView.prototype.filter = function(filterer, filterCallback) {
    var hasItemViews, included, index, item, view, _i, _len, _ref,
      _this = this;
    if (typeof filterer === 'function' || filterer === null) {
      this.filterer = filterer;
    }
    if (typeof filterCallback === 'function' || filterCallback === null) {
      this.filterCallback = filterCallback;
    }
    hasItemViews = (function() {
      var name;
      if (_this.subviews.length > 0) {
        for (name in _this.subviewsByName) {
          if (name.slice(0, 9) === 'itemView:') {
            return true;
          }
        }
      }
      return false;
    })();
    if (hasItemViews) {
      _ref = this.collection.models;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        item = _ref[index];
        included = typeof this.filterer === 'function' ? this.filterer(item, index) : true;
        view = this.subview("itemView:" + item.cid);
        if (!view) {
          throw new Error('CollectionView#filter: ' + ("no view found for " + item.cid));
        }
        this.filterCallback(view, included);
        this.updateVisibleItems(view.model, included, false);
      }
    }
    return this.trigger('visibilityChange', this.visibleItems);
  };

  CollectionView.prototype.renderAllItems = function() {
    var cid, index, item, items, remainingViewsByCid, view, _i, _j, _len, _len1, _ref;
    items = this.collection.models;
    this.visibleItems = [];
    remainingViewsByCid = {};
    for (_i = 0, _len = items.length; _i < _len; _i++) {
      item = items[_i];
      view = this.subview("itemView:" + item.cid);
      if (view) {
        remainingViewsByCid[item.cid] = view;
      }
    }
    _ref = this.getItemViews();
    for (cid in _ref) {
      if (!__hasProp.call(_ref, cid)) continue;
      view = _ref[cid];
      if (!(cid in remainingViewsByCid)) {
        this.removeSubview("itemView:" + cid);
      }
    }
    for (index = _j = 0, _len1 = items.length; _j < _len1; index = ++_j) {
      item = items[index];
      view = this.subview("itemView:" + item.cid);
      if (view) {
        this.insertView(item, view, index, false);
      } else {
        this.insertView(item, this.renderItem(item), index);
      }
    }
    if (items.length === 0) {
      return this.trigger('visibilityChange', this.visibleItems);
    }
  };

  CollectionView.prototype.renderItem = function(item) {
    var view;
    view = this.subview("itemView:" + item.cid);
    if (!view) {
      view = this.initItemView(item);
      this.subview("itemView:" + item.cid, view);
    }
    view.render();
    return view;
  };

  CollectionView.prototype.initItemView = function(model) {
    if (this.itemView) {
      return new this.itemView({
        autoRender: false,
        model: model
      });
    } else {
      throw new Error('The CollectionView#itemView property ' + 'must be defined or the initItemView() must be overridden.');
    }
  };

  CollectionView.prototype.insertView = function(item, view, position, enableAnimation) {
    var elem, included, length, list,
      _this = this;
    if (enableAnimation == null) {
      enableAnimation = true;
    }
    if (this.animationDuration === 0) {
      enableAnimation = false;
    }
    if (typeof position !== 'number') {
      position = this.collection.indexOf(item);
    }
    included = typeof this.filterer === 'function' ? this.filterer(item, position) : true;
    elem = $ ? view.$el : view.el;
    if (included && enableAnimation) {
      startAnimation(elem, this.useCssAnimation, this.animationStartClass);
    }
    if (this.filterer) {
      this.filterCallback(view, included);
    }
    length = this.collection.length;
    list = $ ? this.$list : this.list;
    insertView(list, elem, position, length, this.itemSelector);
    view.trigger('addedToParent');
    this.updateVisibleItems(item, included);
    if (included && enableAnimation) {
      if (this.useCssAnimation) {
        setTimeout((function() {
          return addClass(elem, _this.animationEndClass);
        }), 0);
      } else {
        endAnimation(elem, this.animationDuration);
      }
    }
    return view;
  };

  CollectionView.prototype.removeViewForItem = function(item) {
    this.updateVisibleItems(item, false);
    return this.removeSubview("itemView:" + item.cid);
  };

  CollectionView.prototype.updateVisibleItems = function(item, includedInFilter, triggerEvent) {
    var includedInVisibleItems, visibilityChanged, visibleItemsIndex;
    if (triggerEvent == null) {
      triggerEvent = true;
    }
    visibilityChanged = false;
    visibleItemsIndex = utils.indexOf(this.visibleItems, item);
    includedInVisibleItems = visibleItemsIndex !== -1;
    if (includedInFilter && !includedInVisibleItems) {
      this.visibleItems.push(item);
      visibilityChanged = true;
    } else if (!includedInFilter && includedInVisibleItems) {
      this.visibleItems.splice(visibleItemsIndex, 1);
      visibilityChanged = true;
    }
    if (visibilityChanged && triggerEvent) {
      this.trigger('visibilityChange', this.visibleItems);
    }
    return visibilityChanged;
  };

  CollectionView.prototype.dispose = function() {
    var prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    properties = ['$list', '$fallback', '$loading', 'visibleItems'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      delete this[prop];
    }
    return CollectionView.__super__.dispose.apply(this, arguments);
  };

  return CollectionView;

})(View);

});;loader.register('chaplin/lib/route', function(e, r, module) {
'use strict';

var Backbone, Controller, EventBroker, Route, utils, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty;

_ = loader('underscore');

Backbone = loader('backbone');

EventBroker = loader('chaplin/lib/event_broker');

Controller = loader('chaplin/controllers/controller');

utils = loader('chaplin/lib/utils');

module.exports = Route = (function() {
  var escapeRegExp, optionalRegExp, paramRegExp, processTrailingSlash;

  Route.extend = Backbone.Model.extend;

  _.extend(Route.prototype, EventBroker);

  escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  optionalRegExp = /\((.*?)\)/g;

  paramRegExp = /(?::|\*)(\w+)/g;

  processTrailingSlash = function(path, trailing) {
    switch (trailing) {
      case true:
        if (path.slice(-1) !== '/') {
          path += '/';
        }
        break;
      case false:
        if (path.slice(-1) === '/') {
          path = path.slice(0, -1);
        }
    }
    return path;
  };

  function Route(pattern, controller, action, options) {
    var _ref;
    this.pattern = pattern;
    this.controller = controller;
    this.action = action;
    this.handler = __bind(this.handler, this);

    this.replaceParams = __bind(this.replaceParams, this);

    this.parseOptionalPortion = __bind(this.parseOptionalPortion, this);

    if (typeof this.pattern !== 'string') {
      throw new Error('Route: RegExps are not supported.\
        Use strings with :names and `constraints` option of route');
    }
    this.options = options ? _.extend({}, options) : {};
    if (this.options.name != null) {
      this.name = this.options.name;
    }
    if (this.name && this.name.indexOf('#') !== -1) {
      throw new Error('Route: "#" cannot be used in name');
    }
    if ((_ref = this.name) == null) {
      this.name = this.controller + '#' + this.action;
    }
    this.allParams = [];
    this.requiredParams = [];
    this.optionalParams = [];
    if (this.action in Controller.prototype) {
      throw new Error('Route: You should not use existing controller ' + 'properties as action names');
    }
    this.createRegExp();
    if (typeof Object.freeze === "function") {
      Object.freeze(this);
    }
  }

  Route.prototype.matches = function(criteria) {
    var invalidParamsCount, name, propertiesCount, property, _i, _len, _ref;
    if (typeof criteria === 'string') {
      return criteria === this.name;
    } else {
      propertiesCount = 0;
      _ref = ['name', 'action', 'controller'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        propertiesCount++;
        property = criteria[name];
        if (property && property !== this[name]) {
          return false;
        }
      }
      invalidParamsCount = propertiesCount === 1 && (name === 'action' || name === 'controller');
      return !invalidParamsCount;
    }
  };

  Route.prototype.reverse = function(params, query) {
    var name, queryString, raw, url, value, _i, _j, _len, _len1, _ref, _ref1;
    params = this.normalizeParams(params);
    if (params === false) {
      return false;
    }
    url = this.pattern;
    _ref = this.requiredParams;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      value = params[name];
      url = url.replace(RegExp("[:*]" + name, "g"), value);
    }
    _ref1 = this.optionalParams;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      name = _ref1[_j];
      if (value = params[name]) {
        url = url.replace(RegExp("[:*]" + name, "g"), value);
      }
    }
    raw = url.replace(optionalRegExp, function(match, portion) {
      if (portion.match(/[:*]/g)) {
        return "";
      } else {
        return portion;
      }
    });
    url = processTrailingSlash(raw, this.options.trailing);
    if (!query) {
      return url;
    }
    if (typeof query === 'object') {
      queryString = utils.queryParams.stringify(query);
      return url += queryString ? '?' + queryString : '';
    } else {
      return url += (query[0] === '?' ? '' : '?') + query;
    }
  };

  Route.prototype.normalizeParams = function(params) {
    var paramIndex, paramName, paramsHash, _i, _len, _ref;
    if (utils.isArray(params)) {
      if (params.length < this.requiredParams.length) {
        return false;
      }
      paramsHash = {};
      _ref = this.requiredParams;
      for (paramIndex = _i = 0, _len = _ref.length; _i < _len; paramIndex = ++_i) {
        paramName = _ref[paramIndex];
        paramsHash[paramName] = params[paramIndex];
      }
      if (!this.testConstraints(paramsHash)) {
        return false;
      }
      params = paramsHash;
    } else {
      if (params == null) {
        params = {};
      }
      if (!this.testParams(params)) {
        return false;
      }
    }
    return params;
  };

  Route.prototype.testConstraints = function(params) {
    var constraint, constraints, name;
    constraints = this.options.constraints;
    if (constraints) {
      for (name in constraints) {
        if (!__hasProp.call(constraints, name)) continue;
        constraint = constraints[name];
        if (!constraint.test(params[name])) {
          return false;
        }
      }
    }
    return true;
  };

  Route.prototype.testParams = function(params) {
    var paramName, _i, _len, _ref;
    _ref = this.requiredParams;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      paramName = _ref[_i];
      if (params[paramName] === void 0) {
        return false;
      }
    }
    return this.testConstraints(params);
  };

  Route.prototype.createRegExp = function() {
    var pattern,
      _this = this;
    pattern = this.pattern;
    pattern = pattern.replace(escapeRegExp, '\\$&');
    this.replaceParams(pattern, function(match, param) {
      return _this.allParams.push(param);
    });
    pattern = pattern.replace(optionalRegExp, this.parseOptionalPortion);
    pattern = this.replaceParams(pattern, function(match, param) {
      _this.requiredParams.push(param);
      return _this.paramCapturePattern(match);
    });
    return this.regExp = RegExp("^" + pattern + "(?=\\/?(?=\\?|$))");
  };

  Route.prototype.parseOptionalPortion = function(match, optionalPortion) {
    var portion,
      _this = this;
    portion = this.replaceParams(optionalPortion, function(match, param) {
      _this.optionalParams.push(param);
      return _this.paramCapturePattern(match);
    });
    return "(?:" + portion + ")?";
  };

  Route.prototype.replaceParams = function(s, callback) {
    return s.replace(paramRegExp, callback);
  };

  Route.prototype.paramCapturePattern = function(param) {
    if (param.charAt(0) === ':') {
      return '([^\/\?]+)';
    } else {
      return '(.*?)';
    }
  };

  Route.prototype.test = function(path) {
    var constraints, matched;
    matched = this.regExp.test(path);
    if (!matched) {
      return false;
    }
    constraints = this.options.constraints;
    if (constraints) {
      return this.testConstraints(this.extractParams(path));
    }
    return true;
  };

  Route.prototype.handler = function(pathParams, options) {
    var actionParams, params, path, query, route, _ref;
    options = options ? _.extend({}, options) : {};
    if (typeof pathParams === 'object') {
      query = utils.queryParams.stringify(options.query);
      params = pathParams;
      path = this.reverse(params);
    } else {
      _ref = pathParams.split('?'), path = _ref[0], query = _ref[1];
      if (!(query != null)) {
        query = '';
      } else {
        options.query = utils.queryParams.parse(query);
      }
      params = this.extractParams(path);
      path = processTrailingSlash(path, this.options.trailing);
    }
    actionParams = _.extend({}, params, this.options.params);
    route = {
      path: path,
      action: this.action,
      controller: this.controller,
      name: this.name,
      query: query
    };
    return this.publishEvent('router:match', route, actionParams, options);
  };

  Route.prototype.extractParams = function(path) {
    var index, match, matches, paramName, params, _i, _len, _ref;
    params = {};
    matches = this.regExp.exec(path);
    _ref = matches.slice(1);
    for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
      match = _ref[index];
      paramName = this.allParams.length ? this.allParams[index] : index;
      params[paramName] = match;
    }
    return params;
  };

  return Route;

})();

});;loader.register('chaplin/lib/router', function(e, r, module) {
'use strict';

var Backbone, EventBroker, History, Route, Router, mediator, utils, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

_ = loader('underscore');

Backbone = loader('backbone');

mediator = loader('chaplin/mediator');

EventBroker = loader('chaplin/lib/event_broker');

History = loader('chaplin/lib/history');

Route = loader('chaplin/lib/route');

utils = loader('chaplin/lib/utils');

module.exports = Router = (function() {

  Router.extend = Backbone.Model.extend;

  _.extend(Router.prototype, EventBroker);

  function Router(options) {
    var isWebFile;
    this.options = options != null ? options : {};
    this.match = __bind(this.match, this);

    isWebFile = window.location.protocol !== 'file:';
    _.defaults(this.options, {
      pushState: isWebFile,
      root: '/',
      trailing: false
    });
    this.removeRoot = new RegExp('^' + utils.escapeRegExp(this.options.root) + '(#)?');
    this.subscribeEvent('!router:route', this.oldEventError);
    this.subscribeEvent('!router:routeByName', this.oldEventError);
    this.subscribeEvent('!router:changeURL', this.oldURLEventError);
    this.subscribeEvent('dispatcher:dispatch', this.changeURL);
    mediator.setHandler('router:route', this.route, this);
    mediator.setHandler('router:reverse', this.reverse, this);
    this.createHistory();
  }

  Router.prototype.oldEventError = function() {
    throw new Error('!router:route and !router:routeByName events were removed.\
  Use `Chaplin.utils.redirectTo`');
  };

  Router.prototype.oldURLEventError = function() {
    throw new Error('!router:changeURL event was removed.');
  };

  Router.prototype.createHistory = function() {
    return Backbone.history = new History();
  };

  Router.prototype.startHistory = function() {
    return Backbone.history.start(this.options);
  };

  Router.prototype.stopHistory = function() {
    if (Backbone.History.started) {
      return Backbone.history.stop();
    }
  };

  Router.prototype.findHandler = function(predicate) {
    var handler, _i, _len, _ref;
    _ref = Backbone.history.handlers;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      handler = _ref[_i];
      if (predicate(handler)) {
        return handler;
      }
    }
  };

  Router.prototype.match = function(pattern, target, options) {
    var action, controller, route, _ref;
    if (options == null) {
      options = {};
    }
    if (arguments.length === 2 && typeof target === 'object') {
      options = target;
      controller = options.controller, action = options.action;
      if (!(controller && action)) {
        throw new Error('Router#match must receive either target or ' + 'options.controller & options.action');
      }
    } else {
      controller = options.controller, action = options.action;
      if (controller || action) {
        throw new Error('Router#match cannot use both target and ' + 'options.controller / options.action');
      }
      _ref = target.split('#'), controller = _ref[0], action = _ref[1];
    }
    _.defaults(options, {
      trailing: this.options.trailing
    });
    route = new Route(pattern, controller, action, options);
    Backbone.history.handlers.push({
      route: route,
      callback: route.handler
    });
    return route;
  };

  Router.prototype.route = function(pathDesc, params, options) {
    var handler, path;
    if (typeof pathDesc === 'object') {
      path = pathDesc.url;
      if (!params && pathDesc.params) {
        params = pathDesc.params;
      }
    }
    params = params ? utils.isArray(params) ? params.slice() : _.extend({}, params) : {};
    if (path != null) {
      path = path.replace(this.removeRoot, '');
      handler = this.findHandler(function(handler) {
        return handler.route.test(path);
      });
      options = params;
      params = null;
    } else {
      options = options ? _.extend({}, options) : {};
      handler = this.findHandler(function(handler) {
        if (handler.route.matches(pathDesc)) {
          params = handler.route.normalizeParams(params);
          if (params) {
            return true;
          }
        }
        return false;
      });
    }
    if (handler) {
      _.defaults(options, {
        changeURL: true
      });
      handler.callback(path || params, options);
      return true;
    } else {
      throw new Error('Router#route: request was not routed');
    }
  };

  Router.prototype.reverse = function(criteria, params, query) {
    var handler, handlers, reversed, root, url, _i, _len;
    root = this.options.root;
    if ((params != null) && typeof params !== 'object') {
      throw new TypeError('Router#reverse: params must be an array or an ' + 'object');
    }
    handlers = Backbone.history.handlers;
    for (_i = 0, _len = handlers.length; _i < _len; _i++) {
      handler = handlers[_i];
      if (!(handler.route.matches(criteria))) {
        continue;
      }
      reversed = handler.route.reverse(params, query);
      if (reversed !== false) {
        url = root ? root + reversed : reversed;
        return url;
      }
    }
    throw new Error('Router#reverse: invalid route specified');
  };

  Router.prototype.changeURL = function(controller, params, route, options) {
    var navigateOptions, url;
    if (!((route.path != null) && options.changeURL)) {
      return;
    }
    url = route.path + (route.query ? "?" + route.query : "");
    navigateOptions = {
      trigger: options.trigger === true,
      replace: options.replace === true
    };
    return Backbone.history.navigate(url, navigateOptions);
  };

  Router.prototype.disposed = false;

  Router.prototype.dispose = function() {
    if (this.disposed) {
      return;
    }
    this.stopHistory();
    delete Backbone.history;
    this.unsubscribeAllEvents();
    mediator.removeHandlers(this);
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Router;

})();

});;loader.register('chaplin/lib/history', function(e, r, module) {
'use strict';

var Backbone, History, isExplorer, rootStripper, routeStripper, trailingSlash, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = loader('underscore');

Backbone = loader('backbone');

routeStripper = /^[#\/]|\s+$/g;

rootStripper = /^\/+|\/+$/g;

isExplorer = /msie [\w.]+/;

trailingSlash = /\/$/;

History = (function(_super) {

  __extends(History, _super);

  function History() {
    return History.__super__.constructor.apply(this, arguments);
  }

  History.prototype.getFragment = function(fragment, forcePushState) {
    var root;
    if (!(fragment != null)) {
      if (this._hasPushState || !this._wantsHashChange || forcePushState) {
        fragment = this.location.pathname + this.location.search;
        root = this.root.replace(trailingSlash, '');
        if (!fragment.indexOf(root)) {
          fragment = fragment.substr(root.length);
        }
      } else {
        fragment = this.getHash();
      }
    }
    return fragment.replace(routeStripper, '');
  };

  History.prototype.start = function(options) {
    var atRoot, fragment, loc;
    if (Backbone.History.started) {
      throw new Error('Backbone.history has already been started');
    }
    Backbone.History.started = true;
    this.options = _.extend({}, {
      root: '/'
    }, this.options, options);
    this.root = this.options.root;
    this._wantsHashChange = this.options.hashChange !== false;
    this._wantsPushState = Boolean(this.options.pushState);
    this._hasPushState = Boolean(this.options.pushState && this.history && this.history.pushState);
    fragment = this.getFragment();
    this.root = ('/' + this.root + '/').replace(rootStripper, '/');
    if (this._hasPushState) {
      Backbone.$(window).on('popstate', this.checkUrl);
    } else if (this._wantsHashChange && 'onhashchange' in window) {
      Backbone.$(window).on('hashchange', this.checkUrl);
    } else if (this._wantsHashChange) {
      this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
    }
    this.fragment = fragment;
    loc = this.location;
    atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;
    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
      this.fragment = this.getFragment(null, true);
      this.location.replace(this.root + '#' + this.fragment);
      return true;
    } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
      this.fragment = this.getHash().replace(routeStripper, '');
      this.history.replaceState({}, document.title, this.root + this.fragment);
    }
    if (!this.options.silent) {
      return this.loadUrl();
    }
  };

  History.prototype.navigate = function(fragment, options) {
    var historyMethod, isSameFragment, url;
    if (fragment == null) {
      fragment = '';
    }
    if (!Backbone.History.started) {
      return false;
    }
    if (!options || options === true) {
      options = {
        trigger: options
      };
    }
    fragment = this.getFragment(fragment);
    url = this.root + fragment;
    if (this.fragment === fragment) {
      return false;
    }
    this.fragment = fragment;
    if (fragment.length === 0 && url !== '/') {
      url = url.slice(0, -1);
    }
    if (this._hasPushState) {
      historyMethod = options.replace ? 'replaceState' : 'pushState';
      this.history[historyMethod]({}, document.title, url);
    } else if (this._wantsHashChange) {
      this._updateHash(this.location, fragment, options.replace);
      isSameFragment = fragment !== this.getFragment(this.getHash(this.iframe));
      if ((this.iframe != null) && isSameFragment) {
        if (!options.replace) {
          this.iframe.document.open().close();
        }
        this._updateHash(this.iframe.location, fragment, options.replace);
      }
    } else {
      return this.location.assign(url);
    }
    if (options.trigger) {
      return this.loadUrl(fragment);
    }
  };

  return History;

})(Backbone.History);

module.exports = Backbone.$ ? History : Backbone.History;

});;loader.register('chaplin/lib/event_broker', function(e, r, module) {
'use strict';

var EventBroker, mediator,
  __slice = [].slice;

mediator = loader('chaplin/mediator');

EventBroker = {
  subscribeEvent: function(type, handler) {
    if (typeof type !== 'string') {
      throw new TypeError('EventBroker#subscribeEvent: ' + 'type argument must be a string');
    }
    if (typeof handler !== 'function') {
      throw new TypeError('EventBroker#subscribeEvent: ' + 'handler argument must be a function');
    }
    mediator.unsubscribe(type, handler, this);
    return mediator.subscribe(type, handler, this);
  },
  unsubscribeEvent: function(type, handler) {
    if (typeof type !== 'string') {
      throw new TypeError('EventBroker#unsubscribeEvent: ' + 'type argument must be a string');
    }
    if (typeof handler !== 'function') {
      throw new TypeError('EventBroker#unsubscribeEvent: ' + 'handler argument must be a function');
    }
    return mediator.unsubscribe(type, handler);
  },
  unsubscribeAllEvents: function() {
    return mediator.unsubscribe(null, null, this);
  },
  publishEvent: function() {
    var args, type;
    type = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (typeof type !== 'string') {
      throw new TypeError('EventBroker#publishEvent: ' + 'type argument must be a string');
    }
    return mediator.publish.apply(mediator, [type].concat(__slice.call(args)));
  }
};

if (typeof Object.freeze === "function") {
  Object.freeze(EventBroker);
}

module.exports = EventBroker;

});;loader.register('chaplin/lib/support', function(e, r, module) {
'use strict';

var support;

support = {
  propertyDescriptors: (function() {
    var o;
    if (!(typeof Object.defineProperty === 'function' && typeof Object.defineProperties === 'function')) {
      return false;
    }
    try {
      o = {};
      Object.defineProperty(o, 'foo', {
        value: 'bar'
      });
      return o.foo === 'bar';
    } catch (error) {
      return false;
    }
  })()
};

module.exports = support;

});;loader.register('chaplin/lib/composition', function(e, r, module) {
'use strict';

var Backbone, Composition, EventBroker, has, _,
  __hasProp = {}.hasOwnProperty;

_ = loader('underscore');

Backbone = loader('backbone');

EventBroker = loader('chaplin/lib/event_broker');

has = Object.prototype.hasOwnProperty;

module.exports = Composition = (function() {

  Composition.extend = Backbone.Model.extend;

  _.extend(Composition.prototype, Backbone.Events);

  _.extend(Composition.prototype, EventBroker);

  Composition.prototype.item = null;

  Composition.prototype.options = null;

  Composition.prototype._stale = false;

  function Composition(options) {
    if (options != null) {
      this.options = _.extend({}, options);
    }
    this.item = this;
    this.initialize(this.options);
  }

  Composition.prototype.initialize = function() {};

  Composition.prototype.compose = function() {};

  Composition.prototype.check = function(options) {
    return _.isEqual(this.options, options);
  };

  Composition.prototype.stale = function(value) {
    var item, name;
    if (value == null) {
      return this._stale;
    }
    this._stale = value;
    for (name in this) {
      item = this[name];
      if (item && item !== this && typeof item === 'object' && has.call(item, 'stale')) {
        item.stale = value;
      }
    }
  };

  Composition.prototype.disposed = false;

  Composition.prototype.dispose = function() {
    var obj, prop, properties, _i, _len;
    if (this.disposed) {
      return;
    }
    for (prop in this) {
      if (!__hasProp.call(this, prop)) continue;
      obj = this[prop];
      if (obj && typeof obj.dispose === 'function') {
        if (obj !== this) {
          obj.dispose();
          delete this[prop];
        }
      }
    }
    this.unsubscribeAllEvents();
    this.stopListening();
    properties = ['redirected'];
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      prop = properties[_i];
      delete this[prop];
    }
    this.disposed = true;
    return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
  };

  return Composition;

})();

});;loader.register('chaplin/lib/sync_machine', function(e, r, module) {
'use strict';

var STATE_CHANGE, SYNCED, SYNCING, SyncMachine, UNSYNCED, event, _fn, _i, _len, _ref;

UNSYNCED = 'unsynced';

SYNCING = 'syncing';

SYNCED = 'synced';

STATE_CHANGE = 'syncStateChange';

SyncMachine = {
  _syncState: UNSYNCED,
  _previousSyncState: null,
  syncState: function() {
    return this._syncState;
  },
  isUnsynced: function() {
    return this._syncState === UNSYNCED;
  },
  isSynced: function() {
    return this._syncState === SYNCED;
  },
  isSyncing: function() {
    return this._syncState === SYNCING;
  },
  unsync: function() {
    var _ref;
    if ((_ref = this._syncState) === SYNCING || _ref === SYNCED) {
      this._previousSync = this._syncState;
      this._syncState = UNSYNCED;
      this.trigger(this._syncState, this, this._syncState);
      this.trigger(STATE_CHANGE, this, this._syncState);
    }
  },
  beginSync: function() {
    var _ref;
    if ((_ref = this._syncState) === UNSYNCED || _ref === SYNCED) {
      this._previousSync = this._syncState;
      this._syncState = SYNCING;
      this.trigger(this._syncState, this, this._syncState);
      this.trigger(STATE_CHANGE, this, this._syncState);
    }
  },
  finishSync: function() {
    if (this._syncState === SYNCING) {
      this._previousSync = this._syncState;
      this._syncState = SYNCED;
      this.trigger(this._syncState, this, this._syncState);
      this.trigger(STATE_CHANGE, this, this._syncState);
    }
  },
  abortSync: function() {
    if (this._syncState === SYNCING) {
      this._syncState = this._previousSync;
      this._previousSync = this._syncState;
      this.trigger(this._syncState, this, this._syncState);
      this.trigger(STATE_CHANGE, this, this._syncState);
    }
  }
};

_ref = [UNSYNCED, SYNCING, SYNCED, STATE_CHANGE];
_fn = function(event) {
  return SyncMachine[event] = function(callback, context) {
    if (context == null) {
      context = this;
    }
    this.on(event, callback, context);
    if (this._syncState === event) {
      return callback.call(context);
    }
  };
};
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  event = _ref[_i];
  _fn(event);
}

if (typeof Object.freeze === "function") {
  Object.freeze(SyncMachine);
}

module.exports = SyncMachine;

});;loader.register('chaplin/lib/utils', function(e, r, module) {
'use strict';

var support, utils, _,
  __slice = [].slice,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  __hasProp = {}.hasOwnProperty;

_ = loader('underscore');

support = loader('chaplin/lib/support');

utils = {
  beget: (function() {
    var ctor;
    if (typeof Object.create === 'function') {
      return Object.create;
    } else {
      ctor = function() {};
      return function(obj) {
        ctor.prototype = obj;
        return new ctor;
      };
    }
  })(),
  indexOf: (function() {
    if (Array.prototype.indexOf) {
      return function(list, index) {
        return list.indexOf(index);
      };
    } else if (_.indexOf) {
      return _.indexOf;
    }
  })(),
  isArray: Array.isArray || _.isArray,
  serialize: function(data) {
    if (typeof data.serialize === 'function') {
      return data.serialize();
    } else if (typeof data.toJSON === 'function') {
      return data.toJSON();
    } else {
      throw new TypeError('utils.serialize: Unknown data was passed');
    }
  },
  readonly: (function() {
    var readonlyDescriptor;
    if (support.propertyDescriptors) {
      readonlyDescriptor = {
        writable: false,
        enumerable: true,
        configurable: false
      };
      return function() {
        var obj, prop, properties, _i, _len;
        obj = arguments[0], properties = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        for (_i = 0, _len = properties.length; _i < _len; _i++) {
          prop = properties[_i];
          readonlyDescriptor.value = obj[prop];
          Object.defineProperty(obj, prop, readonlyDescriptor);
        }
        return true;
      };
    } else {
      return function() {
        return false;
      };
    }
  })(),
  getPrototypeChain: function(object) {
    var chain, _ref, _ref1, _ref2;
    chain = [object.constructor.prototype];
    while (object = (_ref = (_ref1 = object.constructor) != null ? _ref1.__super__ : void 0) != null ? _ref : (_ref2 = object.constructor) != null ? _ref2.superclass : void 0) {
      chain.push(object);
    }
    return chain.reverse();
  },
  getAllPropertyVersions: function(object, property) {
    var proto, result, value, _i, _len, _ref;
    result = [];
    _ref = utils.getPrototypeChain(object);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      proto = _ref[_i];
      value = proto[property];
      if (value && __indexOf.call(result, value) < 0) {
        result.push(value);
      }
    }
    return result;
  },
  upcase: function(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  },
  escapeRegExp: function(str) {
    return String(str || '').replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  },
  modifierKeyPressed: function(event) {
    return event.shiftKey || event.altKey || event.ctrlKey || event.metaKey;
  },
  reverse: function(criteria, params, query) {
    return loader('chaplin/mediator').execute('router:reverse', criteria, params, query);
  },
  redirectTo: function(pathDesc, params, options) {
    return loader('chaplin/mediator').execute('router:route', pathDesc, params, options);
  },
  queryParams: {
    stringify: function(queryParams) {
      var arrParam, encodedKey, key, query, stringifyKeyValuePair, value, _i, _len;
      query = '';
      stringifyKeyValuePair = function(encodedKey, value) {
        if (value != null) {
          return '&' + encodedKey + '=' + encodeURIComponent(value);
        } else {
          return '';
        }
      };
      for (key in queryParams) {
        if (!__hasProp.call(queryParams, key)) continue;
        value = queryParams[key];
        encodedKey = encodeURIComponent(key);
        if (utils.isArray(value)) {
          for (_i = 0, _len = value.length; _i < _len; _i++) {
            arrParam = value[_i];
            query += stringifyKeyValuePair(encodedKey, arrParam);
          }
        } else {
          query += stringifyKeyValuePair(encodedKey, value);
        }
      }
      return query && query.substring(1);
    },
    parse: function(queryString) {
      var current, field, pair, pairs, params, value, _i, _len, _ref;
      params = {};
      if (!queryString) {
        return params;
      }
      pairs = queryString.split('&');
      for (_i = 0, _len = pairs.length; _i < _len; _i++) {
        pair = pairs[_i];
        if (!pair.length) {
          continue;
        }
        _ref = pair.split('='), field = _ref[0], value = _ref[1];
        if (!field.length) {
          continue;
        }
        field = decodeURIComponent(field);
        value = decodeURIComponent(value);
        current = params[field];
        if (current) {
          if (current.push) {
            current.push(value);
          } else {
            params[field] = [current, value];
          }
        } else {
          params[field] = value;
        }
      }
      return params;
    }
  }
};

if (typeof Object.seal === "function") {
  Object.seal(utils);
}

module.exports = utils;

});;loader.register('chaplin', function(e, r, module) {

module.exports = {
  Application: loader('chaplin/application'),
  mediator: loader('chaplin/mediator'),
  Dispatcher: loader('chaplin/dispatcher'),
  Controller: loader('chaplin/controllers/controller'),
  Composer: loader('chaplin/composer'),
  Composition: loader('chaplin/lib/composition'),
  Collection: loader('chaplin/models/collection'),
  Model: loader('chaplin/models/model'),
  Layout: loader('chaplin/views/layout'),
  View: loader('chaplin/views/view'),
  CollectionView: loader('chaplin/views/collection_view'),
  Route: loader('chaplin/lib/route'),
  Router: loader('chaplin/lib/router'),
  EventBroker: loader('chaplin/lib/event_broker'),
  support: loader('chaplin/lib/support'),
  SyncMachine: loader('chaplin/lib/sync_machine'),
  utils: loader('chaplin/lib/utils')
};

});
var regDeps = function(Backbone, _) {
  loader.register('backbone', function(exports, require, module) {
    module.exports = Backbone;
  });
  loader.register('underscore', function(exports, require, module) {
    module.exports = _;
  });
};

if (typeof define === 'function' && define.amd) {
  define(['backbone', 'underscore'], function(Backbone, _) {
    regDeps(Backbone, _);
    return loader('chaplin');
  });
} else if (typeof module === 'object' && module && module.exports) {
  regDeps(require('backbone'), require('underscore'));
  module.exports = loader('chaplin');
} else if (typeof require === 'function') {
  regDeps(window.Backbone, window._ || window.Backbone.utils);
  window.Chaplin = loader('chaplin');
} else {
  throw new Error('Chaplin requires Common.js or AMD modules');
}

})();
},{"backbone":"5kFNoY","underscore":58}],58:[function(require,module,exports){
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.5.2';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? void 0 : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed > result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array, using the modern version of the 
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from an array.
  // If **n** is not specified, returns a single random element from the array.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (arguments.length < 2 || guard) {
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, value, context) {
      var result = {};
      var iterator = value == null ? _.identity : lookupIterator(value);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n == null) || guard ? array[0] : slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) {
      return array[array.length - 1];
    } else {
      return slice.call(array, Math.max(array.length - n, 0));
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, "length").concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error("bindAll must be passed function names");
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function() {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function() {
        var last = (new Date()) - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);

},{}],59:[function(require,module,exports){
(function (global){

var rng;

if (global.crypto && crypto.getRandomValues) {
  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
  // Moderately fast, high quality
  var _rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  _rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}

module.exports = rng;


}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],60:[function(require,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var _rng = require('./rng');

// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  var i = (buf && offset) || 0, ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
    if (ii < 16) { // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  // Zero out remaining bytes if string was short
  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0, bth = _byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
function v4(options, buf, offset) {
  // Deprecated - 'format' argument, as supported in v1.2
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

// Export public API
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

module.exports = uuid;

},{"./rng":59}]},{},[1,"PL6FY2","JJmJVO","d+nCH3","PEtp5o",11,12,13,14,15,16,17,18,19,20,41,42,43,44,45,46,47,48,49,50,51,52,53,54,2,"9RsPKC","j00Jnv","s/yNEm","rN5+ME","baIBhY","4XqoQJ","cL1PB2","IR2xWU","TNw6UK","MtWnG6"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvbm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC9hcHBsaWNhdGlvbi5jb2ZmZWUiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC9hc3NldHMvaW5kZXguaGJzIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvY29udHJvbGxlcnMvYmFzZS9jb250cm9sbGVyLmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL2NvbnRyb2xsZXJzL2hvbWUuY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvY29udHJvbGxlcnMvbW9kdWxlLmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL2NvbnRyb2xsZXJzL3RoaW5nLmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL2luaXRpYWxpemUuY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvbGliL2VkaXRvci5jb2ZmZWUiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC9saWIvdXRpbHMuY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvbGliL3ZpZXctaGVscGVyLmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL21lZGlhdG9yLmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL21vZGVscy9iYXNlL2NvbGxlY3Rpb24uY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvbW9kZWxzL2Jhc2UvbW9kZWwuY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvbW9kZWxzL21vZHVsZS5jb2ZmZWUiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC9tb2RlbHMvdGhpbmcuY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvcm91dGVzLmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL3RlbXBsYXRlcy9mb290ZXIuaGJzIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvdGVtcGxhdGVzL2hlYWRlci5oYnMiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC90ZW1wbGF0ZXMvaG9tZS5oYnMiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC90ZW1wbGF0ZXMvanVtYm90cm9uLmhicyIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL3RlbXBsYXRlcy9tb2R1bGUvbGlzdC1pdGVtLmhicyIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL3RlbXBsYXRlcy9tb2R1bGUvc2hvdy5oYnMiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC90ZW1wbGF0ZXMvc2l0ZS5oYnMiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC90ZW1wbGF0ZXMvdGhpbmcvZWRpdC1pdGVtLmhicyIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL3RlbXBsYXRlcy90aGluZy9saXN0LWl0ZW0uaGJzIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvdGVtcGxhdGVzL3RoaW5nL3Nob3cuaGJzIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvdmlld3MvYmFzZS9jb2xsZWN0aW9uLXZpZXcuY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvdmlld3MvYmFzZS92aWV3LmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL3ZpZXdzL2Zvb3Rlci5jb2ZmZWUiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC92aWV3cy9oZWFkZXIuY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvdmlld3MvaG9tZS9ob21lLXBhZ2UuY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvdmlld3MvbW9kdWxlL2luZGV4LmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL3ZpZXdzL21vZHVsZS9saXN0LWl0ZW0uY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvdmlld3MvbW9kdWxlL3Nob3cuY29mZmVlIiwiL2NhY2hlL2NvZGUvcGxheS95by9jaGFwbGluLWJvb3RzdHJhcC9hcHAvdmlld3Mvc2l0ZS12aWV3LmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL3ZpZXdzL3RoaW5nL2VkaXQtaXRlbS5jb2ZmZWUiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC92aWV3cy90aGluZy9pbmRleC1lZGl0LmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL3ZpZXdzL3RoaW5nL2luZGV4LmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYXBwL3ZpZXdzL3RoaW5nL2xpc3QtaXRlbS5jb2ZmZWUiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2FwcC92aWV3cy90aGluZy9zaG93LmNvZmZlZSIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvYm93ZXJfY29tcG9uZW50cy9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuanMiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL2RhdGEuanNvbiIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvbm9kZV9tb2R1bGVzL2NoYXBsaW4vY2hhcGxpbi5qcyIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvbm9kZV9tb2R1bGVzL3VuZGVyc2NvcmUvdW5kZXJzY29yZS5qcyIsIi9jYWNoZS9jb2RlL3BsYXkveW8vY2hhcGxpbi1ib290c3RyYXAvbm9kZV9tb2R1bGVzL3V1aWQvcm5nLWJyb3dzZXIuanMiLCIvY2FjaGUvY29kZS9wbGF5L3lvL2NoYXBsaW4tYm9vdHN0cmFwL25vZGVfbW9kdWxlcy91dWlkL3V1aWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBLGlDQUFBO0VBQUE7aVNBQUE7O0FBQUEsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsQ0FBQSxHQUFJLE9BQUEsQ0FBUSxRQUFSLENBQXBCLENBQUE7O0FBQUEsT0FHQSxDQUFRLGlEQUFSLENBSEEsQ0FBQTs7QUFBQSxRQUtBLEdBQWEsT0FBQSxDQUFRLFVBQVIsQ0FMYixDQUFBOztBQUFBLFFBTVEsQ0FBQyxDQUFULEdBQWEsQ0FOYixDQUFBOztBQUFBLE9BT0EsR0FBYSxPQUFBLENBQVEsU0FBUixDQVBiLENBQUE7O0FBQUEs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QUFBQSxFQUdBLEtBQUEsQ0FBTSxRQUFOLEVBQWdCLGFBQWhCLENBSEEsQ0FBQTtTQUlBLEtBQUEsQ0FBTSxZQUFOLEVBQW9CLFlBQXBCLEVBTmU7QUFBQSxDQUFqQixDQUFBOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcmdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzV2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgQXNzaWduZWQgdG8gd2luZG93IHRvIG1ha2UgQm9vdHN0cmFwIGhhcHB5XG53aW5kb3cualF1ZXJ5ID0gJCA9IHJlcXVpcmUgJ2pxdWVyeSdcblxuIyBqUXVlcnkgcGx1Z2luc1xucmVxdWlyZSAnLi4vYm93ZXJfY29tcG9uZW50cy9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAnXG5cbkJhY2tib25lICAgPSByZXF1aXJlICdiYWNrYm9uZSdcbkJhY2tib25lLiQgPSAkXG5DaGFwbGluICAgID0gcmVxdWlyZSAnY2hhcGxpbidcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIENoYXBsaW4uQXBwbGljYXRpb25cbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjwhZG9jdHlwZSBodG1sPlxcbjwhLS1baWYgSUUgOF0+ICAgIDxodG1sIGNsYXNzPVxcXCJuby1qcyBsdC1pZTlcXFwiIGxhbmc9XFxcImVuXFxcIj4gPCFbZW5kaWZdLS0+XFxuPCEtLVtpZiBndCBJRSA4XT48IS0tPiA8aHRtbCBjbGFzcz1cXFwibm8tanNcXFwiIGxhbmc9XFxcImVuXFxcIj4gPCEtLTwhW2VuZGlmXS0tPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cXFwidXRmLThcXFwiPlxcbiAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlLGNocm9tZT0xXFxcIj5cXG4gIDx0aXRsZT5DaGFwbGluIEdlbmVyYXRvcjwvdGl0bGU+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoXFxcIj5cXG4gIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiL2Nzcy9hcHAuY3NzXFxcIj5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8c2NyaXB0IHNyYz1cXFwiL2pzL3ZlbmRvci5qc1xcXCI+PC9zY3JpcHQ+XFxuICA8c2NyaXB0IHNyYz1cXFwiL2pzL2FwcC5qc1xcXCI+PC9zY3JpcHQ+XFxuPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbiAgfSk7XG4iLCJDaGFwbGluID0gcmVxdWlyZSAnY2hhcGxpbidcblNpdGVWaWV3ID0gcmVxdWlyZSAnLi4vLi4vdmlld3Mvc2l0ZS12aWV3J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBDaGFwbGluLkNvbnRyb2xsZXJcblxuICBiZWZvcmVBY3Rpb246IC0+XG4gICAgQHJldXNlICdzaXRlJywgU2l0ZVZpZXdcbiIsIkNvbnRyb2xsZXIgICAgPSByZXF1aXJlICcuL2Jhc2UvY29udHJvbGxlcidcbkZvb3RlclZpZXcgICAgPSByZXF1aXJlICcuLi92aWV3cy9mb290ZXInXG5IZWFkZXJWaWV3ICAgID0gcmVxdWlyZSAnLi4vdmlld3MvaGVhZGVyJ1xuSG9tZVBhZ2VWaWV3ICA9IHJlcXVpcmUgJy4uL3ZpZXdzL2hvbWUvaG9tZS1wYWdlJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEhvbWVDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuXG4gIGJlZm9yZUFjdGlvbjogLT5cbiAgICBzdXBlclxuXG4gICAgQHJldXNlICdoZWFkZXInLCBIZWFkZXJWaWV3LCByZWdpb246ICdoZWFkZXInXG4gICAgQHJldXNlICdmb290ZXInLCBGb290ZXJWaWV3LCByZWdpb246ICdmb290ZXInXG5cbiAgaW5kZXg6IC0+XG4gICAgQHZpZXcgPSBuZXcgSG9tZVBhZ2VWaWV3IHJlZ2lvbjogJ21haW4nXG5cbiAgICBAXG4iLCJDb250cm9sbGVyICAgID0gcmVxdWlyZSAnLi9iYXNlL2NvbnRyb2xsZXInXG5Db2xsZWN0aW9uICAgID0gcmVxdWlyZSAnLi4vbW9kZWxzL2Jhc2UvY29sbGVjdGlvbidcbk1vZHVsZSAgICAgICAgID0gcmVxdWlyZSAnLi4vbW9kZWxzL21vZHVsZSdcbkZvb3RlclZpZXcgICAgPSByZXF1aXJlICcuLi92aWV3cy9mb290ZXInXG5IZWFkZXJWaWV3ICAgID0gcmVxdWlyZSAnLi4vdmlld3MvaGVhZGVyJ1xuTW9kdWxlVmlldyAgPSByZXF1aXJlICcuLi92aWV3cy9tb2R1bGUvc2hvdydcbk1vZHVsZXNMaXN0ICA9IHJlcXVpcmUgJy4uL3ZpZXdzL21vZHVsZS9pbmRleCdcblRoaW5nc0xpc3QgID0gcmVxdWlyZSAnLi4vdmlld3MvdGhpbmcvaW5kZXgnXG5kYXRhID0gcmVxdWlyZSAnLi4vLi4vZGF0YS5qc29uJ1xuXyA9IHJlcXVpcmUgJ3VuZGVyc2NvcmUnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTW9kdWxlQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXJcblxuXG4gIGJlZm9yZUFjdGlvbjogLT5cbiAgICBzdXBlclxuXG4gICAgQHJldXNlICdoZWFkZXInLCBIZWFkZXJWaWV3LCByZWdpb246ICdoZWFkZXInXG4gICAgQHJldXNlICdmb290ZXInLCBGb290ZXJWaWV3LCByZWdpb246ICdmb290ZXInXG5cbiAgaW5kZXg6IC0+XG4gICAgdGhpbmdzID0gZGF0YVsnQGdyYXBoJ10uZmlsdGVyIChvYmopIC0+IG9iai50eXBlID09ICdNb2R1bGUnXG4gICAgQHRoaW5ncyA9IG5ldyBDb2xsZWN0aW9uIHRoaW5ncywgbW9kZWw6IE1vZHVsZVxuICAgIEB2aWV3ID0gbmV3IE1vZHVsZXNMaXN0IGNvbGxlY3Rpb246IEB0aGluZ3MsIHJlZ2lvbjogJ21haW4nXG5cbiAgICBAXG5cbiAgc2hvdzogKHBhcmFtcykgLT5cbiAgICBAdGhpbmcgPSBuZXcgTW9kdWxlIF8uZmluZChkYXRhWydAZ3JhcGgnXSwob2JqKSAtPiBvYmouaWQgPT0gcGFyYW1zLmlkKVxuICAgIEB2aWV3ID0gbmV3IE1vZHVsZVZpZXcgbW9kZWw6IEB0aGluZywgcmVnaW9uOiAnbWFpbidcbiAgICBAdGhpbmcuaW5pdENvbGxlY3Rpb25zKClcbiAgICBAdmlldy5zdWJ2aWV3ICdpbnB1dCcsICBuZXcgVGhpbmdzTGlzdCBjb2xsZWN0aW9uOiBAdGhpbmcuaW5wdXQsIHJlZ2lvbjogJ2xlZnQnXG4gICAgQHZpZXcuc3VidmlldyAnb3V0cHV0JywgIG5ldyBUaGluZ3NMaXN0IGNvbGxlY3Rpb246IEB0aGluZy5vdXRwdXQsIHJlZ2lvbjogJ3JpZ2h0J1xuXG4gICAgQFxuIiwiQ29udHJvbGxlciAgICA9IHJlcXVpcmUgJy4vYmFzZS9jb250cm9sbGVyJ1xuQ29sbGVjdGlvbiAgICA9IHJlcXVpcmUgJy4uL21vZGVscy9iYXNlL2NvbGxlY3Rpb24nXG5UaGluZyAgICAgICAgID0gcmVxdWlyZSAnLi4vbW9kZWxzL3RoaW5nJ1xuRm9vdGVyVmlldyAgICA9IHJlcXVpcmUgJy4uL3ZpZXdzL2Zvb3RlcidcbkhlYWRlclZpZXcgICAgPSByZXF1aXJlICcuLi92aWV3cy9oZWFkZXInXG5UaGluZ1ZpZXcgID0gcmVxdWlyZSAnLi4vdmlld3MvdGhpbmcvc2hvdydcblRoaW5nc0xpc3QgID0gcmVxdWlyZSAnLi4vdmlld3MvdGhpbmcvaW5kZXgnXG5Nb2R1bGVzTGlzdCAgPSByZXF1aXJlICcuLi92aWV3cy9tb2R1bGUvaW5kZXgnXG5kYXRhID0gcmVxdWlyZSAnLi4vLi4vZGF0YS5qc29uJ1xuXyA9IHJlcXVpcmUgJ3VuZGVyc2NvcmUnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVGhpbmdDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuXG4gIGJlZm9yZUFjdGlvbjogLT5cbiAgICBzdXBlclxuXG4gICAgQHJldXNlICdoZWFkZXInLCBIZWFkZXJWaWV3LCByZWdpb246ICdoZWFkZXInXG4gICAgQHJldXNlICdmb290ZXInLCBGb290ZXJWaWV3LCByZWdpb246ICdmb290ZXInXG5cbiAgaW5kZXg6IC0+XG4gICAgdGhpbmdzID0gZGF0YVsnQGdyYXBoJ10uZmlsdGVyIChvYmopIC0+IG9iai50eXBlID09ICdUaGluZydcbiAgICBAdGhpbmdzID0gbmV3IENvbGxlY3Rpb24gdGhpbmdzLCBtb2RlbDogVGhpbmdcbiAgICBAdmlldyA9IG5ldyBUaGluZ3NMaXN0IGNvbGxlY3Rpb246IEB0aGluZ3MsIHJlZ2lvbjogJ21haW4nXG5cbiAgICBAXG5cbiAgc2hvdzogKHBhcmFtcykgLT5cbiAgICBAdGhpbmcgPSBuZXcgVGhpbmcgXy5maW5kKGRhdGFbJ0BncmFwaCddLChvYmopIC0+IG9iai5pZCA9PSBwYXJhbXMuaWQpXG4gICAgQHZpZXcgPSBuZXcgVGhpbmdWaWV3IG1vZGVsOiBAdGhpbmcsIHJlZ2lvbjogJ21haW4nXG4gICAgQHRoaW5nLmluaXRDb2xsZWN0aW9ucygpXG4gICAgQHZpZXcuc3VidmlldyAnaW5wdXRPZicsICBuZXcgTW9kdWxlc0xpc3QgY29sbGVjdGlvbjogQHRoaW5nLmlucHV0T2YsIHJlZ2lvbjogJ3JpZ2h0J1xuICAgIEB2aWV3LnN1YnZpZXcgJ291dHB1dE9mJywgIG5ldyBNb2R1bGVzTGlzdCBjb2xsZWN0aW9uOiBAdGhpbmcub3V0cHV0T2YsIHJlZ2lvbjogJ2xlZnQnXG5cbiAgICBAXG4iLCIkICAgICAgICAgICA9IHJlcXVpcmUgJ2pxdWVyeSdcblxuQXBwbGljYXRpb24gPSByZXF1aXJlICcuL2FwcGxpY2F0aW9uJ1xucm91dGVzICAgICAgPSByZXF1aXJlICcuL3JvdXRlcydcblxuJCAtPlxuXG4gIG5ldyBBcHBsaWNhdGlvbiB7XG4gICAgdGl0bGU6ICdpcG90YWJsZXMnLFxuICAgIGNvbnRyb2xsZXJTdWZmaXg6ICcnLFxuICAgIHJvdXRlc1xuICB9XG4iLCIkID0gcmVxdWlyZSAnanF1ZXJ5J1xubW9kdWxlLmV4cG9ydHMgPVxuICBlZGl0OiAocHJvcGVydHksIHR5cGUpIC0+XG4gICAgdmFsID0gJCgnW3Byb3BlcnR5PVwiJyArIHByb3BlcnR5ICsgJ1wiXScpLmh0bWwoKVxuICAgICQoJ1twcm9wZXJ0eT1cIicgKyBwcm9wZXJ0eSArICdcIl0nKS5lbXB0eSgpXG4gICAgaWYgdHlwZSA9PSAnaW5wdXQnXG4gICAgICAkKCdbcHJvcGVydHk9XCInICsgcHJvcGVydHkgKyAnXCJdJykuYXBwZW5kICc8aW5wdXQgdHlwZT1cImlucHV0XCIgY2xhc3M9XCJlZGl0IGZvcm0tY29udHJvbFwiPidcbiAgICAgICQoJ1twcm9wZXJ0eT1cIicgKyBwcm9wZXJ0eSArICdcIl0gJyArIHR5cGUpLnZhbCh2YWwpXG4gICAgZWxzZSBpZih0eXBlID09ICd0ZXh0YXJlYScpXG4gICAgICAkKCdbcHJvcGVydHk9XCInICsgcHJvcGVydHkgKyAnXCJdJykuYXBwZW5kICc8dGV4dGFyZWEgY2xhc3M9XCJlZGl0IGZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT4nXG4gICAgICAkKCdbcHJvcGVydHk9XCInICsgcHJvcGVydHkgKyAnXCJdICcgKyB0eXBlKS52YWwodmFsKVxuICBzYXZlOiAocHJvcGVydHkpIC0+XG4gICAgJCgnW3Byb3BlcnR5PVwiJyArIHByb3BlcnR5ICsgJ1wiXScpLmh0bWwgJCgnW3Byb3BlcnR5PVwiJyArIHByb3BlcnR5ICsgJ1wiXSAuZWRpdCcpLnZhbCgpXG4iLCJDaGFwbGluID0gcmVxdWlyZSAnY2hhcGxpbidcbiMgQXBwbGljYXRpb24tc3BlY2lmaWMgdXRpbGl0aWVzXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4jIERlbGVnYXRlIHRvIENoYXBsaW7igJlzIHV0aWxzIG1vZHVsZS5cbnV0aWxzID0gQ2hhcGxpbi51dGlscy5iZWdldCBDaGFwbGluLnV0aWxzXG5cbiMgXyh1dGlscykuZXh0ZW5kXG4jICBzb21lTWV0aG9kOiAtPlxuXG4jIFByZXZlbnQgY3JlYXRpbmcgbmV3IHByb3BlcnRpZXMgYW5kIHN0dWZmLlxuT2JqZWN0LnNlYWw/IHV0aWxzXG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHNcbiIsIkNoYXBsaW4gICAgPSByZXF1aXJlICdjaGFwbGluJ1xuSGFuZGxlYmFycyA9IHJlcXVpcmUgJ2hic2Z5L3J1bnRpbWUnXG5cbiMgQXBwbGljYXRpb24tc3BlY2lmaWMgdmlldyBoZWxwZXJzXG4jIGh0dHA6Ly9oYW5kbGViYXJzanMuY29tLyNoZWxwZXJzXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnJlZ2lzdGVyID0gKG5hbWUsIGZuKSAtPlxuICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyIG5hbWUsIGZuXG5cbiMgTWFwIGhlbHBlcnNcbiMgLS0tLS0tLS0tLS1cblxuIyBNYWtlICd3aXRoJyBiZWhhdmUgYSBsaXR0bGUgbW9yZSBtdXN0YWNoZXkuXG5yZWdpc3RlciAnd2l0aCcsIChjb250ZXh0LCBvcHRpb25zKSAtPlxuICBpZiBub3QgY29udGV4dCBvciBIYW5kbGViYXJzLlV0aWxzLmlzRW1wdHkgY29udGV4dFxuICAgIG9wdGlvbnMuaW52ZXJzZSh0aGlzKVxuICBlbHNlXG4gICAgb3B0aW9ucy5mbihjb250ZXh0KVxuXG4jIEludmVyc2UgZm9yICd3aXRoJy5cbnJlZ2lzdGVyICd3aXRob3V0JywgKGNvbnRleHQsIG9wdGlvbnMpIC0+XG4gIGludmVyc2UgPSBvcHRpb25zLmludmVyc2VcbiAgb3B0aW9ucy5pbnZlcnNlID0gb3B0aW9ucy5mblxuICBvcHRpb25zLmZuID0gaW52ZXJzZVxuICBIYW5kbGViYXJzLmhlbHBlcnMud2l0aC5jYWxsKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpXG5cbiMgR2V0IENoYXBsaW4tZGVjbGFyZWQgbmFtZWQgcm91dGVzLiB7e3VybCBcImxpa2VzI3Nob3dcIiBcIjEwNVwifX1cbnJlZ2lzdGVyICd1cmwnLCAocm91dGVOYW1lLCBwYXJhbXMuLi4sIG9wdGlvbnMpIC0+XG4gIENoYXBsaW4udXRpbHMucmV2ZXJzZSByb3V0ZU5hbWUsIHBhcmFtc1xuIiwiQ2hhcGxpbiAgPSByZXF1aXJlICdjaGFwbGluJ1xubWVkaWF0b3IgPSBtb2R1bGUuZXhwb3J0cyA9IENoYXBsaW4ubWVkaWF0b3JcbiIsIkNoYXBsaW4gPSByZXF1aXJlICdjaGFwbGluJ1xuTW9kZWwgICA9IHJlcXVpcmUgJy4vbW9kZWwnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIENoYXBsaW4uQ29sbGVjdGlvblxuXG4gIG1vZGVsOiBNb2RlbFxuIiwiQ2hhcGxpbiA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5VVUlEID0gcmVxdWlyZSAndXVpZCdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBNb2RlbCBleHRlbmRzIENoYXBsaW4uTW9kZWxcbiAgaW5pdGlhbGl6ZTogKGF0dHIpIC0+XG4gICAgc3VwZXJcbiAgICB1bmxlc3MgYXR0ci5pZFxuICAgICAgQHNldCgnaWQnLCBVVUlELnY0KCkpXG4iLCJNb2RlbCA9IHJlcXVpcmUgJy4vYmFzZS9tb2RlbCdcbkNvbGxlY3Rpb24gPSByZXF1aXJlICcuL2Jhc2UvY29sbGVjdGlvbidcbmRhdGEgPSByZXF1aXJlICcuLi8uLi9kYXRhLmpzb24nXG5fID0gcmVxdWlyZSAndW5kZXJzY29yZSdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBNb2R1bGUgZXh0ZW5kcyBNb2RlbFxuXG4gIGluaXRDb2xsZWN0aW9uczogKCkgPT5cbiAgICBAaW5wdXQgPSBuZXcgQ29sbGVjdGlvbiBfLm1hcChAYXR0cmlidXRlcy5pbnB1dCwgKGlkKSAtPlxuICAgICAgXy5maW5kIGRhdGFbJ0BncmFwaCddLCAob2JqKSAtPiBvYmouaWQgPT0gaWQgKVxuICAgIEBvdXRwdXQgPSBuZXcgQ29sbGVjdGlvbiBfLm1hcChAYXR0cmlidXRlcy5vdXRwdXQsIChpZCkgLT5cbiAgICAgIF8uZmluZCBkYXRhWydAZ3JhcGgnXSwgKG9iaikgLT4gb2JqLmlkID09IGlkIClcblxuIiwiTW9kZWwgPSByZXF1aXJlICcuL2Jhc2UvbW9kZWwnXG5Db2xsZWN0aW9uID0gcmVxdWlyZSAnLi9iYXNlL2NvbGxlY3Rpb24nXG5kYXRhID0gcmVxdWlyZSAnLi4vLi4vZGF0YS5qc29uJ1xuXyA9IHJlcXVpcmUgJ3VuZGVyc2NvcmUnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVGhpbmcgZXh0ZW5kcyBNb2RlbFxuXG4gIGluaXRDb2xsZWN0aW9uczogKCkgLT5cbiAgICBAaW5wdXRPZiA9IG5ldyBDb2xsZWN0aW9uIF8ubWFwKEBhdHRyaWJ1dGVzLmlucHV0T2YsIChpZCkgLT5cbiAgICAgIF8uZmluZCBkYXRhWydAZ3JhcGgnXSwgKG9iaikgLT4gb2JqLmlkID09IGlkIClcbiAgICBAb3V0cHV0T2YgPSBuZXcgQ29sbGVjdGlvbiBfLm1hcChAYXR0cmlidXRlcy5vdXRwdXRPZiwgKGlkKSAtPlxuICAgICAgXy5maW5kIGRhdGFbJ0BncmFwaCddLCAob2JqKSAtPiBvYmouaWQgPT0gaWQgKVxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChtYXRjaCkgLT5cblxuICBtYXRjaCAnJywgJ2hvbWUjaW5kZXgnXG4gIG1hdGNoICdtb2R1bGVzJywgJ21vZHVsZSNpbmRleCdcbiAgbWF0Y2ggJ21vZHVsZXMvOmlkJywgJ21vZHVsZSNzaG93J1xuICBtYXRjaCAndGhpbmdzJywgJ3RoaW5nI2luZGV4J1xuICBtYXRjaCAndGhpbmdzLzppZCcsICd0aGluZyNzaG93J1xuIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnMudGVtcGxhdGUoZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIFxuXG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxuICAgIDxwPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9oYWNrZXJzNHBlYWNlL2lwb3RhYmxlc1xcXCI+Zm9yayBpcG90YWJsZXMgb24gR2l0aHViPC9hPjwvcD5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuICB9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcbiAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIubmF2YmFyLWNvbGxhcHNlXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgPC9idXR0b24+XFxuICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiBocmVmPVxcXCIjXFxcIj5JUE90YWJsZXM8L2E+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXFxcIj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJuYXZiYXItZm9ybSBuYXZiYXItcmlnaHRcXFwiPlxcbiAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+U2lnbiBpbjwvYnV0dG9uPlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblwiO1xuICB9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICBcblxuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgIDxoMj5Nb2R1bGVzPC9oMj5cXG4gICAgPHA+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvciBtYXVyaXMgY29uZGltZW50dW0gbmliaCwgdXQgZmVybWVudHVtIG1hc3NhIGp1c3RvIHNpdCBhbWV0IHJpc3VzLiBFdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hIG1vbGxpcyBldWlzbW9kLiBEb25lYyBzZWQgb2RpbyBkdWkuIDwvcD5cXG4gICAgPHA+PGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgaHJlZj1cXFwibW9kdWxlc1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIj5Nb2R1bGVzICZyYXF1bzs8L2E+PC9wPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+XFxuICAgIDxoMj5UaGluZ3M8L2gyPlxcbiAgICA8cD5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuIEV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmEgbW9sbGlzIGV1aXNtb2QuIERvbmVjIHNlZCBvZGlvIGR1aS4gPC9wPlxcbiAgICA8cD48YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBocmVmPVxcXCJ0aGluZ3NcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+VGhpbmdzICZyYXF1bzs8L2E+PC9wPlxcbiA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbiAgfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgXG5cblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxcbiAgPHA+VGhpcyBpcyBhIHRlbXBsYXRlIGZvciBhIHNpbXBsZSBtYXJrZXRpbmcgb3IgaW5mb3JtYXRpb25hbCB3ZWJzaXRlLiBJdCBpbmNsdWRlcyBhIGxhcmdlIGNhbGxvdXQgY2FsbGVkIGEganVtYm90cm9uIGFuZCB0aHJlZSBzdXBwb3J0aW5nIHBpZWNlcyBvZiBjb250ZW50LiBVc2UgaXQgYXMgYSBzdGFydGluZyBwb2ludCB0byBjcmVhdGUgc29tZXRoaW5nIG1vcmUgdW5pcXVlLjwvcD5cXG4gIDxwPjxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXFxcIiByb2xlPVxcXCJidXR0b25cXFwiPkxlYXJuIG1vcmUgJnJhcXVvOzwvYT48L3A+XFxuPC9kaXY+XFxuXCI7XG4gIH0pO1xuIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnMudGVtcGxhdGUoZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIHZhciBidWZmZXIgPSBcIlwiLCBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG5cblxuICBidWZmZXIgKz0gXCI8YSBocmVmPVxcXCIvbW9kdWxlcy9cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMuaWQpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAuaWQpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubmFtZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5uYW1lKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvYT5cXG5cIjtcbiAgcmV0dXJuIGJ1ZmZlcjtcbiAgfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgdmFyIGJ1ZmZlciA9IFwiXCIsIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcblxuXG4gIGJ1ZmZlciArPSBcIjxidXR0b24gaWQ9XFxcImVkaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPmVkaXQ8L2J1dHRvbj5cXG48YnV0dG9uIGlkPVxcXCJzYXZlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5zYXZlPC9idXR0b24+XFxuXFxuPGgxIHByb3BlcnR5PVxcXCJuYW1lXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubmFtZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5uYW1lKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvaDE+XFxuPHAgcHJvcGVydHk9XFxcImRlc2NyaXB0aW9uXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMuZGVzY3JpcHRpb24pIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAuZGVzY3JpcHRpb24pOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9wPlxcblxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICA8ZGl2IGlkPVxcXCJsZWZ0XFxcIiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPjwvZGl2PlxcbiAgPGRpdiBpZD1cXFwicHJvY2Vzc1xcXCIgcHJvcGVydHk9XFxcInByb2Nlc3NcXFwiIGNsYXNzPVxcXCJjb2wtbWQtNFxcXCI+XCI7XG4gIGlmIChoZWxwZXIgPSBoZWxwZXJzLnByb2Nlc3MpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAucHJvY2Vzcyk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCI8L2Rpdj5cXG4gIDxkaXYgaWQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPjwvZGl2PlxcbjxkaXY+XFxuXCI7XG4gIHJldHVybiBidWZmZXI7XG4gIH0pO1xuIiwiLy8gaGJzZnkgY29tcGlsZWQgSGFuZGxlYmFycyB0ZW1wbGF0ZVxudmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYnNmeS9ydW50aW1lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEhhbmRsZWJhcnMudGVtcGxhdGUoZnVuY3Rpb24gKEhhbmRsZWJhcnMsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB0aGlzLmNvbXBpbGVySW5mbyA9IFs0LCc+PSAxLjAuMCddO1xuaGVscGVycyA9IHRoaXMubWVyZ2UoaGVscGVycywgSGFuZGxlYmFycy5oZWxwZXJzKTsgZGF0YSA9IGRhdGEgfHwge307XG4gIFxuXG5cbiAgcmV0dXJuIFwiPGhlYWRlciBpZD1cXFwiaGVhZGVyXFxcIiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiPjwvaGVhZGVyPlxcblxcbjxkaXYgaWQ9XFxcIm91dGVyLXBhZ2UtY29udGFpbmVyXFxcIj48L2Rpdj5cXG5cXG48Zm9vdGVyIGlkPVxcXCJmb290ZXJcXFwiPjwvZm9vdGVyPlxcblwiO1xuICB9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICB2YXIgYnVmZmVyID0gXCJcIiwgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cbiAgYnVmZmVyICs9IFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJlZGl0IHJlbW92ZSBidG4gYnRuLWRhbmdlciBidG4teHNcXFwiPi08L2J1dHRvbj5cXG48YSBocmVmPVxcXCIvdGhpbmdzL1wiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5pZCkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5pZCk7IHN0YWNrMSA9IHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSkgOiBoZWxwZXI7IH1cbiAgYnVmZmVyICs9IGVzY2FwZUV4cHJlc3Npb24oc3RhY2sxKVxuICAgICsgXCJcXFwiPlwiO1xuICBpZiAoaGVscGVyID0gaGVscGVycy5uYW1lKSB7IHN0YWNrMSA9IGhlbHBlci5jYWxsKGRlcHRoMCwge2hhc2g6e30sZGF0YTpkYXRhfSk7IH1cbiAgZWxzZSB7IGhlbHBlciA9IChkZXB0aDAgJiYgZGVwdGgwLm5hbWUpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9hPlxcblwiO1xuICByZXR1cm4gYnVmZmVyO1xuICB9KTtcbiIsIi8vIGhic2Z5IGNvbXBpbGVkIEhhbmRsZWJhcnMgdGVtcGxhdGVcbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZSgnaGJzZnkvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHMgPSBIYW5kbGViYXJzLnRlbXBsYXRlKGZ1bmN0aW9uIChIYW5kbGViYXJzLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdGhpcy5jb21waWxlckluZm8gPSBbNCwnPj0gMS4wLjAnXTtcbmhlbHBlcnMgPSB0aGlzLm1lcmdlKGhlbHBlcnMsIEhhbmRsZWJhcnMuaGVscGVycyk7IGRhdGEgPSBkYXRhIHx8IHt9O1xuICB2YXIgYnVmZmVyID0gXCJcIiwgc3RhY2sxLCBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuXG5cbiAgYnVmZmVyICs9IFwiPGEgaHJlZj1cXFwiL3RoaW5ncy9cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMuaWQpIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAuaWQpOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubmFtZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5uYW1lKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvYT5cXG5cIjtcbiAgcmV0dXJuIGJ1ZmZlcjtcbiAgfSk7XG4iLCIvLyBoYnNmeSBjb21waWxlZCBIYW5kbGViYXJzIHRlbXBsYXRlXG52YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoJ2hic2Z5L3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzID0gSGFuZGxlYmFycy50ZW1wbGF0ZShmdW5jdGlvbiAoSGFuZGxlYmFycyxkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHRoaXMuY29tcGlsZXJJbmZvID0gWzQsJz49IDEuMC4wJ107XG5oZWxwZXJzID0gdGhpcy5tZXJnZShoZWxwZXJzLCBIYW5kbGViYXJzLmhlbHBlcnMpOyBkYXRhID0gZGF0YSB8fCB7fTtcbiAgdmFyIGJ1ZmZlciA9IFwiXCIsIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcblxuXG4gIGJ1ZmZlciArPSBcIjxidXR0b24gaWQ9XFxcImVkaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPmVkaXQ8L2J1dHRvbj5cXG48YnV0dG9uIGlkPVxcXCJzYXZlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIj5zYXZlPC9idXR0b24+XFxuXFxuPGgxIHByb3BlcnR5PVxcXCJuYW1lXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMubmFtZSkgeyBzdGFjazEgPSBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pOyB9XG4gIGVsc2UgeyBoZWxwZXIgPSAoZGVwdGgwICYmIGRlcHRoMC5uYW1lKTsgc3RhY2sxID0gdHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KSA6IGhlbHBlcjsgfVxuICBidWZmZXIgKz0gZXNjYXBlRXhwcmVzc2lvbihzdGFjazEpXG4gICAgKyBcIjwvaDE+XFxuPHAgcHJvcGVydHk9XFxcImRlc2NyaXB0aW9uXFxcIj5cIjtcbiAgaWYgKGhlbHBlciA9IGhlbHBlcnMuZGVzY3JpcHRpb24pIHsgc3RhY2sxID0gaGVscGVyLmNhbGwoZGVwdGgwLCB7aGFzaDp7fSxkYXRhOmRhdGF9KTsgfVxuICBlbHNlIHsgaGVscGVyID0gKGRlcHRoMCAmJiBkZXB0aDAuZGVzY3JpcHRpb24pOyBzdGFjazEgPSB0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtoYXNoOnt9LGRhdGE6ZGF0YX0pIDogaGVscGVyOyB9XG4gIGJ1ZmZlciArPSBlc2NhcGVFeHByZXNzaW9uKHN0YWNrMSlcbiAgICArIFwiPC9wPlxcblxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICA8ZGl2IGlkPVxcXCJsZWZ0XFxcIiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPjwvZGl2PlxcbiAgPGRpdiBpZD1cXFwicmlnaHRcXFwiIGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+PC9kaXY+XFxuPGRpdj5cXG5cIjtcbiAgcmV0dXJuIGJ1ZmZlcjtcbiAgfSk7XG4iLCJDaGFwbGluID0gcmVxdWlyZSAnY2hhcGxpbidcblZpZXcgICAgPSByZXF1aXJlICcuL3ZpZXcnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ29sbGVjdGlvblZpZXcgZXh0ZW5kcyBDaGFwbGluLkNvbGxlY3Rpb25WaWV3XG4gIGFuaW1hdGlvbkR1cmF0aW9uOiAwXG4gIHVzZUNzc0FuaW1hdGlvbjogeWVzXG5cbiAgZ2V0VGVtcGxhdGVGdW5jdGlvbjogVmlldzo6Z2V0VGVtcGxhdGVGdW5jdGlvblxuIiwiQ2hhcGxpbiA9IHJlcXVpcmUgJ2NoYXBsaW4nXG5yZXF1aXJlICcuLi8uLi9saWIvdmlldy1oZWxwZXInXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVmlldyBleHRlbmRzIENoYXBsaW4uVmlld1xuXG4gIGdldFRlbXBsYXRlRnVuY3Rpb246IC0+XG4gICAgQHRlbXBsYXRlXG4iLCJWaWV3ID0gcmVxdWlyZSAnLi9iYXNlL3ZpZXcnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRm9vdGVyVmlldyBleHRlbmRzIFZpZXdcbiAgYXV0b1JlbmRlcjogdHJ1ZVxuICBjbGFzc05hbWU6ICdjb250YWluZXInXG4gIHRlbXBsYXRlOiByZXF1aXJlICcuLi90ZW1wbGF0ZXMvZm9vdGVyJ1xuIiwiVmlldyA9IHJlcXVpcmUgJy4vYmFzZS92aWV3J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEhlYWRlclZpZXcgZXh0ZW5kcyBWaWV3XG4gIGF1dG9SZW5kZXI6IHRydWVcbiAgY2xhc3NOYW1lOiAnY29udGFpbmVyJ1xuICB0ZW1wbGF0ZTogcmVxdWlyZSAnLi4vdGVtcGxhdGVzL2hlYWRlcidcbiIsIlZpZXcgPSByZXF1aXJlICcuLi9iYXNlL3ZpZXcnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgSG9tZVBhZ2VWaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uLy4uL3RlbXBsYXRlcy9ob21lJ1xuIiwiQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlICcuLi9iYXNlL2NvbGxlY3Rpb24tdmlldydcbkxpc3RJdGVtVmlldyA9IHJlcXVpcmUgJy4vbGlzdC1pdGVtJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIE1vZHVsZXNMaXN0IGV4dGVuZHMgQ29sbGVjdGlvblZpZXdcbiAgY2xhc3NOYW1lOiAnY29udGFpbmVyJ1xuICBpdGVtVmlldzogTGlzdEl0ZW1WaWV3XG4gIHRhZ05hbWU6ICd1bCdcbiIsIlZpZXcgPSByZXF1aXJlICcuLi9iYXNlL3ZpZXcnXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTGlzdEl0ZW1WaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ21vZHVsZSdcbiAgdGFnTmFtZTogJ2xpJ1xuICB0ZW1wbGF0ZTogcmVxdWlyZSAnLi4vLi4vdGVtcGxhdGVzL21vZHVsZS9saXN0LWl0ZW0nXG4iLCJWaWV3ID0gcmVxdWlyZSAnLi4vYmFzZS92aWV3J1xuRWRpdG9yID0gcmVxdWlyZSAnLi4vLi4vbGliL2VkaXRvcidcblRoaW5nc0xpc3QgID0gcmVxdWlyZSAnLi4vdGhpbmcvaW5kZXgnXG5FZGl0VGhpbmdzTGlzdCAgPSByZXF1aXJlICcuLi90aGluZy9pbmRleC1lZGl0J1xuJCA9IHJlcXVpcmUgJ2pxdWVyeSdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBNb2R1bGVWaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgcmVnaW9uczpcbiAgICBsZWZ0OiAnI2xlZnQnXG4gICAgcmlnaHQ6ICcjcmlnaHQnXG4gIHRlbXBsYXRlOiByZXF1aXJlICcuLi8uLi90ZW1wbGF0ZXMvbW9kdWxlL3Nob3cnXG4gIGV2ZW50czpcbiAgICAnY2xpY2sgYnV0dG9uI2VkaXQnOiAnZWRpdCdcbiAgICAnY2xpY2sgYnV0dG9uI3NhdmUnOiAnc2F2ZSdcbiAgICAna2V5dXAgLmlvJzogJ2FkZCdcbiAgICAnY2xpY2sgYnV0dG9uLnJlbW92ZSc6ICdyZW1vdmUnXG4gIHJlbmRlcjogLT5cbiAgICBzdXBlclxuICAgIGNvbnNvbGUubG9nICdyZW5kZXInXG4gIGVkaXQ6IChlKSAtPlxuICAgIGNvbnNvbGUubG9nICdlZGl0J1xuICAgICQoJ2J1dHRvbiNlZGl0JykuaGlkZSgpXG4gICAgJCgnYnV0dG9uI3NhdmUnKS5zaG93KClcbiAgICBFZGl0b3IuZWRpdCAnbmFtZScsICdpbnB1dCdcbiAgICBFZGl0b3IuZWRpdCAnZGVzY3JpcHRpb24nLCAndGV4dGFyZWEnXG4gICAgRWRpdG9yLmVkaXQgJ3Byb2Nlc3MnLCAndGV4dGFyZWEnXG4gICAgJCgnI2xlZnQnKS5hcHBlbmQgJzxpbnB1dCB0eXBlPVwiaW5wdXRcIiBwcm9wZXJ0eT1cImlucHV0XCIgY2xhc3M9XCJlZGl0IGlvIGZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwibmV3IGludHB1dFwiPidcbiAgICAkKCcjcmlnaHQnKS5hcHBlbmQgJzxpbnB1dCB0eXBlPVwiaW5wdXRcIiBwcm9wZXJ0eT1cIm91dHB1dFwiIGNsYXNzPVwiZWRpdCBpbyBmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIm5ldyBvdXRwdXRcIj4nXG4gICAgQHN1YnZpZXcgJ2lucHV0JywgIG5ldyBFZGl0VGhpbmdzTGlzdCBjb2xsZWN0aW9uOiBAbW9kZWwuaW5wdXQsIHJlZ2lvbjogJ2xlZnQnXG4gICAgQHN1YnZpZXcgJ291dHB1dCcsICBuZXcgRWRpdFRoaW5nc0xpc3QgY29sbGVjdGlvbjogQG1vZGVsLm91dHB1dCwgcmVnaW9uOiAncmlnaHQnXG4gIHNhdmU6IChlKSAtPlxuICAgIGNvbnNvbGUubG9nICdzYXZlJ1xuICAgICQoJ2J1dHRvbiNzYXZlJykuaGlkZSgpXG4gICAgJCgnYnV0dG9uI2VkaXQnKS5zaG93KClcbiAgICAkKCcuZWRpdCcpLmhpZGUoKVxuICAgIEVkaXRvci5zYXZlICduYW1lJ1xuICAgIEVkaXRvci5zYXZlICdkZXNjcmlwdGlvbidcbiAgICBFZGl0b3Iuc2F2ZSAncHJvY2VzcydcbiAgICAkKCcjbGVmdCBpbnB1dCwgI3JpZ2h0IGlucHV0JykucmVtb3ZlKClcbiAgICBAc3VidmlldyAnaW5wdXQnLCAgbmV3IFRoaW5nc0xpc3QgY29sbGVjdGlvbjogQG1vZGVsLmlucHV0LCByZWdpb246ICdsZWZ0J1xuICAgIEBzdWJ2aWV3ICdvdXRwdXQnLCAgbmV3IFRoaW5nc0xpc3QgY29sbGVjdGlvbjogQG1vZGVsLm91dHB1dCwgcmVnaW9uOiAncmlnaHQnXG4gIGFkZDogKGUpIC0+XG4gICAgaWYgZS5rZXlDb2RlID09IDEzXG4gICAgICBjb25zb2xlLmxvZyBlLnRhcmdldFxuICAgICAgaWYgZS50YXJnZXQuYXR0cmlidXRlcy5wcm9wZXJ0eS52YWx1ZSA9PSAnaW5wdXQnXG4gICAgICAgIEBtb2RlbC5pbnB1dC5hZGQgeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9IGlmIGUudGFyZ2V0LnZhbHVlICE9IFwiXCJcbiAgICAgICAgY29uc29sZS5sb2cgJ2lucHV0JywgQG1vZGVsLmlucHV0XG4gICAgICBlbHNlXG4gICAgICAgIEBtb2RlbC5vdXRwdXQuYWRkIHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSBpZiBlLnRhcmdldC52YWx1ZSAhPSBcIlwiXG4gICAgICAgIGNvbnNvbGUubG9nICdvdXRwdXQnLCBAbW9kZWwub3V0cHV0XG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICcnXG4gIHJlbW92ZTogKGUpIC0+XG4gICAgdXJpID0gJCgkKGUudGFyZ2V0KS5wYXJlbnQoKSkuZmluZCgnYScpLmF0dHIoJ2hyZWYnKS5zcGxpdCgnLycpLnBvcCgpXG4gICAgY29uc29sZS5sb2codXJpKVxuICAgIG1vZGVsID0gQG1vZGVsLmlucHV0LmZpbmQgKG9iaikgLT4gb2JqLmlkID09IHVyaVxuICAgIGlmIG1vZGVsXG4gICAgICBAbW9kZWwuaW5wdXQucmVtb3ZlIG1vZGVsXG4gICAgZWxzZVxuICAgICAgbW9kZWwgPSBAbW9kZWwub3V0cHV0LmZpbmQgKG9iaikgLT4gb2JqLmlkID09IHVyaVxuICAgICAgQG1vZGVsLm91dHB1dC5yZW1vdmUgbW9kZWxcbiAgbGlzdGVuOlxuICAgICdhZGRlZFRvRE9NJzogJ2hpZGUnXG4gIGhpZGU6IC0+XG4gICAgJCgnYnV0dG9uI3NhdmUnKS5oaWRlKClcbiIsIlZpZXcgPSByZXF1aXJlICcuL2Jhc2UvdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBTaXRlVmlldyBleHRlbmRzIFZpZXdcbiAgY29udGFpbmVyOiAnYm9keSdcbiAgaWQ6ICdzaXRlLWNvbnRhaW5lcidcbiAgcmVnaW9uczpcbiAgICBoZWFkZXI6ICcjaGVhZGVyJ1xuICAgIG1haW46ICcjb3V0ZXItcGFnZS1jb250YWluZXInXG4gICAgZm9vdGVyOiAnI2Zvb3RlcidcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uL3RlbXBsYXRlcy9zaXRlJ1xuIiwiVmlldyA9IHJlcXVpcmUgJy4uL2Jhc2UvdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBFZGl0TGlzdEl0ZW1WaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ3RoaW5nJ1xuICB0YWdOYW1lOiAnbGknXG4gIHRlbXBsYXRlOiByZXF1aXJlICcuLi8uLi90ZW1wbGF0ZXMvdGhpbmcvZWRpdC1pdGVtJ1xuIiwiQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlICcuLi9iYXNlL2NvbGxlY3Rpb24tdmlldydcbkVkaXRMaXN0SXRlbVZpZXcgPSByZXF1aXJlICcuL2VkaXQtaXRlbSdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBFZGl0VGhpbmdzTGlzdCBleHRlbmRzIENvbGxlY3Rpb25WaWV3XG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgaXRlbVZpZXc6IEVkaXRMaXN0SXRlbVZpZXdcbiAgdGFnTmFtZTogJ3VsJ1xuIiwiQ29sbGVjdGlvblZpZXcgPSByZXF1aXJlICcuLi9iYXNlL2NvbGxlY3Rpb24tdmlldydcbkxpc3RJdGVtVmlldyA9IHJlcXVpcmUgJy4vbGlzdC1pdGVtJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRoaW5nc0xpc3QgZXh0ZW5kcyBDb2xsZWN0aW9uVmlld1xuICBjbGFzc05hbWU6ICdjb250YWluZXInXG4gIGl0ZW1WaWV3OiBMaXN0SXRlbVZpZXdcbiAgdGFnTmFtZTogJ3VsJ1xuIiwiVmlldyA9IHJlcXVpcmUgJy4uL2Jhc2UvdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBMaXN0SXRlbVZpZXcgZXh0ZW5kcyBWaWV3XG4gIGF1dG9SZW5kZXI6IHRydWVcbiAgY2xhc3NOYW1lOiAndGhpbmcnXG4gIHRhZ05hbWU6ICdsaSdcbiAgdGVtcGxhdGU6IHJlcXVpcmUgJy4uLy4uL3RlbXBsYXRlcy90aGluZy9saXN0LWl0ZW0nXG4iLCJWaWV3ID0gcmVxdWlyZSAnLi4vYmFzZS92aWV3J1xuRWRpdG9yID0gcmVxdWlyZSAnLi4vLi4vbGliL2VkaXRvcidcbiQgPSByZXF1aXJlICdqcXVlcnknXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVGhpbmdWaWV3IGV4dGVuZHMgVmlld1xuICBhdXRvUmVuZGVyOiB0cnVlXG4gIGNsYXNzTmFtZTogJ2NvbnRhaW5lcidcbiAgcmVnaW9uczpcbiAgICBsZWZ0OiAnI2xlZnQnXG4gICAgcmlnaHQ6ICcjcmlnaHQnXG4gIHRlbXBsYXRlOiByZXF1aXJlICcuLi8uLi90ZW1wbGF0ZXMvdGhpbmcvc2hvdydcbiAgZXZlbnRzOlxuICAgICdjbGljayBidXR0b24jZWRpdCc6ICdlZGl0J1xuICAgICdjbGljayBidXR0b24jc2F2ZSc6ICdzYXZlJ1xuICByZW5kZXI6IC0+XG4gICAgc3VwZXJcbiAgICBjb25zb2xlLmxvZyAncmVuZGVyJ1xuICBlZGl0OiAoZSkgLT5cbiAgICBjb25zb2xlLmxvZyAnZWRpdCdcbiAgICAkKCdidXR0b24jZWRpdCcpLmhpZGUoKVxuICAgICQoJ2J1dHRvbiNzYXZlJykuc2hvdygpXG4gICAgRWRpdG9yLmVkaXQgJ25hbWUnLCAnaW5wdXQnXG4gICAgRWRpdG9yLmVkaXQgJ2Rlc2NyaXB0aW9uJywgJ3RleHRhcmVhJ1xuICBzYXZlOiAoZSkgLT5cbiAgICBjb25zb2xlLmxvZyAnc2F2ZSdcbiAgICAkKCdidXR0b24jc2F2ZScpLmhpZGUoKVxuICAgICQoJ2J1dHRvbiNlZGl0Jykuc2hvdygpXG4gICAgRWRpdG9yLnNhdmUgJ25hbWUnXG4gICAgRWRpdG9yLnNhdmUgJ2Rlc2NyaXB0aW9uJ1xuICBsaXN0ZW46XG4gICAgJ2FkZGVkVG9ET00nOiAnaGlkZVNhdmUnXG4gIGhpZGVTYXZlOiAtPlxuICAgIGNvbnNvbGUubG9nICQoJ2J1dHRvbiNzYXZlJylcbiAgICAkKCdidXR0b24jc2F2ZScpLmhpZGUoKVxuXG5cbiIsIi8qIVxuICogQm9vdHN0cmFwIHYzLjEuMSAoaHR0cDovL2dldGJvb3RzdHJhcC5jb20pXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cblxuaWYgKHR5cGVvZiBqUXVlcnkgPT09ICd1bmRlZmluZWQnKSB7IHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeScpIH1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IHRyYW5zaXRpb24uanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyN0cmFuc2l0aW9uc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIENTUyBUUkFOU0lUSU9OIFNVUFBPUlQgKFNob3V0b3V0OiBodHRwOi8vd3d3Lm1vZGVybml6ci5jb20vKVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jvb3RzdHJhcCcpXG5cbiAgICB2YXIgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xuICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nIDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgJ01velRyYW5zaXRpb24nICAgIDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgJ09UcmFuc2l0aW9uJyAgICAgIDogJ29UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kJyxcbiAgICAgICd0cmFuc2l0aW9uJyAgICAgICA6ICd0cmFuc2l0aW9uZW5kJ1xuICAgIH1cblxuICAgIGZvciAodmFyIG5hbWUgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgICBpZiAoZWwuc3R5bGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4geyBlbmQ6IHRyYW5zRW5kRXZlbnROYW1lc1tuYW1lXSB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlIC8vIGV4cGxpY2l0IGZvciBpZTggKCAgLl8uKVxuICB9XG5cbiAgLy8gaHR0cDovL2Jsb2cuYWxleG1hY2Nhdy5jb20vY3NzLXRyYW5zaXRpb25zXG4gICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICB2YXIgY2FsbGVkID0gZmFsc2UsICRlbCA9IHRoaXNcbiAgICAkKHRoaXMpLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIGZ1bmN0aW9uICgpIHsgY2FsbGVkID0gdHJ1ZSB9KVxuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgaWYgKCFjYWxsZWQpICQoJGVsKS50cmlnZ2VyKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCkgfVxuICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIGR1cmF0aW9uKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25FbmQoKVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBhbGVydC5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2FsZXJ0c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEFMRVJUIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBkaXNtaXNzID0gJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbiAgdmFyIEFsZXJ0ICAgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAkKGVsKS5vbignY2xpY2snLCBkaXNtaXNzLCB0aGlzLmNsb3NlKVxuICB9XG5cbiAgQWxlcnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgICAgPSAkKHRoaXMpXG4gICAgdmFyIHNlbGVjdG9yID0gJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgJiYgc2VsZWN0b3IucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgJycpIC8vIHN0cmlwIGZvciBpZTdcbiAgICB9XG5cbiAgICB2YXIgJHBhcmVudCA9ICQoc2VsZWN0b3IpXG5cbiAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoISRwYXJlbnQubGVuZ3RoKSB7XG4gICAgICAkcGFyZW50ID0gJHRoaXMuaGFzQ2xhc3MoJ2FsZXJ0JykgPyAkdGhpcyA6ICR0aGlzLnBhcmVudCgpXG4gICAgfVxuXG4gICAgJHBhcmVudC50cmlnZ2VyKGUgPSAkLkV2ZW50KCdjbG9zZS5icy5hbGVydCcpKVxuXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgJHBhcmVudC5yZW1vdmVDbGFzcygnaW4nKVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudCgpIHtcbiAgICAgICRwYXJlbnQudHJpZ2dlcignY2xvc2VkLmJzLmFsZXJ0JykucmVtb3ZlKClcbiAgICB9XG5cbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiAkcGFyZW50Lmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgJHBhcmVudFxuICAgICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgcmVtb3ZlRWxlbWVudClcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCkgOlxuICAgICAgcmVtb3ZlRWxlbWVudCgpXG4gIH1cblxuXG4gIC8vIEFMRVJUIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4uYWxlcnRcblxuICAkLmZuLmFsZXJ0ID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgID0gJHRoaXMuZGF0YSgnYnMuYWxlcnQnKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmFsZXJ0JywgKGRhdGEgPSBuZXcgQWxlcnQodGhpcykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXS5jYWxsKCR0aGlzKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLmFsZXJ0LkNvbnN0cnVjdG9yID0gQWxlcnRcblxuXG4gIC8vIEFMRVJUIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5hbGVydC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uYWxlcnQgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBBTEVSVCBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5hbGVydC5kYXRhLWFwaScsIGRpc21pc3MsIEFsZXJ0LnByb3RvdHlwZS5jbG9zZSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogYnV0dG9uLmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jYnV0dG9uc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEJVVFRPTiBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgQnV0dG9uID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ICA9ICQoZWxlbWVudClcbiAgICB0aGlzLm9wdGlvbnMgICA9ICQuZXh0ZW5kKHt9LCBCdXR0b24uREVGQVVMVFMsIG9wdGlvbnMpXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICB9XG5cbiAgQnV0dG9uLkRFRkFVTFRTID0ge1xuICAgIGxvYWRpbmdUZXh0OiAnbG9hZGluZy4uLidcbiAgfVxuXG4gIEJ1dHRvbi5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICB2YXIgZCAgICA9ICdkaXNhYmxlZCdcbiAgICB2YXIgJGVsICA9IHRoaXMuJGVsZW1lbnRcbiAgICB2YXIgdmFsICA9ICRlbC5pcygnaW5wdXQnKSA/ICd2YWwnIDogJ2h0bWwnXG4gICAgdmFyIGRhdGEgPSAkZWwuZGF0YSgpXG5cbiAgICBzdGF0ZSA9IHN0YXRlICsgJ1RleHQnXG5cbiAgICBpZiAoIWRhdGEucmVzZXRUZXh0KSAkZWwuZGF0YSgncmVzZXRUZXh0JywgJGVsW3ZhbF0oKSlcblxuICAgICRlbFt2YWxdKGRhdGFbc3RhdGVdIHx8IHRoaXMub3B0aW9uc1tzdGF0ZV0pXG5cbiAgICAvLyBwdXNoIHRvIGV2ZW50IGxvb3AgdG8gYWxsb3cgZm9ybXMgdG8gc3VibWl0XG4gICAgc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzdGF0ZSA9PSAnbG9hZGluZ1RleHQnKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICAkZWwuYWRkQ2xhc3MoZCkuYXR0cihkLCBkKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTG9hZGluZykge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICRlbC5yZW1vdmVDbGFzcyhkKS5yZW1vdmVBdHRyKGQpXG4gICAgICB9XG4gICAgfSwgdGhpcyksIDApXG4gIH1cblxuICBCdXR0b24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hhbmdlZCA9IHRydWVcbiAgICB2YXIgJHBhcmVudCA9IHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXScpXG5cbiAgICBpZiAoJHBhcmVudC5sZW5ndGgpIHtcbiAgICAgIHZhciAkaW5wdXQgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2lucHV0JylcbiAgICAgIGlmICgkaW5wdXQucHJvcCgndHlwZScpID09ICdyYWRpbycpIHtcbiAgICAgICAgaWYgKCRpbnB1dC5wcm9wKCdjaGVja2VkJykgJiYgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJykpIGNoYW5nZWQgPSBmYWxzZVxuICAgICAgICBlbHNlICRwYXJlbnQuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWQpICRpbnB1dC5wcm9wKCdjaGVja2VkJywgIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKS50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkKSB0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxuICB9XG5cblxuICAvLyBCVVRUT04gUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4uYnV0dG9uXG5cbiAgJC5mbi5idXR0b24gPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuYnV0dG9uJylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5idXR0b24nLCAoZGF0YSA9IG5ldyBCdXR0b24odGhpcywgb3B0aW9ucykpKVxuXG4gICAgICBpZiAob3B0aW9uID09ICd0b2dnbGUnKSBkYXRhLnRvZ2dsZSgpXG4gICAgICBlbHNlIGlmIChvcHRpb24pIGRhdGEuc2V0U3RhdGUob3B0aW9uKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLmJ1dHRvbi5Db25zdHJ1Y3RvciA9IEJ1dHRvblxuXG5cbiAgLy8gQlVUVE9OIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uYnV0dG9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5idXR0b24gPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBCVVRUT04gREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaScsICdbZGF0YS10b2dnbGVePWJ1dHRvbl0nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkYnRuID0gJChlLnRhcmdldClcbiAgICBpZiAoISRidG4uaGFzQ2xhc3MoJ2J0bicpKSAkYnRuID0gJGJ0bi5jbG9zZXN0KCcuYnRuJylcbiAgICAkYnRuLmJ1dHRvbigndG9nZ2xlJylcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogY2Fyb3VzZWwuanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNjYXJvdXNlbFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIENBUk9VU0VMIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBDYXJvdXNlbCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCAgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLiRpbmRpY2F0b3JzID0gdGhpcy4kZWxlbWVudC5maW5kKCcuY2Fyb3VzZWwtaW5kaWNhdG9ycycpXG4gICAgdGhpcy5vcHRpb25zICAgICA9IG9wdGlvbnNcbiAgICB0aGlzLnBhdXNlZCAgICAgID1cbiAgICB0aGlzLnNsaWRpbmcgICAgID1cbiAgICB0aGlzLmludGVydmFsICAgID1cbiAgICB0aGlzLiRhY3RpdmUgICAgID1cbiAgICB0aGlzLiRpdGVtcyAgICAgID0gbnVsbFxuXG4gICAgdGhpcy5vcHRpb25zLnBhdXNlID09ICdob3ZlcicgJiYgdGhpcy4kZWxlbWVudFxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgJC5wcm94eSh0aGlzLnBhdXNlLCB0aGlzKSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsICQucHJveHkodGhpcy5jeWNsZSwgdGhpcykpXG4gIH1cblxuICBDYXJvdXNlbC5ERUZBVUxUUyA9IHtcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBwYXVzZTogJ2hvdmVyJyxcbiAgICB3cmFwOiB0cnVlXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUuY3ljbGUgPSAgZnVuY3Rpb24gKGUpIHtcbiAgICBlIHx8ICh0aGlzLnBhdXNlZCA9IGZhbHNlKVxuXG4gICAgdGhpcy5pbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXG5cbiAgICB0aGlzLm9wdGlvbnMuaW50ZXJ2YWxcbiAgICAgICYmICF0aGlzLnBhdXNlZFxuICAgICAgJiYgKHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgkLnByb3h5KHRoaXMubmV4dCwgdGhpcyksIHRoaXMub3B0aW9ucy5pbnRlcnZhbCkpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLmdldEFjdGl2ZUluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGFjdGl2ZSA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLml0ZW0uYWN0aXZlJylcbiAgICB0aGlzLiRpdGVtcyAgPSB0aGlzLiRhY3RpdmUucGFyZW50KCkuY2hpbGRyZW4oKVxuXG4gICAgcmV0dXJuIHRoaXMuJGl0ZW1zLmluZGV4KHRoaXMuJGFjdGl2ZSlcbiAgfVxuXG4gIENhcm91c2VsLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICB2YXIgdGhhdCAgICAgICAgPSB0aGlzXG4gICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleCgpXG5cbiAgICBpZiAocG9zID4gKHRoaXMuJGl0ZW1zLmxlbmd0aCAtIDEpIHx8IHBvcyA8IDApIHJldHVyblxuXG4gICAgaWYgKHRoaXMuc2xpZGluZykgICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQub25lKCdzbGlkLmJzLmNhcm91c2VsJywgZnVuY3Rpb24gKCkgeyB0aGF0LnRvKHBvcykgfSlcbiAgICBpZiAoYWN0aXZlSW5kZXggPT0gcG9zKSByZXR1cm4gdGhpcy5wYXVzZSgpLmN5Y2xlKClcblxuICAgIHJldHVybiB0aGlzLnNsaWRlKHBvcyA+IGFjdGl2ZUluZGV4ID8gJ25leHQnIDogJ3ByZXYnLCAkKHRoaXMuJGl0ZW1zW3Bvc10pKVxuICB9XG5cbiAgQ2Fyb3VzZWwucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlIHx8ICh0aGlzLnBhdXNlZCA9IHRydWUpXG5cbiAgICBpZiAodGhpcy4kZWxlbWVudC5maW5kKCcubmV4dCwgLnByZXYnKS5sZW5ndGggJiYgJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcigkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpXG4gICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgfVxuXG4gICAgdGhpcy5pbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zbGlkaW5nKSByZXR1cm5cbiAgICByZXR1cm4gdGhpcy5zbGlkZSgnbmV4dCcpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zbGlkaW5nKSByZXR1cm5cbiAgICByZXR1cm4gdGhpcy5zbGlkZSgncHJldicpXG4gIH1cblxuICBDYXJvdXNlbC5wcm90b3R5cGUuc2xpZGUgPSBmdW5jdGlvbiAodHlwZSwgbmV4dCkge1xuICAgIHZhciAkYWN0aXZlICAgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5pdGVtLmFjdGl2ZScpXG4gICAgdmFyICRuZXh0ICAgICA9IG5leHQgfHwgJGFjdGl2ZVt0eXBlXSgpXG4gICAgdmFyIGlzQ3ljbGluZyA9IHRoaXMuaW50ZXJ2YWxcbiAgICB2YXIgZGlyZWN0aW9uID0gdHlwZSA9PSAnbmV4dCcgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgdmFyIGZhbGxiYWNrICA9IHR5cGUgPT0gJ25leHQnID8gJ2ZpcnN0JyA6ICdsYXN0J1xuICAgIHZhciB0aGF0ICAgICAgPSB0aGlzXG5cbiAgICBpZiAoISRuZXh0Lmxlbmd0aCkge1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMud3JhcCkgcmV0dXJuXG4gICAgICAkbmV4dCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLml0ZW0nKVtmYWxsYmFja10oKVxuICAgIH1cblxuICAgIGlmICgkbmV4dC5oYXNDbGFzcygnYWN0aXZlJykpIHJldHVybiB0aGlzLnNsaWRpbmcgPSBmYWxzZVxuXG4gICAgdmFyIGUgPSAkLkV2ZW50KCdzbGlkZS5icy5jYXJvdXNlbCcsIHsgcmVsYXRlZFRhcmdldDogJG5leHRbMF0sIGRpcmVjdGlvbjogZGlyZWN0aW9uIH0pXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdGhpcy5zbGlkaW5nID0gdHJ1ZVxuXG4gICAgaXNDeWNsaW5nICYmIHRoaXMucGF1c2UoKVxuXG4gICAgaWYgKHRoaXMuJGluZGljYXRvcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLiRpbmRpY2F0b3JzLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgIHRoaXMuJGVsZW1lbnQub25lKCdzbGlkLmJzLmNhcm91c2VsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJG5leHRJbmRpY2F0b3IgPSAkKHRoYXQuJGluZGljYXRvcnMuY2hpbGRyZW4oKVt0aGF0LmdldEFjdGl2ZUluZGV4KCldKVxuICAgICAgICAkbmV4dEluZGljYXRvciAmJiAkbmV4dEluZGljYXRvci5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKCQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ3NsaWRlJykpIHtcbiAgICAgICRuZXh0LmFkZENsYXNzKHR5cGUpXG4gICAgICAkbmV4dFswXS5vZmZzZXRXaWR0aCAvLyBmb3JjZSByZWZsb3dcbiAgICAgICRhY3RpdmUuYWRkQ2xhc3MoZGlyZWN0aW9uKVxuICAgICAgJG5leHQuYWRkQ2xhc3MoZGlyZWN0aW9uKVxuICAgICAgJGFjdGl2ZVxuICAgICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICRuZXh0LnJlbW92ZUNsYXNzKFt0eXBlLCBkaXJlY3Rpb25dLmpvaW4oJyAnKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgJGFjdGl2ZS5yZW1vdmVDbGFzcyhbJ2FjdGl2ZScsIGRpcmVjdGlvbl0uam9pbignICcpKVxuICAgICAgICAgIHRoYXQuc2xpZGluZyA9IGZhbHNlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHRoYXQuJGVsZW1lbnQudHJpZ2dlcignc2xpZC5icy5jYXJvdXNlbCcpIH0sIDApXG4gICAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgkYWN0aXZlLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpLnNsaWNlKDAsIC0xKSAqIDEwMDApXG4gICAgfSBlbHNlIHtcbiAgICAgICRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAkbmV4dC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgIHRoaXMuc2xpZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3NsaWQuYnMuY2Fyb3VzZWwnKVxuICAgIH1cblxuICAgIGlzQ3ljbGluZyAmJiB0aGlzLmN5Y2xlKClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIENBUk9VU0VMIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4uY2Fyb3VzZWxcblxuICAkLmZuLmNhcm91c2VsID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLmNhcm91c2VsJylcbiAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIENhcm91c2VsLkRFRkFVTFRTLCAkdGhpcy5kYXRhKCksIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKVxuICAgICAgdmFyIGFjdGlvbiAgPSB0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnID8gb3B0aW9uIDogb3B0aW9ucy5zbGlkZVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmNhcm91c2VsJywgKGRhdGEgPSBuZXcgQ2Fyb3VzZWwodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ251bWJlcicpIGRhdGEudG8ob3B0aW9uKVxuICAgICAgZWxzZSBpZiAoYWN0aW9uKSBkYXRhW2FjdGlvbl0oKVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5pbnRlcnZhbCkgZGF0YS5wYXVzZSgpLmN5Y2xlKClcbiAgICB9KVxuICB9XG5cbiAgJC5mbi5jYXJvdXNlbC5Db25zdHJ1Y3RvciA9IENhcm91c2VsXG5cblxuICAvLyBDQVJPVVNFTCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uY2Fyb3VzZWwubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmNhcm91c2VsID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQ0FST1VTRUwgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2suYnMuY2Fyb3VzZWwuZGF0YS1hcGknLCAnW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b10nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKSwgaHJlZlxuICAgIHZhciAkdGFyZ2V0ID0gJCgkdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcpIHx8IChocmVmID0gJHRoaXMuYXR0cignaHJlZicpKSAmJiBocmVmLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sICcnKSkgLy9zdHJpcCBmb3IgaWU3XG4gICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgJHRhcmdldC5kYXRhKCksICR0aGlzLmRhdGEoKSlcbiAgICB2YXIgc2xpZGVJbmRleCA9ICR0aGlzLmF0dHIoJ2RhdGEtc2xpZGUtdG8nKVxuICAgIGlmIChzbGlkZUluZGV4KSBvcHRpb25zLmludGVydmFsID0gZmFsc2VcblxuICAgICR0YXJnZXQuY2Fyb3VzZWwob3B0aW9ucylcblxuICAgIGlmIChzbGlkZUluZGV4ID0gJHRoaXMuYXR0cignZGF0YS1zbGlkZS10bycpKSB7XG4gICAgICAkdGFyZ2V0LmRhdGEoJ2JzLmNhcm91c2VsJykudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfSlcblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGNhcm91c2VsID0gJCh0aGlzKVxuICAgICAgJGNhcm91c2VsLmNhcm91c2VsKCRjYXJvdXNlbC5kYXRhKCkpXG4gICAgfSlcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogY29sbGFwc2UuanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNjb2xsYXBzZVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIENPTExBUFNFIFBVQkxJQyBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIENvbGxhcHNlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ICAgICAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy5vcHRpb25zICAgICAgID0gJC5leHRlbmQoe30sIENvbGxhcHNlLkRFRkFVTFRTLCBvcHRpb25zKVxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFyZW50KSB0aGlzLiRwYXJlbnQgPSAkKHRoaXMub3B0aW9ucy5wYXJlbnQpXG4gICAgaWYgKHRoaXMub3B0aW9ucy50b2dnbGUpIHRoaXMudG9nZ2xlKClcbiAgfVxuXG4gIENvbGxhcHNlLkRFRkFVTFRTID0ge1xuICAgIHRvZ2dsZTogdHJ1ZVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmRpbWVuc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFzV2lkdGggPSB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCd3aWR0aCcpXG4gICAgcmV0dXJuIGhhc1dpZHRoID8gJ3dpZHRoJyA6ICdoZWlnaHQnXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uaW5nIHx8IHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2luJykpIHJldHVyblxuXG4gICAgdmFyIHN0YXJ0RXZlbnQgPSAkLkV2ZW50KCdzaG93LmJzLmNvbGxhcHNlJylcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB2YXIgYWN0aXZlcyA9IHRoaXMuJHBhcmVudCAmJiB0aGlzLiRwYXJlbnQuZmluZCgnPiAucGFuZWwgPiAuaW4nKVxuXG4gICAgaWYgKGFjdGl2ZXMgJiYgYWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgIHZhciBoYXNEYXRhID0gYWN0aXZlcy5kYXRhKCdicy5jb2xsYXBzZScpXG4gICAgICBpZiAoaGFzRGF0YSAmJiBoYXNEYXRhLnRyYW5zaXRpb25pbmcpIHJldHVyblxuICAgICAgYWN0aXZlcy5jb2xsYXBzZSgnaGlkZScpXG4gICAgICBoYXNEYXRhIHx8IGFjdGl2ZXMuZGF0YSgnYnMuY29sbGFwc2UnLCBudWxsKVxuICAgIH1cblxuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvbigpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlJylcbiAgICAgIC5hZGRDbGFzcygnY29sbGFwc2luZycpXG4gICAgICBbZGltZW5zaW9uXSgwKVxuXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gMVxuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNlIGluJylcbiAgICAgICAgW2RpbWVuc2lvbl0oJ2F1dG8nKVxuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gMFxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdzaG93bi5icy5jb2xsYXBzZScpXG4gICAgfVxuXG4gICAgaWYgKCEkLnN1cHBvcnQudHJhbnNpdGlvbikgcmV0dXJuIGNvbXBsZXRlLmNhbGwodGhpcylcblxuICAgIHZhciBzY3JvbGxTaXplID0gJC5jYW1lbENhc2UoWydzY3JvbGwnLCBkaW1lbnNpb25dLmpvaW4oJy0nKSlcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCAkLnByb3h5KGNvbXBsZXRlLCB0aGlzKSlcbiAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgzNTApXG4gICAgICBbZGltZW5zaW9uXSh0aGlzLiRlbGVtZW50WzBdW3Njcm9sbFNpemVdKVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZyB8fCAhdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaW4nKSkgcmV0dXJuXG5cbiAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoJ2hpZGUuYnMuY29sbGFwc2UnKVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvbigpXG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICBbZGltZW5zaW9uXSh0aGlzLiRlbGVtZW50W2RpbWVuc2lvbl0oKSlcbiAgICAgIFswXS5vZmZzZXRIZWlnaHRcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5hZGRDbGFzcygnY29sbGFwc2luZycpXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlJylcbiAgICAgIC5yZW1vdmVDbGFzcygnaW4nKVxuXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gMVxuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nID0gMFxuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAudHJpZ2dlcignaGlkZGVuLmJzLmNvbGxhcHNlJylcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZScpXG4gICAgfVxuXG4gICAgaWYgKCEkLnN1cHBvcnQudHJhbnNpdGlvbikgcmV0dXJuIGNvbXBsZXRlLmNhbGwodGhpcylcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIFtkaW1lbnNpb25dKDApXG4gICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgJC5wcm94eShjb21wbGV0ZSwgdGhpcykpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzUwKVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzW3RoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2luJykgPyAnaGlkZScgOiAnc2hvdyddKClcbiAgfVxuXG5cbiAgLy8gQ09MTEFQU0UgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi5jb2xsYXBzZVxuXG4gICQuZm4uY29sbGFwc2UgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuY29sbGFwc2UnKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQ29sbGFwc2UuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb25zLnRvZ2dsZSAmJiBvcHRpb24gPT0gJ3Nob3cnKSBvcHRpb24gPSAhb3B0aW9uXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmNvbGxhcHNlJywgKGRhdGEgPSBuZXcgQ29sbGFwc2UodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4uY29sbGFwc2UuQ29uc3RydWN0b3IgPSBDb2xsYXBzZVxuXG5cbiAgLy8gQ09MTEFQU0UgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmNvbGxhcHNlLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5jb2xsYXBzZSA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIENPTExBUFNFIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLmNvbGxhcHNlLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZT1jb2xsYXBzZV0nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKSwgaHJlZlxuICAgIHZhciB0YXJnZXQgID0gJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKVxuICAgICAgICB8fCBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfHwgKGhyZWYgPSAkdGhpcy5hdHRyKCdocmVmJykpICYmIGhyZWYucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgJycpIC8vc3RyaXAgZm9yIGllN1xuICAgIHZhciAkdGFyZ2V0ID0gJCh0YXJnZXQpXG4gICAgdmFyIGRhdGEgICAgPSAkdGFyZ2V0LmRhdGEoJ2JzLmNvbGxhcHNlJylcbiAgICB2YXIgb3B0aW9uICA9IGRhdGEgPyAndG9nZ2xlJyA6ICR0aGlzLmRhdGEoKVxuICAgIHZhciBwYXJlbnQgID0gJHRoaXMuYXR0cignZGF0YS1wYXJlbnQnKVxuICAgIHZhciAkcGFyZW50ID0gcGFyZW50ICYmICQocGFyZW50KVxuXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLnRyYW5zaXRpb25pbmcpIHtcbiAgICAgIGlmICgkcGFyZW50KSAkcGFyZW50LmZpbmQoJ1tkYXRhLXRvZ2dsZT1jb2xsYXBzZV1bZGF0YS1wYXJlbnQ9XCInICsgcGFyZW50ICsgJ1wiXScpLm5vdCgkdGhpcykuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpXG4gICAgICAkdGhpc1skdGFyZ2V0Lmhhc0NsYXNzKCdpbicpID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKCdjb2xsYXBzZWQnKVxuICAgIH1cblxuICAgICR0YXJnZXQuY29sbGFwc2Uob3B0aW9uKVxuICB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBkcm9wZG93bi5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2Ryb3Bkb3duc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIERST1BET1dOIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBiYWNrZHJvcCA9ICcuZHJvcGRvd24tYmFja2Ryb3AnXG4gIHZhciB0b2dnbGUgICA9ICdbZGF0YS10b2dnbGU9ZHJvcGRvd25dJ1xuICB2YXIgRHJvcGRvd24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkub24oJ2NsaWNrLmJzLmRyb3Bkb3duJywgdGhpcy50b2dnbGUpXG4gIH1cblxuICBEcm9wZG93bi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG5cbiAgICBpZiAoJHRoaXMuaXMoJy5kaXNhYmxlZCwgOmRpc2FibGVkJykpIHJldHVyblxuXG4gICAgdmFyICRwYXJlbnQgID0gZ2V0UGFyZW50KCR0aGlzKVxuICAgIHZhciBpc0FjdGl2ZSA9ICRwYXJlbnQuaGFzQ2xhc3MoJ29wZW4nKVxuXG4gICAgY2xlYXJNZW51cygpXG5cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICEkcGFyZW50LmNsb3Nlc3QoJy5uYXZiYXItbmF2JykubGVuZ3RoKSB7XG4gICAgICAgIC8vIGlmIG1vYmlsZSB3ZSB1c2UgYSBiYWNrZHJvcCBiZWNhdXNlIGNsaWNrIGV2ZW50cyBkb24ndCBkZWxlZ2F0ZVxuICAgICAgICAkKCc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tYmFja2Ryb3BcIi8+JykuaW5zZXJ0QWZ0ZXIoJCh0aGlzKSkub24oJ2NsaWNrJywgY2xlYXJNZW51cylcbiAgICAgIH1cblxuICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7IHJlbGF0ZWRUYXJnZXQ6IHRoaXMgfVxuICAgICAgJHBhcmVudC50cmlnZ2VyKGUgPSAkLkV2ZW50KCdzaG93LmJzLmRyb3Bkb3duJywgcmVsYXRlZFRhcmdldCkpXG5cbiAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgICAgJHBhcmVudFxuICAgICAgICAudG9nZ2xlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAudHJpZ2dlcignc2hvd24uYnMuZHJvcGRvd24nLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgICAkdGhpcy5mb2N1cygpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBEcm9wZG93bi5wcm90b3R5cGUua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCEvKDM4fDQwfDI3KS8udGVzdChlLmtleUNvZGUpKSByZXR1cm5cblxuICAgIHZhciAkdGhpcyA9ICQodGhpcylcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICgkdGhpcy5pcygnLmRpc2FibGVkLCA6ZGlzYWJsZWQnKSkgcmV0dXJuXG5cbiAgICB2YXIgJHBhcmVudCAgPSBnZXRQYXJlbnQoJHRoaXMpXG4gICAgdmFyIGlzQWN0aXZlID0gJHBhcmVudC5oYXNDbGFzcygnb3BlbicpXG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IChpc0FjdGl2ZSAmJiBlLmtleUNvZGUgPT0gMjcpKSB7XG4gICAgICBpZiAoZS53aGljaCA9PSAyNykgJHBhcmVudC5maW5kKHRvZ2dsZSkuZm9jdXMoKVxuICAgICAgcmV0dXJuICR0aGlzLmNsaWNrKClcbiAgICB9XG5cbiAgICB2YXIgZGVzYyA9ICcgbGk6bm90KC5kaXZpZGVyKTp2aXNpYmxlIGEnXG4gICAgdmFyICRpdGVtcyA9ICRwYXJlbnQuZmluZCgnW3JvbGU9bWVudV0nICsgZGVzYyArICcsIFtyb2xlPWxpc3Rib3hdJyArIGRlc2MpXG5cbiAgICBpZiAoISRpdGVtcy5sZW5ndGgpIHJldHVyblxuXG4gICAgdmFyIGluZGV4ID0gJGl0ZW1zLmluZGV4KCRpdGVtcy5maWx0ZXIoJzpmb2N1cycpKVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PSAzOCAmJiBpbmRleCA+IDApICAgICAgICAgICAgICAgICBpbmRleC0tICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBcbiAgICBpZiAoZS5rZXlDb2RlID09IDQwICYmIGluZGV4IDwgJGl0ZW1zLmxlbmd0aCAtIDEpIGluZGV4KysgICAgICAgICAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgaWYgKCF+aW5kZXgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDBcblxuICAgICRpdGVtcy5lcShpbmRleCkuZm9jdXMoKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJNZW51cyhlKSB7XG4gICAgJChiYWNrZHJvcCkucmVtb3ZlKClcbiAgICAkKHRvZ2dsZSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHBhcmVudCA9IGdldFBhcmVudCgkKHRoaXMpKVxuICAgICAgdmFyIHJlbGF0ZWRUYXJnZXQgPSB7IHJlbGF0ZWRUYXJnZXQ6IHRoaXMgfVxuICAgICAgaWYgKCEkcGFyZW50Lmhhc0NsYXNzKCdvcGVuJykpIHJldHVyblxuICAgICAgJHBhcmVudC50cmlnZ2VyKGUgPSAkLkV2ZW50KCdoaWRlLmJzLmRyb3Bkb3duJywgcmVsYXRlZFRhcmdldCkpXG4gICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG4gICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKCdvcGVuJykudHJpZ2dlcignaGlkZGVuLmJzLmRyb3Bkb3duJywgcmVsYXRlZFRhcmdldClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFyZW50KCR0aGlzKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgJiYgLyNbQS1aYS16XS8udGVzdChzZWxlY3RvcikgJiYgc2VsZWN0b3IucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgJycpIC8vc3RyaXAgZm9yIGllN1xuICAgIH1cblxuICAgIHZhciAkcGFyZW50ID0gc2VsZWN0b3IgJiYgJChzZWxlY3RvcilcblxuICAgIHJldHVybiAkcGFyZW50ICYmICRwYXJlbnQubGVuZ3RoID8gJHBhcmVudCA6ICR0aGlzLnBhcmVudCgpXG4gIH1cblxuXG4gIC8vIERST1BET1dOIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4uZHJvcGRvd25cblxuICAkLmZuLmRyb3Bkb3duID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgID0gJHRoaXMuZGF0YSgnYnMuZHJvcGRvd24nKVxuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLmRyb3Bkb3duJywgKGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXS5jYWxsKCR0aGlzKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLmRyb3Bkb3duLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cblxuXG4gIC8vIERST1BET1dOIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5kcm9wZG93bi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uZHJvcGRvd24gPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBBUFBMWSBUTyBTVEFOREFSRCBEUk9QRE9XTiBFTEVNRU5UU1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScsIGNsZWFyTWVudXMpXG4gICAgLm9uKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScsICcuZHJvcGRvd24gZm9ybScsIGZ1bmN0aW9uIChlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfSlcbiAgICAub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgdG9nZ2xlLCBEcm9wZG93bi5wcm90b3R5cGUudG9nZ2xlKVxuICAgIC5vbigna2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaScsIHRvZ2dsZSArICcsIFtyb2xlPW1lbnVdLCBbcm9sZT1saXN0Ym94XScsIERyb3Bkb3duLnByb3RvdHlwZS5rZXlkb3duKVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBtb2RhbC5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI21vZGFsc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIE1PREFMIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBNb2RhbCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zICAgPSBvcHRpb25zXG4gICAgdGhpcy4kZWxlbWVudCAgPSAkKGVsZW1lbnQpXG4gICAgdGhpcy4kYmFja2Ryb3AgPVxuICAgIHRoaXMuaXNTaG93biAgID0gbnVsbFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdGUpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLmZpbmQoJy5tb2RhbC1jb250ZW50JylcbiAgICAgICAgLmxvYWQodGhpcy5vcHRpb25zLnJlbW90ZSwgJC5wcm94eShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdsb2FkZWQuYnMubW9kYWwnKVxuICAgICAgICB9LCB0aGlzKSlcbiAgICB9XG4gIH1cblxuICBNb2RhbC5ERUZBVUxUUyA9IHtcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBzaG93OiB0cnVlXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKF9yZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXNbIXRoaXMuaXNTaG93biA/ICdzaG93JyA6ICdoaWRlJ10oX3JlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChfcmVsYXRlZFRhcmdldCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHZhciBlICAgID0gJC5FdmVudCgnc2hvdy5icy5tb2RhbCcsIHsgcmVsYXRlZFRhcmdldDogX3JlbGF0ZWRUYXJnZXQgfSlcblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgaWYgKHRoaXMuaXNTaG93biB8fCBlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNTaG93biA9IHRydWVcblxuICAgIHRoaXMuZXNjYXBlKClcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrLmRpc21pc3MuYnMubW9kYWwnLCAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJywgJC5wcm94eSh0aGlzLmhpZGUsIHRoaXMpKVxuXG4gICAgdGhpcy5iYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbiA9ICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoYXQuJGVsZW1lbnQuaGFzQ2xhc3MoJ2ZhZGUnKVxuXG4gICAgICBpZiAoIXRoYXQuJGVsZW1lbnQucGFyZW50KCkubGVuZ3RoKSB7XG4gICAgICAgIHRoYXQuJGVsZW1lbnQuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSkgLy8gZG9uJ3QgbW92ZSBtb2RhbHMgZG9tIHBvc2l0aW9uXG4gICAgICB9XG5cbiAgICAgIHRoYXQuJGVsZW1lbnRcbiAgICAgICAgLnNob3coKVxuICAgICAgICAuc2Nyb2xsVG9wKDApXG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoYXQuJGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGggLy8gZm9yY2UgcmVmbG93XG4gICAgICB9XG5cbiAgICAgIHRoYXQuJGVsZW1lbnRcbiAgICAgICAgLmFkZENsYXNzKCdpbicpXG4gICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKVxuXG4gICAgICB0aGF0LmVuZm9yY2VGb2N1cygpXG5cbiAgICAgIHZhciBlID0gJC5FdmVudCgnc2hvd24uYnMubW9kYWwnLCB7IHJlbGF0ZWRUYXJnZXQ6IF9yZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICAgIHRyYW5zaXRpb24gP1xuICAgICAgICB0aGF0LiRlbGVtZW50LmZpbmQoJy5tb2RhbC1kaWFsb2cnKSAvLyB3YWl0IGZvciBtb2RhbCB0byBzbGlkZSBpblxuICAgICAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LiRlbGVtZW50LmZvY3VzKCkudHJpZ2dlcihlKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDMwMCkgOlxuICAgICAgICB0aGF0LiRlbGVtZW50LmZvY3VzKCkudHJpZ2dlcihlKVxuICAgIH0pXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgZSA9ICQuRXZlbnQoJ2hpZGUuYnMubW9kYWwnKVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICBpZiAoIXRoaXMuaXNTaG93biB8fCBlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNTaG93biA9IGZhbHNlXG5cbiAgICB0aGlzLmVzY2FwZSgpXG5cbiAgICAkKGRvY3VtZW50KS5vZmYoJ2ZvY3VzaW4uYnMubW9kYWwnKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUNsYXNzKCdpbicpXG4gICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgICAgLm9mZignY2xpY2suZGlzbWlzcy5icy5tb2RhbCcpXG5cbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgJC5wcm94eSh0aGlzLmhpZGVNb2RhbCwgdGhpcykpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgzMDApIDpcbiAgICAgIHRoaXMuaGlkZU1vZGFsKClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5lbmZvcmNlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJChkb2N1bWVudClcbiAgICAgIC5vZmYoJ2ZvY3VzaW4uYnMubW9kYWwnKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICAgIC5vbignZm9jdXNpbi5icy5tb2RhbCcsICQucHJveHkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnRbMF0gIT09IGUudGFyZ2V0ICYmICF0aGlzLiRlbGVtZW50LmhhcyhlLnRhcmdldCkubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMpKVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmVzY2FwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc1Nob3duICYmIHRoaXMub3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5vbigna2V5dXAuZGlzbWlzcy5icy5tb2RhbCcsICQucHJveHkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS53aGljaCA9PSAyNyAmJiB0aGlzLmhpZGUoKVxuICAgICAgfSwgdGhpcykpXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc1Nob3duKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9mZigna2V5dXAuZGlzbWlzcy5icy5tb2RhbCcpXG4gICAgfVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB0aGlzLiRlbGVtZW50LmhpZGUoKVxuICAgIHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5yZW1vdmVCYWNrZHJvcCgpXG4gICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgfSlcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5yZW1vdmVCYWNrZHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRiYWNrZHJvcCAmJiB0aGlzLiRiYWNrZHJvcC5yZW1vdmUoKVxuICAgIHRoaXMuJGJhY2tkcm9wID0gbnVsbFxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmJhY2tkcm9wID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIGFuaW1hdGUgPSB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJykgPyAnZmFkZScgOiAnJ1xuXG4gICAgaWYgKHRoaXMuaXNTaG93biAmJiB0aGlzLm9wdGlvbnMuYmFja2Ryb3ApIHtcbiAgICAgIHZhciBkb0FuaW1hdGUgPSAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiBhbmltYXRlXG5cbiAgICAgIHRoaXMuJGJhY2tkcm9wID0gJCgnPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wICcgKyBhbmltYXRlICsgJ1wiIC8+JylcbiAgICAgICAgLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrLmRpc21pc3MuYnMubW9kYWwnLCAkLnByb3h5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSByZXR1cm5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJhY2tkcm9wID09ICdzdGF0aWMnXG4gICAgICAgICAgPyB0aGlzLiRlbGVtZW50WzBdLmZvY3VzLmNhbGwodGhpcy4kZWxlbWVudFswXSlcbiAgICAgICAgICA6IHRoaXMuaGlkZS5jYWxsKHRoaXMpXG4gICAgICB9LCB0aGlzKSlcblxuICAgICAgaWYgKGRvQW5pbWF0ZSkgdGhpcy4kYmFja2Ryb3BbMF0ub2Zmc2V0V2lkdGggLy8gZm9yY2UgcmVmbG93XG5cbiAgICAgIHRoaXMuJGJhY2tkcm9wLmFkZENsYXNzKCdpbicpXG5cbiAgICAgIGlmICghY2FsbGJhY2spIHJldHVyblxuXG4gICAgICBkb0FuaW1hdGUgP1xuICAgICAgICB0aGlzLiRiYWNrZHJvcFxuICAgICAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBjYWxsYmFjaylcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKSA6XG4gICAgICAgIGNhbGxiYWNrKClcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNTaG93biAmJiB0aGlzLiRiYWNrZHJvcCkge1xuICAgICAgdGhpcy4kYmFja2Ryb3AucmVtb3ZlQ2xhc3MoJ2luJylcblxuICAgICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgICAgdGhpcy4kYmFja2Ryb3BcbiAgICAgICAgICAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgY2FsbGJhY2spXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCkgOlxuICAgICAgICBjYWxsYmFjaygpXG5cbiAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cblxuICAvLyBNT0RBTCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLm1vZGFsXG5cbiAgJC5mbi5tb2RhbCA9IGZ1bmN0aW9uIChvcHRpb24sIF9yZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMubW9kYWwnKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTW9kYWwuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMubW9kYWwnLCAoZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKF9yZWxhdGVkVGFyZ2V0KVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5zaG93KSBkYXRhLnNob3coX3JlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4ubW9kYWwuQ29uc3RydWN0b3IgPSBNb2RhbFxuXG5cbiAgLy8gTU9EQUwgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkLmZuLm1vZGFsLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5tb2RhbCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIE1PREFMIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLm1vZGFsLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICB2YXIgaHJlZiAgICA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgIHZhciAkdGFyZ2V0ID0gJCgkdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcpIHx8IChocmVmICYmIGhyZWYucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgJycpKSkgLy9zdHJpcCBmb3IgaWU3XG4gICAgdmFyIG9wdGlvbiAgPSAkdGFyZ2V0LmRhdGEoJ2JzLm1vZGFsJykgPyAndG9nZ2xlJyA6ICQuZXh0ZW5kKHsgcmVtb3RlOiAhLyMvLnRlc3QoaHJlZikgJiYgaHJlZiB9LCAkdGFyZ2V0LmRhdGEoKSwgJHRoaXMuZGF0YSgpKVxuXG4gICAgaWYgKCR0aGlzLmlzKCdhJykpIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgJHRhcmdldFxuICAgICAgLm1vZGFsKG9wdGlvbiwgdGhpcylcbiAgICAgIC5vbmUoJ2hpZGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR0aGlzLmlzKCc6dmlzaWJsZScpICYmICR0aGlzLmZvY3VzKClcbiAgICAgIH0pXG4gIH0pXG5cbiAgJChkb2N1bWVudClcbiAgICAub24oJ3Nob3cuYnMubW9kYWwnLCAnLm1vZGFsJywgZnVuY3Rpb24gKCkgeyAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKCdtb2RhbC1vcGVuJykgfSlcbiAgICAub24oJ2hpZGRlbi5icy5tb2RhbCcsICcubW9kYWwnLCBmdW5jdGlvbiAoKSB7ICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoJ21vZGFsLW9wZW4nKSB9KVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiB0b29sdGlwLmpzIHYzLjEuMVxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jdG9vbHRpcFxuICogSW5zcGlyZWQgYnkgdGhlIG9yaWdpbmFsIGpRdWVyeS50aXBzeSBieSBKYXNvbiBGcmFtZVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFRPT0xUSVAgUFVCTElDIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBUb29sdGlwID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgICAgICAgPVxuICAgIHRoaXMub3B0aW9ucyAgICA9XG4gICAgdGhpcy5lbmFibGVkICAgID1cbiAgICB0aGlzLnRpbWVvdXQgICAgPVxuICAgIHRoaXMuaG92ZXJTdGF0ZSA9XG4gICAgdGhpcy4kZWxlbWVudCAgID0gbnVsbFxuXG4gICAgdGhpcy5pbml0KCd0b29sdGlwJywgZWxlbWVudCwgb3B0aW9ucylcbiAgfVxuXG4gIFRvb2x0aXAuREVGQVVMVFMgPSB7XG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZWxheTogMCxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBjb250YWluZXI6IGZhbHNlXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHR5cGUsIGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmVuYWJsZWQgID0gdHJ1ZVxuICAgIHRoaXMudHlwZSAgICAgPSB0eXBlXG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudClcbiAgICB0aGlzLm9wdGlvbnMgID0gdGhpcy5nZXRPcHRpb25zKG9wdGlvbnMpXG5cbiAgICB2YXIgdHJpZ2dlcnMgPSB0aGlzLm9wdGlvbnMudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICBmb3IgKHZhciBpID0gdHJpZ2dlcnMubGVuZ3RoOyBpLS07KSB7XG4gICAgICB2YXIgdHJpZ2dlciA9IHRyaWdnZXJzW2ldXG5cbiAgICAgIGlmICh0cmlnZ2VyID09ICdjbGljaycpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMudG9nZ2xlLCB0aGlzKSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPSAnbWFudWFsJykge1xuICAgICAgICB2YXIgZXZlbnRJbiAgPSB0cmlnZ2VyID09ICdob3ZlcicgPyAnbW91c2VlbnRlcicgOiAnZm9jdXNpbidcbiAgICAgICAgdmFyIGV2ZW50T3V0ID0gdHJpZ2dlciA9PSAnaG92ZXInID8gJ21vdXNlbGVhdmUnIDogJ2ZvY3Vzb3V0J1xuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub24oZXZlbnRJbiAgKyAnLicgKyB0aGlzLnR5cGUsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgJC5wcm94eSh0aGlzLmVudGVyLCB0aGlzKSlcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbihldmVudE91dCArICcuJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMubGVhdmUsIHRoaXMpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvciA/XG4gICAgICAodGhpcy5fb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIHsgdHJpZ2dlcjogJ21hbnVhbCcsIHNlbGVjdG9yOiAnJyB9KSkgOlxuICAgICAgdGhpcy5maXhUaXRsZSgpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVG9vbHRpcC5ERUZBVUxUU1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmdldERlZmF1bHRzKCksIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKVxuXG4gICAgaWYgKG9wdGlvbnMuZGVsYXkgJiYgdHlwZW9mIG9wdGlvbnMuZGVsYXkgPT0gJ251bWJlcicpIHtcbiAgICAgIG9wdGlvbnMuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IG9wdGlvbnMuZGVsYXksXG4gICAgICAgIGhpZGU6IG9wdGlvbnMuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0RGVsZWdhdGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zICA9IHt9XG4gICAgdmFyIGRlZmF1bHRzID0gdGhpcy5nZXREZWZhdWx0cygpXG5cbiAgICB0aGlzLl9vcHRpb25zICYmICQuZWFjaCh0aGlzLl9vcHRpb25zLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKGRlZmF1bHRzW2tleV0gIT0gdmFsdWUpIG9wdGlvbnNba2V5XSA9IHZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5lbnRlciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgc2VsZiA9IG9iaiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3IgP1xuICAgICAgb2JqIDogJChvYmouY3VycmVudFRhcmdldClbdGhpcy50eXBlXSh0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKS5kYXRhKCdicy4nICsgdGhpcy50eXBlKVxuXG4gICAgY2xlYXJUaW1lb3V0KHNlbGYudGltZW91dClcblxuICAgIHNlbGYuaG92ZXJTdGF0ZSA9ICdpbidcblxuICAgIGlmICghc2VsZi5vcHRpb25zLmRlbGF5IHx8ICFzZWxmLm9wdGlvbnMuZGVsYXkuc2hvdykgcmV0dXJuIHNlbGYuc2hvdygpXG5cbiAgICBzZWxmLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLmhvdmVyU3RhdGUgPT0gJ2luJykgc2VsZi5zaG93KClcbiAgICB9LCBzZWxmLm9wdGlvbnMuZGVsYXkuc2hvdylcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmxlYXZlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBzZWxmID0gb2JqIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3RvciA/XG4gICAgICBvYmogOiAkKG9iai5jdXJyZW50VGFyZ2V0KVt0aGlzLnR5cGVdKHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLmRhdGEoJ2JzLicgKyB0aGlzLnR5cGUpXG5cbiAgICBjbGVhclRpbWVvdXQoc2VsZi50aW1lb3V0KVxuXG4gICAgc2VsZi5ob3ZlclN0YXRlID0gJ291dCdcblxuICAgIGlmICghc2VsZi5vcHRpb25zLmRlbGF5IHx8ICFzZWxmLm9wdGlvbnMuZGVsYXkuaGlkZSkgcmV0dXJuIHNlbGYuaGlkZSgpXG5cbiAgICBzZWxmLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLmhvdmVyU3RhdGUgPT0gJ291dCcpIHNlbGYuaGlkZSgpXG4gICAgfSwgc2VsZi5vcHRpb25zLmRlbGF5LmhpZGUpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlID0gJC5FdmVudCgnc2hvdy5icy4nICsgdGhpcy50eXBlKVxuXG4gICAgaWYgKHRoaXMuaGFzQ29udGVudCgpICYmIHRoaXMuZW5hYmxlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgdmFyICR0aXAgPSB0aGlzLnRpcCgpXG5cbiAgICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKSAkdGlwLmFkZENsYXNzKCdmYWRlJylcblxuICAgICAgdmFyIHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLm9wdGlvbnMucGxhY2VtZW50ID09ICdmdW5jdGlvbicgP1xuICAgICAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50LmNhbGwodGhpcywgJHRpcFswXSwgdGhpcy4kZWxlbWVudFswXSkgOlxuICAgICAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50XG5cbiAgICAgIHZhciBhdXRvVG9rZW4gPSAvXFxzP2F1dG8/XFxzPy9pXG4gICAgICB2YXIgYXV0b1BsYWNlID0gYXV0b1Rva2VuLnRlc3QocGxhY2VtZW50KVxuICAgICAgaWYgKGF1dG9QbGFjZSkgcGxhY2VtZW50ID0gcGxhY2VtZW50LnJlcGxhY2UoYXV0b1Rva2VuLCAnJykgfHwgJ3RvcCdcblxuICAgICAgJHRpcFxuICAgICAgICAuZGV0YWNoKClcbiAgICAgICAgLmNzcyh7IHRvcDogMCwgbGVmdDogMCwgZGlzcGxheTogJ2Jsb2NrJyB9KVxuICAgICAgICAuYWRkQ2xhc3MocGxhY2VtZW50KVxuXG4gICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyID8gJHRpcC5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuY29udGFpbmVyKSA6ICR0aXAuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudClcblxuICAgICAgdmFyIHBvcyAgICAgICAgICA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgICAgdmFyIGFjdHVhbFdpZHRoICA9ICR0aXBbMF0ub2Zmc2V0V2lkdGhcbiAgICAgIHZhciBhY3R1YWxIZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodFxuXG4gICAgICBpZiAoYXV0b1BsYWNlKSB7XG4gICAgICAgIHZhciAkcGFyZW50ID0gdGhpcy4kZWxlbWVudC5wYXJlbnQoKVxuXG4gICAgICAgIHZhciBvcmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRcbiAgICAgICAgdmFyIGRvY1Njcm9sbCAgICA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgICAgdmFyIHBhcmVudFdpZHRoICA9IHRoaXMub3B0aW9ucy5jb250YWluZXIgPT0gJ2JvZHknID8gd2luZG93LmlubmVyV2lkdGggIDogJHBhcmVudC5vdXRlcldpZHRoKClcbiAgICAgICAgdmFyIHBhcmVudEhlaWdodCA9IHRoaXMub3B0aW9ucy5jb250YWluZXIgPT0gJ2JvZHknID8gd2luZG93LmlubmVySGVpZ2h0IDogJHBhcmVudC5vdXRlckhlaWdodCgpXG4gICAgICAgIHZhciBwYXJlbnRMZWZ0ICAgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyID09ICdib2R5JyA/IDAgOiAkcGFyZW50Lm9mZnNldCgpLmxlZnRcblxuICAgICAgICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQgPT0gJ2JvdHRvbScgJiYgcG9zLnRvcCAgICsgcG9zLmhlaWdodCAgKyBhY3R1YWxIZWlnaHQgLSBkb2NTY3JvbGwgPiBwYXJlbnRIZWlnaHQgID8gJ3RvcCcgICAgOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ3RvcCcgICAgJiYgcG9zLnRvcCAgIC0gZG9jU2Nyb2xsICAgLSBhY3R1YWxIZWlnaHQgPCAwICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JvdHRvbScgOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ3JpZ2h0JyAgJiYgcG9zLnJpZ2h0ICsgYWN0dWFsV2lkdGggPiBwYXJlbnRXaWR0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2xlZnQnICAgOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ2xlZnQnICAgJiYgcG9zLmxlZnQgIC0gYWN0dWFsV2lkdGggPCBwYXJlbnRMZWZ0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3JpZ2h0JyAgOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnRcblxuICAgICAgICAkdGlwXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKG9yZ1BsYWNlbWVudClcbiAgICAgICAgICAuYWRkQ2xhc3MocGxhY2VtZW50KVxuICAgICAgfVxuXG4gICAgICB2YXIgY2FsY3VsYXRlZE9mZnNldCA9IHRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldChwbGFjZW1lbnQsIHBvcywgYWN0dWFsV2lkdGgsIGFjdHVhbEhlaWdodClcblxuICAgICAgdGhpcy5hcHBseVBsYWNlbWVudChjYWxjdWxhdGVkT2Zmc2V0LCBwbGFjZW1lbnQpXG4gICAgICB0aGlzLmhvdmVyU3RhdGUgPSBudWxsXG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ3Nob3duLmJzLicgKyB0aGF0LnR5cGUpXG4gICAgICB9XG5cbiAgICAgICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJHRpcC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgICAgJHRpcFxuICAgICAgICAgIC5vbmUoJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLCBjb21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKSA6XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5hcHBseVBsYWNlbWVudCA9IGZ1bmN0aW9uIChvZmZzZXQsIHBsYWNlbWVudCkge1xuICAgIHZhciByZXBsYWNlXG4gICAgdmFyICR0aXAgICA9IHRoaXMudGlwKClcbiAgICB2YXIgd2lkdGggID0gJHRpcFswXS5vZmZzZXRXaWR0aFxuICAgIHZhciBoZWlnaHQgPSAkdGlwWzBdLm9mZnNldEhlaWdodFxuXG4gICAgLy8gbWFudWFsbHkgcmVhZCBtYXJnaW5zIGJlY2F1c2UgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGluY2x1ZGVzIGRpZmZlcmVuY2VcbiAgICB2YXIgbWFyZ2luVG9wID0gcGFyc2VJbnQoJHRpcC5jc3MoJ21hcmdpbi10b3AnKSwgMTApXG4gICAgdmFyIG1hcmdpbkxlZnQgPSBwYXJzZUludCgkdGlwLmNzcygnbWFyZ2luLWxlZnQnKSwgMTApXG5cbiAgICAvLyB3ZSBtdXN0IGNoZWNrIGZvciBOYU4gZm9yIGllIDgvOVxuICAgIGlmIChpc05hTihtYXJnaW5Ub3ApKSAgbWFyZ2luVG9wICA9IDBcbiAgICBpZiAoaXNOYU4obWFyZ2luTGVmdCkpIG1hcmdpbkxlZnQgPSAwXG5cbiAgICBvZmZzZXQudG9wICA9IG9mZnNldC50b3AgICsgbWFyZ2luVG9wXG4gICAgb2Zmc2V0LmxlZnQgPSBvZmZzZXQubGVmdCArIG1hcmdpbkxlZnRcblxuICAgIC8vICQuZm4ub2Zmc2V0IGRvZXNuJ3Qgcm91bmQgcGl4ZWwgdmFsdWVzXG4gICAgLy8gc28gd2UgdXNlIHNldE9mZnNldCBkaXJlY3RseSB3aXRoIG91ciBvd24gZnVuY3Rpb24gQi0wXG4gICAgJC5vZmZzZXQuc2V0T2Zmc2V0KCR0aXBbMF0sICQuZXh0ZW5kKHtcbiAgICAgIHVzaW5nOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgJHRpcC5jc3Moe1xuICAgICAgICAgIHRvcDogTWF0aC5yb3VuZChwcm9wcy50b3ApLFxuICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQocHJvcHMubGVmdClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LCBvZmZzZXQpLCAwKVxuXG4gICAgJHRpcC5hZGRDbGFzcygnaW4nKVxuXG4gICAgLy8gY2hlY2sgdG8gc2VlIGlmIHBsYWNpbmcgdGlwIGluIG5ldyBvZmZzZXQgY2F1c2VkIHRoZSB0aXAgdG8gcmVzaXplIGl0c2VsZlxuICAgIHZhciBhY3R1YWxXaWR0aCAgPSAkdGlwWzBdLm9mZnNldFdpZHRoXG4gICAgdmFyIGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0XG5cbiAgICBpZiAocGxhY2VtZW50ID09ICd0b3AnICYmIGFjdHVhbEhlaWdodCAhPSBoZWlnaHQpIHtcbiAgICAgIHJlcGxhY2UgPSB0cnVlXG4gICAgICBvZmZzZXQudG9wID0gb2Zmc2V0LnRvcCArIGhlaWdodCAtIGFjdHVhbEhlaWdodFxuICAgIH1cblxuICAgIGlmICgvYm90dG9tfHRvcC8udGVzdChwbGFjZW1lbnQpKSB7XG4gICAgICB2YXIgZGVsdGEgPSAwXG5cbiAgICAgIGlmIChvZmZzZXQubGVmdCA8IDApIHtcbiAgICAgICAgZGVsdGEgICAgICAgPSBvZmZzZXQubGVmdCAqIC0yXG4gICAgICAgIG9mZnNldC5sZWZ0ID0gMFxuXG4gICAgICAgICR0aXAub2Zmc2V0KG9mZnNldClcblxuICAgICAgICBhY3R1YWxXaWR0aCAgPSAkdGlwWzBdLm9mZnNldFdpZHRoXG4gICAgICAgIGFjdHVhbEhlaWdodCA9ICR0aXBbMF0ub2Zmc2V0SGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVwbGFjZUFycm93KGRlbHRhIC0gd2lkdGggKyBhY3R1YWxXaWR0aCwgYWN0dWFsV2lkdGgsICdsZWZ0JylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXBsYWNlQXJyb3coYWN0dWFsSGVpZ2h0IC0gaGVpZ2h0LCBhY3R1YWxIZWlnaHQsICd0b3AnKVxuICAgIH1cblxuICAgIGlmIChyZXBsYWNlKSAkdGlwLm9mZnNldChvZmZzZXQpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5yZXBsYWNlQXJyb3cgPSBmdW5jdGlvbiAoZGVsdGEsIGRpbWVuc2lvbiwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmFycm93KCkuY3NzKHBvc2l0aW9uLCBkZWx0YSA/ICg1MCAqICgxIC0gZGVsdGEgLyBkaW1lbnNpb24pICsgJyUnKSA6ICcnKVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRpcCAgPSB0aGlzLnRpcCgpXG4gICAgdmFyIHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpXG5cbiAgICAkdGlwLmZpbmQoJy50b29sdGlwLWlubmVyJylbdGhpcy5vcHRpb25zLmh0bWwgPyAnaHRtbCcgOiAndGV4dCddKHRpdGxlKVxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2ZhZGUgaW4gdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0JylcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdmFyICR0aXAgPSB0aGlzLnRpcCgpXG4gICAgdmFyIGUgICAgPSAkLkV2ZW50KCdoaWRlLmJzLicgKyB0aGlzLnR5cGUpXG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgIGlmICh0aGF0LmhvdmVyU3RhdGUgIT0gJ2luJykgJHRpcC5kZXRhY2goKVxuICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdoaWRkZW4uYnMuJyArIHRoYXQudHlwZSlcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSlcblxuICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgICR0aXAucmVtb3ZlQ2xhc3MoJ2luJylcblxuICAgICQuc3VwcG9ydC50cmFuc2l0aW9uICYmIHRoaXMuJHRpcC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgICR0aXBcbiAgICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKSA6XG4gICAgICBjb21wbGV0ZSgpXG5cbiAgICB0aGlzLmhvdmVyU3RhdGUgPSBudWxsXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZml4VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRlID0gdGhpcy4kZWxlbWVudFxuICAgIGlmICgkZS5hdHRyKCd0aXRsZScpIHx8IHR5cGVvZigkZS5hdHRyKCdkYXRhLW9yaWdpbmFsLXRpdGxlJykpICE9ICdzdHJpbmcnKSB7XG4gICAgICAkZS5hdHRyKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgJGUuYXR0cigndGl0bGUnKSB8fCAnJykuYXR0cigndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5oYXNDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKClcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IHRoaXMuJGVsZW1lbnRbMF1cbiAgICByZXR1cm4gJC5leHRlbmQoe30sICh0eXBlb2YgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09ICdmdW5jdGlvbicpID8gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7XG4gICAgICB3aWR0aDogZWwub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsLm9mZnNldEhlaWdodFxuICAgIH0sIHRoaXMuJGVsZW1lbnQub2Zmc2V0KCkpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRDYWxjdWxhdGVkT2Zmc2V0ID0gZnVuY3Rpb24gKHBsYWNlbWVudCwgcG9zLCBhY3R1YWxXaWR0aCwgYWN0dWFsSGVpZ2h0KSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudCA9PSAnYm90dG9tJyA/IHsgdG9wOiBwb3MudG9wICsgcG9zLmhlaWdodCwgICBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAvIDIgLSBhY3R1YWxXaWR0aCAvIDIgIH0gOlxuICAgICAgICAgICBwbGFjZW1lbnQgPT0gJ3RvcCcgICAgPyB7IHRvcDogcG9zLnRvcCAtIGFjdHVhbEhlaWdodCwgbGVmdDogcG9zLmxlZnQgKyBwb3Mud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyICB9IDpcbiAgICAgICAgICAgcGxhY2VtZW50ID09ICdsZWZ0JyAgID8geyB0b3A6IHBvcy50b3AgKyBwb3MuaGVpZ2h0IC8gMiAtIGFjdHVhbEhlaWdodCAvIDIsIGxlZnQ6IHBvcy5sZWZ0IC0gYWN0dWFsV2lkdGggfSA6XG4gICAgICAgIC8qIHBsYWNlbWVudCA9PSAncmlnaHQnICovIHsgdG9wOiBwb3MudG9wICsgcG9zLmhlaWdodCAvIDIgLSBhY3R1YWxIZWlnaHQgLyAyLCBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aCAgIH1cbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aXRsZVxuICAgIHZhciAkZSA9IHRoaXMuJGVsZW1lbnRcbiAgICB2YXIgbyAgPSB0aGlzLm9wdGlvbnNcblxuICAgIHRpdGxlID0gJGUuYXR0cignZGF0YS1vcmlnaW5hbC10aXRsZScpXG4gICAgICB8fCAodHlwZW9mIG8udGl0bGUgPT0gJ2Z1bmN0aW9uJyA/IG8udGl0bGUuY2FsbCgkZVswXSkgOiAgby50aXRsZSlcblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUudGlwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLiR0aXAgPSB0aGlzLiR0aXAgfHwgJCh0aGlzLm9wdGlvbnMudGVtcGxhdGUpXG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5hcnJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy4kYXJyb3cgPSB0aGlzLiRhcnJvdyB8fCB0aGlzLnRpcCgpLmZpbmQoJy50b29sdGlwLWFycm93JylcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy4kZWxlbWVudFswXS5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgICAgdGhpcy4kZWxlbWVudCA9IG51bGxcbiAgICAgIHRoaXMub3B0aW9ucyAgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLnRvZ2dsZUVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbmFibGVkID0gIXRoaXMuZW5hYmxlZFxuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc2VsZiA9IGUgPyAkKGUuY3VycmVudFRhcmdldClbdGhpcy50eXBlXSh0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKS5kYXRhKCdicy4nICsgdGhpcy50eXBlKSA6IHRoaXNcbiAgICBzZWxmLnRpcCgpLmhhc0NsYXNzKCdpbicpID8gc2VsZi5sZWF2ZShzZWxmKSA6IHNlbGYuZW50ZXIoc2VsZilcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICB0aGlzLmhpZGUoKS4kZWxlbWVudC5vZmYoJy4nICsgdGhpcy50eXBlKS5yZW1vdmVEYXRhKCdicy4nICsgdGhpcy50eXBlKVxuICB9XG5cblxuICAvLyBUT09MVElQIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb2xkID0gJC5mbi50b29sdGlwXG5cbiAgJC5mbi50b29sdGlwID0gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgICA9ICR0aGlzLmRhdGEoJ2JzLnRvb2x0aXAnKVxuICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuXG4gICAgICBpZiAoIWRhdGEgJiYgb3B0aW9uID09ICdkZXN0cm95JykgcmV0dXJuXG4gICAgICBpZiAoIWRhdGEpICR0aGlzLmRhdGEoJ2JzLnRvb2x0aXAnLCAoZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IgPSBUb29sdGlwXG5cblxuICAvLyBUT09MVElQIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLnRvb2x0aXAubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnRvb2x0aXAgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IHBvcG92ZXIuanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNwb3BvdmVyc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFBPUE9WRVIgUFVCTElDIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBQb3BvdmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXQoJ3BvcG92ZXInLCBlbGVtZW50LCBvcHRpb25zKVxuICB9XG5cbiAgaWYgKCEkLmZuLnRvb2x0aXApIHRocm93IG5ldyBFcnJvcignUG9wb3ZlciByZXF1aXJlcyB0b29sdGlwLmpzJylcblxuICBQb3BvdmVyLkRFRkFVTFRTID0gJC5leHRlbmQoe30sICQuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5ERUZBVUxUUywge1xuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICB0cmlnZ2VyOiAnY2xpY2snLFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+PC9kaXY+PC9kaXY+J1xuICB9KVxuXG5cbiAgLy8gTk9URTogUE9QT1ZFUiBFWFRFTkRTIHRvb2x0aXAuanNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBQb3BvdmVyLnByb3RvdHlwZSA9ICQuZXh0ZW5kKHt9LCAkLmZuLnRvb2x0aXAuQ29uc3RydWN0b3IucHJvdG90eXBlKVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUG9wb3ZlclxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmdldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBQb3BvdmVyLkRFRkFVTFRTXG4gIH1cblxuICBQb3BvdmVyLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGlwICAgID0gdGhpcy50aXAoKVxuICAgIHZhciB0aXRsZSAgID0gdGhpcy5nZXRUaXRsZSgpXG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKVxuXG4gICAgJHRpcC5maW5kKCcucG9wb3Zlci10aXRsZScpW3RoaXMub3B0aW9ucy5odG1sID8gJ2h0bWwnIDogJ3RleHQnXSh0aXRsZSlcbiAgICAkdGlwLmZpbmQoJy5wb3BvdmVyLWNvbnRlbnQnKVsgLy8gd2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgICAgdGhpcy5vcHRpb25zLmh0bWwgPyAodHlwZW9mIGNvbnRlbnQgPT0gJ3N0cmluZycgPyAnaHRtbCcgOiAnYXBwZW5kJykgOiAndGV4dCdcbiAgICBdKGNvbnRlbnQpXG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKCdmYWRlIHRvcCBib3R0b20gbGVmdCByaWdodCBpbicpXG5cbiAgICAvLyBJRTggZG9lc24ndCBhY2NlcHQgaGlkaW5nIHZpYSB0aGUgYDplbXB0eWAgcHNldWRvIHNlbGVjdG9yLCB3ZSBoYXZlIHRvIGRvXG4gICAgLy8gdGhpcyBtYW51YWxseSBieSBjaGVja2luZyB0aGUgY29udGVudHMuXG4gICAgaWYgKCEkdGlwLmZpbmQoJy5wb3BvdmVyLXRpdGxlJykuaHRtbCgpKSAkdGlwLmZpbmQoJy5wb3BvdmVyLXRpdGxlJykuaGlkZSgpXG4gIH1cblxuICBQb3BvdmVyLnByb3RvdHlwZS5oYXNDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5nZXRDb250ZW50KClcbiAgfVxuXG4gIFBvcG92ZXIucHJvdG90eXBlLmdldENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRlID0gdGhpcy4kZWxlbWVudFxuICAgIHZhciBvICA9IHRoaXMub3B0aW9uc1xuXG4gICAgcmV0dXJuICRlLmF0dHIoJ2RhdGEtY29udGVudCcpXG4gICAgICB8fCAodHlwZW9mIG8uY29udGVudCA9PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgIG8uY29udGVudC5jYWxsKCRlWzBdKSA6XG4gICAgICAgICAgICBvLmNvbnRlbnQpXG4gIH1cblxuICBQb3BvdmVyLnByb3RvdHlwZS5hcnJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy4kYXJyb3cgPSB0aGlzLiRhcnJvdyB8fCB0aGlzLnRpcCgpLmZpbmQoJy5hcnJvdycpXG4gIH1cblxuICBQb3BvdmVyLnByb3RvdHlwZS50aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLiR0aXApIHRoaXMuJHRpcCA9ICQodGhpcy5vcHRpb25zLnRlbXBsYXRlKVxuICAgIHJldHVybiB0aGlzLiR0aXBcbiAgfVxuXG5cbiAgLy8gUE9QT1ZFUiBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4ucG9wb3ZlclxuXG4gICQuZm4ucG9wb3ZlciA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5wb3BvdmVyJylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhICYmIG9wdGlvbiA9PSAnZGVzdHJveScpIHJldHVyblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5wb3BvdmVyJywgKGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgJC5mbi5wb3BvdmVyLkNvbnN0cnVjdG9yID0gUG9wb3ZlclxuXG5cbiAgLy8gUE9QT1ZFUiBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5wb3BvdmVyLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5wb3BvdmVyID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59KGpRdWVyeSk7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBzY3JvbGxzcHkuanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNzY3JvbGxzcHlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBTQ1JPTExTUFkgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIFNjcm9sbFNweShlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGhyZWZcbiAgICB2YXIgcHJvY2VzcyAgPSAkLnByb3h5KHRoaXMucHJvY2VzcywgdGhpcylcblxuICAgIHRoaXMuJGVsZW1lbnQgICAgICAgPSAkKGVsZW1lbnQpLmlzKCdib2R5JykgPyAkKHdpbmRvdykgOiAkKGVsZW1lbnQpXG4gICAgdGhpcy4kYm9keSAgICAgICAgICA9ICQoJ2JvZHknKVxuICAgIHRoaXMuJHNjcm9sbEVsZW1lbnQgPSB0aGlzLiRlbGVtZW50Lm9uKCdzY3JvbGwuYnMuc2Nyb2xsLXNweS5kYXRhLWFwaScsIHByb2Nlc3MpXG4gICAgdGhpcy5vcHRpb25zICAgICAgICA9ICQuZXh0ZW5kKHt9LCBTY3JvbGxTcHkuREVGQVVMVFMsIG9wdGlvbnMpXG4gICAgdGhpcy5zZWxlY3RvciAgICAgICA9ICh0aGlzLm9wdGlvbnMudGFyZ2V0XG4gICAgICB8fCAoKGhyZWYgPSAkKGVsZW1lbnQpLmF0dHIoJ2hyZWYnKSkgJiYgaHJlZi5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLCAnJykpIC8vc3RyaXAgZm9yIGllN1xuICAgICAgfHwgJycpICsgJyAubmF2IGxpID4gYSdcbiAgICB0aGlzLm9mZnNldHMgICAgICAgID0gJChbXSlcbiAgICB0aGlzLnRhcmdldHMgICAgICAgID0gJChbXSlcbiAgICB0aGlzLmFjdGl2ZVRhcmdldCAgID0gbnVsbFxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgICB0aGlzLnByb2Nlc3MoKVxuICB9XG5cbiAgU2Nyb2xsU3B5LkRFRkFVTFRTID0ge1xuICAgIG9mZnNldDogMTBcbiAgfVxuXG4gIFNjcm9sbFNweS5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb2Zmc2V0TWV0aG9kID0gdGhpcy4kZWxlbWVudFswXSA9PSB3aW5kb3cgPyAnb2Zmc2V0JyA6ICdwb3NpdGlvbidcblxuICAgIHRoaXMub2Zmc2V0cyA9ICQoW10pXG4gICAgdGhpcy50YXJnZXRzID0gJChbXSlcblxuICAgIHZhciBzZWxmICAgICA9IHRoaXNcbiAgICB2YXIgJHRhcmdldHMgPSB0aGlzLiRib2R5XG4gICAgICAuZmluZCh0aGlzLnNlbGVjdG9yKVxuICAgICAgLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWwgICA9ICQodGhpcylcbiAgICAgICAgdmFyIGhyZWYgID0gJGVsLmRhdGEoJ3RhcmdldCcpIHx8ICRlbC5hdHRyKCdocmVmJylcbiAgICAgICAgdmFyICRocmVmID0gL14jLi8udGVzdChocmVmKSAmJiAkKGhyZWYpXG5cbiAgICAgICAgcmV0dXJuICgkaHJlZlxuICAgICAgICAgICYmICRocmVmLmxlbmd0aFxuICAgICAgICAgICYmICRocmVmLmlzKCc6dmlzaWJsZScpXG4gICAgICAgICAgJiYgW1sgJGhyZWZbb2Zmc2V0TWV0aG9kXSgpLnRvcCArICghJC5pc1dpbmRvdyhzZWxmLiRzY3JvbGxFbGVtZW50LmdldCgwKSkgJiYgc2VsZi4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSksIGhyZWYgXV0pIHx8IG51bGxcbiAgICAgIH0pXG4gICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYVswXSAtIGJbMF0gfSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vZmZzZXRzLnB1c2godGhpc1swXSlcbiAgICAgICAgc2VsZi50YXJnZXRzLnB1c2godGhpc1sxXSlcbiAgICAgIH0pXG4gIH1cblxuICBTY3JvbGxTcHkucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjcm9sbFRvcCAgICA9IHRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkgKyB0aGlzLm9wdGlvbnMub2Zmc2V0XG4gICAgdmFyIHNjcm9sbEhlaWdodCA9IHRoaXMuJHNjcm9sbEVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0IHx8IHRoaXMuJGJvZHlbMF0uc2Nyb2xsSGVpZ2h0XG4gICAgdmFyIG1heFNjcm9sbCAgICA9IHNjcm9sbEhlaWdodCAtIHRoaXMuJHNjcm9sbEVsZW1lbnQuaGVpZ2h0KClcbiAgICB2YXIgb2Zmc2V0cyAgICAgID0gdGhpcy5vZmZzZXRzXG4gICAgdmFyIHRhcmdldHMgICAgICA9IHRoaXMudGFyZ2V0c1xuICAgIHZhciBhY3RpdmVUYXJnZXQgPSB0aGlzLmFjdGl2ZVRhcmdldFxuICAgIHZhciBpXG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZVRhcmdldCAhPSAoaSA9IHRhcmdldHMubGFzdCgpWzBdKSAmJiB0aGlzLmFjdGl2YXRlKGkpXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPD0gb2Zmc2V0c1swXSkge1xuICAgICAgcmV0dXJuIGFjdGl2ZVRhcmdldCAhPSAoaSA9IHRhcmdldHNbMF0pICYmIHRoaXMuYWN0aXZhdGUoaSlcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgYWN0aXZlVGFyZ2V0ICE9IHRhcmdldHNbaV1cbiAgICAgICAgJiYgc2Nyb2xsVG9wID49IG9mZnNldHNbaV1cbiAgICAgICAgJiYgKCFvZmZzZXRzW2kgKyAxXSB8fCBzY3JvbGxUb3AgPD0gb2Zmc2V0c1tpICsgMV0pXG4gICAgICAgICYmIHRoaXMuYWN0aXZhdGUoIHRhcmdldHNbaV0gKVxuICAgIH1cbiAgfVxuXG4gIFNjcm9sbFNweS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdGhpcy5hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgICQodGhpcy5zZWxlY3RvcilcbiAgICAgIC5wYXJlbnRzVW50aWwodGhpcy5vcHRpb25zLnRhcmdldCwgJy5hY3RpdmUnKVxuICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuXG4gICAgdmFyIHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvciArXG4gICAgICAgICdbZGF0YS10YXJnZXQ9XCInICsgdGFyZ2V0ICsgJ1wiXSwnICtcbiAgICAgICAgdGhpcy5zZWxlY3RvciArICdbaHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdJ1xuXG4gICAgdmFyIGFjdGl2ZSA9ICQoc2VsZWN0b3IpXG4gICAgICAucGFyZW50cygnbGknKVxuICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuXG4gICAgaWYgKGFjdGl2ZS5wYXJlbnQoJy5kcm9wZG93bi1tZW51JykubGVuZ3RoKSB7XG4gICAgICBhY3RpdmUgPSBhY3RpdmVcbiAgICAgICAgLmNsb3Nlc3QoJ2xpLmRyb3Bkb3duJylcbiAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGFjdGl2ZS50cmlnZ2VyKCdhY3RpdmF0ZS5icy5zY3JvbGxzcHknKVxuICB9XG5cblxuICAvLyBTQ1JPTExTUFkgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4uc2Nyb2xsc3B5XG5cbiAgJC5mbi5zY3JvbGxzcHkgPSBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuc2Nyb2xsc3B5JylcbiAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb25cblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5zY3JvbGxzcHknLCAoZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4uc2Nyb2xsc3B5LkNvbnN0cnVjdG9yID0gU2Nyb2xsU3B5XG5cblxuICAvLyBTQ1JPTExTUFkgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5zY3JvbGxzcHkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnNjcm9sbHNweSA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIFNDUk9MTFNQWSBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PT1cblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHNweSA9ICQodGhpcylcbiAgICAgICRzcHkuc2Nyb2xsc3B5KCRzcHkuZGF0YSgpKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IHRhYi5qcyB2My4xLjFcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3RhYnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNCBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBUQUIgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBUYWIgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9ICQoZWxlbWVudClcbiAgfVxuXG4gIFRhYi5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRoaXMgICAgPSB0aGlzLmVsZW1lbnRcbiAgICB2YXIgJHVsICAgICAgPSAkdGhpcy5jbG9zZXN0KCd1bDpub3QoLmRyb3Bkb3duLW1lbnUpJylcbiAgICB2YXIgc2VsZWN0b3IgPSAkdGhpcy5kYXRhKCd0YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgJiYgc2VsZWN0b3IucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgJycpIC8vc3RyaXAgZm9yIGllN1xuICAgIH1cblxuICAgIGlmICgkdGhpcy5wYXJlbnQoJ2xpJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSByZXR1cm5cblxuICAgIHZhciBwcmV2aW91cyA9ICR1bC5maW5kKCcuYWN0aXZlOmxhc3QgYScpWzBdXG4gICAgdmFyIGUgICAgICAgID0gJC5FdmVudCgnc2hvdy5icy50YWInLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgIH0pXG5cbiAgICAkdGhpcy50cmlnZ2VyKGUpXG5cbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICB2YXIgJHRhcmdldCA9ICQoc2VsZWN0b3IpXG5cbiAgICB0aGlzLmFjdGl2YXRlKCR0aGlzLnBhcmVudCgnbGknKSwgJHVsKVxuICAgIHRoaXMuYWN0aXZhdGUoJHRhcmdldCwgJHRhcmdldC5wYXJlbnQoKSwgZnVuY3Rpb24gKCkge1xuICAgICAgJHRoaXMudHJpZ2dlcih7XG4gICAgICAgIHR5cGU6ICdzaG93bi5icy50YWInLFxuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgVGFiLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgdmFyICRhY3RpdmUgICAgPSBjb250YWluZXIuZmluZCgnPiAuYWN0aXZlJylcbiAgICB2YXIgdHJhbnNpdGlvbiA9IGNhbGxiYWNrXG4gICAgICAmJiAkLnN1cHBvcnQudHJhbnNpdGlvblxuICAgICAgJiYgJGFjdGl2ZS5oYXNDbGFzcygnZmFkZScpXG5cbiAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgJGFjdGl2ZVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIC5maW5kKCc+IC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZScpXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcblxuICAgICAgZWxlbWVudC5hZGRDbGFzcygnYWN0aXZlJylcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgZWxlbWVudFswXS5vZmZzZXRXaWR0aCAvLyByZWZsb3cgZm9yIHRyYW5zaXRpb25cbiAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnaW4nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnZmFkZScpXG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50LnBhcmVudCgnLmRyb3Bkb3duLW1lbnUnKSkge1xuICAgICAgICBlbGVtZW50LmNsb3Nlc3QoJ2xpLmRyb3Bkb3duJykuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKClcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uID9cbiAgICAgICRhY3RpdmVcbiAgICAgICAgLm9uZSgkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsIG5leHQpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApIDpcbiAgICAgIG5leHQoKVxuXG4gICAgJGFjdGl2ZS5yZW1vdmVDbGFzcygnaW4nKVxuICB9XG5cblxuICAvLyBUQUIgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG9sZCA9ICQuZm4udGFiXG5cbiAgJC5mbi50YWIgPSBmdW5jdGlvbiAoIG9wdGlvbiApIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICA9ICR0aGlzLmRhdGEoJ2JzLnRhYicpXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMudGFiJywgKGRhdGEgPSBuZXcgVGFiKHRoaXMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oKVxuICAgIH0pXG4gIH1cblxuICAkLmZuLnRhYi5Db25zdHJ1Y3RvciA9IFRhYlxuXG5cbiAgLy8gVEFCIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PVxuXG4gICQuZm4udGFiLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi50YWIgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBUQUIgREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLnRhYi5kYXRhLWFwaScsICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICQodGhpcykudGFiKCdzaG93JylcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogYWZmaXguanMgdjMuMS4xXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNhZmZpeFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE0IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEFGRklYIENMQVNTIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBBZmZpeCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIEFmZml4LkRFRkFVTFRTLCBvcHRpb25zKVxuICAgIHRoaXMuJHdpbmRvdyA9ICQod2luZG93KVxuICAgICAgLm9uKCdzY3JvbGwuYnMuYWZmaXguZGF0YS1hcGknLCAkLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbiwgdGhpcykpXG4gICAgICAub24oJ2NsaWNrLmJzLmFmZml4LmRhdGEtYXBpJywgICQucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCwgdGhpcykpXG5cbiAgICB0aGlzLiRlbGVtZW50ICAgICA9ICQoZWxlbWVudClcbiAgICB0aGlzLmFmZml4ZWQgICAgICA9XG4gICAgdGhpcy51bnBpbiAgICAgICAgPVxuICAgIHRoaXMucGlubmVkT2Zmc2V0ID0gbnVsbFxuXG4gICAgdGhpcy5jaGVja1Bvc2l0aW9uKClcbiAgfVxuXG4gIEFmZml4LlJFU0VUID0gJ2FmZml4IGFmZml4LXRvcCBhZmZpeC1ib3R0b20nXG5cbiAgQWZmaXguREVGQVVMVFMgPSB7XG4gICAgb2Zmc2V0OiAwXG4gIH1cblxuICBBZmZpeC5wcm90b3R5cGUuZ2V0UGlubmVkT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnBpbm5lZE9mZnNldCkgcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0XG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhBZmZpeC5SRVNFVCkuYWRkQ2xhc3MoJ2FmZml4JylcbiAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy4kd2luZG93LnNjcm9sbFRvcCgpXG4gICAgdmFyIHBvc2l0aW9uICA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KClcbiAgICByZXR1cm4gKHRoaXMucGlubmVkT2Zmc2V0ID0gcG9zaXRpb24udG9wIC0gc2Nyb2xsVG9wKVxuICB9XG5cbiAgQWZmaXgucHJvdG90eXBlLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wID0gZnVuY3Rpb24gKCkge1xuICAgIHNldFRpbWVvdXQoJC5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sIHRoaXMpLCAxKVxuICB9XG5cbiAgQWZmaXgucHJvdG90eXBlLmNoZWNrUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpKSByZXR1cm5cblxuICAgIHZhciBzY3JvbGxIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKVxuICAgIHZhciBzY3JvbGxUb3AgICAgPSB0aGlzLiR3aW5kb3cuc2Nyb2xsVG9wKClcbiAgICB2YXIgcG9zaXRpb24gICAgID0gdGhpcy4kZWxlbWVudC5vZmZzZXQoKVxuICAgIHZhciBvZmZzZXQgICAgICAgPSB0aGlzLm9wdGlvbnMub2Zmc2V0XG4gICAgdmFyIG9mZnNldFRvcCAgICA9IG9mZnNldC50b3BcbiAgICB2YXIgb2Zmc2V0Qm90dG9tID0gb2Zmc2V0LmJvdHRvbVxuXG4gICAgaWYgKHRoaXMuYWZmaXhlZCA9PSAndG9wJykgcG9zaXRpb24udG9wICs9IHNjcm9sbFRvcFxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgIT0gJ29iamVjdCcpICAgICAgICAgb2Zmc2V0Qm90dG9tID0gb2Zmc2V0VG9wID0gb2Zmc2V0XG4gICAgaWYgKHR5cGVvZiBvZmZzZXRUb3AgPT0gJ2Z1bmN0aW9uJykgICAgb2Zmc2V0VG9wICAgID0gb2Zmc2V0LnRvcCh0aGlzLiRlbGVtZW50KVxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0Qm90dG9tID09ICdmdW5jdGlvbicpIG9mZnNldEJvdHRvbSA9IG9mZnNldC5ib3R0b20odGhpcy4kZWxlbWVudClcblxuICAgIHZhciBhZmZpeCA9IHRoaXMudW5waW4gICAhPSBudWxsICYmIChzY3JvbGxUb3AgKyB0aGlzLnVucGluIDw9IHBvc2l0aW9uLnRvcCkgPyBmYWxzZSA6XG4gICAgICAgICAgICAgICAgb2Zmc2V0Qm90dG9tICE9IG51bGwgJiYgKHBvc2l0aW9uLnRvcCArIHRoaXMuJGVsZW1lbnQuaGVpZ2h0KCkgPj0gc2Nyb2xsSGVpZ2h0IC0gb2Zmc2V0Qm90dG9tKSA/ICdib3R0b20nIDpcbiAgICAgICAgICAgICAgICBvZmZzZXRUb3AgICAgIT0gbnVsbCAmJiAoc2Nyb2xsVG9wIDw9IG9mZnNldFRvcCkgPyAndG9wJyA6IGZhbHNlXG5cbiAgICBpZiAodGhpcy5hZmZpeGVkID09PSBhZmZpeCkgcmV0dXJuXG4gICAgaWYgKHRoaXMudW5waW4pIHRoaXMuJGVsZW1lbnQuY3NzKCd0b3AnLCAnJylcblxuICAgIHZhciBhZmZpeFR5cGUgPSAnYWZmaXgnICsgKGFmZml4ID8gJy0nICsgYWZmaXggOiAnJylcbiAgICB2YXIgZSAgICAgICAgID0gJC5FdmVudChhZmZpeFR5cGUgKyAnLmJzLmFmZml4JylcblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdGhpcy5hZmZpeGVkID0gYWZmaXhcbiAgICB0aGlzLnVucGluID0gYWZmaXggPT0gJ2JvdHRvbScgPyB0aGlzLmdldFBpbm5lZE9mZnNldCgpIDogbnVsbFxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLnJlbW92ZUNsYXNzKEFmZml4LlJFU0VUKVxuICAgICAgLmFkZENsYXNzKGFmZml4VHlwZSlcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoYWZmaXhUeXBlLnJlcGxhY2UoJ2FmZml4JywgJ2FmZml4ZWQnKSkpXG5cbiAgICBpZiAoYWZmaXggPT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2Zmc2V0KHsgdG9wOiBzY3JvbGxIZWlnaHQgLSBvZmZzZXRCb3R0b20gLSB0aGlzLiRlbGVtZW50LmhlaWdodCgpIH0pXG4gICAgfVxuICB9XG5cblxuICAvLyBBRkZJWCBQTFVHSU4gREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBvbGQgPSAkLmZuLmFmZml4XG5cbiAgJC5mbi5hZmZpeCA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5hZmZpeCcpXG4gICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuYWZmaXgnLCAoZGF0YSA9IG5ldyBBZmZpeCh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgJC5mbi5hZmZpeC5Db25zdHJ1Y3RvciA9IEFmZml4XG5cblxuICAvLyBBRkZJWCBOTyBDT05GTElDVFxuICAvLyA9PT09PT09PT09PT09PT09PVxuXG4gICQuZm4uYWZmaXgubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLmFmZml4ID0gb2xkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG5cbiAgLy8gQUZGSVggREFUQS1BUElcbiAgLy8gPT09PT09PT09PT09PT1cblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnW2RhdGEtc3B5PVwiYWZmaXhcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkc3B5ID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgPSAkc3B5LmRhdGEoKVxuXG4gICAgICBkYXRhLm9mZnNldCA9IGRhdGEub2Zmc2V0IHx8IHt9XG5cbiAgICAgIGlmIChkYXRhLm9mZnNldEJvdHRvbSkgZGF0YS5vZmZzZXQuYm90dG9tID0gZGF0YS5vZmZzZXRCb3R0b21cbiAgICAgIGlmIChkYXRhLm9mZnNldFRvcCkgICAgZGF0YS5vZmZzZXQudG9wICAgID0gZGF0YS5vZmZzZXRUb3BcblxuICAgICAgJHNweS5hZmZpeChkYXRhKVxuICAgIH0pXG4gIH0pXG5cbn0oalF1ZXJ5KTtcbiIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJAY29udGV4dFwiOiB7XG4gICAgXCJAdm9jYWJcIjogXCJodHRwOi8vbGQuaXBvdGFibGVzLm5ldC9zY2hlbWEjXCIsXG4gICAgXCJpZFwiOiBcIkBpZFwiLFxuICAgIFwidHlwZVwiOiBcInR5cGVcIixcbiAgICBcImlucHV0XCI6IHsgXCJAdHlwZVwiOiBcIkBpZFwiLCBcIkBjb250YWluZXJcIjogXCJAc2V0XCIgfSxcbiAgICBcIm91dHB1dFwiOiB7IFwiQHR5cGVcIjogXCJAaWRcIiwgXCJAY29udGFpbmVyXCI6IFwiQHNldFwiIH0sXG4gICAgXCJpbnB1dE9mXCI6IHsgXCJAdHlwZVwiOiBcIkBpZFwiLCBcIkBjb250YWluZXJcIjogXCJAc2V0XCIgfSxcbiAgICBcIm91dHB1dE9mXCI6IHsgXCJAdHlwZVwiOiBcIkBpZFwiLCBcIkBjb250YWluZXJcIjogXCJAc2V0XCIgfVxuICB9LFxuICBcIkBncmFwaFwiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOiBcInVybjp1dWlkOjViYzE2MzNhLWJmNWItNGFlNi1iZjYzLWUwNGU2NTRkNDJiM1wiLFxuICAgICAgXCJ0eXBlXCI6IFwiVGhpbmdcIixcbiAgICAgIFwibmFtZVwiOiBcImNvZmZlZSBwb3dkZXJcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJjb2ZmZWUgYmVhbnMgZG8gbm90IG1ha2UgYmVzdCBjb2ZmZWUgaWYgdXNlZCBpbiB0aGVpciBvcmlnaW5hbCBmb3JtLCBwb3dkZXIgd29ya3MgbXVjaCBiZXR0ZXIgZm9yIGJyZXdpbmdcIixcbiAgICAgIFwiaW5wdXRPZlwiOiBbXCJ1cm46dXVpZDowNDJmYmJkZi01Mjc2LTRhYjQtYjU5Yi1kYWVlMzViNmRiMzFcIl1cbiAgICB9LCB7XG4gICAgICBcImlkXCI6IFwidXJuOnV1aWQ6ZDAwMjdiNTctYjZkZC00NGY3LWFmNjMtNjgxMWUxNTI2NTA3XCIsXG4gICAgICBcInR5cGVcIjogXCJUaGluZ1wiLFxuICAgICAgXCJuYW1lXCI6IFwiY29mZmVlIGdyb3VuZHNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJhZnRlciBicmV3aW5nIGNvZmZlZSB1c2luZyBwb3dkZXIsIHdlIGdldCBncm91bmRzIHdoaWNoIHN0aWxsIGNvbnRhaW4gc29tZSBudXRyaXRpb25zXCIsXG4gICAgICBcImlucHV0T2ZcIjogW1widXJuOnV1aWQ6MjM5OTY0YjctYjU5MS00N2YwLWJiMTUtODIwZWMwMjNjOGQ3XCJdLFxuICAgICAgXCJvdXRwdXRPZlwiOiBbXCJ1cm46dXVpZDowNDJmYmJkZi01Mjc2LTRhYjQtYjU5Yi1kYWVlMzViNmRiMzFcIl1cbiAgICB9LCB7XG4gICAgICBcImlkXCI6IFwidXJuOnV1aWQ6MDQyZmJiZGYtNTI3Ni00YWI0LWI1OWItZGFlZTM1YjZkYjMxXCIsXG4gICAgICBcInR5cGVcIjogXCJNb2R1bGVcIixcbiAgICAgIFwibmFtZVwiOiBcIm1ha2luZyBjb2ZmZWVcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJ0aGlzIG1vZHVsZSBleHBsYWlucyBob3cgdG8gbWFrZSBjb2ZmZSBzbyB5b3UgZG8gbm90IGZhbGwgYXNsZWVwXCIsXG4gICAgICBcImlucHV0XCI6IFtcInVybjp1dWlkOjViYzE2MzNhLWJmNWItNGFlNi1iZjYzLWUwNGU2NTRkNDJiM1wiXSxcbiAgICAgIFwib3V0cHV0XCI6IFtcInVybjp1dWlkOmQwMDI3YjU3LWI2ZGQtNDRmNy1hZjYzLTY4MTFlMTUyNjUwN1wiXSxcbiAgICAgIFwicHJvY2Vzc1wiOiBcInBvdXIgaG90IHdhdGVyIG92ZXIgY29mZmVlIGFuZCBzdGlyLCBlYXN5IHBlYXN5IGxlbW9uIHNxdWVlemluXCJcbiAgICB9LCB7XG4gICAgICBcImlkXCI6IFwidXJuOnV1aWQ6MjM5OTY0YjctYjU5MS00N2YwLWJiMTUtODIwZWMwMjNjOGQ3XCIsXG4gICAgICBcInR5cGVcIjogXCJNb2R1bGVcIixcbiAgICAgIFwibmFtZVwiOiBcImdyb3dpbmcgbXVzaHJvb21zXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwidGhpcyBtb2R1bGUgZXhwbGFpbnMgaG93IHRvIG1ha2UgY29mZmUgc28geW91IGRvIG5vdCBmYWxsIGFzbGVlcFwiLFxuICAgICAgXCJpbnB1dFwiOiBbXCJ1cm46dXVpZDpkMDAyN2I1Ny1iNmRkLTQ0ZjctYWY2My02ODExZTE1MjY1MDdcIl0sXG4gICAgICBcInByb2Nlc3NcIjogXCJtaXggYWxsIHRoZSBzdHVmZiB0b2dldGhlciBhbmQgcHV0IHNvbWUgc3BvcmVzIG9uIGl0XCJcbiAgICB9XG4gIF1cbn1cbiIsIi8qIVxuICogQ2hhcGxpbiAxLjAuMFxuICpcbiAqIENoYXBsaW4gbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBGb3IgYWxsIGRldGFpbHMgYW5kIGRvY3VtZW50YXRpb246XG4gKiBodHRwOi8vY2hhcGxpbmpzLm9yZ1xuICovXG5cbihmdW5jdGlvbigpe1xuXG52YXIgbG9hZGVyID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgbW9kdWxlcyA9IHt9O1xuICB2YXIgY2FjaGUgPSB7fTtcblxuICB2YXIgZHVtbXkgPSBmdW5jdGlvbigpIHtyZXR1cm4gZnVuY3Rpb24oKSB7fTt9O1xuICB2YXIgaW5pdE1vZHVsZSA9IGZ1bmN0aW9uKG5hbWUsIGRlZmluaXRpb24pIHtcbiAgICB2YXIgbW9kdWxlID0ge2lkOiBuYW1lLCBleHBvcnRzOiB7fX07XG4gICAgZGVmaW5pdGlvbihtb2R1bGUuZXhwb3J0cywgZHVtbXkoKSwgbW9kdWxlKTtcbiAgICB2YXIgZXhwb3J0cyA9IGNhY2hlW25hbWVdID0gbW9kdWxlLmV4cG9ydHM7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH07XG5cbiAgdmFyIGxvYWRlciA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkocGF0aCkpIHJldHVybiBjYWNoZVtwYXRoXTtcbiAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShwYXRoKSkgcmV0dXJuIGluaXRNb2R1bGUocGF0aCwgbW9kdWxlc1twYXRoXSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBtb2R1bGUgXCInICsgcGF0aCArICdcIicpO1xuICB9O1xuXG4gIGxvYWRlci5yZWdpc3RlciA9IGZ1bmN0aW9uKGJ1bmRsZSwgZm4pIHtcbiAgICBtb2R1bGVzW2J1bmRsZV0gPSBmbjtcbiAgfTtcbiAgcmV0dXJuIGxvYWRlcjtcbn0pKCk7XG5cbmxvYWRlci5yZWdpc3RlcignY2hhcGxpbi9hcHBsaWNhdGlvbicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQXBwbGljYXRpb24sIEJhY2tib25lLCBDb21wb3NlciwgRGlzcGF0Y2hlciwgRXZlbnRCcm9rZXIsIExheW91dCwgUm91dGVyLCBtZWRpYXRvciwgXztcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxuRGlzcGF0Y2hlciA9IGxvYWRlcignY2hhcGxpbi9kaXNwYXRjaGVyJyk7XG5cbkxheW91dCA9IGxvYWRlcignY2hhcGxpbi92aWV3cy9sYXlvdXQnKTtcblxuQ29tcG9zZXIgPSBsb2FkZXIoJ2NoYXBsaW4vY29tcG9zZXInKTtcblxuUm91dGVyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9yb3V0ZXInKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG5tZWRpYXRvciA9IGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcGxpY2F0aW9uID0gKGZ1bmN0aW9uKCkge1xuXG4gIEFwcGxpY2F0aW9uLmV4dGVuZCA9IEJhY2tib25lLk1vZGVsLmV4dGVuZDtcblxuICBfLmV4dGVuZChBcHBsaWNhdGlvbi5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUudGl0bGUgPSAnJztcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuZGlzcGF0Y2hlciA9IG51bGw7XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmxheW91dCA9IG51bGw7XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLnJvdXRlciA9IG51bGw7XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmNvbXBvc2VyID0gbnVsbDtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuc3RhcnRlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIEFwcGxpY2F0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbGl6ZShvcHRpb25zKTtcbiAgfVxuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcHBsaWNhdGlvbiNpbml0aWFsaXplOiBBcHAgd2FzIGFscmVhZHkgc3RhcnRlZCcpO1xuICAgIH1cbiAgICB0aGlzLmluaXRSb3V0ZXIob3B0aW9ucy5yb3V0ZXMsIG9wdGlvbnMpO1xuICAgIHRoaXMuaW5pdERpc3BhdGNoZXIob3B0aW9ucyk7XG4gICAgdGhpcy5pbml0TGF5b3V0KG9wdGlvbnMpO1xuICAgIHRoaXMuaW5pdENvbXBvc2VyKG9wdGlvbnMpO1xuICAgIHRoaXMuaW5pdE1lZGlhdG9yKCk7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQoKTtcbiAgfTtcblxuICBBcHBsaWNhdGlvbi5wcm90b3R5cGUuaW5pdERpc3BhdGNoZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKG9wdGlvbnMpO1xuICB9O1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0TGF5b3V0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBfcmVmO1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKChfcmVmID0gb3B0aW9ucy50aXRsZSkgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy50aXRsZSA9IHRoaXMudGl0bGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxheW91dCA9IG5ldyBMYXlvdXQob3B0aW9ucyk7XG4gIH07XG5cbiAgQXBwbGljYXRpb24ucHJvdG90eXBlLmluaXRDb21wb3NlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbXBvc2VyID0gbmV3IENvbXBvc2VyKG9wdGlvbnMpO1xuICB9O1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0TWVkaWF0b3IgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbWVkaWF0b3Iuc2VhbCgpO1xuICB9O1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5pbml0Um91dGVyID0gZnVuY3Rpb24ocm91dGVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKG9wdGlvbnMpO1xuICAgIHJldHVybiB0eXBlb2Ygcm91dGVzID09PSBcImZ1bmN0aW9uXCIgPyByb3V0ZXModGhpcy5yb3V0ZXIubWF0Y2gpIDogdm9pZCAwO1xuICB9O1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucm91dGVyLnN0YXJ0SGlzdG9yeSgpO1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5kaXNwb3NlZCA9IGZhbHNlO1xuXG4gIEFwcGxpY2F0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb3AsIHByb3BlcnRpZXMsIF9pLCBfbGVuO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb3BlcnRpZXMgPSBbJ2Rpc3BhdGNoZXInLCAnbGF5b3V0JywgJ3JvdXRlcicsICdjb21wb3NlciddO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gcHJvcGVydGllcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgcHJvcCA9IHByb3BlcnRpZXNbX2ldO1xuICAgICAgaWYgKHRoaXNbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICB0aGlzW3Byb3BdLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIHJldHVybiBBcHBsaWNhdGlvbjtcblxufSkoKTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9tZWRpYXRvcicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIGhhbmRsZXJzLCBtZWRpYXRvciwgc3VwcG9ydCwgdXRpbHMsIF8sXG4gIF9fc2xpY2UgPSBbXS5zbGljZTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuc3VwcG9ydCA9IGxvYWRlcignY2hhcGxpbi9saWIvc3VwcG9ydCcpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxubWVkaWF0b3IgPSB7fTtcblxubWVkaWF0b3Iuc3Vic2NyaWJlID0gQmFja2JvbmUuRXZlbnRzLm9uO1xuXG5tZWRpYXRvci51bnN1YnNjcmliZSA9IEJhY2tib25lLkV2ZW50cy5vZmY7XG5cbm1lZGlhdG9yLnB1Ymxpc2ggPSBCYWNrYm9uZS5FdmVudHMudHJpZ2dlcjtcblxubWVkaWF0b3IuX2NhbGxiYWNrcyA9IG51bGw7XG5cbmhhbmRsZXJzID0gbWVkaWF0b3IuX2hhbmRsZXJzID0ge307XG5cbm1lZGlhdG9yLnNldEhhbmRsZXIgPSBmdW5jdGlvbihuYW1lLCBtZXRob2QsIGluc3RhbmNlKSB7XG4gIHJldHVybiBoYW5kbGVyc1tuYW1lXSA9IHtcbiAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgbWV0aG9kOiBtZXRob2RcbiAgfTtcbn07XG5cbm1lZGlhdG9yLmV4ZWN1dGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGFyZ3MsIGhhbmRsZXIsIG5hbWUsIG5hbWVPck9iaiwgc2lsZW50O1xuICBuYW1lT3JPYmogPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICBzaWxlbnQgPSBmYWxzZTtcbiAgaWYgKHR5cGVvZiBuYW1lT3JPYmogPT09ICdvYmplY3QnKSB7XG4gICAgc2lsZW50ID0gbmFtZU9yT2JqLnNpbGVudDtcbiAgICBuYW1lID0gbmFtZU9yT2JqLm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgbmFtZSA9IG5hbWVPck9iajtcbiAgfVxuICBoYW5kbGVyID0gaGFuZGxlcnNbbmFtZV07XG4gIGlmIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGhhbmRsZXIubWV0aG9kLmFwcGx5KGhhbmRsZXIuaW5zdGFuY2UsIGFyZ3MpO1xuICB9IGVsc2UgaWYgKCFzaWxlbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtZWRpYXRvci5leGVjdXRlOiBcIiArIG5hbWUgKyBcIiBoYW5kbGVyIGlzIG5vdCBkZWZpbmVkXCIpO1xuICB9XG59O1xuXG5tZWRpYXRvci5yZW1vdmVIYW5kbGVycyA9IGZ1bmN0aW9uKGluc3RhbmNlT3JOYW1lcykge1xuICB2YXIgaGFuZGxlciwgbmFtZSwgX2ksIF9sZW47XG4gIGlmICghaW5zdGFuY2VPck5hbWVzKSB7XG4gICAgbWVkaWF0b3IuX2hhbmRsZXJzID0ge307XG4gIH1cbiAgaWYgKHV0aWxzLmlzQXJyYXkoaW5zdGFuY2VPck5hbWVzKSkge1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gaW5zdGFuY2VPck5hbWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBuYW1lID0gaW5zdGFuY2VPck5hbWVzW19pXTtcbiAgICAgIGRlbGV0ZSBoYW5kbGVyc1tuYW1lXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChuYW1lIGluIGhhbmRsZXJzKSB7XG4gICAgICBoYW5kbGVyID0gaGFuZGxlcnNbbmFtZV07XG4gICAgICBpZiAoaGFuZGxlci5pbnN0YW5jZSA9PT0gaW5zdGFuY2VPck5hbWVzKSB7XG4gICAgICAgIGRlbGV0ZSBoYW5kbGVyc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLnJlYWRvbmx5KG1lZGlhdG9yLCAnc3Vic2NyaWJlJywgJ3Vuc3Vic2NyaWJlJywgJ3B1Ymxpc2gnLCAnc2V0SGFuZGxlcicsICdleGVjdXRlJywgJ3JlbW92ZUhhbmRsZXJzJyk7XG5cbm1lZGlhdG9yLnNlYWwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHN1cHBvcnQucHJvcGVydHlEZXNjcmlwdG9ycyAmJiBPYmplY3Quc2VhbCkge1xuICAgIHJldHVybiBPYmplY3Quc2VhbChtZWRpYXRvcik7XG4gIH1cbn07XG5cbnV0aWxzLnJlYWRvbmx5KG1lZGlhdG9yLCAnc2VhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2Rpc3BhdGNoZXInLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBEaXNwYXRjaGVyLCBFdmVudEJyb2tlciwgbWVkaWF0b3IsIHV0aWxzLCBfO1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5tZWRpYXRvciA9IGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BhdGNoZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgRGlzcGF0Y2hlci5leHRlbmQgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQ7XG5cbiAgXy5leHRlbmQoRGlzcGF0Y2hlci5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5wcmV2aW91c1JvdXRlID0gbnVsbDtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5jdXJyZW50Q29udHJvbGxlciA9IG51bGw7XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuY3VycmVudFJvdXRlID0gbnVsbDtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5jdXJyZW50UGFyYW1zID0gbnVsbDtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5jdXJyZW50UXVlcnkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIERpc3BhdGNoZXIoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncyA9IF8uZGVmYXVsdHMob3B0aW9ucywge1xuICAgICAgY29udHJvbGxlclBhdGg6ICdjb250cm9sbGVycy8nLFxuICAgICAgY29udHJvbGxlclN1ZmZpeDogJ19jb250cm9sbGVyJ1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnN1YnNjcmliZUV2ZW50KCdyb3V0ZXI6bWF0Y2gnLCB0aGlzLmRpc3BhdGNoKTtcbiAgfTtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKHJvdXRlLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3JlZiwgX3JlZjEsXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgcGFyYW1zID0gcGFyYW1zID8gXy5leHRlbmQoe30sIHBhcmFtcykgOiB7fTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IF8uZXh0ZW5kKHt9LCBvcHRpb25zKSA6IHt9O1xuICAgIGlmICghKG9wdGlvbnMucXVlcnkgIT0gbnVsbCkpIHtcbiAgICAgIG9wdGlvbnMucXVlcnkgPSB7fTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZm9yY2VTdGFydHVwICE9PSB0cnVlKSB7XG4gICAgICBvcHRpb25zLmZvcmNlU3RhcnR1cCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuZm9yY2VTdGFydHVwICYmICgoX3JlZiA9IHRoaXMuY3VycmVudFJvdXRlKSAhPSBudWxsID8gX3JlZi5jb250cm9sbGVyIDogdm9pZCAwKSA9PT0gcm91dGUuY29udHJvbGxlciAmJiAoKF9yZWYxID0gdGhpcy5jdXJyZW50Um91dGUpICE9IG51bGwgPyBfcmVmMS5hY3Rpb24gOiB2b2lkIDApID09PSByb3V0ZS5hY3Rpb24gJiYgXy5pc0VxdWFsKHRoaXMuY3VycmVudFBhcmFtcywgcGFyYW1zKSAmJiBfLmlzRXF1YWwodGhpcy5jdXJyZW50UXVlcnksIG9wdGlvbnMucXVlcnkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxvYWRDb250cm9sbGVyKHJvdXRlLmNvbnRyb2xsZXIsIGZ1bmN0aW9uKENvbnRyb2xsZXIpIHtcbiAgICAgIHJldHVybiBfdGhpcy5jb250cm9sbGVyTG9hZGVkKHJvdXRlLCBwYXJhbXMsIG9wdGlvbnMsIENvbnRyb2xsZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmxvYWRDb250cm9sbGVyID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgIHZhciBmaWxlTmFtZSwgbW9kdWxlTmFtZSxcbiAgICAgIF90aGlzID0gdGhpcztcbiAgICBmaWxlTmFtZSA9IG5hbWUgKyB0aGlzLnNldHRpbmdzLmNvbnRyb2xsZXJTdWZmaXg7XG4gICAgbW9kdWxlTmFtZSA9IHRoaXMuc2V0dGluZ3MuY29udHJvbGxlclBhdGggKyBmaWxlTmFtZTtcbiAgICBpZiAodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwgPyBkZWZpbmUuYW1kIDogdm9pZCAwKSB7XG4gICAgICByZXR1cm4gcmVxdWlyZShbbW9kdWxlTmFtZV0sIGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIocmVxdWlyZShtb2R1bGVOYW1lKSk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH07XG5cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuY29udHJvbGxlckxvYWRlZCA9IGZ1bmN0aW9uKHJvdXRlLCBwYXJhbXMsIG9wdGlvbnMsIENvbnRyb2xsZXIpIHtcbiAgICB2YXIgY29udHJvbGxlciwgcHJldiwgcHJldmlvdXM7XG4gICAgaWYgKHRoaXMubmV4dFByZXZpb3VzUm91dGUgPSB0aGlzLmN1cnJlbnRSb3V0ZSkge1xuICAgICAgcHJldmlvdXMgPSBfLmV4dGVuZCh7fSwgdGhpcy5uZXh0UHJldmlvdXNSb3V0ZSk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFyYW1zICE9IG51bGwpIHtcbiAgICAgICAgcHJldmlvdXMucGFyYW1zID0gdGhpcy5jdXJyZW50UGFyYW1zO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZpb3VzLnByZXZpb3VzKSB7XG4gICAgICAgIGRlbGV0ZSBwcmV2aW91cy5wcmV2aW91cztcbiAgICAgIH1cbiAgICAgIHByZXYgPSB7XG4gICAgICAgIHByZXZpb3VzOiBwcmV2aW91c1xuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5uZXh0Q3VycmVudFJvdXRlID0gXy5leHRlbmQoe30sIHJvdXRlLCBwcmV2KTtcbiAgICBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIocGFyYW1zLCB0aGlzLm5leHRDdXJyZW50Um91dGUsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dGVCZWZvcmVBY3Rpb24oY29udHJvbGxlciwgdGhpcy5uZXh0Q3VycmVudFJvdXRlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmV4ZWN1dGVBY3Rpb24gPSBmdW5jdGlvbihjb250cm9sbGVyLCByb3V0ZSwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMucHVibGlzaEV2ZW50KCdiZWZvcmVDb250cm9sbGVyRGlzcG9zZScsIHRoaXMuY3VycmVudENvbnRyb2xsZXIpO1xuICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlci5kaXNwb3NlKHBhcmFtcywgcm91dGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRDb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLmN1cnJlbnRQYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5jdXJyZW50UXVlcnkgPSBvcHRpb25zLnF1ZXJ5O1xuICAgIGNvbnRyb2xsZXJbcm91dGUuYWN0aW9uXShwYXJhbXMsIHJvdXRlLCBvcHRpb25zKTtcbiAgICBpZiAoY29udHJvbGxlci5yZWRpcmVjdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnB1Ymxpc2hFdmVudCgnZGlzcGF0Y2hlcjpkaXNwYXRjaCcsIHRoaXMuY3VycmVudENvbnRyb2xsZXIsIHBhcmFtcywgcm91dGUsIG9wdGlvbnMpO1xuICB9O1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmV4ZWN1dGVCZWZvcmVBY3Rpb24gPSBmdW5jdGlvbihjb250cm9sbGVyLCByb3V0ZSwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgdmFyIGJlZm9yZSwgZXhlY3V0ZUFjdGlvbiwgcHJvbWlzZSxcbiAgICAgIF90aGlzID0gdGhpcztcbiAgICBiZWZvcmUgPSBjb250cm9sbGVyLmJlZm9yZUFjdGlvbjtcbiAgICBleGVjdXRlQWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoY29udHJvbGxlci5yZWRpcmVjdGVkIHx8IF90aGlzLmN1cnJlbnRSb3V0ZSAmJiByb3V0ZSA9PT0gX3RoaXMuY3VycmVudFJvdXRlKSB7XG4gICAgICAgIF90aGlzLm5leHRQcmV2aW91c1JvdXRlID0gX3RoaXMubmV4dEN1cnJlbnRSb3V0ZSA9IG51bGw7XG4gICAgICAgIGNvbnRyb2xsZXIuZGlzcG9zZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpcy5wcmV2aW91c1JvdXRlID0gX3RoaXMubmV4dFByZXZpb3VzUm91dGU7XG4gICAgICBfdGhpcy5jdXJyZW50Um91dGUgPSBfdGhpcy5uZXh0Q3VycmVudFJvdXRlO1xuICAgICAgX3RoaXMubmV4dFByZXZpb3VzUm91dGUgPSBfdGhpcy5uZXh0Q3VycmVudFJvdXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBfdGhpcy5leGVjdXRlQWN0aW9uKGNvbnRyb2xsZXIsIHJvdXRlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgaWYgKCFiZWZvcmUpIHtcbiAgICAgIGV4ZWN1dGVBY3Rpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBiZWZvcmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbnRyb2xsZXIjYmVmb3JlQWN0aW9uOiBmdW5jdGlvbiBleHBlY3RlZC4gJyArICdPbGQgb2JqZWN0LWxpa2UgZm9ybSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cbiAgICBwcm9taXNlID0gY29udHJvbGxlci5iZWZvcmVBY3Rpb24ocGFyYW1zLCByb3V0ZSwgb3B0aW9ucyk7XG4gICAgaWYgKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGV4ZWN1dGVBY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwb3NlZCA9IGZhbHNlO1xuXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsRXZlbnRzKCk7XG4gICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIHJldHVybiBEaXNwYXRjaGVyO1xuXG59KSgpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2NvbXBvc2VyJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgQ29tcG9zZXIsIENvbXBvc2l0aW9uLCBFdmVudEJyb2tlciwgbWVkaWF0b3IsIHV0aWxzLCBfO1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5tZWRpYXRvciA9IGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxuQ29tcG9zaXRpb24gPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2NvbXBvc2l0aW9uJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb3NlciA9IChmdW5jdGlvbigpIHtcblxuICBDb21wb3Nlci5leHRlbmQgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQ7XG5cbiAgXy5leHRlbmQoQ29tcG9zZXIucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgQ29tcG9zZXIucHJvdG90eXBlLmNvbXBvc2l0aW9ucyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gQ29tcG9zZXIoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBDb21wb3Nlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMuY29tcG9zaXRpb25zID0ge307XG4gICAgbWVkaWF0b3Iuc2V0SGFuZGxlcignY29tcG9zZXI6Y29tcG9zZScsIHRoaXMuY29tcG9zZSwgdGhpcyk7XG4gICAgbWVkaWF0b3Iuc2V0SGFuZGxlcignY29tcG9zZXI6cmV0cmlldmUnLCB0aGlzLnJldHJpZXZlLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmVFdmVudCgnZGlzcGF0Y2hlcjpkaXNwYXRjaCcsIHRoaXMuY2xlYW51cCk7XG4gIH07XG5cbiAgQ29tcG9zZXIucHJvdG90eXBlLmNvbXBvc2UgPSBmdW5jdGlvbihuYW1lLCBzZWNvbmQsIHRoaXJkKSB7XG4gICAgaWYgKHR5cGVvZiBzZWNvbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICh0aGlyZCB8fCBzZWNvbmQucHJvdG90eXBlLmRpc3Bvc2UpIHtcbiAgICAgICAgaWYgKHNlY29uZC5wcm90b3R5cGUgaW5zdGFuY2VvZiBDb21wb3NpdGlvbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9jb21wb3NlKG5hbWUsIHtcbiAgICAgICAgICAgIGNvbXBvc2l0aW9uOiBzZWNvbmQsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlyZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9jb21wb3NlKG5hbWUsIHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXJkLFxuICAgICAgICAgICAgY29tcG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBhdXRvUmVuZGVyLCBkaXNhYmxlZEF1dG9SZW5kZXI7XG4gICAgICAgICAgICAgIHRoaXMuaXRlbSA9IG5ldyBzZWNvbmQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgYXV0b1JlbmRlciA9IHRoaXMuaXRlbS5hdXRvUmVuZGVyO1xuICAgICAgICAgICAgICBkaXNhYmxlZEF1dG9SZW5kZXIgPSBhdXRvUmVuZGVyID09PSB2b2lkIDAgfHwgIWF1dG9SZW5kZXI7XG4gICAgICAgICAgICAgIGlmIChkaXNhYmxlZEF1dG9SZW5kZXIgJiYgdHlwZW9mIHRoaXMuaXRlbS5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtLnJlbmRlcigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9jb21wb3NlKG5hbWUsIHtcbiAgICAgICAgY29tcG9zZTogc2Vjb25kXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlyZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvc2UobmFtZSwge1xuICAgICAgICBjb21wb3NlOiB0aGlyZCxcbiAgICAgICAgb3B0aW9uczogc2Vjb25kXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvc2UobmFtZSwgc2Vjb25kKTtcbiAgfTtcblxuICBDb21wb3Nlci5wcm90b3R5cGUuX2NvbXBvc2UgPSBmdW5jdGlvbihuYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbXBvc2l0aW9uLCBjdXJyZW50LCBpc1Byb21pc2UsIHJldHVybmVkO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb21wb3NlICE9PSAnZnVuY3Rpb24nICYmICEob3B0aW9ucy5jb21wb3NpdGlvbiAhPSBudWxsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb3NlciNjb21wb3NlIHdhcyB1c2VkIGluY29ycmVjdGx5Jyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNvbXBvc2l0aW9uICE9IG51bGwpIHtcbiAgICAgIGNvbXBvc2l0aW9uID0gbmV3IG9wdGlvbnMuY29tcG9zaXRpb24ob3B0aW9ucy5vcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9zaXRpb24gPSBuZXcgQ29tcG9zaXRpb24ob3B0aW9ucy5vcHRpb25zKTtcbiAgICAgIGNvbXBvc2l0aW9uLmNvbXBvc2UgPSBvcHRpb25zLmNvbXBvc2U7XG4gICAgICBpZiAob3B0aW9ucy5jaGVjaykge1xuICAgICAgICBjb21wb3NpdGlvbi5jaGVjayA9IG9wdGlvbnMuY2hlY2s7XG4gICAgICB9XG4gICAgfVxuICAgIGN1cnJlbnQgPSB0aGlzLmNvbXBvc2l0aW9uc1tuYW1lXTtcbiAgICBpc1Byb21pc2UgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50LmNoZWNrKGNvbXBvc2l0aW9uLm9wdGlvbnMpKSB7XG4gICAgICBjdXJyZW50LnN0YWxlKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm5lZCA9IGNvbXBvc2l0aW9uLmNvbXBvc2UoY29tcG9zaXRpb24ub3B0aW9ucyk7XG4gICAgICBpc1Byb21pc2UgPSB0eXBlb2YgKHJldHVybmVkICE9IG51bGwgPyByZXR1cm5lZC50aGVuIDogdm9pZCAwKSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGNvbXBvc2l0aW9uLnN0YWxlKGZhbHNlKTtcbiAgICAgIHRoaXMuY29tcG9zaXRpb25zW25hbWVdID0gY29tcG9zaXRpb247XG4gICAgfVxuICAgIGlmIChpc1Byb21pc2UpIHtcbiAgICAgIHJldHVybiByZXR1cm5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9zaXRpb25zW25hbWVdLml0ZW07XG4gICAgfVxuICB9O1xuXG4gIENvbXBvc2VyLnByb3RvdHlwZS5yZXRyaWV2ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgYWN0aXZlO1xuICAgIGFjdGl2ZSA9IHRoaXMuY29tcG9zaXRpb25zW25hbWVdO1xuICAgIGlmIChhY3RpdmUgJiYgIWFjdGl2ZS5zdGFsZSgpKSB7XG4gICAgICByZXR1cm4gYWN0aXZlLml0ZW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICB9O1xuXG4gIENvbXBvc2VyLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbXBvc2l0aW9uLCBuYW1lLCBfcmVmO1xuICAgIF9yZWYgPSB0aGlzLmNvbXBvc2l0aW9ucztcbiAgICBmb3IgKG5hbWUgaW4gX3JlZikge1xuICAgICAgY29tcG9zaXRpb24gPSBfcmVmW25hbWVdO1xuICAgICAgaWYgKGNvbXBvc2l0aW9uLnN0YWxlKCkpIHtcbiAgICAgICAgY29tcG9zaXRpb24uZGlzcG9zZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5jb21wb3NpdGlvbnNbbmFtZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb3NpdGlvbi5zdGFsZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tcG9zaXRpb24sIG5hbWUsIF9yZWY7XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51bnN1YnNjcmliZUFsbEV2ZW50cygpO1xuICAgIG1lZGlhdG9yLnJlbW92ZUhhbmRsZXJzKHRoaXMpO1xuICAgIF9yZWYgPSB0aGlzLmNvbXBvc2l0aW9ucztcbiAgICBmb3IgKG5hbWUgaW4gX3JlZikge1xuICAgICAgY29tcG9zaXRpb24gPSBfcmVmW25hbWVdO1xuICAgICAgY29tcG9zaXRpb24uZGlzcG9zZSgpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5jb21wb3NpdGlvbnM7XG4gICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NlcjtcblxufSkoKTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9jb250cm9sbGVycy9jb250cm9sbGVyJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgQ29udHJvbGxlciwgRXZlbnRCcm9rZXIsIG1lZGlhdG9yLCB1dGlscywgXyxcbiAgX19zbGljZSA9IFtdLnNsaWNlLFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxubWVkaWF0b3IgPSBsb2FkZXIoJ2NoYXBsaW4vbWVkaWF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gIENvbnRyb2xsZXIuZXh0ZW5kID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kO1xuXG4gIF8uZXh0ZW5kKENvbnRyb2xsZXIucHJvdG90eXBlLCBCYWNrYm9uZS5FdmVudHMpO1xuXG4gIF8uZXh0ZW5kKENvbnRyb2xsZXIucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUudmlldyA9IG51bGw7XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUucmVkaXJlY3RlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIENvbnRyb2xsZXIoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBDb250cm9sbGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7fTtcblxuICBDb250cm9sbGVyLnByb3RvdHlwZS5iZWZvcmVBY3Rpb24gPSBmdW5jdGlvbigpIHt9O1xuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLmFkanVzdFRpdGxlID0gZnVuY3Rpb24oc3VidGl0bGUpIHtcbiAgICByZXR1cm4gbWVkaWF0b3IuZXhlY3V0ZSgnYWRqdXN0VGl0bGUnLCBzdWJ0aXRsZSk7XG4gIH07XG5cbiAgQ29udHJvbGxlci5wcm90b3R5cGUucmV1c2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIG1ldGhvZDtcbiAgICBtZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gJ3JldHJpZXZlJyA6ICdjb21wb3NlJztcbiAgICByZXR1cm4gbWVkaWF0b3IuZXhlY3V0ZS5hcHBseShtZWRpYXRvciwgW1wiY29tcG9zZXI6XCIgKyBtZXRob2RdLmNvbmNhdChfX3NsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICB9O1xuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLmNvbXBvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xsZXIjY29tcG9zZSB3YXMgbW92ZWQgdG8gQ29udHJvbGxlciNyZXVzZScpO1xuICB9O1xuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLnJlZGlyZWN0VG8gPSBmdW5jdGlvbihwYXRoRGVzYywgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgdGhpcy5yZWRpcmVjdGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdXRpbHMucmVkaXJlY3RUbyhwYXRoRGVzYywgcGFyYW1zLCBvcHRpb25zKTtcbiAgfTtcblxuICBDb250cm9sbGVyLnByb3RvdHlwZS5kaXNwb3NlZCA9IGZhbHNlO1xuXG4gIENvbnRyb2xsZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb2JqLCBwcm9wO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiB0aGlzKSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHRoaXMsIHByb3ApKSBjb250aW51ZTtcbiAgICAgIG9iaiA9IHRoaXNbcHJvcF07XG4gICAgICBpZiAoIShvYmogJiYgdHlwZW9mIG9iai5kaXNwb3NlID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIG9iai5kaXNwb3NlKCk7XG4gICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICB9XG4gICAgdGhpcy51bnN1YnNjcmliZUFsbEV2ZW50cygpO1xuICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xuICAgIHRoaXMuZGlzcG9zZWQgPSB0cnVlO1xuICAgIHJldHVybiB0eXBlb2YgT2JqZWN0LmZyZWV6ZSA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmZyZWV6ZSh0aGlzKSA6IHZvaWQgMDtcbiAgfTtcblxuICByZXR1cm4gQ29udHJvbGxlcjtcblxufSkoKTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9tb2RlbHMvY29sbGVjdGlvbicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIENvbGxlY3Rpb24sIEV2ZW50QnJva2VyLCBNb2RlbCwgdXRpbHMsIF8sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG5Nb2RlbCA9IGxvYWRlcignY2hhcGxpbi9tb2RlbHMvbW9kZWwnKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sbGVjdGlvbiA9IChmdW5jdGlvbihfc3VwZXIpIHtcblxuICBfX2V4dGVuZHMoQ29sbGVjdGlvbiwgX3N1cGVyKTtcblxuICBmdW5jdGlvbiBDb2xsZWN0aW9uKCkge1xuICAgIHJldHVybiBDb2xsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgXy5leHRlbmQoQ29sbGVjdGlvbi5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBDb2xsZWN0aW9uLnByb3RvdHlwZS5tb2RlbCA9IE1vZGVsO1xuXG4gIENvbGxlY3Rpb24ucHJvdG90eXBlLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm1hcCh1dGlscy5zZXJpYWxpemUpO1xuICB9O1xuXG4gIENvbGxlY3Rpb24ucHJvdG90eXBlLmRpc3Bvc2VkID0gZmFsc2U7XG5cbiAgQ29sbGVjdGlvbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcm9wLCBwcm9wZXJ0aWVzLCBfaSwgX2xlbjtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRyaWdnZXIoJ2Rpc3Bvc2UnLCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KFtdLCB7XG4gICAgICBzaWxlbnQ6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsRXZlbnRzKCk7XG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKCk7XG4gICAgdGhpcy5vZmYoKTtcbiAgICBwcm9wZXJ0aWVzID0gWydtb2RlbCcsICdtb2RlbHMnLCAnX2J5SWQnLCAnX2J5Q2lkJywgJ19jYWxsYmFja3MnXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHByb3BlcnRpZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHByb3AgPSBwcm9wZXJ0aWVzW19pXTtcbiAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbGxlY3Rpb247XG5cbn0pKEJhY2tib25lLkNvbGxlY3Rpb24pO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL21vZGVscy9tb2RlbCcsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIEV2ZW50QnJva2VyLCBNb2RlbCwgc2VyaWFsaXplQXR0cmlidXRlcywgc2VyaWFsaXplTW9kZWxBdHRyaWJ1dGVzLCB1dGlscywgXyxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG5zZXJpYWxpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24obW9kZWwsIGF0dHJpYnV0ZXMsIG1vZGVsU3RhY2spIHtcbiAgdmFyIGRlbGVnYXRvciwga2V5LCBvdGhlck1vZGVsLCBzZXJpYWxpemVkTW9kZWxzLCB2YWx1ZSwgX2ksIF9sZW4sIF9yZWY7XG4gIGRlbGVnYXRvciA9IHV0aWxzLmJlZ2V0KGF0dHJpYnV0ZXMpO1xuICBpZiAobW9kZWxTdGFjayA9PSBudWxsKSB7XG4gICAgbW9kZWxTdGFjayA9IHt9O1xuICB9XG4gIG1vZGVsU3RhY2tbbW9kZWwuY2lkXSA9IHRydWU7XG4gIGZvciAoa2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBCYWNrYm9uZS5Nb2RlbCkge1xuICAgICAgZGVsZWdhdG9yW2tleV0gPSBzZXJpYWxpemVNb2RlbEF0dHJpYnV0ZXModmFsdWUsIG1vZGVsLCBtb2RlbFN0YWNrKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQmFja2JvbmUuQ29sbGVjdGlvbikge1xuICAgICAgc2VyaWFsaXplZE1vZGVscyA9IFtdO1xuICAgICAgX3JlZiA9IHZhbHVlLm1vZGVscztcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBvdGhlck1vZGVsID0gX3JlZltfaV07XG4gICAgICAgIHNlcmlhbGl6ZWRNb2RlbHMucHVzaChzZXJpYWxpemVNb2RlbEF0dHJpYnV0ZXMob3RoZXJNb2RlbCwgbW9kZWwsIG1vZGVsU3RhY2spKTtcbiAgICAgIH1cbiAgICAgIGRlbGVnYXRvcltrZXldID0gc2VyaWFsaXplZE1vZGVscztcbiAgICB9XG4gIH1cbiAgZGVsZXRlIG1vZGVsU3RhY2tbbW9kZWwuY2lkXTtcbiAgcmV0dXJuIGRlbGVnYXRvcjtcbn07XG5cbnNlcmlhbGl6ZU1vZGVsQXR0cmlidXRlcyA9IGZ1bmN0aW9uKG1vZGVsLCBjdXJyZW50TW9kZWwsIG1vZGVsU3RhY2spIHtcbiAgdmFyIGF0dHJpYnV0ZXM7XG4gIGlmIChtb2RlbCA9PT0gY3VycmVudE1vZGVsIHx8IG1vZGVsLmNpZCBpbiBtb2RlbFN0YWNrKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgYXR0cmlidXRlcyA9IHR5cGVvZiBtb2RlbC5nZXRBdHRyaWJ1dGVzID09PSAnZnVuY3Rpb24nID8gbW9kZWwuZ2V0QXR0cmlidXRlcygpIDogbW9kZWwuYXR0cmlidXRlcztcbiAgcmV0dXJuIHNlcmlhbGl6ZUF0dHJpYnV0ZXMobW9kZWwsIGF0dHJpYnV0ZXMsIG1vZGVsU3RhY2spO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RlbCA9IChmdW5jdGlvbihfc3VwZXIpIHtcblxuICBfX2V4dGVuZHMoTW9kZWwsIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gTW9kZWwoKSB7XG4gICAgcmV0dXJuIE1vZGVsLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgXy5leHRlbmQoTW9kZWwucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgTW9kZWwucHJvdG90eXBlLmdldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzO1xuICB9O1xuXG4gIE1vZGVsLnByb3RvdHlwZS5zZXJpYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplQXR0cmlidXRlcyh0aGlzLCB0aGlzLmdldEF0dHJpYnV0ZXMoKSk7XG4gIH07XG5cbiAgTW9kZWwucHJvdG90eXBlLmRpc3Bvc2VkID0gZmFsc2U7XG5cbiAgTW9kZWwucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvcCwgcHJvcGVydGllcywgX2ksIF9sZW47XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50cmlnZ2VyKCdkaXNwb3NlJywgdGhpcyk7XG4gICAgdGhpcy51bnN1YnNjcmliZUFsbEV2ZW50cygpO1xuICAgIHRoaXMuc3RvcExpc3RlbmluZygpO1xuICAgIHRoaXMub2ZmKCk7XG4gICAgcHJvcGVydGllcyA9IFsnY29sbGVjdGlvbicsICdhdHRyaWJ1dGVzJywgJ2NoYW5nZWQnLCAnX2VzY2FwZWRBdHRyaWJ1dGVzJywgJ19wcmV2aW91c0F0dHJpYnV0ZXMnLCAnX3NpbGVudCcsICdfcGVuZGluZycsICdfY2FsbGJhY2tzJ107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBwcm9wZXJ0aWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBwcm9wID0gcHJvcGVydGllc1tfaV07XG4gICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICB9XG4gICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIHJldHVybiBNb2RlbDtcblxufSkoQmFja2JvbmUuTW9kZWwpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL3ZpZXdzL2xheW91dCcsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCwgQmFja2JvbmUsIEV2ZW50QnJva2VyLCBMYXlvdXQsIFZpZXcsIG1lZGlhdG9yLCB1dGlscywgXyxcbiAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5tZWRpYXRvciA9IGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxuRXZlbnRCcm9rZXIgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL2V2ZW50X2Jyb2tlcicpO1xuXG5WaWV3ID0gbG9hZGVyKCdjaGFwbGluL3ZpZXdzL3ZpZXcnKTtcblxuJCA9IEJhY2tib25lLiQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuXG4gIF9fZXh0ZW5kcyhMYXlvdXQsIF9zdXBlcik7XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5lbCA9ICdib2R5JztcblxuICBMYXlvdXQucHJvdG90eXBlLmtlZXBFbGVtZW50ID0gdHJ1ZTtcblxuICBMYXlvdXQucHJvdG90eXBlLnRpdGxlID0gJyc7XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5nbG9iYWxSZWdpb25zID0gbnVsbDtcblxuICBMYXlvdXQucHJvdG90eXBlLmxpc3RlbiA9IHtcbiAgICAnYmVmb3JlQ29udHJvbGxlckRpc3Bvc2UgbWVkaWF0b3InOiAnc2Nyb2xsJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIExheW91dChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLm9wZW5MaW5rID0gX19iaW5kKHRoaXMub3BlbkxpbmssIHRoaXMpO1xuXG4gICAgdGhpcy5nbG9iYWxSZWdpb25zID0gW107XG4gICAgdGhpcy50aXRsZSA9IG9wdGlvbnMudGl0bGU7XG4gICAgaWYgKG9wdGlvbnMucmVnaW9ucykge1xuICAgICAgdGhpcy5yZWdpb25zID0gb3B0aW9ucy5yZWdpb25zO1xuICAgIH1cbiAgICB0aGlzLnNldHRpbmdzID0gXy5kZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgICB0aXRsZVRlbXBsYXRlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHZhciBzdDtcbiAgICAgICAgc3QgPSBkYXRhLnN1YnRpdGxlID8gXCJcIiArIGRhdGEuc3VidGl0bGUgKyBcIiBcXHUyMDEzIFwiIDogJyc7XG4gICAgICAgIHJldHVybiBzdCArIGRhdGEudGl0bGU7XG4gICAgICB9LFxuICAgICAgb3BlbkV4dGVybmFsVG9CbGFuazogZmFsc2UsXG4gICAgICByb3V0ZUxpbmtzOiAnYSwgLmdvLXRvJyxcbiAgICAgIHNraXBSb3V0aW5nOiAnLm5vc2NyaXB0JyxcbiAgICAgIHNjcm9sbFRvOiBbMCwgMF1cbiAgICB9KTtcbiAgICBtZWRpYXRvci5zZXRIYW5kbGVyKCdyZWdpb246c2hvdycsIHRoaXMuc2hvd1JlZ2lvbiwgdGhpcyk7XG4gICAgbWVkaWF0b3Iuc2V0SGFuZGxlcigncmVnaW9uOnJlZ2lzdGVyJywgdGhpcy5yZWdpc3RlclJlZ2lvbkhhbmRsZXIsIHRoaXMpO1xuICAgIG1lZGlhdG9yLnNldEhhbmRsZXIoJ3JlZ2lvbjp1bnJlZ2lzdGVyJywgdGhpcy51bnJlZ2lzdGVyUmVnaW9uSGFuZGxlciwgdGhpcyk7XG4gICAgbWVkaWF0b3Iuc2V0SGFuZGxlcigncmVnaW9uOmZpbmQnLCB0aGlzLnJlZ2lvbkJ5TmFtZSwgdGhpcyk7XG4gICAgbWVkaWF0b3Iuc2V0SGFuZGxlcignYWRqdXN0VGl0bGUnLCB0aGlzLmFkanVzdFRpdGxlLCB0aGlzKTtcbiAgICBMYXlvdXQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Mucm91dGVMaW5rcykge1xuICAgICAgdGhpcy5zdGFydExpbmtSb3V0aW5nKCk7XG4gICAgfVxuICB9XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcG9zaXRpb247XG4gICAgcG9zaXRpb24gPSB0aGlzLnNldHRpbmdzLnNjcm9sbFRvO1xuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvblswXSwgcG9zaXRpb25bMV0pO1xuICAgIH1cbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLmFkanVzdFRpdGxlID0gZnVuY3Rpb24oc3VidGl0bGUpIHtcbiAgICB2YXIgdGl0bGUsXG4gICAgICBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKHN1YnRpdGxlID09IG51bGwpIHtcbiAgICAgIHN1YnRpdGxlID0gJyc7XG4gICAgfVxuICAgIHRpdGxlID0gdGhpcy5zZXR0aW5ncy50aXRsZVRlbXBsYXRlKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc3VidGl0bGU6IHN1YnRpdGxlXG4gICAgfSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICByZXR1cm4gX3RoaXMucHVibGlzaEV2ZW50KCdhZGp1c3RUaXRsZScsIHN1YnRpdGxlLCB0aXRsZSk7XG4gICAgfSwgNTApO1xuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnN0YXJ0TGlua1JvdXRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcm91dGU7XG4gICAgcm91dGUgPSB0aGlzLnNldHRpbmdzLnJvdXRlTGlua3M7XG4gICAgaWYgKCFyb3V0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoJCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGVsLm9uKCdjbGljaycsIHJvdXRlLCB0aGlzLm9wZW5MaW5rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUoJ2NsaWNrJywgcm91dGUsIHRoaXMub3BlbkxpbmspO1xuICAgIH1cbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnN0b3BMaW5rUm91dGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByb3V0ZTtcbiAgICByb3V0ZSA9IHRoaXMuc2V0dGluZ3Mucm91dGVMaW5rcztcbiAgICBpZiAoJCkge1xuICAgICAgaWYgKHJvdXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRlbC5vZmYoJ2NsaWNrJywgcm91dGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy51bmRlbGVnYXRlKCdjbGljaycsIHJvdXRlLCB0aGlzLm9wZW5MaW5rKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5pc0V4dGVybmFsTGluayA9IGZ1bmN0aW9uKGxpbmspIHtcbiAgICB2YXIgX3JlZiwgX3JlZjE7XG4gICAgcmV0dXJuIGxpbmsudGFyZ2V0ID09PSAnX2JsYW5rJyB8fCBsaW5rLnJlbCA9PT0gJ2V4dGVybmFsJyB8fCAoKF9yZWYgPSBsaW5rLnByb3RvY29sKSAhPT0gJ2h0dHA6JyAmJiBfcmVmICE9PSAnaHR0cHM6JyAmJiBfcmVmICE9PSAnZmlsZTonKSB8fCAoKF9yZWYxID0gbGluay5ob3N0bmFtZSkgIT09IGxvY2F0aW9uLmhvc3RuYW1lICYmIF9yZWYxICE9PSAnJyk7XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5vcGVuTGluayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGVsLCBleHRlcm5hbCwgaHJlZiwgaXNBbmNob3IsIHNraXBSb3V0aW5nLCB0eXBlO1xuICAgIGlmICh1dGlscy5tb2RpZmllcktleVByZXNzZWQoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsID0gJCA/IGV2ZW50LmN1cnJlbnRUYXJnZXQgOiBldmVudC5kZWxlZ2F0ZVRhcmdldDtcbiAgICBpc0FuY2hvciA9IGVsLm5vZGVOYW1lID09PSAnQSc7XG4gICAgaHJlZiA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJykgfHwgbnVsbDtcbiAgICBpZiAoIShocmVmICE9IG51bGwpIHx8IGhyZWYgPT09ICcnIHx8IGhyZWYuY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2tpcFJvdXRpbmcgPSB0aGlzLnNldHRpbmdzLnNraXBSb3V0aW5nO1xuICAgIHR5cGUgPSB0eXBlb2Ygc2tpcFJvdXRpbmc7XG4gICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicgJiYgIXNraXBSb3V0aW5nKGhyZWYsIGVsKSB8fCB0eXBlID09PSAnc3RyaW5nJyAmJiAoJCA/ICQoZWwpLmlzKHNraXBSb3V0aW5nKSA6IEJhY2tib25lLnV0aWxzLm1hdGNoZXNTZWxlY3RvcihlbCwgc2tpcFJvdXRpbmcpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBleHRlcm5hbCA9IGlzQW5jaG9yICYmIHRoaXMuaXNFeHRlcm5hbExpbmsoZWwpO1xuICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3Mub3BlbkV4dGVybmFsVG9CbGFuaykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cub3BlbihocmVmKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXRpbHMucmVkaXJlY3RUbyh7XG4gICAgICB1cmw6IGhyZWZcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIExheW91dC5wcm90b3R5cGUucmVnaXN0ZXJSZWdpb25IYW5kbGVyID0gZnVuY3Rpb24oaW5zdGFuY2UsIG5hbWUsIHNlbGVjdG9yKSB7XG4gICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJHbG9iYWxSZWdpb24oaW5zdGFuY2UsIG5hbWUsIHNlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJHbG9iYWxSZWdpb25zKGluc3RhbmNlKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS5yZWdpc3Rlckdsb2JhbFJlZ2lvbiA9IGZ1bmN0aW9uKGluc3RhbmNlLCBuYW1lLCBzZWxlY3Rvcikge1xuICAgIHRoaXMudW5yZWdpc3Rlckdsb2JhbFJlZ2lvbihpbnN0YW5jZSwgbmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsUmVnaW9ucy51bnNoaWZ0KHtcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcbiAgICB9KTtcbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnJlZ2lzdGVyR2xvYmFsUmVnaW9ucyA9IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgdmFyIG5hbWUsIHNlbGVjdG9yLCB2ZXJzaW9uLCBfaSwgX2xlbiwgX3JlZjtcbiAgICBfcmVmID0gdXRpbHMuZ2V0QWxsUHJvcGVydHlWZXJzaW9ucyhpbnN0YW5jZSwgJ3JlZ2lvbnMnKTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHZlcnNpb24gPSBfcmVmW19pXTtcbiAgICAgIGZvciAobmFtZSBpbiB2ZXJzaW9uKSB7XG4gICAgICAgIHNlbGVjdG9yID0gdmVyc2lvbltuYW1lXTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlckdsb2JhbFJlZ2lvbihpbnN0YW5jZSwgbmFtZSwgc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnVucmVnaXN0ZXJSZWdpb25IYW5kbGVyID0gZnVuY3Rpb24oaW5zdGFuY2UsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy51bnJlZ2lzdGVyR2xvYmFsUmVnaW9uKGluc3RhbmNlLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudW5yZWdpc3Rlckdsb2JhbFJlZ2lvbnMoaW5zdGFuY2UpO1xuICAgIH1cbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnVucmVnaXN0ZXJHbG9iYWxSZWdpb24gPSBmdW5jdGlvbihpbnN0YW5jZSwgbmFtZSkge1xuICAgIHZhciBjaWQsIHJlZ2lvbjtcbiAgICBjaWQgPSBpbnN0YW5jZS5jaWQ7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsUmVnaW9ucyA9IChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfaSwgX2xlbiwgX3JlZiwgX3Jlc3VsdHM7XG4gICAgICBfcmVmID0gdGhpcy5nbG9iYWxSZWdpb25zO1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICByZWdpb24gPSBfcmVmW19pXTtcbiAgICAgICAgaWYgKHJlZ2lvbi5pbnN0YW5jZS5jaWQgIT09IGNpZCB8fCByZWdpb24ubmFtZSAhPT0gbmFtZSkge1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2gocmVnaW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH0pLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgTGF5b3V0LnByb3RvdHlwZS51bnJlZ2lzdGVyR2xvYmFsUmVnaW9ucyA9IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gICAgdmFyIHJlZ2lvbjtcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxSZWdpb25zID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF9pLCBfbGVuLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgIF9yZWYgPSB0aGlzLmdsb2JhbFJlZ2lvbnM7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIHJlZ2lvbiA9IF9yZWZbX2ldO1xuICAgICAgICBpZiAocmVnaW9uLmluc3RhbmNlLmNpZCAhPT0gaW5zdGFuY2UuY2lkKSB7XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChyZWdpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgfSkuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnJlZ2lvbkJ5TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgcmVnLCBfaSwgX2xlbiwgX3JlZjtcbiAgICBfcmVmID0gdGhpcy5nbG9iYWxSZWdpb25zO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgcmVnID0gX3JlZltfaV07XG4gICAgICBpZiAocmVnLm5hbWUgPT09IG5hbWUgJiYgIXJlZy5pbnN0YW5jZS5zdGFsZSkge1xuICAgICAgICByZXR1cm4gcmVnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLnNob3dSZWdpb24gPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICAgIHZhciByZWdpb247XG4gICAgcmVnaW9uID0gdGhpcy5yZWdpb25CeU5hbWUobmFtZSk7XG4gICAgaWYgKCFyZWdpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlZ2lvbiByZWdpc3RlcmVkIHVuZGVyIFwiICsgbmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5jb250YWluZXIgPSByZWdpb24uc2VsZWN0b3IgPT09ICcnID8gJCA/IHJlZ2lvbi5pbnN0YW5jZS4kZWwgOiByZWdpb24uaW5zdGFuY2UuZWwgOiByZWdpb24uaW5zdGFuY2Uubm9XcmFwID8gJCA/ICQocmVnaW9uLmluc3RhbmNlLmNvbnRhaW5lcikuZmluZChyZWdpb24uc2VsZWN0b3IpIDogcmVnaW9uLmluc3RhbmNlLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHJlZ2lvbi5zZWxlY3RvcikgOiByZWdpb24uaW5zdGFuY2VbJCA/ICckJyA6ICdmaW5kJ10ocmVnaW9uLnNlbGVjdG9yKTtcbiAgfTtcblxuICBMYXlvdXQucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvcCwgX2ksIF9sZW4sIF9yZWY7XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdG9wTGlua1JvdXRpbmcoKTtcbiAgICBfcmVmID0gWydnbG9iYWxSZWdpb25zJywgJ3RpdGxlJywgJ3JvdXRlJ107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBwcm9wID0gX3JlZltfaV07XG4gICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICB9XG4gICAgbWVkaWF0b3IucmVtb3ZlSGFuZGxlcnModGhpcyk7XG4gICAgcmV0dXJuIExheW91dC5fX3N1cGVyX18uZGlzcG9zZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHJldHVybiBMYXlvdXQ7XG5cbn0pKFZpZXcpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL3ZpZXdzL3ZpZXcnLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyICQsIEJhY2tib25lLCBFdmVudEJyb2tlciwgVmlldywgYXR0YWNoLCBiaW5kLCBtZWRpYXRvciwgc2V0SFRNTCwgdXRpbHMsIF8sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbm1lZGlhdG9yID0gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbiQgPSBCYWNrYm9uZS4kO1xuXG5iaW5kID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oaXRlbSwgY3R4KSB7XG4gICAgICByZXR1cm4gaXRlbS5iaW5kKGN0eCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChfLmJpbmQpIHtcbiAgICByZXR1cm4gXy5iaW5kO1xuICB9XG59KSgpO1xuXG5zZXRIVE1MID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoJCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCBodG1sKSB7XG4gICAgICByZXR1cm4gZWxlbS5odG1sKGh0bWwpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIGh0bWwpIHtcbiAgICAgIHJldHVybiBlbGVtLmlubmVySFRNTCA9IGh0bWw7XG4gICAgfTtcbiAgfVxufSkoKTtcblxuYXR0YWNoID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoJCkge1xuICAgIHJldHVybiBmdW5jdGlvbih2aWV3KSB7XG4gICAgICB2YXIgYWN0dWFsO1xuICAgICAgYWN0dWFsID0gJCh2aWV3LmNvbnRhaW5lcik7XG4gICAgICBpZiAodHlwZW9mIHZpZXcuY29udGFpbmVyTWV0aG9kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB2aWV3LmNvbnRhaW5lck1ldGhvZChhY3R1YWwsIHZpZXcuZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFjdHVhbFt2aWV3LmNvbnRhaW5lck1ldGhvZF0odmlldy5lbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odmlldykge1xuICAgICAgdmFyIGFjdHVhbDtcbiAgICAgIGFjdHVhbCA9IHR5cGVvZiB2aWV3LmNvbnRhaW5lciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHZpZXcuY29udGFpbmVyKSA6IHZpZXcuY29udGFpbmVyO1xuICAgICAgaWYgKHR5cGVvZiB2aWV3LmNvbnRhaW5lck1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdmlldy5jb250YWluZXJNZXRob2QoYWN0dWFsLCB2aWV3LmVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhY3R1YWxbdmlldy5jb250YWluZXJNZXRob2RdKHZpZXcuZWwpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldyA9IChmdW5jdGlvbihfc3VwZXIpIHtcblxuICBfX2V4dGVuZHMoVmlldywgX3N1cGVyKTtcblxuICBfLmV4dGVuZChWaWV3LnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIFZpZXcucHJvdG90eXBlLmF1dG9SZW5kZXIgPSBmYWxzZTtcblxuICBWaWV3LnByb3RvdHlwZS5hdXRvQXR0YWNoID0gdHJ1ZTtcblxuICBWaWV3LnByb3RvdHlwZS5jb250YWluZXIgPSBudWxsO1xuXG4gIFZpZXcucHJvdG90eXBlLmNvbnRhaW5lck1ldGhvZCA9ICQgPyAnYXBwZW5kJyA6ICdhcHBlbmRDaGlsZCc7XG5cbiAgVmlldy5wcm90b3R5cGUucmVnaW9ucyA9IG51bGw7XG5cbiAgVmlldy5wcm90b3R5cGUucmVnaW9uID0gbnVsbDtcblxuICBWaWV3LnByb3RvdHlwZS5zdGFsZSA9IGZhbHNlO1xuXG4gIFZpZXcucHJvdG90eXBlLm5vV3JhcCA9IGZhbHNlO1xuXG4gIFZpZXcucHJvdG90eXBlLmtlZXBFbGVtZW50ID0gZmFsc2U7XG5cbiAgVmlldy5wcm90b3R5cGUuc3Vidmlld3MgPSBudWxsO1xuXG4gIFZpZXcucHJvdG90eXBlLnN1YnZpZXdzQnlOYW1lID0gbnVsbDtcblxuICBWaWV3LnByb3RvdHlwZS5vcHRpb25OYW1lcyA9IFsnYXV0b0F0dGFjaCcsICdhdXRvUmVuZGVyJywgJ2NvbnRhaW5lcicsICdjb250YWluZXJNZXRob2QnLCAncmVnaW9uJywgJ3JlZ2lvbnMnLCAnbm9XcmFwJ107XG5cbiAgZnVuY3Rpb24gVmlldyhvcHRpb25zKSB7XG4gICAgdmFyIG9wdE5hbWUsIG9wdFZhbHVlLCByZWdpb24sIHJlbmRlcixcbiAgICAgIF90aGlzID0gdGhpcztcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgZm9yIChvcHROYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0VmFsdWUgPSBvcHRpb25zW29wdE5hbWVdO1xuICAgICAgICBpZiAoX19pbmRleE9mLmNhbGwodGhpcy5vcHRpb25OYW1lcywgb3B0TmFtZSkgPj0gMCkge1xuICAgICAgICAgIHRoaXNbb3B0TmFtZV0gPSBvcHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIgPSB0aGlzLnJlbmRlcjtcbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKF90aGlzLmRpc3Bvc2VkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJlbmRlci5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGlmIChfdGhpcy5hdXRvQXR0YWNoKSB7XG4gICAgICAgIF90aGlzLmF0dGFjaC5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9O1xuICAgIHRoaXMuc3Vidmlld3MgPSBbXTtcbiAgICB0aGlzLnN1YnZpZXdzQnlOYW1lID0ge307XG4gICAgaWYgKHRoaXMubm9XcmFwKSB7XG4gICAgICBpZiAodGhpcy5yZWdpb24pIHtcbiAgICAgICAgcmVnaW9uID0gbWVkaWF0b3IuZXhlY3V0ZSgncmVnaW9uOmZpbmQnLCB0aGlzLnJlZ2lvbik7XG4gICAgICAgIGlmIChyZWdpb24gIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZWwgPSByZWdpb24uaW5zdGFuY2UuY29udGFpbmVyICE9IG51bGwgPyByZWdpb24uaW5zdGFuY2UucmVnaW9uICE9IG51bGwgPyAkKHJlZ2lvbi5pbnN0YW5jZS5jb250YWluZXIpLmZpbmQocmVnaW9uLnNlbGVjdG9yKSA6IHJlZ2lvbi5pbnN0YW5jZS5jb250YWluZXIgOiByZWdpb24uaW5zdGFuY2UuJChyZWdpb24uc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5lbCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgfVxuICAgIH1cbiAgICBWaWV3Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZGVsZWdhdGVMaXN0ZW5lcnMoKTtcbiAgICBpZiAodGhpcy5tb2RlbCkge1xuICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnZGlzcG9zZScsIHRoaXMuZGlzcG9zZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbGxlY3Rpb24pIHtcbiAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5jb2xsZWN0aW9uLCAnZGlzcG9zZScsIGZ1bmN0aW9uKHN1YmplY3QpIHtcbiAgICAgICAgaWYgKCFzdWJqZWN0IHx8IHN1YmplY3QgPT09IF90aGlzLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaW9ucyAhPSBudWxsKSB7XG4gICAgICBtZWRpYXRvci5leGVjdXRlKCdyZWdpb246cmVnaXN0ZXInLCB0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b1JlbmRlcikge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBWaWV3LnByb3RvdHlwZS5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgc2Vjb25kLCB0aGlyZCkge1xuICAgIHZhciBib3VuZCwgZXZlbnQsIGV2ZW50cywgaGFuZGxlciwgbGlzdCwgc2VsZWN0b3I7XG4gICAgaWYgKEJhY2tib25lLnV0aWxzKSB7XG4gICAgICByZXR1cm4gQmFja2JvbmUudXRpbHMuZGVsZWdhdGUodGhpcywgZXZlbnROYW1lLCBzZWNvbmQsIHRoaXJkKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWaWV3I2RlbGVnYXRlOiBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICBoYW5kbGVyID0gc2Vjb25kO1xuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgc2VsZWN0b3IgPSBzZWNvbmQ7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWaWV3I2RlbGVnYXRlOiAnICsgJ3NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICB9XG4gICAgICBoYW5kbGVyID0gdGhpcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZpZXcjZGVsZWdhdGU6ICcgKyAnb25seSB0d28gb3IgdGhyZWUgYXJndW1lbnRzIGFyZSBhbGxvd2VkJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmlldyNkZWxlZ2F0ZTogJyArICdoYW5kbGVyIGFyZ3VtZW50IG11c3QgYmUgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgbGlzdCA9IChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfaSwgX2xlbiwgX3JlZiwgX3Jlc3VsdHM7XG4gICAgICBfcmVmID0gZXZlbnROYW1lLnNwbGl0KCcgJyk7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGV2ZW50ID0gX3JlZltfaV07XG4gICAgICAgIF9yZXN1bHRzLnB1c2goXCJcIiArIGV2ZW50ICsgXCIuZGVsZWdhdGVcIiArIHRoaXMuY2lkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9KS5jYWxsKHRoaXMpO1xuICAgIGV2ZW50cyA9IGxpc3Quam9pbignICcpO1xuICAgIGJvdW5kID0gYmluZChoYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLiRlbC5vbihldmVudHMsIHNlbGVjdG9yIHx8IG51bGwsIGJvdW5kKTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUuX2RlbGVnYXRlRXZlbnRzID0gZnVuY3Rpb24oZXZlbnRzKSB7XG4gICAgdmFyIGJvdW5kLCBldmVudE5hbWUsIGhhbmRsZXIsIGtleSwgbWF0Y2gsIHNlbGVjdG9yLCB2YWx1ZTtcbiAgICBpZiAoQmFja2JvbmUuVmlldy5wcm90b3R5cGUuZGVsZWdhdGVFdmVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gQmFja2JvbmUuVmlldy5wcm90b3R5cGUuZGVsZWdhdGVFdmVudHMuY2FsbCh0aGlzLCBldmVudHMsIHRydWUpO1xuICAgIH1cbiAgICBmb3IgKGtleSBpbiBldmVudHMpIHtcbiAgICAgIHZhbHVlID0gZXZlbnRzW2tleV07XG4gICAgICBoYW5kbGVyID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUgOiB0aGlzW3ZhbHVlXTtcbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2QgJ1wiICsgdmFsdWUgKyBcIicgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICB9XG4gICAgICBtYXRjaCA9IGtleS5tYXRjaCgvXihcXFMrKVxccyooLiopJC8pO1xuICAgICAgZXZlbnROYW1lID0gXCJcIiArIG1hdGNoWzFdICsgXCIuZGVsZWdhdGVFdmVudHNcIiArIHRoaXMuY2lkO1xuICAgICAgc2VsZWN0b3IgPSBtYXRjaFsyXTtcbiAgICAgIGJvdW5kID0gYmluZChoYW5kbGVyLCB0aGlzKTtcbiAgICAgIHRoaXMuJGVsLm9uKGV2ZW50TmFtZSwgc2VsZWN0b3IgfHwgbnVsbCwgYm91bmQpO1xuICAgIH1cbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5kZWxlZ2F0ZUV2ZW50cyA9IGZ1bmN0aW9uKGV2ZW50cywga2VlcE9sZCkge1xuICAgIHZhciBjbGFzc0V2ZW50cywgX2ksIF9sZW4sIF9yZWY7XG4gICAgaWYgKCFrZWVwT2xkKSB7XG4gICAgICB0aGlzLnVuZGVsZWdhdGVFdmVudHMoKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlRXZlbnRzKGV2ZW50cyk7XG4gICAgfVxuICAgIF9yZWYgPSB1dGlscy5nZXRBbGxQcm9wZXJ0eVZlcnNpb25zKHRoaXMsICdldmVudHMnKTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGNsYXNzRXZlbnRzID0gX3JlZltfaV07XG4gICAgICBpZiAodHlwZW9mIGNsYXNzRXZlbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZpZXcjZGVsZWdhdGVFdmVudHM6IGZ1bmN0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGVsZWdhdGVFdmVudHMoY2xhc3NFdmVudHMpO1xuICAgIH1cbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS51bmRlbGVnYXRlID0gZnVuY3Rpb24oZXZlbnROYW1lLCBzZWNvbmQsIHRoaXJkKSB7XG4gICAgdmFyIGV2ZW50LCBldmVudHMsIGhhbmRsZXIsIGxpc3QsIHNlbGVjdG9yO1xuICAgIGlmIChCYWNrYm9uZS51dGlscykge1xuICAgICAgcmV0dXJuIEJhY2tib25lLnV0aWxzLnVuZGVsZWdhdGUodGhpcywgZXZlbnROYW1lLCBzZWNvbmQsIHRoaXJkKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZpZXcjdW5kZWxlZ2F0ZTogZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgfVxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWNvbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgc2VsZWN0b3IgPSBzZWNvbmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlciA9IHNlY29uZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNlbGVjdG9yID0gc2Vjb25kO1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZpZXcjdW5kZWxlZ2F0ZTogJyArICdzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZXIgPSB0aGlyZDtcbiAgICAgIH1cbiAgICAgIGxpc3QgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfaSwgX2xlbiwgX3JlZiwgX3Jlc3VsdHM7XG4gICAgICAgIF9yZWYgPSBldmVudE5hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgZXZlbnQgPSBfcmVmW19pXTtcbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKFwiXCIgKyBldmVudCArIFwiLmRlbGVnYXRlXCIgKyB0aGlzLmNpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIGV2ZW50cyA9IGxpc3Quam9pbignICcpO1xuICAgICAgcmV0dXJuIHRoaXMuJGVsLm9mZihldmVudHMsIHNlbGVjdG9yIHx8IG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kZWwub2ZmKFwiLmRlbGVnYXRlXCIgKyB0aGlzLmNpZCk7XG4gICAgfVxuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLmRlbGVnYXRlTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2ZW50TmFtZSwga2V5LCBtZXRob2QsIHRhcmdldCwgdmVyc2lvbiwgX2ksIF9sZW4sIF9yZWYsIF9yZWYxO1xuICAgIGlmICghdGhpcy5saXN0ZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3JlZiA9IHV0aWxzLmdldEFsbFByb3BlcnR5VmVyc2lvbnModGhpcywgJ2xpc3RlbicpO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgdmVyc2lvbiA9IF9yZWZbX2ldO1xuICAgICAgZm9yIChrZXkgaW4gdmVyc2lvbikge1xuICAgICAgICBtZXRob2QgPSB2ZXJzaW9uW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbWV0aG9kID0gdGhpc1ttZXRob2RdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWaWV3I2RlbGVnYXRlTGlzdGVuZXJzOiAnICsgKFwiXCIgKyBtZXRob2QgKyBcIiBtdXN0IGJlIGZ1bmN0aW9uXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBfcmVmMSA9IGtleS5zcGxpdCgnICcpLCBldmVudE5hbWUgPSBfcmVmMVswXSwgdGFyZ2V0ID0gX3JlZjFbMV07XG4gICAgICAgIHRoaXMuZGVsZWdhdGVMaXN0ZW5lcihldmVudE5hbWUsIHRhcmdldCwgbWV0aG9kKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUuZGVsZWdhdGVMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgdGFyZ2V0LCBjYWxsYmFjaykge1xuICAgIHZhciBwcm9wO1xuICAgIGlmICh0YXJnZXQgPT09ICdtb2RlbCcgfHwgdGFyZ2V0ID09PSAnY29sbGVjdGlvbicpIHtcbiAgICAgIHByb3AgPSB0aGlzW3RhcmdldF07XG4gICAgICBpZiAocHJvcCkge1xuICAgICAgICB0aGlzLmxpc3RlblRvKHByb3AsIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbWVkaWF0b3InKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZUV2ZW50KGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoIXRhcmdldCkge1xuICAgICAgdGhpcy5vbihldmVudE5hbWUsIGNhbGxiYWNrLCB0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUucmVnaXN0ZXJSZWdpb24gPSBmdW5jdGlvbihuYW1lLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBtZWRpYXRvci5leGVjdXRlKCdyZWdpb246cmVnaXN0ZXInLCB0aGlzLCBuYW1lLCBzZWxlY3Rvcik7XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUudW5yZWdpc3RlclJlZ2lvbiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gbWVkaWF0b3IuZXhlY3V0ZSgncmVnaW9uOnVucmVnaXN0ZXInLCB0aGlzLCBuYW1lKTtcbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS51bnJlZ2lzdGVyQWxsUmVnaW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBtZWRpYXRvci5leGVjdXRlKHtcbiAgICAgIG5hbWU6ICdyZWdpb246dW5yZWdpc3RlcicsXG4gICAgICBzaWxlbnQ6IHRydWVcbiAgICB9LCB0aGlzKTtcbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5zdWJ2aWV3ID0gZnVuY3Rpb24obmFtZSwgdmlldykge1xuICAgIHZhciBieU5hbWUsIHN1YnZpZXdzO1xuICAgIHN1YnZpZXdzID0gdGhpcy5zdWJ2aWV3cztcbiAgICBieU5hbWUgPSB0aGlzLnN1YnZpZXdzQnlOYW1lO1xuICAgIGlmIChuYW1lICYmIHZpZXcpIHtcbiAgICAgIHRoaXMucmVtb3ZlU3VidmlldyhuYW1lKTtcbiAgICAgIHN1YnZpZXdzLnB1c2godmlldyk7XG4gICAgICBieU5hbWVbbmFtZV0gPSB2aWV3O1xuICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfSBlbHNlIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gYnlOYW1lW25hbWVdO1xuICAgIH1cbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5yZW1vdmVTdWJ2aWV3ID0gZnVuY3Rpb24obmFtZU9yVmlldykge1xuICAgIHZhciBieU5hbWUsIGluZGV4LCBuYW1lLCBvdGhlck5hbWUsIG90aGVyVmlldywgc3Vidmlld3MsIHZpZXc7XG4gICAgaWYgKCFuYW1lT3JWaWV3KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1YnZpZXdzID0gdGhpcy5zdWJ2aWV3cztcbiAgICBieU5hbWUgPSB0aGlzLnN1YnZpZXdzQnlOYW1lO1xuICAgIGlmICh0eXBlb2YgbmFtZU9yVmlldyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBuYW1lT3JWaWV3O1xuICAgICAgdmlldyA9IGJ5TmFtZVtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlldyA9IG5hbWVPclZpZXc7XG4gICAgICBmb3IgKG90aGVyTmFtZSBpbiBieU5hbWUpIHtcbiAgICAgICAgb3RoZXJWaWV3ID0gYnlOYW1lW290aGVyTmFtZV07XG4gICAgICAgIGlmICghKG90aGVyVmlldyA9PT0gdmlldykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBuYW1lID0gb3RoZXJOYW1lO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEobmFtZSAmJiB2aWV3ICYmIHZpZXcuZGlzcG9zZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmlldy5kaXNwb3NlKCk7XG4gICAgaW5kZXggPSB1dGlscy5pbmRleE9mKHN1YnZpZXdzLCB2aWV3KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdWJ2aWV3cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZGVsZXRlIGJ5TmFtZVtuYW1lXTtcbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5nZXRUZW1wbGF0ZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGF0YSwgc291cmNlO1xuICAgIGRhdGEgPSB0aGlzLm1vZGVsID8gdXRpbHMuc2VyaWFsaXplKHRoaXMubW9kZWwpIDogdGhpcy5jb2xsZWN0aW9uID8ge1xuICAgICAgaXRlbXM6IHV0aWxzLnNlcmlhbGl6ZSh0aGlzLmNvbGxlY3Rpb24pLFxuICAgICAgbGVuZ3RoOiB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoXG4gICAgfSA6IHt9O1xuICAgIHNvdXJjZSA9IHRoaXMubW9kZWwgfHwgdGhpcy5jb2xsZWN0aW9uO1xuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlLmlzU3luY2VkID09PSAnZnVuY3Rpb24nICYmICEoJ3N5bmNlZCcgaW4gZGF0YSkpIHtcbiAgICAgICAgZGF0YS5zeW5jZWQgPSBzb3VyY2UuaXNTeW5jZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgVmlldy5wcm90b3R5cGUuZ2V0VGVtcGxhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVmlldyNnZXRUZW1wbGF0ZUZ1bmN0aW9uIG11c3QgYmUgb3ZlcnJpZGRlbicpO1xuICB9O1xuXG4gIFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCwgaHRtbCwgdGVtcGxhdGVGdW5jO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRlbXBsYXRlRnVuYyA9IHRoaXMuZ2V0VGVtcGxhdGVGdW5jdGlvbigpO1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGVGdW5jID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBodG1sID0gdGVtcGxhdGVGdW5jKHRoaXMuZ2V0VGVtcGxhdGVEYXRhKCkpO1xuICAgICAgaWYgKHRoaXMubm9XcmFwKSB7XG4gICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBtdXN0IGJlIGEgc2luZ2xlIHRvcC1sZXZlbCBlbGVtZW50IHdoZW4gJyArICd1c2luZyBgbm9XcmFwYC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuZGVsZWdhdGVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50KGVsLmZpcnN0Q2hpbGQsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SFRNTCgoJCA/IHRoaXMuJGVsIDogdGhpcy5lbCksIGh0bWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5yZWdpb24gIT0gbnVsbCkge1xuICAgICAgbWVkaWF0b3IuZXhlY3V0ZSgncmVnaW9uOnNob3cnLCB0aGlzLnJlZ2lvbiwgdGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiAhZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmVsKSkge1xuICAgICAgYXR0YWNoKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcignYWRkZWRUb0RPTScpO1xuICAgIH1cbiAgfTtcblxuICBWaWV3LnByb3RvdHlwZS5kaXNwb3NlZCA9IGZhbHNlO1xuXG4gIFZpZXcucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvcCwgcHJvcGVydGllcywgc3VidmlldywgX2ksIF9qLCBfbGVuLCBfbGVuMSwgX3JlZjtcbiAgICBpZiAodGhpcy5kaXNwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVucmVnaXN0ZXJBbGxSZWdpb25zKCk7XG4gICAgX3JlZiA9IHRoaXMuc3Vidmlld3M7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBzdWJ2aWV3ID0gX3JlZltfaV07XG4gICAgICBzdWJ2aWV3LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy51bnN1YnNjcmliZUFsbEV2ZW50cygpO1xuICAgIHRoaXMub2ZmKCk7XG4gICAgaWYgKHRoaXMua2VlcEVsZW1lbnQpIHtcbiAgICAgIHRoaXMudW5kZWxlZ2F0ZUV2ZW50cygpO1xuICAgICAgdGhpcy51bmRlbGVnYXRlKCk7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG4gICAgcHJvcGVydGllcyA9IFsnZWwnLCAnJGVsJywgJ29wdGlvbnMnLCAnbW9kZWwnLCAnY29sbGVjdGlvbicsICdzdWJ2aWV3cycsICdzdWJ2aWV3c0J5TmFtZScsICdfY2FsbGJhY2tzJ107XG4gICAgZm9yIChfaiA9IDAsIF9sZW4xID0gcHJvcGVydGllcy5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgIHByb3AgPSBwcm9wZXJ0aWVzW19qXTtcbiAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5mcmVlemUodGhpcykgOiB2b2lkIDA7XG4gIH07XG5cbiAgcmV0dXJuIFZpZXc7XG5cbn0pKEJhY2tib25lLlZpZXcpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL3ZpZXdzL2NvbGxlY3Rpb25fdmlldycsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgJCwgQmFja2JvbmUsIENvbGxlY3Rpb25WaWV3LCBWaWV3LCBhZGRDbGFzcywgZW5kQW5pbWF0aW9uLCBmaWx0ZXJDaGlsZHJlbiwgaW5zZXJ0Vmlldywgc3RhcnRBbmltYXRpb24sIHRvZ2dsZUVsZW1lbnQsIHV0aWxzLCBfLFxuICBfX2JpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgX19leHRlbmRzID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChfX2hhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH07XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cblZpZXcgPSBsb2FkZXIoJ2NoYXBsaW4vdmlld3MvdmlldycpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxuJCA9IEJhY2tib25lLiQ7XG5cbmZpbHRlckNoaWxkcmVuID0gZnVuY3Rpb24obm9kZUxpc3QsIHNlbGVjdG9yKSB7XG4gIHZhciBub2RlLCBfaSwgX2xlbiwgX3Jlc3VsdHM7XG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbm9kZUxpc3Q7XG4gIH1cbiAgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yIChfaSA9IDAsIF9sZW4gPSBub2RlTGlzdC5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgIG5vZGUgPSBub2RlTGlzdFtfaV07XG4gICAgaWYgKEJhY2tib25lLnV0aWxzLm1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIF9yZXN1bHRzLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbnRvZ2dsZUVsZW1lbnQgPSAoZnVuY3Rpb24oKSB7XG4gIGlmICgkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIHZpc2libGUpIHtcbiAgICAgIHJldHVybiBlbGVtLnRvZ2dsZSh2aXNpYmxlKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCB2aXNpYmxlKSB7XG4gICAgICByZXR1cm4gZWxlbS5zdHlsZS5kaXNwbGF5ID0gKHZpc2libGUgPyAnJyA6ICdub25lJyk7XG4gICAgfTtcbiAgfVxufSkoKTtcblxuYWRkQ2xhc3MgPSAoZnVuY3Rpb24oKSB7XG4gIGlmICgkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW0sIGNscykge1xuICAgICAgcmV0dXJuIGVsZW0uYWRkQ2xhc3MoY2xzKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCBjbHMpIHtcbiAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9O1xuICB9XG59KSgpO1xuXG5zdGFydEFuaW1hdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgaWYgKCQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgdXNlQ3NzQW5pbWF0aW9uLCBjbHMpIHtcbiAgICAgIGlmICh1c2VDc3NBbmltYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGFkZENsYXNzKGVsZW0sIGNscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZWxlbS5jc3MoJ29wYWNpdHknLCAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtLCB1c2VDc3NBbmltYXRpb24sIGNscykge1xuICAgICAgaWYgKHVzZUNzc0FuaW1hdGlvbikge1xuICAgICAgICByZXR1cm4gYWRkQ2xhc3MoZWxlbSwgY2xzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn0pKCk7XG5cbmVuZEFuaW1hdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgaWYgKCQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgZHVyYXRpb24pIHtcbiAgICAgIHJldHVybiBlbGVtLmFuaW1hdGUoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LCBkdXJhdGlvbik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWxlbSwgZHVyYXRpb24pIHtcbiAgICAgIGVsZW0uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSBcIiArIChkdXJhdGlvbiAvIDEwMDApICsgXCJzXCI7XG4gICAgICByZXR1cm4gZWxlbS5vcGFjaXR5ID0gMTtcbiAgICB9O1xuICB9XG59KSgpO1xuXG5pbnNlcnRWaWV3ID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoJCkge1xuICAgIHJldHVybiBmdW5jdGlvbihsaXN0LCB2aWV3RWwsIHBvc2l0aW9uLCBsZW5ndGgsIGl0ZW1TZWxlY3Rvcikge1xuICAgICAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCwgaW5zZXJ0SW5NaWRkbGUsIGlzRW5kLCBtZXRob2Q7XG4gICAgICBpbnNlcnRJbk1pZGRsZSA9ICgwIDwgcG9zaXRpb24gJiYgcG9zaXRpb24gPCBsZW5ndGgpO1xuICAgICAgaXNFbmQgPSBmdW5jdGlvbihsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA9PT0gbGVuZ3RoO1xuICAgICAgfTtcbiAgICAgIGlmIChpbnNlcnRJbk1pZGRsZSB8fCBpdGVtU2VsZWN0b3IpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBsaXN0LmNoaWxkcmVuKGl0ZW1TZWxlY3Rvcik7XG4gICAgICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBpZiAoY2hpbGRyZW5bcG9zaXRpb25dICE9PSB2aWV3RWwpIHtcbiAgICAgICAgICBpZiAoaXNFbmQoY2hpbGRyZW5MZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5hcHBlbmQodmlld0VsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbi5lcShwb3NpdGlvbikuYmVmb3JlKHZpZXdFbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4uZXEocG9zaXRpb24gLSAxKS5hZnRlcih2aWV3RWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0aG9kID0gaXNFbmQobGVuZ3RoKSA/ICdhcHBlbmQnIDogJ3ByZXBlbmQnO1xuICAgICAgICByZXR1cm4gbGlzdFttZXRob2RdKHZpZXdFbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obGlzdCwgdmlld0VsLCBwb3NpdGlvbiwgbGVuZ3RoLCBpdGVtU2VsZWN0b3IpIHtcbiAgICAgIHZhciBjaGlsZHJlbiwgY2hpbGRyZW5MZW5ndGgsIGluc2VydEluTWlkZGxlLCBpc0VuZCwgbGFzdDtcbiAgICAgIGluc2VydEluTWlkZGxlID0gKDAgPCBwb3NpdGlvbiAmJiBwb3NpdGlvbiA8IGxlbmd0aCk7XG4gICAgICBpc0VuZCA9IGZ1bmN0aW9uKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uID09PSBsZW5ndGg7XG4gICAgICB9O1xuICAgICAgaWYgKGluc2VydEluTWlkZGxlIHx8IGl0ZW1TZWxlY3Rvcikge1xuICAgICAgICBjaGlsZHJlbiA9IGZpbHRlckNoaWxkcmVuKGxpc3QuY2hpbGRyZW4sIGl0ZW1TZWxlY3Rvcik7XG4gICAgICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBpZiAoY2hpbGRyZW5bcG9zaXRpb25dICE9PSB2aWV3RWwpIHtcbiAgICAgICAgICBpZiAoaXNFbmQoY2hpbGRyZW5MZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5hcHBlbmRDaGlsZCh2aWV3RWwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0Lmluc2VydEJlZm9yZSh2aWV3RWwsIGNoaWxkcmVuW3Bvc2l0aW9uXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3QgPSBjaGlsZHJlbltwb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgaWYgKGxpc3QubGFzdENoaWxkID09PSBsYXN0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaXN0LmFwcGVuZENoaWxkKHZpZXdFbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbGlzdC5pbnNlcnRCZWZvcmUodmlld0VsLCBsYXN0Lm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzRW5kKGxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuYXBwZW5kQ2hpbGQodmlld0VsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsaXN0Lmluc2VydEJlZm9yZSh2aWV3RWwsIGxpc3QuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xsZWN0aW9uVmlldyA9IChmdW5jdGlvbihfc3VwZXIpIHtcblxuICBfX2V4dGVuZHMoQ29sbGVjdGlvblZpZXcsIF9zdXBlcik7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLml0ZW1WaWV3ID0gbnVsbDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuYXV0b1JlbmRlciA9IHRydWU7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnJlbmRlckl0ZW1zID0gdHJ1ZTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuYW5pbWF0aW9uRHVyYXRpb24gPSA1MDA7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnVzZUNzc0FuaW1hdGlvbiA9IGZhbHNlO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5hbmltYXRpb25TdGFydENsYXNzID0gJ2FuaW1hdGVkLWl0ZW0tdmlldyc7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmFuaW1hdGlvbkVuZENsYXNzID0gJ2FuaW1hdGVkLWl0ZW0tdmlldy1lbmQnO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5saXN0U2VsZWN0b3IgPSBudWxsO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS4kbGlzdCA9IG51bGw7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmZhbGxiYWNrU2VsZWN0b3IgPSBudWxsO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS4kZmFsbGJhY2sgPSBudWxsO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5sb2FkaW5nU2VsZWN0b3IgPSBudWxsO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS4kbG9hZGluZyA9IG51bGw7XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLml0ZW1TZWxlY3RvciA9IHZvaWQgMDtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuZmlsdGVyZXIgPSBudWxsO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5maWx0ZXJDYWxsYmFjayA9IGZ1bmN0aW9uKHZpZXcsIGluY2x1ZGVkKSB7XG4gICAgaWYgKCQpIHtcbiAgICAgIHZpZXcuJGVsLnN0b3AodHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0b2dnbGVFbGVtZW50KCgkID8gdmlldy4kZWwgOiB2aWV3LmVsKSwgaW5jbHVkZWQpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS52aXNpYmxlSXRlbXMgPSBudWxsO1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5vcHRpb25OYW1lcyA9IFZpZXcucHJvdG90eXBlLm9wdGlvbk5hbWVzLmNvbmNhdChbJ3JlbmRlckl0ZW1zJywgJ2l0ZW1WaWV3J10pO1xuXG4gIGZ1bmN0aW9uIENvbGxlY3Rpb25WaWV3KG9wdGlvbnMpIHtcbiAgICB0aGlzLnJlbmRlckFsbEl0ZW1zID0gX19iaW5kKHRoaXMucmVuZGVyQWxsSXRlbXMsIHRoaXMpO1xuXG4gICAgdGhpcy50b2dnbGVGYWxsYmFjayA9IF9fYmluZCh0aGlzLnRvZ2dsZUZhbGxiYWNrLCB0aGlzKTtcblxuICAgIHRoaXMuaXRlbXNSZXNldCA9IF9fYmluZCh0aGlzLml0ZW1zUmVzZXQsIHRoaXMpO1xuXG4gICAgdGhpcy5pdGVtUmVtb3ZlZCA9IF9fYmluZCh0aGlzLml0ZW1SZW1vdmVkLCB0aGlzKTtcblxuICAgIHRoaXMuaXRlbUFkZGVkID0gX19iaW5kKHRoaXMuaXRlbUFkZGVkLCB0aGlzKTtcbiAgICB0aGlzLnZpc2libGVJdGVtcyA9IFtdO1xuICAgIENvbGxlY3Rpb25WaWV3Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmFkZENvbGxlY3Rpb25MaXN0ZW5lcnMoKTtcbiAgICBpZiAob3B0aW9ucy5maWx0ZXJlciAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIob3B0aW9ucy5maWx0ZXJlcik7XG4gICAgfVxuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5hZGRDb2xsZWN0aW9uTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLmNvbGxlY3Rpb24sICdhZGQnLCB0aGlzLml0ZW1BZGRlZCk7XG4gICAgdGhpcy5saXN0ZW5Ubyh0aGlzLmNvbGxlY3Rpb24sICdyZW1vdmUnLCB0aGlzLml0ZW1SZW1vdmVkKTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5Ubyh0aGlzLmNvbGxlY3Rpb24sICdyZXNldCBzb3J0JywgdGhpcy5pdGVtc1Jlc2V0KTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuZ2V0VGVtcGxhdGVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRlbXBsYXRlRGF0YTtcbiAgICB0ZW1wbGF0ZURhdGEgPSB7XG4gICAgICBsZW5ndGg6IHRoaXMuY29sbGVjdGlvbi5sZW5ndGhcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgdGhpcy5jb2xsZWN0aW9uLmlzU3luY2VkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0ZW1wbGF0ZURhdGEuc3luY2VkID0gdGhpcy5jb2xsZWN0aW9uLmlzU3luY2VkKCk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZURhdGE7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmdldFRlbXBsYXRlRnVuY3Rpb24gPSBmdW5jdGlvbigpIHt9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGlzdFNlbGVjdG9yO1xuICAgIENvbGxlY3Rpb25WaWV3Ll9fc3VwZXJfXy5yZW5kZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBsaXN0U2VsZWN0b3IgPSBfLnJlc3VsdCh0aGlzLCAnbGlzdFNlbGVjdG9yJyk7XG4gICAgaWYgKCQpIHtcbiAgICAgIHRoaXMuJGxpc3QgPSBsaXN0U2VsZWN0b3IgPyB0aGlzLiQobGlzdFNlbGVjdG9yKSA6IHRoaXMuJGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3QgPSBsaXN0U2VsZWN0b3IgPyB0aGlzLmZpbmQodGhpcy5saXN0U2VsZWN0b3IpIDogdGhpcy5lbDtcbiAgICB9XG4gICAgdGhpcy5pbml0RmFsbGJhY2soKTtcbiAgICB0aGlzLmluaXRMb2FkaW5nSW5kaWNhdG9yKCk7XG4gICAgaWYgKHRoaXMucmVuZGVySXRlbXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckFsbEl0ZW1zKCk7XG4gICAgfVxuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pdGVtQWRkZWQgPSBmdW5jdGlvbihpdGVtLCBjb2xsZWN0aW9uLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0VmlldyhpdGVtLCB0aGlzLnJlbmRlckl0ZW0oaXRlbSksIG9wdGlvbnMuYXQpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pdGVtUmVtb3ZlZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVWaWV3Rm9ySXRlbShpdGVtKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaXRlbXNSZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlckFsbEl0ZW1zKCk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLmluaXRGYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5mYWxsYmFja1NlbGVjdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgkKSB7XG4gICAgICB0aGlzLiRmYWxsYmFjayA9IHRoaXMuJCh0aGlzLmZhbGxiYWNrU2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZhbGxiYWNrID0gdGhpcy5maW5kKHRoaXMuZmFsbGJhY2tTZWxlY3Rvcik7XG4gICAgfVxuICAgIHRoaXMub24oJ3Zpc2liaWxpdHlDaGFuZ2UnLCB0aGlzLnRvZ2dsZUZhbGxiYWNrKTtcbiAgICB0aGlzLmxpc3RlblRvKHRoaXMuY29sbGVjdGlvbiwgJ3N5bmNTdGF0ZUNoYW5nZScsIHRoaXMudG9nZ2xlRmFsbGJhY2spO1xuICAgIHJldHVybiB0aGlzLnRvZ2dsZUZhbGxiYWNrKCk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnRvZ2dsZUZhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZpc2libGU7XG4gICAgdmlzaWJsZSA9IHRoaXMudmlzaWJsZUl0ZW1zLmxlbmd0aCA9PT0gMCAmJiAodHlwZW9mIHRoaXMuY29sbGVjdGlvbi5pc1N5bmNlZCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29sbGVjdGlvbi5pc1N5bmNlZCgpIDogdHJ1ZSk7XG4gICAgcmV0dXJuIHRvZ2dsZUVsZW1lbnQoKCQgPyB0aGlzLiRmYWxsYmFjayA6IHRoaXMuZmFsbGJhY2spLCB2aXNpYmxlKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaW5pdExvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISh0aGlzLmxvYWRpbmdTZWxlY3RvciAmJiB0eXBlb2YgdGhpcy5jb2xsZWN0aW9uLmlzU3luY2luZyA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCQpIHtcbiAgICAgIHRoaXMuJGxvYWRpbmcgPSB0aGlzLiQodGhpcy5sb2FkaW5nU2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0aGlzLmZpbmQodGhpcy5sb2FkaW5nU2VsZWN0b3IpO1xuICAgIH1cbiAgICB0aGlzLmxpc3RlblRvKHRoaXMuY29sbGVjdGlvbiwgJ3N5bmNTdGF0ZUNoYW5nZScsIHRoaXMudG9nZ2xlTG9hZGluZ0luZGljYXRvcik7XG4gICAgcmV0dXJuIHRoaXMudG9nZ2xlTG9hZGluZ0luZGljYXRvcigpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS50b2dnbGVMb2FkaW5nSW5kaWNhdG9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZpc2libGU7XG4gICAgdmlzaWJsZSA9IHRoaXMuY29sbGVjdGlvbi5sZW5ndGggPT09IDAgJiYgdGhpcy5jb2xsZWN0aW9uLmlzU3luY2luZygpO1xuICAgIHJldHVybiB0b2dnbGVFbGVtZW50KCgkID8gdGhpcy4kbG9hZGluZyA6IHRoaXMubG9hZGluZyksIHZpc2libGUpO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5nZXRJdGVtVmlld3MgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbVZpZXdzLCBuYW1lLCB2aWV3LCBfcmVmO1xuICAgIGl0ZW1WaWV3cyA9IHt9O1xuICAgIGlmICh0aGlzLnN1YnZpZXdzLmxlbmd0aCA+IDApIHtcbiAgICAgIF9yZWYgPSB0aGlzLnN1YnZpZXdzQnlOYW1lO1xuICAgICAgZm9yIChuYW1lIGluIF9yZWYpIHtcbiAgICAgICAgdmlldyA9IF9yZWZbbmFtZV07XG4gICAgICAgIGlmIChuYW1lLnNsaWNlKDAsIDkpID09PSAnaXRlbVZpZXc6Jykge1xuICAgICAgICAgIGl0ZW1WaWV3c1tuYW1lLnNsaWNlKDkpXSA9IHZpZXc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1WaWV3cztcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyZXIsIGZpbHRlckNhbGxiYWNrKSB7XG4gICAgdmFyIGhhc0l0ZW1WaWV3cywgaW5jbHVkZWQsIGluZGV4LCBpdGVtLCB2aWV3LCBfaSwgX2xlbiwgX3JlZixcbiAgICAgIF90aGlzID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGZpbHRlcmVyID09PSAnZnVuY3Rpb24nIHx8IGZpbHRlcmVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLmZpbHRlcmVyID0gZmlsdGVyZXI7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZmlsdGVyQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgfHwgZmlsdGVyQ2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsdGVyQ2FsbGJhY2sgPSBmaWx0ZXJDYWxsYmFjaztcbiAgICB9XG4gICAgaGFzSXRlbVZpZXdzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5hbWU7XG4gICAgICBpZiAoX3RoaXMuc3Vidmlld3MubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKG5hbWUgaW4gX3RoaXMuc3Vidmlld3NCeU5hbWUpIHtcbiAgICAgICAgICBpZiAobmFtZS5zbGljZSgwLCA5KSA9PT0gJ2l0ZW1WaWV3OicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKCk7XG4gICAgaWYgKGhhc0l0ZW1WaWV3cykge1xuICAgICAgX3JlZiA9IHRoaXMuY29sbGVjdGlvbi5tb2RlbHM7XG4gICAgICBmb3IgKGluZGV4ID0gX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgaW5kZXggPSArK19pKSB7XG4gICAgICAgIGl0ZW0gPSBfcmVmW2luZGV4XTtcbiAgICAgICAgaW5jbHVkZWQgPSB0eXBlb2YgdGhpcy5maWx0ZXJlciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuZmlsdGVyZXIoaXRlbSwgaW5kZXgpIDogdHJ1ZTtcbiAgICAgICAgdmlldyA9IHRoaXMuc3VidmlldyhcIml0ZW1WaWV3OlwiICsgaXRlbS5jaWQpO1xuICAgICAgICBpZiAoIXZpZXcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbGxlY3Rpb25WaWV3I2ZpbHRlcjogJyArIChcIm5vIHZpZXcgZm91bmQgZm9yIFwiICsgaXRlbS5jaWQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlckNhbGxiYWNrKHZpZXcsIGluY2x1ZGVkKTtcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSXRlbXModmlldy5tb2RlbCwgaW5jbHVkZWQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlcigndmlzaWJpbGl0eUNoYW5nZScsIHRoaXMudmlzaWJsZUl0ZW1zKTtcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUucmVuZGVyQWxsSXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2lkLCBpbmRleCwgaXRlbSwgaXRlbXMsIHJlbWFpbmluZ1ZpZXdzQnlDaWQsIHZpZXcsIF9pLCBfaiwgX2xlbiwgX2xlbjEsIF9yZWY7XG4gICAgaXRlbXMgPSB0aGlzLmNvbGxlY3Rpb24ubW9kZWxzO1xuICAgIHRoaXMudmlzaWJsZUl0ZW1zID0gW107XG4gICAgcmVtYWluaW5nVmlld3NCeUNpZCA9IHt9O1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gaXRlbXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIGl0ZW0gPSBpdGVtc1tfaV07XG4gICAgICB2aWV3ID0gdGhpcy5zdWJ2aWV3KFwiaXRlbVZpZXc6XCIgKyBpdGVtLmNpZCk7XG4gICAgICBpZiAodmlldykge1xuICAgICAgICByZW1haW5pbmdWaWV3c0J5Q2lkW2l0ZW0uY2lkXSA9IHZpZXc7XG4gICAgICB9XG4gICAgfVxuICAgIF9yZWYgPSB0aGlzLmdldEl0ZW1WaWV3cygpO1xuICAgIGZvciAoY2lkIGluIF9yZWYpIHtcbiAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoX3JlZiwgY2lkKSkgY29udGludWU7XG4gICAgICB2aWV3ID0gX3JlZltjaWRdO1xuICAgICAgaWYgKCEoY2lkIGluIHJlbWFpbmluZ1ZpZXdzQnlDaWQpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlU3VidmlldyhcIml0ZW1WaWV3OlwiICsgY2lkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpbmRleCA9IF9qID0gMCwgX2xlbjEgPSBpdGVtcy5sZW5ndGg7IF9qIDwgX2xlbjE7IGluZGV4ID0gKytfaikge1xuICAgICAgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICAgIHZpZXcgPSB0aGlzLnN1YnZpZXcoXCJpdGVtVmlldzpcIiArIGl0ZW0uY2lkKTtcbiAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0VmlldyhpdGVtLCB2aWV3LCBpbmRleCwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnNlcnRWaWV3KGl0ZW0sIHRoaXMucmVuZGVySXRlbShpdGVtKSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKCd2aXNpYmlsaXR5Q2hhbmdlJywgdGhpcy52aXNpYmxlSXRlbXMpO1xuICAgIH1cbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUucmVuZGVySXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB2YXIgdmlldztcbiAgICB2aWV3ID0gdGhpcy5zdWJ2aWV3KFwiaXRlbVZpZXc6XCIgKyBpdGVtLmNpZCk7XG4gICAgaWYgKCF2aWV3KSB7XG4gICAgICB2aWV3ID0gdGhpcy5pbml0SXRlbVZpZXcoaXRlbSk7XG4gICAgICB0aGlzLnN1YnZpZXcoXCJpdGVtVmlldzpcIiArIGl0ZW0uY2lkLCB2aWV3KTtcbiAgICB9XG4gICAgdmlldy5yZW5kZXIoKTtcbiAgICByZXR1cm4gdmlldztcbiAgfTtcblxuICBDb2xsZWN0aW9uVmlldy5wcm90b3R5cGUuaW5pdEl0ZW1WaWV3ID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgICBpZiAodGhpcy5pdGVtVmlldykge1xuICAgICAgcmV0dXJuIG5ldyB0aGlzLml0ZW1WaWV3KHtcbiAgICAgICAgYXV0b1JlbmRlcjogZmFsc2UsXG4gICAgICAgIG1vZGVsOiBtb2RlbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIENvbGxlY3Rpb25WaWV3I2l0ZW1WaWV3IHByb3BlcnR5ICcgKyAnbXVzdCBiZSBkZWZpbmVkIG9yIHRoZSBpbml0SXRlbVZpZXcoKSBtdXN0IGJlIG92ZXJyaWRkZW4uJyk7XG4gICAgfVxuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5pbnNlcnRWaWV3ID0gZnVuY3Rpb24oaXRlbSwgdmlldywgcG9zaXRpb24sIGVuYWJsZUFuaW1hdGlvbikge1xuICAgIHZhciBlbGVtLCBpbmNsdWRlZCwgbGVuZ3RoLCBsaXN0LFxuICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChlbmFibGVBbmltYXRpb24gPT0gbnVsbCkge1xuICAgICAgZW5hYmxlQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gPT09IDApIHtcbiAgICAgIGVuYWJsZUFuaW1hdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBvc2l0aW9uICE9PSAnbnVtYmVyJykge1xuICAgICAgcG9zaXRpb24gPSB0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgaW5jbHVkZWQgPSB0eXBlb2YgdGhpcy5maWx0ZXJlciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuZmlsdGVyZXIoaXRlbSwgcG9zaXRpb24pIDogdHJ1ZTtcbiAgICBlbGVtID0gJCA/IHZpZXcuJGVsIDogdmlldy5lbDtcbiAgICBpZiAoaW5jbHVkZWQgJiYgZW5hYmxlQW5pbWF0aW9uKSB7XG4gICAgICBzdGFydEFuaW1hdGlvbihlbGVtLCB0aGlzLnVzZUNzc0FuaW1hdGlvbiwgdGhpcy5hbmltYXRpb25TdGFydENsYXNzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsdGVyZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyQ2FsbGJhY2sodmlldywgaW5jbHVkZWQpO1xuICAgIH1cbiAgICBsZW5ndGggPSB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgIGxpc3QgPSAkID8gdGhpcy4kbGlzdCA6IHRoaXMubGlzdDtcbiAgICBpbnNlcnRWaWV3KGxpc3QsIGVsZW0sIHBvc2l0aW9uLCBsZW5ndGgsIHRoaXMuaXRlbVNlbGVjdG9yKTtcbiAgICB2aWV3LnRyaWdnZXIoJ2FkZGVkVG9QYXJlbnQnKTtcbiAgICB0aGlzLnVwZGF0ZVZpc2libGVJdGVtcyhpdGVtLCBpbmNsdWRlZCk7XG4gICAgaWYgKGluY2x1ZGVkICYmIGVuYWJsZUFuaW1hdGlvbikge1xuICAgICAgaWYgKHRoaXMudXNlQ3NzQW5pbWF0aW9uKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhZGRDbGFzcyhlbGVtLCBfdGhpcy5hbmltYXRpb25FbmRDbGFzcyk7XG4gICAgICAgIH0pLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZEFuaW1hdGlvbihlbGVtLCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZpZXc7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnJlbW92ZVZpZXdGb3JJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIHRoaXMudXBkYXRlVmlzaWJsZUl0ZW1zKGl0ZW0sIGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVTdWJ2aWV3KFwiaXRlbVZpZXc6XCIgKyBpdGVtLmNpZCk7XG4gIH07XG5cbiAgQ29sbGVjdGlvblZpZXcucHJvdG90eXBlLnVwZGF0ZVZpc2libGVJdGVtcyA9IGZ1bmN0aW9uKGl0ZW0sIGluY2x1ZGVkSW5GaWx0ZXIsIHRyaWdnZXJFdmVudCkge1xuICAgIHZhciBpbmNsdWRlZEluVmlzaWJsZUl0ZW1zLCB2aXNpYmlsaXR5Q2hhbmdlZCwgdmlzaWJsZUl0ZW1zSW5kZXg7XG4gICAgaWYgKHRyaWdnZXJFdmVudCA9PSBudWxsKSB7XG4gICAgICB0cmlnZ2VyRXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgICB2aXNpYmlsaXR5Q2hhbmdlZCA9IGZhbHNlO1xuICAgIHZpc2libGVJdGVtc0luZGV4ID0gdXRpbHMuaW5kZXhPZih0aGlzLnZpc2libGVJdGVtcywgaXRlbSk7XG4gICAgaW5jbHVkZWRJblZpc2libGVJdGVtcyA9IHZpc2libGVJdGVtc0luZGV4ICE9PSAtMTtcbiAgICBpZiAoaW5jbHVkZWRJbkZpbHRlciAmJiAhaW5jbHVkZWRJblZpc2libGVJdGVtcykge1xuICAgICAgdGhpcy52aXNpYmxlSXRlbXMucHVzaChpdGVtKTtcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFpbmNsdWRlZEluRmlsdGVyICYmIGluY2x1ZGVkSW5WaXNpYmxlSXRlbXMpIHtcbiAgICAgIHRoaXMudmlzaWJsZUl0ZW1zLnNwbGljZSh2aXNpYmxlSXRlbXNJbmRleCwgMSk7XG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2aXNpYmlsaXR5Q2hhbmdlZCAmJiB0cmlnZ2VyRXZlbnQpIHtcbiAgICAgIHRoaXMudHJpZ2dlcigndmlzaWJpbGl0eUNoYW5nZScsIHRoaXMudmlzaWJsZUl0ZW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHZpc2liaWxpdHlDaGFuZ2VkO1xuICB9O1xuXG4gIENvbGxlY3Rpb25WaWV3LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb3AsIHByb3BlcnRpZXMsIF9pLCBfbGVuO1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb3BlcnRpZXMgPSBbJyRsaXN0JywgJyRmYWxsYmFjaycsICckbG9hZGluZycsICd2aXNpYmxlSXRlbXMnXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHByb3BlcnRpZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHByb3AgPSBwcm9wZXJ0aWVzW19pXTtcbiAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gQ29sbGVjdGlvblZpZXcuX19zdXBlcl9fLmRpc3Bvc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICByZXR1cm4gQ29sbGVjdGlvblZpZXc7XG5cbn0pKFZpZXcpO1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2xpYi9yb3V0ZScsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIENvbnRyb2xsZXIsIEV2ZW50QnJva2VyLCBSb3V0ZSwgdXRpbHMsIF8sXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbkNvbnRyb2xsZXIgPSBsb2FkZXIoJ2NoYXBsaW4vY29udHJvbGxlcnMvY29udHJvbGxlcicpO1xuXG51dGlscyA9IGxvYWRlcignY2hhcGxpbi9saWIvdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGVzY2FwZVJlZ0V4cCwgb3B0aW9uYWxSZWdFeHAsIHBhcmFtUmVnRXhwLCBwcm9jZXNzVHJhaWxpbmdTbGFzaDtcblxuICBSb3V0ZS5leHRlbmQgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQ7XG5cbiAgXy5leHRlbmQoUm91dGUucHJvdG90eXBlLCBFdmVudEJyb2tlcik7XG5cbiAgZXNjYXBlUmVnRXhwID0gL1tcXC17fVxcW1xcXSs/LixcXFxcXFxeJHwjXFxzXS9nO1xuXG4gIG9wdGlvbmFsUmVnRXhwID0gL1xcKCguKj8pXFwpL2c7XG5cbiAgcGFyYW1SZWdFeHAgPSAvKD86OnxcXCopKFxcdyspL2c7XG5cbiAgcHJvY2Vzc1RyYWlsaW5nU2xhc2ggPSBmdW5jdGlvbihwYXRoLCB0cmFpbGluZykge1xuICAgIHN3aXRjaCAodHJhaWxpbmcpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgaWYgKHBhdGguc2xpY2UoLTEpICE9PSAnLycpIHtcbiAgICAgICAgICBwYXRoICs9ICcvJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGlmIChwYXRoLnNsaWNlKC0xKSA9PT0gJy8nKSB7XG4gICAgICAgICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFJvdXRlKHBhdHRlcm4sIGNvbnRyb2xsZXIsIGFjdGlvbiwgb3B0aW9ucykge1xuICAgIHZhciBfcmVmO1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB0aGlzLmhhbmRsZXIgPSBfX2JpbmQodGhpcy5oYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMucmVwbGFjZVBhcmFtcyA9IF9fYmluZCh0aGlzLnJlcGxhY2VQYXJhbXMsIHRoaXMpO1xuXG4gICAgdGhpcy5wYXJzZU9wdGlvbmFsUG9ydGlvbiA9IF9fYmluZCh0aGlzLnBhcnNlT3B0aW9uYWxQb3J0aW9uLCB0aGlzKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wYXR0ZXJuICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb3V0ZTogUmVnRXhwcyBhcmUgbm90IHN1cHBvcnRlZC5cXFxuICAgICAgICBVc2Ugc3RyaW5ncyB3aXRoIDpuYW1lcyBhbmQgYGNvbnN0cmFpbnRzYCBvcHRpb24gb2Ygcm91dGUnKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyA/IF8uZXh0ZW5kKHt9LCBvcHRpb25zKSA6IHt9O1xuICAgIGlmICh0aGlzLm9wdGlvbnMubmFtZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLm9wdGlvbnMubmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUuaW5kZXhPZignIycpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSb3V0ZTogXCIjXCIgY2Fubm90IGJlIHVzZWQgaW4gbmFtZScpO1xuICAgIH1cbiAgICBpZiAoKF9yZWYgPSB0aGlzLm5hbWUpID09IG51bGwpIHtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMuY29udHJvbGxlciArICcjJyArIHRoaXMuYWN0aW9uO1xuICAgIH1cbiAgICB0aGlzLmFsbFBhcmFtcyA9IFtdO1xuICAgIHRoaXMucmVxdWlyZWRQYXJhbXMgPSBbXTtcbiAgICB0aGlzLm9wdGlvbmFsUGFyYW1zID0gW107XG4gICAgaWYgKHRoaXMuYWN0aW9uIGluIENvbnRyb2xsZXIucHJvdG90eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdXRlOiBZb3Ugc2hvdWxkIG5vdCB1c2UgZXhpc3RpbmcgY29udHJvbGxlciAnICsgJ3Byb3BlcnRpZXMgYXMgYWN0aW9uIG5hbWVzJyk7XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlUmVnRXhwKCk7XG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgUm91dGUucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbihjcml0ZXJpYSkge1xuICAgIHZhciBpbnZhbGlkUGFyYW1zQ291bnQsIG5hbWUsIHByb3BlcnRpZXNDb3VudCwgcHJvcGVydHksIF9pLCBfbGVuLCBfcmVmO1xuICAgIGlmICh0eXBlb2YgY3JpdGVyaWEgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gY3JpdGVyaWEgPT09IHRoaXMubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydGllc0NvdW50ID0gMDtcbiAgICAgIF9yZWYgPSBbJ25hbWUnLCAnYWN0aW9uJywgJ2NvbnRyb2xsZXInXTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBuYW1lID0gX3JlZltfaV07XG4gICAgICAgIHByb3BlcnRpZXNDb3VudCsrO1xuICAgICAgICBwcm9wZXJ0eSA9IGNyaXRlcmlhW25hbWVdO1xuICAgICAgICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkgIT09IHRoaXNbbmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGludmFsaWRQYXJhbXNDb3VudCA9IHByb3BlcnRpZXNDb3VudCA9PT0gMSAmJiAobmFtZSA9PT0gJ2FjdGlvbicgfHwgbmFtZSA9PT0gJ2NvbnRyb2xsZXInKTtcbiAgICAgIHJldHVybiAhaW52YWxpZFBhcmFtc0NvdW50O1xuICAgIH1cbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uKHBhcmFtcywgcXVlcnkpIHtcbiAgICB2YXIgbmFtZSwgcXVlcnlTdHJpbmcsIHJhdywgdXJsLCB2YWx1ZSwgX2ksIF9qLCBfbGVuLCBfbGVuMSwgX3JlZiwgX3JlZjE7XG4gICAgcGFyYW1zID0gdGhpcy5ub3JtYWxpemVQYXJhbXMocGFyYW1zKTtcbiAgICBpZiAocGFyYW1zID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB1cmwgPSB0aGlzLnBhdHRlcm47XG4gICAgX3JlZiA9IHRoaXMucmVxdWlyZWRQYXJhbXM7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBuYW1lID0gX3JlZltfaV07XG4gICAgICB2YWx1ZSA9IHBhcmFtc1tuYW1lXTtcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKFJlZ0V4cChcIls6Kl1cIiArIG5hbWUsIFwiZ1wiKSwgdmFsdWUpO1xuICAgIH1cbiAgICBfcmVmMSA9IHRoaXMub3B0aW9uYWxQYXJhbXM7XG4gICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjEubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICBuYW1lID0gX3JlZjFbX2pdO1xuICAgICAgaWYgKHZhbHVlID0gcGFyYW1zW25hbWVdKSB7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFJlZ0V4cChcIls6Kl1cIiArIG5hbWUsIFwiZ1wiKSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByYXcgPSB1cmwucmVwbGFjZShvcHRpb25hbFJlZ0V4cCwgZnVuY3Rpb24obWF0Y2gsIHBvcnRpb24pIHtcbiAgICAgIGlmIChwb3J0aW9uLm1hdGNoKC9bOipdL2cpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBvcnRpb247XG4gICAgICB9XG4gICAgfSk7XG4gICAgdXJsID0gcHJvY2Vzc1RyYWlsaW5nU2xhc2gocmF3LCB0aGlzLm9wdGlvbnMudHJhaWxpbmcpO1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IHV0aWxzLnF1ZXJ5UGFyYW1zLnN0cmluZ2lmeShxdWVyeSk7XG4gICAgICByZXR1cm4gdXJsICs9IHF1ZXJ5U3RyaW5nID8gJz8nICsgcXVlcnlTdHJpbmcgOiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybCArPSAocXVlcnlbMF0gPT09ICc/JyA/ICcnIDogJz8nKSArIHF1ZXJ5O1xuICAgIH1cbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUubm9ybWFsaXplUGFyYW1zID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgdmFyIHBhcmFtSW5kZXgsIHBhcmFtTmFtZSwgcGFyYW1zSGFzaCwgX2ksIF9sZW4sIF9yZWY7XG4gICAgaWYgKHV0aWxzLmlzQXJyYXkocGFyYW1zKSkge1xuICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPCB0aGlzLnJlcXVpcmVkUGFyYW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBwYXJhbXNIYXNoID0ge307XG4gICAgICBfcmVmID0gdGhpcy5yZXF1aXJlZFBhcmFtcztcbiAgICAgIGZvciAocGFyYW1JbmRleCA9IF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IHBhcmFtSW5kZXggPSArK19pKSB7XG4gICAgICAgIHBhcmFtTmFtZSA9IF9yZWZbcGFyYW1JbmRleF07XG4gICAgICAgIHBhcmFtc0hhc2hbcGFyYW1OYW1lXSA9IHBhcmFtc1twYXJhbUluZGV4XTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50ZXN0Q29uc3RyYWludHMocGFyYW1zSGFzaCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcGFyYW1zID0gcGFyYW1zSGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtcyA9PSBudWxsKSB7XG4gICAgICAgIHBhcmFtcyA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnRlc3RQYXJhbXMocGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLnRlc3RDb25zdHJhaW50cyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIHZhciBjb25zdHJhaW50LCBjb25zdHJhaW50cywgbmFtZTtcbiAgICBjb25zdHJhaW50cyA9IHRoaXMub3B0aW9ucy5jb25zdHJhaW50cztcbiAgICBpZiAoY29uc3RyYWludHMpIHtcbiAgICAgIGZvciAobmFtZSBpbiBjb25zdHJhaW50cykge1xuICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGNvbnN0cmFpbnRzLCBuYW1lKSkgY29udGludWU7XG4gICAgICAgIGNvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tuYW1lXTtcbiAgICAgICAgaWYgKCFjb25zdHJhaW50LnRlc3QocGFyYW1zW25hbWVdKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUudGVzdFBhcmFtcyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIHZhciBwYXJhbU5hbWUsIF9pLCBfbGVuLCBfcmVmO1xuICAgIF9yZWYgPSB0aGlzLnJlcXVpcmVkUGFyYW1zO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgcGFyYW1OYW1lID0gX3JlZltfaV07XG4gICAgICBpZiAocGFyYW1zW3BhcmFtTmFtZV0gPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRlc3RDb25zdHJhaW50cyhwYXJhbXMpO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5jcmVhdGVSZWdFeHAgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGF0dGVybixcbiAgICAgIF90aGlzID0gdGhpcztcbiAgICBwYXR0ZXJuID0gdGhpcy5wYXR0ZXJuO1xuICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnJlcGxhY2UoZXNjYXBlUmVnRXhwLCAnXFxcXCQmJyk7XG4gICAgdGhpcy5yZXBsYWNlUGFyYW1zKHBhdHRlcm4sIGZ1bmN0aW9uKG1hdGNoLCBwYXJhbSkge1xuICAgICAgcmV0dXJuIF90aGlzLmFsbFBhcmFtcy5wdXNoKHBhcmFtKTtcbiAgICB9KTtcbiAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKG9wdGlvbmFsUmVnRXhwLCB0aGlzLnBhcnNlT3B0aW9uYWxQb3J0aW9uKTtcbiAgICBwYXR0ZXJuID0gdGhpcy5yZXBsYWNlUGFyYW1zKHBhdHRlcm4sIGZ1bmN0aW9uKG1hdGNoLCBwYXJhbSkge1xuICAgICAgX3RoaXMucmVxdWlyZWRQYXJhbXMucHVzaChwYXJhbSk7XG4gICAgICByZXR1cm4gX3RoaXMucGFyYW1DYXB0dXJlUGF0dGVybihtYXRjaCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucmVnRXhwID0gUmVnRXhwKFwiXlwiICsgcGF0dGVybiArIFwiKD89XFxcXC8/KD89XFxcXD98JCkpXCIpO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5wYXJzZU9wdGlvbmFsUG9ydGlvbiA9IGZ1bmN0aW9uKG1hdGNoLCBvcHRpb25hbFBvcnRpb24pIHtcbiAgICB2YXIgcG9ydGlvbixcbiAgICAgIF90aGlzID0gdGhpcztcbiAgICBwb3J0aW9uID0gdGhpcy5yZXBsYWNlUGFyYW1zKG9wdGlvbmFsUG9ydGlvbiwgZnVuY3Rpb24obWF0Y2gsIHBhcmFtKSB7XG4gICAgICBfdGhpcy5vcHRpb25hbFBhcmFtcy5wdXNoKHBhcmFtKTtcbiAgICAgIHJldHVybiBfdGhpcy5wYXJhbUNhcHR1cmVQYXR0ZXJuKG1hdGNoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gXCIoPzpcIiArIHBvcnRpb24gKyBcIik/XCI7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLnJlcGxhY2VQYXJhbXMgPSBmdW5jdGlvbihzLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBzLnJlcGxhY2UocGFyYW1SZWdFeHAsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUucGFyYW1DYXB0dXJlUGF0dGVybiA9IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgaWYgKHBhcmFtLmNoYXJBdCgwKSA9PT0gJzonKSB7XG4gICAgICByZXR1cm4gJyhbXlxcL1xcP10rKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnKC4qPyknO1xuICAgIH1cbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICB2YXIgY29uc3RyYWludHMsIG1hdGNoZWQ7XG4gICAgbWF0Y2hlZCA9IHRoaXMucmVnRXhwLnRlc3QocGF0aCk7XG4gICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0cmFpbnRzID0gdGhpcy5vcHRpb25zLmNvbnN0cmFpbnRzO1xuICAgIGlmIChjb25zdHJhaW50cykge1xuICAgICAgcmV0dXJuIHRoaXMudGVzdENvbnN0cmFpbnRzKHRoaXMuZXh0cmFjdFBhcmFtcyhwYXRoKSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5oYW5kbGVyID0gZnVuY3Rpb24ocGF0aFBhcmFtcywgb3B0aW9ucykge1xuICAgIHZhciBhY3Rpb25QYXJhbXMsIHBhcmFtcywgcGF0aCwgcXVlcnksIHJvdXRlLCBfcmVmO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gXy5leHRlbmQoe30sIG9wdGlvbnMpIDoge307XG4gICAgaWYgKHR5cGVvZiBwYXRoUGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgcXVlcnkgPSB1dGlscy5xdWVyeVBhcmFtcy5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSk7XG4gICAgICBwYXJhbXMgPSBwYXRoUGFyYW1zO1xuICAgICAgcGF0aCA9IHRoaXMucmV2ZXJzZShwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfcmVmID0gcGF0aFBhcmFtcy5zcGxpdCgnPycpLCBwYXRoID0gX3JlZlswXSwgcXVlcnkgPSBfcmVmWzFdO1xuICAgICAgaWYgKCEocXVlcnkgIT0gbnVsbCkpIHtcbiAgICAgICAgcXVlcnkgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMucXVlcnkgPSB1dGlscy5xdWVyeVBhcmFtcy5wYXJzZShxdWVyeSk7XG4gICAgICB9XG4gICAgICBwYXJhbXMgPSB0aGlzLmV4dHJhY3RQYXJhbXMocGF0aCk7XG4gICAgICBwYXRoID0gcHJvY2Vzc1RyYWlsaW5nU2xhc2gocGF0aCwgdGhpcy5vcHRpb25zLnRyYWlsaW5nKTtcbiAgICB9XG4gICAgYWN0aW9uUGFyYW1zID0gXy5leHRlbmQoe30sIHBhcmFtcywgdGhpcy5vcHRpb25zLnBhcmFtcyk7XG4gICAgcm91dGUgPSB7XG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbixcbiAgICAgIGNvbnRyb2xsZXI6IHRoaXMuY29udHJvbGxlcixcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucHVibGlzaEV2ZW50KCdyb3V0ZXI6bWF0Y2gnLCByb3V0ZSwgYWN0aW9uUGFyYW1zLCBvcHRpb25zKTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuZXh0cmFjdFBhcmFtcyA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICB2YXIgaW5kZXgsIG1hdGNoLCBtYXRjaGVzLCBwYXJhbU5hbWUsIHBhcmFtcywgX2ksIF9sZW4sIF9yZWY7XG4gICAgcGFyYW1zID0ge307XG4gICAgbWF0Y2hlcyA9IHRoaXMucmVnRXhwLmV4ZWMocGF0aCk7XG4gICAgX3JlZiA9IG1hdGNoZXMuc2xpY2UoMSk7XG4gICAgZm9yIChpbmRleCA9IF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IGluZGV4ID0gKytfaSkge1xuICAgICAgbWF0Y2ggPSBfcmVmW2luZGV4XTtcbiAgICAgIHBhcmFtTmFtZSA9IHRoaXMuYWxsUGFyYW1zLmxlbmd0aCA/IHRoaXMuYWxsUGFyYW1zW2luZGV4XSA6IGluZGV4O1xuICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSBtYXRjaDtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfTtcblxuICByZXR1cm4gUm91dGU7XG5cbn0pKCk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbGliL3JvdXRlcicsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmFja2JvbmUsIEV2ZW50QnJva2VyLCBIaXN0b3J5LCBSb3V0ZSwgUm91dGVyLCBtZWRpYXRvciwgdXRpbHMsIF8sXG4gIF9fYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbl8gPSBsb2FkZXIoJ3VuZGVyc2NvcmUnKTtcblxuQmFja2JvbmUgPSBsb2FkZXIoJ2JhY2tib25lJyk7XG5cbm1lZGlhdG9yID0gbG9hZGVyKCdjaGFwbGluL21lZGlhdG9yJyk7XG5cbkV2ZW50QnJva2VyID0gbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKTtcblxuSGlzdG9yeSA9IGxvYWRlcignY2hhcGxpbi9saWIvaGlzdG9yeScpO1xuXG5Sb3V0ZSA9IGxvYWRlcignY2hhcGxpbi9saWIvcm91dGUnKTtcblxudXRpbHMgPSBsb2FkZXIoJ2NoYXBsaW4vbGliL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gIFJvdXRlci5leHRlbmQgPSBCYWNrYm9uZS5Nb2RlbC5leHRlbmQ7XG5cbiAgXy5leHRlbmQoUm91dGVyLnByb3RvdHlwZSwgRXZlbnRCcm9rZXIpO1xuXG4gIGZ1bmN0aW9uIFJvdXRlcihvcHRpb25zKSB7XG4gICAgdmFyIGlzV2ViRmlsZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zICE9IG51bGwgPyBvcHRpb25zIDoge307XG4gICAgdGhpcy5tYXRjaCA9IF9fYmluZCh0aGlzLm1hdGNoLCB0aGlzKTtcblxuICAgIGlzV2ViRmlsZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2ZpbGU6JztcbiAgICBfLmRlZmF1bHRzKHRoaXMub3B0aW9ucywge1xuICAgICAgcHVzaFN0YXRlOiBpc1dlYkZpbGUsXG4gICAgICByb290OiAnLycsXG4gICAgICB0cmFpbGluZzogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLnJlbW92ZVJvb3QgPSBuZXcgUmVnRXhwKCdeJyArIHV0aWxzLmVzY2FwZVJlZ0V4cCh0aGlzLm9wdGlvbnMucm9vdCkgKyAnKCMpPycpO1xuICAgIHRoaXMuc3Vic2NyaWJlRXZlbnQoJyFyb3V0ZXI6cm91dGUnLCB0aGlzLm9sZEV2ZW50RXJyb3IpO1xuICAgIHRoaXMuc3Vic2NyaWJlRXZlbnQoJyFyb3V0ZXI6cm91dGVCeU5hbWUnLCB0aGlzLm9sZEV2ZW50RXJyb3IpO1xuICAgIHRoaXMuc3Vic2NyaWJlRXZlbnQoJyFyb3V0ZXI6Y2hhbmdlVVJMJywgdGhpcy5vbGRVUkxFdmVudEVycm9yKTtcbiAgICB0aGlzLnN1YnNjcmliZUV2ZW50KCdkaXNwYXRjaGVyOmRpc3BhdGNoJywgdGhpcy5jaGFuZ2VVUkwpO1xuICAgIG1lZGlhdG9yLnNldEhhbmRsZXIoJ3JvdXRlcjpyb3V0ZScsIHRoaXMucm91dGUsIHRoaXMpO1xuICAgIG1lZGlhdG9yLnNldEhhbmRsZXIoJ3JvdXRlcjpyZXZlcnNlJywgdGhpcy5yZXZlcnNlLCB0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZUhpc3RvcnkoKTtcbiAgfVxuXG4gIFJvdXRlci5wcm90b3R5cGUub2xkRXZlbnRFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignIXJvdXRlcjpyb3V0ZSBhbmQgIXJvdXRlcjpyb3V0ZUJ5TmFtZSBldmVudHMgd2VyZSByZW1vdmVkLlxcXG4gIFVzZSBgQ2hhcGxpbi51dGlscy5yZWRpcmVjdFRvYCcpO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUub2xkVVJMRXZlbnRFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignIXJvdXRlcjpjaGFuZ2VVUkwgZXZlbnQgd2FzIHJlbW92ZWQuJyk7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jcmVhdGVIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIEJhY2tib25lLmhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUuc3RhcnRIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIEJhY2tib25lLmhpc3Rvcnkuc3RhcnQodGhpcy5vcHRpb25zKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLnN0b3BIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKEJhY2tib25lLkhpc3Rvcnkuc3RhcnRlZCkge1xuICAgICAgcmV0dXJuIEJhY2tib25lLmhpc3Rvcnkuc3RvcCgpO1xuICAgIH1cbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmZpbmRIYW5kbGVyID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XG4gICAgdmFyIGhhbmRsZXIsIF9pLCBfbGVuLCBfcmVmO1xuICAgIF9yZWYgPSBCYWNrYm9uZS5oaXN0b3J5LmhhbmRsZXJzO1xuICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgaGFuZGxlciA9IF9yZWZbX2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShoYW5kbGVyKSkge1xuICAgICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uKHBhdHRlcm4sIHRhcmdldCwgb3B0aW9ucykge1xuICAgIHZhciBhY3Rpb24sIGNvbnRyb2xsZXIsIHJvdXRlLCBfcmVmO1xuICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMgPSB0YXJnZXQ7XG4gICAgICBjb250cm9sbGVyID0gb3B0aW9ucy5jb250cm9sbGVyLCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcbiAgICAgIGlmICghKGNvbnRyb2xsZXIgJiYgYWN0aW9uKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdXRlciNtYXRjaCBtdXN0IHJlY2VpdmUgZWl0aGVyIHRhcmdldCBvciAnICsgJ29wdGlvbnMuY29udHJvbGxlciAmIG9wdGlvbnMuYWN0aW9uJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xsZXIgPSBvcHRpb25zLmNvbnRyb2xsZXIsIGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xuICAgICAgaWYgKGNvbnRyb2xsZXIgfHwgYWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGVyI21hdGNoIGNhbm5vdCB1c2UgYm90aCB0YXJnZXQgYW5kICcgKyAnb3B0aW9ucy5jb250cm9sbGVyIC8gb3B0aW9ucy5hY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIF9yZWYgPSB0YXJnZXQuc3BsaXQoJyMnKSwgY29udHJvbGxlciA9IF9yZWZbMF0sIGFjdGlvbiA9IF9yZWZbMV07XG4gICAgfVxuICAgIF8uZGVmYXVsdHMob3B0aW9ucywge1xuICAgICAgdHJhaWxpbmc6IHRoaXMub3B0aW9ucy50cmFpbGluZ1xuICAgIH0pO1xuICAgIHJvdXRlID0gbmV3IFJvdXRlKHBhdHRlcm4sIGNvbnRyb2xsZXIsIGFjdGlvbiwgb3B0aW9ucyk7XG4gICAgQmFja2JvbmUuaGlzdG9yeS5oYW5kbGVycy5wdXNoKHtcbiAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgIGNhbGxiYWNrOiByb3V0ZS5oYW5kbGVyXG4gICAgfSk7XG4gICAgcmV0dXJuIHJvdXRlO1xuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUucm91dGUgPSBmdW5jdGlvbihwYXRoRGVzYywgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgdmFyIGhhbmRsZXIsIHBhdGg7XG4gICAgaWYgKHR5cGVvZiBwYXRoRGVzYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHBhdGggPSBwYXRoRGVzYy51cmw7XG4gICAgICBpZiAoIXBhcmFtcyAmJiBwYXRoRGVzYy5wYXJhbXMpIHtcbiAgICAgICAgcGFyYW1zID0gcGF0aERlc2MucGFyYW1zO1xuICAgICAgfVxuICAgIH1cbiAgICBwYXJhbXMgPSBwYXJhbXMgPyB1dGlscy5pc0FycmF5KHBhcmFtcykgPyBwYXJhbXMuc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBwYXJhbXMpIDoge307XG4gICAgaWYgKHBhdGggIT0gbnVsbCkge1xuICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSh0aGlzLnJlbW92ZVJvb3QsICcnKTtcbiAgICAgIGhhbmRsZXIgPSB0aGlzLmZpbmRIYW5kbGVyKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIucm91dGUudGVzdChwYXRoKTtcbiAgICAgIH0pO1xuICAgICAgb3B0aW9ucyA9IHBhcmFtcztcbiAgICAgIHBhcmFtcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zID8gXy5leHRlbmQoe30sIG9wdGlvbnMpIDoge307XG4gICAgICBoYW5kbGVyID0gdGhpcy5maW5kSGFuZGxlcihmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgIGlmIChoYW5kbGVyLnJvdXRlLm1hdGNoZXMocGF0aERlc2MpKSB7XG4gICAgICAgICAgcGFyYW1zID0gaGFuZGxlci5yb3V0ZS5ub3JtYWxpemVQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICBfLmRlZmF1bHRzKG9wdGlvbnMsIHtcbiAgICAgICAgY2hhbmdlVVJMOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZXIuY2FsbGJhY2socGF0aCB8fCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGVyI3JvdXRlOiByZXF1ZXN0IHdhcyBub3Qgcm91dGVkJyk7XG4gICAgfVxuICB9O1xuXG4gIFJvdXRlci5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uKGNyaXRlcmlhLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgdmFyIGhhbmRsZXIsIGhhbmRsZXJzLCByZXZlcnNlZCwgcm9vdCwgdXJsLCBfaSwgX2xlbjtcbiAgICByb290ID0gdGhpcy5vcHRpb25zLnJvb3Q7XG4gICAgaWYgKChwYXJhbXMgIT0gbnVsbCkgJiYgdHlwZW9mIHBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JvdXRlciNyZXZlcnNlOiBwYXJhbXMgbXVzdCBiZSBhbiBhcnJheSBvciBhbiAnICsgJ29iamVjdCcpO1xuICAgIH1cbiAgICBoYW5kbGVycyA9IEJhY2tib25lLmhpc3RvcnkuaGFuZGxlcnM7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBoYW5kbGVycy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgaGFuZGxlciA9IGhhbmRsZXJzW19pXTtcbiAgICAgIGlmICghKGhhbmRsZXIucm91dGUubWF0Y2hlcyhjcml0ZXJpYSkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmV2ZXJzZWQgPSBoYW5kbGVyLnJvdXRlLnJldmVyc2UocGFyYW1zLCBxdWVyeSk7XG4gICAgICBpZiAocmV2ZXJzZWQgIT09IGZhbHNlKSB7XG4gICAgICAgIHVybCA9IHJvb3QgPyByb290ICsgcmV2ZXJzZWQgOiByZXZlcnNlZDtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSb3V0ZXIjcmV2ZXJzZTogaW52YWxpZCByb3V0ZSBzcGVjaWZpZWQnKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLmNoYW5nZVVSTCA9IGZ1bmN0aW9uKGNvbnRyb2xsZXIsIHBhcmFtcywgcm91dGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgbmF2aWdhdGVPcHRpb25zLCB1cmw7XG4gICAgaWYgKCEoKHJvdXRlLnBhdGggIT0gbnVsbCkgJiYgb3B0aW9ucy5jaGFuZ2VVUkwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHVybCA9IHJvdXRlLnBhdGggKyAocm91dGUucXVlcnkgPyBcIj9cIiArIHJvdXRlLnF1ZXJ5IDogXCJcIik7XG4gICAgbmF2aWdhdGVPcHRpb25zID0ge1xuICAgICAgdHJpZ2dlcjogb3B0aW9ucy50cmlnZ2VyID09PSB0cnVlLFxuICAgICAgcmVwbGFjZTogb3B0aW9ucy5yZXBsYWNlID09PSB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gQmFja2JvbmUuaGlzdG9yeS5uYXZpZ2F0ZSh1cmwsIG5hdmlnYXRlT3B0aW9ucyk7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5kaXNwb3NlZCA9IGZhbHNlO1xuXG4gIFJvdXRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmRpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RvcEhpc3RvcnkoKTtcbiAgICBkZWxldGUgQmFja2JvbmUuaGlzdG9yeTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlQWxsRXZlbnRzKCk7XG4gICAgbWVkaWF0b3IucmVtb3ZlSGFuZGxlcnModGhpcyk7XG4gICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIHJldHVybiBSb3V0ZXI7XG5cbn0pKCk7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbGliL2hpc3RvcnknLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEJhY2tib25lLCBIaXN0b3J5LCBpc0V4cGxvcmVyLCByb290U3RyaXBwZXIsIHJvdXRlU3RyaXBwZXIsIHRyYWlsaW5nU2xhc2gsIF8sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5CYWNrYm9uZSA9IGxvYWRlcignYmFja2JvbmUnKTtcblxucm91dGVTdHJpcHBlciA9IC9eWyNcXC9dfFxccyskL2c7XG5cbnJvb3RTdHJpcHBlciA9IC9eXFwvK3xcXC8rJC9nO1xuXG5pc0V4cGxvcmVyID0gL21zaWUgW1xcdy5dKy87XG5cbnRyYWlsaW5nU2xhc2ggPSAvXFwvJC87XG5cbkhpc3RvcnkgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG5cbiAgX19leHRlbmRzKEhpc3RvcnksIF9zdXBlcik7XG5cbiAgZnVuY3Rpb24gSGlzdG9yeSgpIHtcbiAgICByZXR1cm4gSGlzdG9yeS5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIEhpc3RvcnkucHJvdG90eXBlLmdldEZyYWdtZW50ID0gZnVuY3Rpb24oZnJhZ21lbnQsIGZvcmNlUHVzaFN0YXRlKSB7XG4gICAgdmFyIHJvb3Q7XG4gICAgaWYgKCEoZnJhZ21lbnQgIT0gbnVsbCkpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUgfHwgIXRoaXMuX3dhbnRzSGFzaENoYW5nZSB8fCBmb3JjZVB1c2hTdGF0ZSkge1xuICAgICAgICBmcmFnbWVudCA9IHRoaXMubG9jYXRpb24ucGF0aG5hbWUgKyB0aGlzLmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgcm9vdCA9IHRoaXMucm9vdC5yZXBsYWNlKHRyYWlsaW5nU2xhc2gsICcnKTtcbiAgICAgICAgaWYgKCFmcmFnbWVudC5pbmRleE9mKHJvb3QpKSB7XG4gICAgICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudC5zdWJzdHIocm9vdC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcmFnbWVudCA9IHRoaXMuZ2V0SGFzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnQucmVwbGFjZShyb3V0ZVN0cmlwcGVyLCAnJyk7XG4gIH07XG5cbiAgSGlzdG9yeS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGF0Um9vdCwgZnJhZ21lbnQsIGxvYztcbiAgICBpZiAoQmFja2JvbmUuSGlzdG9yeS5zdGFydGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhY2tib25lLmhpc3RvcnkgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkJyk7XG4gICAgfVxuICAgIEJhY2tib25lLkhpc3Rvcnkuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIHtcbiAgICAgIHJvb3Q6ICcvJ1xuICAgIH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5yb290ID0gdGhpcy5vcHRpb25zLnJvb3Q7XG4gICAgdGhpcy5fd2FudHNIYXNoQ2hhbmdlID0gdGhpcy5vcHRpb25zLmhhc2hDaGFuZ2UgIT09IGZhbHNlO1xuICAgIHRoaXMuX3dhbnRzUHVzaFN0YXRlID0gQm9vbGVhbih0aGlzLm9wdGlvbnMucHVzaFN0YXRlKTtcbiAgICB0aGlzLl9oYXNQdXNoU3RhdGUgPSBCb29sZWFuKHRoaXMub3B0aW9ucy5wdXNoU3RhdGUgJiYgdGhpcy5oaXN0b3J5ICYmIHRoaXMuaGlzdG9yeS5wdXNoU3RhdGUpO1xuICAgIGZyYWdtZW50ID0gdGhpcy5nZXRGcmFnbWVudCgpO1xuICAgIHRoaXMucm9vdCA9ICgnLycgKyB0aGlzLnJvb3QgKyAnLycpLnJlcGxhY2Uocm9vdFN0cmlwcGVyLCAnLycpO1xuICAgIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUpIHtcbiAgICAgIEJhY2tib25lLiQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLmNoZWNrVXJsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSAmJiAnb25oYXNoY2hhbmdlJyBpbiB3aW5kb3cpIHtcbiAgICAgIEJhY2tib25lLiQod2luZG93KS5vbignaGFzaGNoYW5nZScsIHRoaXMuY2hlY2tVcmwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fd2FudHNIYXNoQ2hhbmdlKSB7XG4gICAgICB0aGlzLl9jaGVja1VybEludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5jaGVja1VybCwgdGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICAgIHRoaXMuZnJhZ21lbnQgPSBmcmFnbWVudDtcbiAgICBsb2MgPSB0aGlzLmxvY2F0aW9uO1xuICAgIGF0Um9vdCA9IGxvYy5wYXRobmFtZS5yZXBsYWNlKC9bXlxcL10kLywgJyQmLycpID09PSB0aGlzLnJvb3Q7XG4gICAgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSAmJiB0aGlzLl93YW50c1B1c2hTdGF0ZSAmJiAhdGhpcy5faGFzUHVzaFN0YXRlICYmICFhdFJvb3QpIHtcbiAgICAgIHRoaXMuZnJhZ21lbnQgPSB0aGlzLmdldEZyYWdtZW50KG51bGwsIHRydWUpO1xuICAgICAgdGhpcy5sb2NhdGlvbi5yZXBsYWNlKHRoaXMucm9vdCArICcjJyArIHRoaXMuZnJhZ21lbnQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl93YW50c1B1c2hTdGF0ZSAmJiB0aGlzLl9oYXNQdXNoU3RhdGUgJiYgYXRSb290ICYmIGxvYy5oYXNoKSB7XG4gICAgICB0aGlzLmZyYWdtZW50ID0gdGhpcy5nZXRIYXNoKCkucmVwbGFjZShyb3V0ZVN0cmlwcGVyLCAnJyk7XG4gICAgICB0aGlzLmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdGhpcy5yb290ICsgdGhpcy5mcmFnbWVudCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLnNpbGVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZFVybCgpO1xuICAgIH1cbiAgfTtcblxuICBIaXN0b3J5LnByb3RvdHlwZS5uYXZpZ2F0ZSA9IGZ1bmN0aW9uKGZyYWdtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGhpc3RvcnlNZXRob2QsIGlzU2FtZUZyYWdtZW50LCB1cmw7XG4gICAgaWYgKGZyYWdtZW50ID09IG51bGwpIHtcbiAgICAgIGZyYWdtZW50ID0gJyc7XG4gICAgfVxuICAgIGlmICghQmFja2JvbmUuSGlzdG9yeS5zdGFydGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghb3B0aW9ucyB8fCBvcHRpb25zID09PSB0cnVlKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICB0cmlnZ2VyOiBvcHRpb25zXG4gICAgICB9O1xuICAgIH1cbiAgICBmcmFnbWVudCA9IHRoaXMuZ2V0RnJhZ21lbnQoZnJhZ21lbnQpO1xuICAgIHVybCA9IHRoaXMucm9vdCArIGZyYWdtZW50O1xuICAgIGlmICh0aGlzLmZyYWdtZW50ID09PSBmcmFnbWVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQ7XG4gICAgaWYgKGZyYWdtZW50Lmxlbmd0aCA9PT0gMCAmJiB1cmwgIT09ICcvJykge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc1B1c2hTdGF0ZSkge1xuICAgICAgaGlzdG9yeU1ldGhvZCA9IG9wdGlvbnMucmVwbGFjZSA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSc7XG4gICAgICB0aGlzLmhpc3RvcnlbaGlzdG9yeU1ldGhvZF0oe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fd2FudHNIYXNoQ2hhbmdlKSB7XG4gICAgICB0aGlzLl91cGRhdGVIYXNoKHRoaXMubG9jYXRpb24sIGZyYWdtZW50LCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgaXNTYW1lRnJhZ21lbnQgPSBmcmFnbWVudCAhPT0gdGhpcy5nZXRGcmFnbWVudCh0aGlzLmdldEhhc2godGhpcy5pZnJhbWUpKTtcbiAgICAgIGlmICgodGhpcy5pZnJhbWUgIT0gbnVsbCkgJiYgaXNTYW1lRnJhZ21lbnQpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLnJlcGxhY2UpIHtcbiAgICAgICAgICB0aGlzLmlmcmFtZS5kb2N1bWVudC5vcGVuKCkuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVIYXNoKHRoaXMuaWZyYW1lLmxvY2F0aW9uLCBmcmFnbWVudCwgb3B0aW9ucy5yZXBsYWNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb24uYXNzaWduKHVybCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRyaWdnZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRVcmwoZnJhZ21lbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gSGlzdG9yeTtcblxufSkoQmFja2JvbmUuSGlzdG9yeSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuJCA/IEhpc3RvcnkgOiBCYWNrYm9uZS5IaXN0b3J5O1xuXG59KTs7bG9hZGVyLnJlZ2lzdGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIEV2ZW50QnJva2VyLCBtZWRpYXRvcixcbiAgX19zbGljZSA9IFtdLnNsaWNlO1xuXG5tZWRpYXRvciA9IGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpO1xuXG5FdmVudEJyb2tlciA9IHtcbiAgc3Vic2NyaWJlRXZlbnQ6IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFdmVudEJyb2tlciNzdWJzY3JpYmVFdmVudDogJyArICd0eXBlIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFdmVudEJyb2tlciNzdWJzY3JpYmVFdmVudDogJyArICdoYW5kbGVyIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICBtZWRpYXRvci51bnN1YnNjcmliZSh0eXBlLCBoYW5kbGVyLCB0aGlzKTtcbiAgICByZXR1cm4gbWVkaWF0b3Iuc3Vic2NyaWJlKHR5cGUsIGhhbmRsZXIsIHRoaXMpO1xuICB9LFxuICB1bnN1YnNjcmliZUV2ZW50OiBmdW5jdGlvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXZlbnRCcm9rZXIjdW5zdWJzY3JpYmVFdmVudDogJyArICd0eXBlIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFdmVudEJyb2tlciN1bnN1YnNjcmliZUV2ZW50OiAnICsgJ2hhbmRsZXIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHJldHVybiBtZWRpYXRvci51bnN1YnNjcmliZSh0eXBlLCBoYW5kbGVyKTtcbiAgfSxcbiAgdW5zdWJzY3JpYmVBbGxFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBtZWRpYXRvci51bnN1YnNjcmliZShudWxsLCBudWxsLCB0aGlzKTtcbiAgfSxcbiAgcHVibGlzaEV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncywgdHlwZTtcbiAgICB0eXBlID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFdmVudEJyb2tlciNwdWJsaXNoRXZlbnQ6ICcgKyAndHlwZSBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIHJldHVybiBtZWRpYXRvci5wdWJsaXNoLmFwcGx5KG1lZGlhdG9yLCBbdHlwZV0uY29uY2F0KF9fc2xpY2UuY2FsbChhcmdzKSkpO1xuICB9XG59O1xuXG5pZiAodHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIikge1xuICBPYmplY3QuZnJlZXplKEV2ZW50QnJva2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEJyb2tlcjtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9saWIvc3VwcG9ydCcsIGZ1bmN0aW9uKGUsIHIsIG1vZHVsZSkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcG9ydDtcblxuc3VwcG9ydCA9IHtcbiAgcHJvcGVydHlEZXNjcmlwdG9yczogKGZ1bmN0aW9uKCkge1xuICAgIHZhciBvO1xuICAgIGlmICghKHR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbyA9IHt9O1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sICdmb28nLCB7XG4gICAgICAgIHZhbHVlOiAnYmFyJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gby5mb28gPT09ICdiYXInO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KSgpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnQ7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4vbGliL2NvbXBvc2l0aW9uJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBCYWNrYm9uZSwgQ29tcG9zaXRpb24sIEV2ZW50QnJva2VyLCBoYXMsIF8sXG4gIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5fID0gbG9hZGVyKCd1bmRlcnNjb3JlJyk7XG5cbkJhY2tib25lID0gbG9hZGVyKCdiYWNrYm9uZScpO1xuXG5FdmVudEJyb2tlciA9IGxvYWRlcignY2hhcGxpbi9saWIvZXZlbnRfYnJva2VyJyk7XG5cbmhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9zaXRpb24gPSAoZnVuY3Rpb24oKSB7XG5cbiAgQ29tcG9zaXRpb24uZXh0ZW5kID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kO1xuXG4gIF8uZXh0ZW5kKENvbXBvc2l0aW9uLnByb3RvdHlwZSwgQmFja2JvbmUuRXZlbnRzKTtcblxuICBfLmV4dGVuZChDb21wb3NpdGlvbi5wcm90b3R5cGUsIEV2ZW50QnJva2VyKTtcblxuICBDb21wb3NpdGlvbi5wcm90b3R5cGUuaXRlbSA9IG51bGw7XG5cbiAgQ29tcG9zaXRpb24ucHJvdG90eXBlLm9wdGlvbnMgPSBudWxsO1xuXG4gIENvbXBvc2l0aW9uLnByb3RvdHlwZS5fc3RhbGUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBDb21wb3NpdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIG9wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLml0ZW0gPSB0aGlzO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgQ29tcG9zaXRpb24ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHt9O1xuXG4gIENvbXBvc2l0aW9uLnByb3RvdHlwZS5jb21wb3NlID0gZnVuY3Rpb24oKSB7fTtcblxuICBDb21wb3NpdGlvbi5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIF8uaXNFcXVhbCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIENvbXBvc2l0aW9uLnByb3RvdHlwZS5zdGFsZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGl0ZW0sIG5hbWU7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFsZTtcbiAgICB9XG4gICAgdGhpcy5fc3RhbGUgPSB2YWx1ZTtcbiAgICBmb3IgKG5hbWUgaW4gdGhpcykge1xuICAgICAgaXRlbSA9IHRoaXNbbmFtZV07XG4gICAgICBpZiAoaXRlbSAmJiBpdGVtICE9PSB0aGlzICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiBoYXMuY2FsbChpdGVtLCAnc3RhbGUnKSkge1xuICAgICAgICBpdGVtLnN0YWxlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIENvbXBvc2l0aW9uLnByb3RvdHlwZS5kaXNwb3NlZCA9IGZhbHNlO1xuXG4gIENvbXBvc2l0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9iaiwgcHJvcCwgcHJvcGVydGllcywgX2ksIF9sZW47XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmICghX19oYXNQcm9wLmNhbGwodGhpcywgcHJvcCkpIGNvbnRpbnVlO1xuICAgICAgb2JqID0gdGhpc1twcm9wXTtcbiAgICAgIGlmIChvYmogJiYgdHlwZW9mIG9iai5kaXNwb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChvYmogIT09IHRoaXMpIHtcbiAgICAgICAgICBvYmouZGlzcG9zZSgpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudW5zdWJzY3JpYmVBbGxFdmVudHMoKTtcbiAgICB0aGlzLnN0b3BMaXN0ZW5pbmcoKTtcbiAgICBwcm9wZXJ0aWVzID0gWydyZWRpcmVjdGVkJ107XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBwcm9wZXJ0aWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBwcm9wID0gcHJvcGVydGllc1tfaV07XG4gICAgICBkZWxldGUgdGhpc1twcm9wXTtcbiAgICB9XG4gICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgcmV0dXJuIHR5cGVvZiBPYmplY3QuZnJlZXplID09PSBcImZ1bmN0aW9uXCIgPyBPYmplY3QuZnJlZXplKHRoaXMpIDogdm9pZCAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGlvbjtcblxufSkoKTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9saWIvc3luY19tYWNoaW5lJywgZnVuY3Rpb24oZSwgciwgbW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBTVEFURV9DSEFOR0UsIFNZTkNFRCwgU1lOQ0lORywgU3luY01hY2hpbmUsIFVOU1lOQ0VELCBldmVudCwgX2ZuLCBfaSwgX2xlbiwgX3JlZjtcblxuVU5TWU5DRUQgPSAndW5zeW5jZWQnO1xuXG5TWU5DSU5HID0gJ3N5bmNpbmcnO1xuXG5TWU5DRUQgPSAnc3luY2VkJztcblxuU1RBVEVfQ0hBTkdFID0gJ3N5bmNTdGF0ZUNoYW5nZSc7XG5cblN5bmNNYWNoaW5lID0ge1xuICBfc3luY1N0YXRlOiBVTlNZTkNFRCxcbiAgX3ByZXZpb3VzU3luY1N0YXRlOiBudWxsLFxuICBzeW5jU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zeW5jU3RhdGU7XG4gIH0sXG4gIGlzVW5zeW5jZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zeW5jU3RhdGUgPT09IFVOU1lOQ0VEO1xuICB9LFxuICBpc1N5bmNlZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bmNTdGF0ZSA9PT0gU1lOQ0VEO1xuICB9LFxuICBpc1N5bmNpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zeW5jU3RhdGUgPT09IFNZTkNJTkc7XG4gIH0sXG4gIHVuc3luYzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgaWYgKChfcmVmID0gdGhpcy5fc3luY1N0YXRlKSA9PT0gU1lOQ0lORyB8fCBfcmVmID09PSBTWU5DRUQpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU3luYyA9IHRoaXMuX3N5bmNTdGF0ZTtcbiAgICAgIHRoaXMuX3N5bmNTdGF0ZSA9IFVOU1lOQ0VEO1xuICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuX3N5bmNTdGF0ZSwgdGhpcywgdGhpcy5fc3luY1N0YXRlKTtcbiAgICAgIHRoaXMudHJpZ2dlcihTVEFURV9DSEFOR0UsIHRoaXMsIHRoaXMuX3N5bmNTdGF0ZSk7XG4gICAgfVxuICB9LFxuICBiZWdpblN5bmM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBfcmVmO1xuICAgIGlmICgoX3JlZiA9IHRoaXMuX3N5bmNTdGF0ZSkgPT09IFVOU1lOQ0VEIHx8IF9yZWYgPT09IFNZTkNFRCkge1xuICAgICAgdGhpcy5fcHJldmlvdXNTeW5jID0gdGhpcy5fc3luY1N0YXRlO1xuICAgICAgdGhpcy5fc3luY1N0YXRlID0gU1lOQ0lORztcbiAgICAgIHRoaXMudHJpZ2dlcih0aGlzLl9zeW5jU3RhdGUsIHRoaXMsIHRoaXMuX3N5bmNTdGF0ZSk7XG4gICAgICB0aGlzLnRyaWdnZXIoU1RBVEVfQ0hBTkdFLCB0aGlzLCB0aGlzLl9zeW5jU3RhdGUpO1xuICAgIH1cbiAgfSxcbiAgZmluaXNoU3luYzogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3N5bmNTdGF0ZSA9PT0gU1lOQ0lORykge1xuICAgICAgdGhpcy5fcHJldmlvdXNTeW5jID0gdGhpcy5fc3luY1N0YXRlO1xuICAgICAgdGhpcy5fc3luY1N0YXRlID0gU1lOQ0VEO1xuICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuX3N5bmNTdGF0ZSwgdGhpcywgdGhpcy5fc3luY1N0YXRlKTtcbiAgICAgIHRoaXMudHJpZ2dlcihTVEFURV9DSEFOR0UsIHRoaXMsIHRoaXMuX3N5bmNTdGF0ZSk7XG4gICAgfVxuICB9LFxuICBhYm9ydFN5bmM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9zeW5jU3RhdGUgPT09IFNZTkNJTkcpIHtcbiAgICAgIHRoaXMuX3N5bmNTdGF0ZSA9IHRoaXMuX3ByZXZpb3VzU3luYztcbiAgICAgIHRoaXMuX3ByZXZpb3VzU3luYyA9IHRoaXMuX3N5bmNTdGF0ZTtcbiAgICAgIHRoaXMudHJpZ2dlcih0aGlzLl9zeW5jU3RhdGUsIHRoaXMsIHRoaXMuX3N5bmNTdGF0ZSk7XG4gICAgICB0aGlzLnRyaWdnZXIoU1RBVEVfQ0hBTkdFLCB0aGlzLCB0aGlzLl9zeW5jU3RhdGUpO1xuICAgIH1cbiAgfVxufTtcblxuX3JlZiA9IFtVTlNZTkNFRCwgU1lOQ0lORywgU1lOQ0VELCBTVEFURV9DSEFOR0VdO1xuX2ZuID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgcmV0dXJuIFN5bmNNYWNoaW5lW2V2ZW50XSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMub24oZXZlbnQsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICBpZiAodGhpcy5fc3luY1N0YXRlID09PSBldmVudCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwoY29udGV4dCk7XG4gICAgfVxuICB9O1xufTtcbmZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICBldmVudCA9IF9yZWZbX2ldO1xuICBfZm4oZXZlbnQpO1xufVxuXG5pZiAodHlwZW9mIE9iamVjdC5mcmVlemUgPT09IFwiZnVuY3Rpb25cIikge1xuICBPYmplY3QuZnJlZXplKFN5bmNNYWNoaW5lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTeW5jTWFjaGluZTtcblxufSk7O2xvYWRlci5yZWdpc3RlcignY2hhcGxpbi9saWIvdXRpbHMnLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBvcnQsIHV0aWxzLCBfLFxuICBfX3NsaWNlID0gW10uc2xpY2UsXG4gIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9LFxuICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXyA9IGxvYWRlcigndW5kZXJzY29yZScpO1xuXG5zdXBwb3J0ID0gbG9hZGVyKCdjaGFwbGluL2xpYi9zdXBwb3J0Jyk7XG5cbnV0aWxzID0ge1xuICBiZWdldDogKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdG9yO1xuICAgIGlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0b3IgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBjdG9yLnByb3RvdHlwZSA9IG9iajtcbiAgICAgICAgcmV0dXJuIG5ldyBjdG9yO1xuICAgICAgfTtcbiAgICB9XG4gIH0pKCksXG4gIGluZGV4T2Y6IChmdW5jdGlvbigpIHtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihsaXN0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdC5pbmRleE9mKGluZGV4KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChfLmluZGV4T2YpIHtcbiAgICAgIHJldHVybiBfLmluZGV4T2Y7XG4gICAgfVxuICB9KSgpLFxuICBpc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IF8uaXNBcnJheSxcbiAgc2VyaWFsaXplOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhLnNlcmlhbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGRhdGEuc2VyaWFsaXplKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBkYXRhLnRvSlNPTigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1dGlscy5zZXJpYWxpemU6IFVua25vd24gZGF0YSB3YXMgcGFzc2VkJyk7XG4gICAgfVxuICB9LFxuICByZWFkb25seTogKGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWFkb25seURlc2NyaXB0b3I7XG4gICAgaWYgKHN1cHBvcnQucHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgcmVhZG9ubHlEZXNjcmlwdG9yID0ge1xuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvYmosIHByb3AsIHByb3BlcnRpZXMsIF9pLCBfbGVuO1xuICAgICAgICBvYmogPSBhcmd1bWVudHNbMF0sIHByb3BlcnRpZXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHByb3BlcnRpZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgICBwcm9wID0gcHJvcGVydGllc1tfaV07XG4gICAgICAgICAgcmVhZG9ubHlEZXNjcmlwdG9yLnZhbHVlID0gb2JqW3Byb3BdO1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHJlYWRvbmx5RGVzY3JpcHRvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuICB9KSgpLFxuICBnZXRQcm90b3R5cGVDaGFpbjogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGNoYWluLCBfcmVmLCBfcmVmMSwgX3JlZjI7XG4gICAgY2hhaW4gPSBbb2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZV07XG4gICAgd2hpbGUgKG9iamVjdCA9IChfcmVmID0gKF9yZWYxID0gb2JqZWN0LmNvbnN0cnVjdG9yKSAhPSBudWxsID8gX3JlZjEuX19zdXBlcl9fIDogdm9pZCAwKSAhPSBudWxsID8gX3JlZiA6IChfcmVmMiA9IG9iamVjdC5jb25zdHJ1Y3RvcikgIT0gbnVsbCA/IF9yZWYyLnN1cGVyY2xhc3MgOiB2b2lkIDApIHtcbiAgICAgIGNoYWluLnB1c2gob2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYWluLnJldmVyc2UoKTtcbiAgfSxcbiAgZ2V0QWxsUHJvcGVydHlWZXJzaW9uczogZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHZhciBwcm90bywgcmVzdWx0LCB2YWx1ZSwgX2ksIF9sZW4sIF9yZWY7XG4gICAgcmVzdWx0ID0gW107XG4gICAgX3JlZiA9IHV0aWxzLmdldFByb3RvdHlwZUNoYWluKG9iamVjdCk7XG4gICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICBwcm90byA9IF9yZWZbX2ldO1xuICAgICAgdmFsdWUgPSBwcm90b1twcm9wZXJ0eV07XG4gICAgICBpZiAodmFsdWUgJiYgX19pbmRleE9mLmNhbGwocmVzdWx0LCB2YWx1ZSkgPCAwKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgdXBjYXNlOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cmluZygxKTtcbiAgfSxcbiAgZXNjYXBlUmVnRXhwOiBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gU3RyaW5nKHN0ciB8fCAnJykucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpO1xuICB9LFxuICBtb2RpZmllcktleVByZXNzZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgcmV0dXJuIGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXk7XG4gIH0sXG4gIHJldmVyc2U6IGZ1bmN0aW9uKGNyaXRlcmlhLCBwYXJhbXMsIHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpLmV4ZWN1dGUoJ3JvdXRlcjpyZXZlcnNlJywgY3JpdGVyaWEsIHBhcmFtcywgcXVlcnkpO1xuICB9LFxuICByZWRpcmVjdFRvOiBmdW5jdGlvbihwYXRoRGVzYywgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpLmV4ZWN1dGUoJ3JvdXRlcjpyb3V0ZScsIHBhdGhEZXNjLCBwYXJhbXMsIG9wdGlvbnMpO1xuICB9LFxuICBxdWVyeVBhcmFtczoge1xuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24ocXVlcnlQYXJhbXMpIHtcbiAgICAgIHZhciBhcnJQYXJhbSwgZW5jb2RlZEtleSwga2V5LCBxdWVyeSwgc3RyaW5naWZ5S2V5VmFsdWVQYWlyLCB2YWx1ZSwgX2ksIF9sZW47XG4gICAgICBxdWVyeSA9ICcnO1xuICAgICAgc3RyaW5naWZ5S2V5VmFsdWVQYWlyID0gZnVuY3Rpb24oZW5jb2RlZEtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gJyYnICsgZW5jb2RlZEtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZm9yIChrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChxdWVyeVBhcmFtcywga2V5KSkgY29udGludWU7XG4gICAgICAgIHZhbHVlID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgZW5jb2RlZEtleSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHZhbHVlLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICBhcnJQYXJhbSA9IHZhbHVlW19pXTtcbiAgICAgICAgICAgIHF1ZXJ5ICs9IHN0cmluZ2lmeUtleVZhbHVlUGFpcihlbmNvZGVkS2V5LCBhcnJQYXJhbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXJ5ICs9IHN0cmluZ2lmeUtleVZhbHVlUGFpcihlbmNvZGVkS2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeSAmJiBxdWVyeS5zdWJzdHJpbmcoMSk7XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24ocXVlcnlTdHJpbmcpIHtcbiAgICAgIHZhciBjdXJyZW50LCBmaWVsZCwgcGFpciwgcGFpcnMsIHBhcmFtcywgdmFsdWUsIF9pLCBfbGVuLCBfcmVmO1xuICAgICAgcGFyYW1zID0ge307XG4gICAgICBpZiAoIXF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9XG4gICAgICBwYWlycyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KCcmJyk7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHBhaXJzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIHBhaXIgPSBwYWlyc1tfaV07XG4gICAgICAgIGlmICghcGFpci5sZW5ndGgpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBfcmVmID0gcGFpci5zcGxpdCgnPScpLCBmaWVsZCA9IF9yZWZbMF0sIHZhbHVlID0gX3JlZlsxXTtcbiAgICAgICAgaWYgKCFmaWVsZC5sZW5ndGgpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZCA9IGRlY29kZVVSSUNvbXBvbmVudChmaWVsZCk7XG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgY3VycmVudCA9IHBhcmFtc1tmaWVsZF07XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnQucHVzaCkge1xuICAgICAgICAgICAgY3VycmVudC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyYW1zW2ZpZWxkXSA9IFtjdXJyZW50LCB2YWx1ZV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtc1tmaWVsZF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG4gIH1cbn07XG5cbmlmICh0eXBlb2YgT2JqZWN0LnNlYWwgPT09IFwiZnVuY3Rpb25cIikge1xuICBPYmplY3Quc2VhbCh1dGlscyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbHM7XG5cbn0pOztsb2FkZXIucmVnaXN0ZXIoJ2NoYXBsaW4nLCBmdW5jdGlvbihlLCByLCBtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFwcGxpY2F0aW9uOiBsb2FkZXIoJ2NoYXBsaW4vYXBwbGljYXRpb24nKSxcbiAgbWVkaWF0b3I6IGxvYWRlcignY2hhcGxpbi9tZWRpYXRvcicpLFxuICBEaXNwYXRjaGVyOiBsb2FkZXIoJ2NoYXBsaW4vZGlzcGF0Y2hlcicpLFxuICBDb250cm9sbGVyOiBsb2FkZXIoJ2NoYXBsaW4vY29udHJvbGxlcnMvY29udHJvbGxlcicpLFxuICBDb21wb3NlcjogbG9hZGVyKCdjaGFwbGluL2NvbXBvc2VyJyksXG4gIENvbXBvc2l0aW9uOiBsb2FkZXIoJ2NoYXBsaW4vbGliL2NvbXBvc2l0aW9uJyksXG4gIENvbGxlY3Rpb246IGxvYWRlcignY2hhcGxpbi9tb2RlbHMvY29sbGVjdGlvbicpLFxuICBNb2RlbDogbG9hZGVyKCdjaGFwbGluL21vZGVscy9tb2RlbCcpLFxuICBMYXlvdXQ6IGxvYWRlcignY2hhcGxpbi92aWV3cy9sYXlvdXQnKSxcbiAgVmlldzogbG9hZGVyKCdjaGFwbGluL3ZpZXdzL3ZpZXcnKSxcbiAgQ29sbGVjdGlvblZpZXc6IGxvYWRlcignY2hhcGxpbi92aWV3cy9jb2xsZWN0aW9uX3ZpZXcnKSxcbiAgUm91dGU6IGxvYWRlcignY2hhcGxpbi9saWIvcm91dGUnKSxcbiAgUm91dGVyOiBsb2FkZXIoJ2NoYXBsaW4vbGliL3JvdXRlcicpLFxuICBFdmVudEJyb2tlcjogbG9hZGVyKCdjaGFwbGluL2xpYi9ldmVudF9icm9rZXInKSxcbiAgc3VwcG9ydDogbG9hZGVyKCdjaGFwbGluL2xpYi9zdXBwb3J0JyksXG4gIFN5bmNNYWNoaW5lOiBsb2FkZXIoJ2NoYXBsaW4vbGliL3N5bmNfbWFjaGluZScpLFxuICB1dGlsczogbG9hZGVyKCdjaGFwbGluL2xpYi91dGlscycpXG59O1xuXG59KTtcbnZhciByZWdEZXBzID0gZnVuY3Rpb24oQmFja2JvbmUsIF8pIHtcbiAgbG9hZGVyLnJlZ2lzdGVyKCdiYWNrYm9uZScsIGZ1bmN0aW9uKGV4cG9ydHMsIHJlcXVpcmUsIG1vZHVsZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gQmFja2JvbmU7XG4gIH0pO1xuICBsb2FkZXIucmVnaXN0ZXIoJ3VuZGVyc2NvcmUnLCBmdW5jdGlvbihleHBvcnRzLCByZXF1aXJlLCBtb2R1bGUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF87XG4gIH0pO1xufTtcblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoWydiYWNrYm9uZScsICd1bmRlcnNjb3JlJ10sIGZ1bmN0aW9uKEJhY2tib25lLCBfKSB7XG4gICAgcmVnRGVwcyhCYWNrYm9uZSwgXyk7XG4gICAgcmV0dXJuIGxvYWRlcignY2hhcGxpbicpO1xuICB9KTtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIHJlZ0RlcHMocmVxdWlyZSgnYmFja2JvbmUnKSwgcmVxdWlyZSgndW5kZXJzY29yZScpKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBsb2FkZXIoJ2NoYXBsaW4nKTtcbn0gZWxzZSBpZiAodHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgcmVnRGVwcyh3aW5kb3cuQmFja2JvbmUsIHdpbmRvdy5fIHx8IHdpbmRvdy5CYWNrYm9uZS51dGlscyk7XG4gIHdpbmRvdy5DaGFwbGluID0gbG9hZGVyKCdjaGFwbGluJyk7XG59IGVsc2Uge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0NoYXBsaW4gcmVxdWlyZXMgQ29tbW9uLmpzIG9yIEFNRCBtb2R1bGVzJyk7XG59XG5cbn0pKCk7IiwiLy8gICAgIFVuZGVyc2NvcmUuanMgMS41LjJcbi8vICAgICBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy8gICAgIChjKSAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbi8vICAgICBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gQmFzZWxpbmUgc2V0dXBcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICAvLyBFc3RhYmxpc2ggdGhlIHJvb3Qgb2JqZWN0LCBgd2luZG93YCBpbiB0aGUgYnJvd3Nlciwgb3IgYGV4cG9ydHNgIG9uIHRoZSBzZXJ2ZXIuXG4gIHZhciByb290ID0gdGhpcztcblxuICAvLyBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgYF9gIHZhcmlhYmxlLlxuICB2YXIgcHJldmlvdXNVbmRlcnNjb3JlID0gcm9vdC5fO1xuXG4gIC8vIEVzdGFibGlzaCB0aGUgb2JqZWN0IHRoYXQgZ2V0cyByZXR1cm5lZCB0byBicmVhayBvdXQgb2YgYSBsb29wIGl0ZXJhdGlvbi5cbiAgdmFyIGJyZWFrZXIgPSB7fTtcblxuICAvLyBTYXZlIGJ5dGVzIGluIHRoZSBtaW5pZmllZCAoYnV0IG5vdCBnemlwcGVkKSB2ZXJzaW9uOlxuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSwgT2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLCBGdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gQ3JlYXRlIHF1aWNrIHJlZmVyZW5jZSB2YXJpYWJsZXMgZm9yIHNwZWVkIGFjY2VzcyB0byBjb3JlIHByb3RvdHlwZXMuXG4gIHZhclxuICAgIHB1c2ggICAgICAgICAgICAgPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgICAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2UsXG4gICAgY29uY2F0ICAgICAgICAgICA9IEFycmF5UHJvdG8uY29uY2F0LFxuICAgIHRvU3RyaW5nICAgICAgICAgPSBPYmpQcm90by50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSAgID0gT2JqUHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbiAgLy8gQWxsICoqRUNNQVNjcmlwdCA1KiogbmF0aXZlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9ucyB0aGF0IHdlIGhvcGUgdG8gdXNlXG4gIC8vIGFyZSBkZWNsYXJlZCBoZXJlLlxuICB2YXJcbiAgICBuYXRpdmVGb3JFYWNoICAgICAgPSBBcnJheVByb3RvLmZvckVhY2gsXG4gICAgbmF0aXZlTWFwICAgICAgICAgID0gQXJyYXlQcm90by5tYXAsXG4gICAgbmF0aXZlUmVkdWNlICAgICAgID0gQXJyYXlQcm90by5yZWR1Y2UsXG4gICAgbmF0aXZlUmVkdWNlUmlnaHQgID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodCxcbiAgICBuYXRpdmVGaWx0ZXIgICAgICAgPSBBcnJheVByb3RvLmZpbHRlcixcbiAgICBuYXRpdmVFdmVyeSAgICAgICAgPSBBcnJheVByb3RvLmV2ZXJ5LFxuICAgIG5hdGl2ZVNvbWUgICAgICAgICA9IEFycmF5UHJvdG8uc29tZSxcbiAgICBuYXRpdmVJbmRleE9mICAgICAgPSBBcnJheVByb3RvLmluZGV4T2YsXG4gICAgbmF0aXZlTGFzdEluZGV4T2YgID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZixcbiAgICBuYXRpdmVJc0FycmF5ICAgICAgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgICAgICAgICA9IE9iamVjdC5rZXlzLFxuICAgIG5hdGl2ZUJpbmQgICAgICAgICA9IEZ1bmNQcm90by5iaW5kO1xuXG4gIC8vIENyZWF0ZSBhIHNhZmUgcmVmZXJlbmNlIHRvIHRoZSBVbmRlcnNjb3JlIG9iamVjdCBmb3IgdXNlIGJlbG93LlxuICB2YXIgXyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBfKSByZXR1cm4gb2JqO1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBfKSkgcmV0dXJuIG5ldyBfKG9iaik7XG4gICAgdGhpcy5fd3JhcHBlZCA9IG9iajtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIFVuZGVyc2NvcmUgb2JqZWN0IGZvciAqKk5vZGUuanMqKiwgd2l0aFxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCBgcmVxdWlyZSgpYCBBUEkuIElmIHdlJ3JlIGluXG4gIC8vIHRoZSBicm93c2VyLCBhZGQgYF9gIGFzIGEgZ2xvYmFsIG9iamVjdCB2aWEgYSBzdHJpbmcgaWRlbnRpZmllcixcbiAgLy8gZm9yIENsb3N1cmUgQ29tcGlsZXIgXCJhZHZhbmNlZFwiIG1vZGUuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IF87XG4gICAgfVxuICAgIGV4cG9ydHMuXyA9IF87XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5fID0gXztcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdmVyc2lvbi5cbiAgXy5WRVJTSU9OID0gJzEuNS4yJztcblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIG9iamVjdHMgd2l0aCB0aGUgYnVpbHQtaW4gYGZvckVhY2hgLCBhcnJheXMsIGFuZCByYXcgb2JqZWN0cy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZvckVhY2hgIGlmIGF2YWlsYWJsZS5cbiAgdmFyIGVhY2ggPSBfLmVhY2ggPSBfLmZvckVhY2ggPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm47XG4gICAgaWYgKG5hdGl2ZUZvckVhY2ggJiYgb2JqLmZvckVhY2ggPT09IG5hdGl2ZUZvckVhY2gpIHtcbiAgICAgIG9iai5mb3JFYWNoKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleXNbaV1dLCBrZXlzW2ldLCBvYmopID09PSBicmVha2VyKSByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgcmVzdWx0cyBvZiBhcHBseWluZyB0aGUgaXRlcmF0b3IgdG8gZWFjaCBlbGVtZW50LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgbWFwYCBpZiBhdmFpbGFibGUuXG4gIF8ubWFwID0gXy5jb2xsZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlTWFwICYmIG9iai5tYXAgPT09IG5hdGl2ZU1hcCkgcmV0dXJuIG9iai5tYXAoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHZhciByZWR1Y2VFcnJvciA9ICdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJztcblxuICAvLyAqKlJlZHVjZSoqIGJ1aWxkcyB1cCBhIHNpbmdsZSByZXN1bHQgZnJvbSBhIGxpc3Qgb2YgdmFsdWVzLCBha2EgYGluamVjdGAsXG4gIC8vIG9yIGBmb2xkbGAuIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGByZWR1Y2VgIGlmIGF2YWlsYWJsZS5cbiAgXy5yZWR1Y2UgPSBfLmZvbGRsID0gXy5pbmplY3QgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBtZW1vLCBjb250ZXh0KSB7XG4gICAgdmFyIGluaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICBpZiAob2JqID09IG51bGwpIG9iaiA9IFtdO1xuICAgIGlmIChuYXRpdmVSZWR1Y2UgJiYgb2JqLnJlZHVjZSA9PT0gbmF0aXZlUmVkdWNlKSB7XG4gICAgICBpZiAoY29udGV4dCkgaXRlcmF0b3IgPSBfLmJpbmQoaXRlcmF0b3IsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIGluaXRpYWwgPyBvYmoucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2UoaXRlcmF0b3IpO1xuICAgIH1cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgbWVtbyA9IHZhbHVlO1xuICAgICAgICBpbml0aWFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbW8gPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG1lbW8sIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBUaGUgcmlnaHQtYXNzb2NpYXRpdmUgdmVyc2lvbiBvZiByZWR1Y2UsIGFsc28ga25vd24gYXMgYGZvbGRyYC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYHJlZHVjZVJpZ2h0YCBpZiBhdmFpbGFibGUuXG4gIF8ucmVkdWNlUmlnaHQgPSBfLmZvbGRyID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgbWVtbywgY29udGV4dCkge1xuICAgIHZhciBpbml0aWFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgaWYgKG9iaiA9PSBudWxsKSBvYmogPSBbXTtcbiAgICBpZiAobmF0aXZlUmVkdWNlUmlnaHQgJiYgb2JqLnJlZHVjZVJpZ2h0ID09PSBuYXRpdmVSZWR1Y2VSaWdodCkge1xuICAgICAgaWYgKGNvbnRleHQpIGl0ZXJhdG9yID0gXy5iaW5kKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBpbml0aWFsID8gb2JqLnJlZHVjZVJpZ2h0KGl0ZXJhdG9yLCBtZW1vKSA6IG9iai5yZWR1Y2VSaWdodChpdGVyYXRvcik7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09ICtsZW5ndGgpIHtcbiAgICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB9XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgaW5kZXggPSBrZXlzID8ga2V5c1stLWxlbmd0aF0gOiAtLWxlbmd0aDtcbiAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICBtZW1vID0gb2JqW2luZGV4XTtcbiAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBtZW1vLCBvYmpbaW5kZXhdLCBpbmRleCwgbGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFpbml0aWFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKHJlZHVjZUVycm9yKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IHZhbHVlIHdoaWNoIHBhc3NlcyBhIHRydXRoIHRlc3QuIEFsaWFzZWQgYXMgYGRldGVjdGAuXG4gIF8uZmluZCA9IF8uZGV0ZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHQ7XG4gICAgYW55KG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmaWx0ZXJgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgaWYgKG5hdGl2ZUZpbHRlciAmJiBvYmouZmlsdGVyID09PSBuYXRpdmVGaWx0ZXIpIHJldHVybiBvYmouZmlsdGVyKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGZvciB3aGljaCBhIHRydXRoIHRlc3QgZmFpbHMuXG4gIF8ucmVqZWN0ID0gZnVuY3Rpb24ob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIHJldHVybiBfLmZpbHRlcihvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuICFpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCk7XG4gICAgfSwgY29udGV4dCk7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgYWxsIG9mIHRoZSBlbGVtZW50cyBtYXRjaCBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBldmVyeWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbGxgLlxuICBfLmV2ZXJ5ID0gXy5hbGwgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgfHwgKGl0ZXJhdG9yID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICAgIGlmIChuYXRpdmVFdmVyeSAmJiBvYmouZXZlcnkgPT09IG5hdGl2ZUV2ZXJ5KSByZXR1cm4gb2JqLmV2ZXJ5KGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAoIShyZXN1bHQgPSByZXN1bHQgJiYgaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSkgcmV0dXJuIGJyZWFrZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgc29tZWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICB2YXIgYW55ID0gXy5zb21lID0gXy5hbnkgPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaXRlcmF0b3IgfHwgKGl0ZXJhdG9yID0gXy5pZGVudGl0eSk7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICBpZiAobmF0aXZlU29tZSAmJiBvYmouc29tZSA9PT0gbmF0aXZlU29tZSkgcmV0dXJuIG9iai5zb21lKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICBpZiAocmVzdWx0IHx8IChyZXN1bHQgPSBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKSByZXR1cm4gYnJlYWtlcjtcbiAgICB9KTtcbiAgICByZXR1cm4gISFyZXN1bHQ7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBhcnJheSBvciBvYmplY3QgY29udGFpbnMgYSBnaXZlbiB2YWx1ZSAodXNpbmcgYD09PWApLlxuICAvLyBBbGlhc2VkIGFzIGBpbmNsdWRlYC5cbiAgXy5jb250YWlucyA9IF8uaW5jbHVkZSA9IGZ1bmN0aW9uKG9iaiwgdGFyZ2V0KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgb2JqLmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHJldHVybiBvYmouaW5kZXhPZih0YXJnZXQpICE9IC0xO1xuICAgIHJldHVybiBhbnkob2JqLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB0YXJnZXQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gSW52b2tlIGEgbWV0aG9kICh3aXRoIGFyZ3VtZW50cykgb24gZXZlcnkgaXRlbSBpbiBhIGNvbGxlY3Rpb24uXG4gIF8uaW52b2tlID0gZnVuY3Rpb24ob2JqLCBtZXRob2QpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgaXNGdW5jID0gXy5pc0Z1bmN0aW9uKG1ldGhvZCk7XG4gICAgcmV0dXJuIF8ubWFwKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAoaXNGdW5jID8gbWV0aG9kIDogdmFsdWVbbWV0aG9kXSkuYXBwbHkodmFsdWUsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYG1hcGA6IGZldGNoaW5nIGEgcHJvcGVydHkuXG4gIF8ucGx1Y2sgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlKXsgcmV0dXJuIHZhbHVlW2tleV07IH0pO1xuICB9O1xuXG4gIC8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgYSBjb21tb24gdXNlIGNhc2Ugb2YgYGZpbHRlcmA6IHNlbGVjdGluZyBvbmx5IG9iamVjdHNcbiAgLy8gY29udGFpbmluZyBzcGVjaWZpYyBga2V5OnZhbHVlYCBwYWlycy5cbiAgXy53aGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMsIGZpcnN0KSB7XG4gICAgaWYgKF8uaXNFbXB0eShhdHRycykpIHJldHVybiBmaXJzdCA/IHZvaWQgMCA6IFtdO1xuICAgIHJldHVybiBfW2ZpcnN0ID8gJ2ZpbmQnIDogJ2ZpbHRlciddKG9iaiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgICAgICBpZiAoYXR0cnNba2V5XSAhPT0gdmFsdWVba2V5XSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBhIGNvbW1vbiB1c2UgY2FzZSBvZiBgZmluZGA6IGdldHRpbmcgdGhlIGZpcnN0IG9iamVjdFxuICAvLyBjb250YWluaW5nIHNwZWNpZmljIGBrZXk6dmFsdWVgIHBhaXJzLlxuICBfLmZpbmRXaGVyZSA9IGZ1bmN0aW9uKG9iaiwgYXR0cnMpIHtcbiAgICByZXR1cm4gXy53aGVyZShvYmosIGF0dHJzLCB0cnVlKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG1heGltdW0gZWxlbWVudCBvciAoZWxlbWVudC1iYXNlZCBjb21wdXRhdGlvbikuXG4gIC8vIENhbid0IG9wdGltaXplIGFycmF5cyBvZiBpbnRlZ2VycyBsb25nZXIgdGhhbiA2NSw1MzUgZWxlbWVudHMuXG4gIC8vIFNlZSBbV2ViS2l0IEJ1ZyA4MDc5N10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTgwNzk3KVxuICBfLm1heCA9IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNBcnJheShvYmopICYmIG9ialswXSA9PT0gK29ialswXSAmJiBvYmoubGVuZ3RoIDwgNjU1MzUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBvYmopO1xuICAgIH1cbiAgICBpZiAoIWl0ZXJhdG9yICYmIF8uaXNFbXB0eShvYmopKSByZXR1cm4gLUluZmluaXR5O1xuICAgIHZhciByZXN1bHQgPSB7Y29tcHV0ZWQgOiAtSW5maW5pdHksIHZhbHVlOiAtSW5maW5pdHl9O1xuICAgIGVhY2gob2JqLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHZhciBjb21wdXRlZCA9IGl0ZXJhdG9yID8gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpIDogdmFsdWU7XG4gICAgICBjb21wdXRlZCA+IHJlc3VsdC5jb21wdXRlZCAmJiAocmVzdWx0ID0ge3ZhbHVlIDogdmFsdWUsIGNvbXB1dGVkIDogY29tcHV0ZWR9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgbWluaW11bSBlbGVtZW50IChvciBlbGVtZW50LWJhc2VkIGNvbXB1dGF0aW9uKS5cbiAgXy5taW4gPSBmdW5jdGlvbihvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzQXJyYXkob2JqKSAmJiBvYmpbMF0gPT09ICtvYmpbMF0gJiYgb2JqLmxlbmd0aCA8IDY1NTM1KSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkoTWF0aCwgb2JqKTtcbiAgICB9XG4gICAgaWYgKCFpdGVyYXRvciAmJiBfLmlzRW1wdHkob2JqKSkgcmV0dXJuIEluZmluaXR5O1xuICAgIHZhciByZXN1bHQgPSB7Y29tcHV0ZWQgOiBJbmZpbml0eSwgdmFsdWU6IEluZmluaXR5fTtcbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBsaXN0KSB7XG4gICAgICB2YXIgY29tcHV0ZWQgPSBpdGVyYXRvciA/IGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdmFsdWUsIGluZGV4LCBsaXN0KSA6IHZhbHVlO1xuICAgICAgY29tcHV0ZWQgPCByZXN1bHQuY29tcHV0ZWQgJiYgKHJlc3VsdCA9IHt2YWx1ZSA6IHZhbHVlLCBjb21wdXRlZCA6IGNvbXB1dGVkfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfTtcblxuICAvLyBTaHVmZmxlIGFuIGFycmF5LCB1c2luZyB0aGUgbW9kZXJuIHZlcnNpb24gb2YgdGhlIFxuICAvLyBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmlzaGVy4oCTWWF0ZXNfc2h1ZmZsZSkuXG4gIF8uc2h1ZmZsZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByYW5kO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHNodWZmbGVkID0gW107XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByYW5kID0gXy5yYW5kb20oaW5kZXgrKyk7XG4gICAgICBzaHVmZmxlZFtpbmRleCAtIDFdID0gc2h1ZmZsZWRbcmFuZF07XG4gICAgICBzaHVmZmxlZFtyYW5kXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBzaHVmZmxlZDtcbiAgfTtcblxuICAvLyBTYW1wbGUgKipuKiogcmFuZG9tIHZhbHVlcyBmcm9tIGFuIGFycmF5LlxuICAvLyBJZiAqKm4qKiBpcyBub3Qgc3BlY2lmaWVkLCByZXR1cm5zIGEgc2luZ2xlIHJhbmRvbSBlbGVtZW50IGZyb20gdGhlIGFycmF5LlxuICAvLyBUaGUgaW50ZXJuYWwgYGd1YXJkYCBhcmd1bWVudCBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBtYXBgLlxuICBfLnNhbXBsZSA9IGZ1bmN0aW9uKG9iaiwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIgfHwgZ3VhcmQpIHtcbiAgICAgIHJldHVybiBvYmpbXy5yYW5kb20ob2JqLmxlbmd0aCAtIDEpXTtcbiAgICB9XG4gICAgcmV0dXJuIF8uc2h1ZmZsZShvYmopLnNsaWNlKDAsIE1hdGgubWF4KDAsIG4pKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB0byBnZW5lcmF0ZSBsb29rdXAgaXRlcmF0b3JzLlxuICB2YXIgbG9va3VwSXRlcmF0b3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUgOiBmdW5jdGlvbihvYmopeyByZXR1cm4gb2JqW3ZhbHVlXTsgfTtcbiAgfTtcblxuICAvLyBTb3J0IHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24gcHJvZHVjZWQgYnkgYW4gaXRlcmF0b3IuXG4gIF8uc29ydEJ5ID0gZnVuY3Rpb24ob2JqLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIHZhciBpdGVyYXRvciA9IGxvb2t1cEl0ZXJhdG9yKHZhbHVlKTtcbiAgICByZXR1cm4gXy5wbHVjayhfLm1hcChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIGNyaXRlcmlhOiBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdClcbiAgICAgIH07XG4gICAgfSkuc29ydChmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhO1xuICAgICAgdmFyIGIgPSByaWdodC5jcml0ZXJpYTtcbiAgICAgIGlmIChhICE9PSBiKSB7XG4gICAgICAgIGlmIChhID4gYiB8fCBhID09PSB2b2lkIDApIHJldHVybiAxO1xuICAgICAgICBpZiAoYSA8IGIgfHwgYiA9PT0gdm9pZCAwKSByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVmdC5pbmRleCAtIHJpZ2h0LmluZGV4O1xuICAgIH0pLCAndmFsdWUnKTtcbiAgfTtcblxuICAvLyBBbiBpbnRlcm5hbCBmdW5jdGlvbiB1c2VkIGZvciBhZ2dyZWdhdGUgXCJncm91cCBieVwiIG9wZXJhdGlvbnMuXG4gIHZhciBncm91cCA9IGZ1bmN0aW9uKGJlaGF2aW9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHZhbHVlID09IG51bGwgPyBfLmlkZW50aXR5IDogbG9va3VwSXRlcmF0b3IodmFsdWUpO1xuICAgICAgZWFjaChvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIga2V5ID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIG9iaik7XG4gICAgICAgIGJlaGF2aW9yKHJlc3VsdCwga2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBHcm91cHMgdGhlIG9iamVjdCdzIHZhbHVlcyBieSBhIGNyaXRlcmlvbi4gUGFzcyBlaXRoZXIgYSBzdHJpbmcgYXR0cmlidXRlXG4gIC8vIHRvIGdyb3VwIGJ5LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3JpdGVyaW9uLlxuICBfLmdyb3VwQnkgPSBncm91cChmdW5jdGlvbihyZXN1bHQsIGtleSwgdmFsdWUpIHtcbiAgICAoXy5oYXMocmVzdWx0LCBrZXkpID8gcmVzdWx0W2tleV0gOiAocmVzdWx0W2tleV0gPSBbXSkpLnB1c2godmFsdWUpO1xuICB9KTtcblxuICAvLyBJbmRleGVzIHRoZSBvYmplY3QncyB2YWx1ZXMgYnkgYSBjcml0ZXJpb24sIHNpbWlsYXIgdG8gYGdyb3VwQnlgLCBidXQgZm9yXG4gIC8vIHdoZW4geW91IGtub3cgdGhhdCB5b3VyIGluZGV4IHZhbHVlcyB3aWxsIGJlIHVuaXF1ZS5cbiAgXy5pbmRleEJ5ID0gZ3JvdXAoZnVuY3Rpb24ocmVzdWx0LCBrZXksIHZhbHVlKSB7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG5cbiAgLy8gQ291bnRzIGluc3RhbmNlcyBvZiBhbiBvYmplY3QgdGhhdCBncm91cCBieSBhIGNlcnRhaW4gY3JpdGVyaW9uLiBQYXNzXG4gIC8vIGVpdGhlciBhIHN0cmluZyBhdHRyaWJ1dGUgdG8gY291bnQgYnksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAvLyBjcml0ZXJpb24uXG4gIF8uY291bnRCeSA9IGdyb3VwKGZ1bmN0aW9uKHJlc3VsdCwga2V5KSB7XG4gICAgXy5oYXMocmVzdWx0LCBrZXkpID8gcmVzdWx0W2tleV0rKyA6IHJlc3VsdFtrZXldID0gMTtcbiAgfSk7XG5cbiAgLy8gVXNlIGEgY29tcGFyYXRvciBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IHRoZSBzbWFsbGVzdCBpbmRleCBhdCB3aGljaFxuICAvLyBhbiBvYmplY3Qgc2hvdWxkIGJlIGluc2VydGVkIHNvIGFzIHRvIG1haW50YWluIG9yZGVyLiBVc2VzIGJpbmFyeSBzZWFyY2guXG4gIF8uc29ydGVkSW5kZXggPSBmdW5jdGlvbihhcnJheSwgb2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3IgPT0gbnVsbCA/IF8uaWRlbnRpdHkgOiBsb29rdXBJdGVyYXRvcihpdGVyYXRvcik7XG4gICAgdmFyIHZhbHVlID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmopO1xuICAgIHZhciBsb3cgPSAwLCBoaWdoID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChsb3cgPCBoaWdoKSB7XG4gICAgICB2YXIgbWlkID0gKGxvdyArIGhpZ2gpID4+PiAxO1xuICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBhcnJheVttaWRdKSA8IHZhbHVlID8gbG93ID0gbWlkICsgMSA6IGhpZ2ggPSBtaWQ7XG4gICAgfVxuICAgIHJldHVybiBsb3c7XG4gIH07XG5cbiAgLy8gU2FmZWx5IGNyZWF0ZSBhIHJlYWwsIGxpdmUgYXJyYXkgZnJvbSBhbnl0aGluZyBpdGVyYWJsZS5cbiAgXy50b0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBbXTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikpIHJldHVybiBzbGljZS5jYWxsKG9iaik7XG4gICAgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSByZXR1cm4gXy5tYXAob2JqLCBfLmlkZW50aXR5KTtcbiAgICByZXR1cm4gXy52YWx1ZXMob2JqKTtcbiAgfTtcblxuICAvLyBSZXR1cm4gdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYmplY3QuXG4gIF8uc2l6ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkgPyBvYmoubGVuZ3RoIDogXy5rZXlzKG9iaikubGVuZ3RoO1xuICB9O1xuXG4gIC8vIEFycmF5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS1cblxuICAvLyBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGZpcnN0IE5cbiAgLy8gdmFsdWVzIGluIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgaGVhZGAgYW5kIGB0YWtlYC4gVGhlICoqZ3VhcmQqKiBjaGVja1xuICAvLyBhbGxvd3MgaXQgdG8gd29yayB3aXRoIGBfLm1hcGAuXG4gIF8uZmlyc3QgPSBfLmhlYWQgPSBfLnRha2UgPSBmdW5jdGlvbihhcnJheSwgbiwgZ3VhcmQpIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICByZXR1cm4gKG4gPT0gbnVsbCkgfHwgZ3VhcmQgPyBhcnJheVswXSA6IHNsaWNlLmNhbGwoYXJyYXksIDAsIG4pO1xuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGxhc3QgZW50cnkgb2YgdGhlIGFycmF5LiBFc3BlY2lhbGx5IHVzZWZ1bCBvblxuICAvLyB0aGUgYXJndW1lbnRzIG9iamVjdC4gUGFzc2luZyAqKm4qKiB3aWxsIHJldHVybiBhbGwgdGhlIHZhbHVlcyBpblxuICAvLyB0aGUgYXJyYXksIGV4Y2x1ZGluZyB0aGUgbGFzdCBOLiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGhcbiAgLy8gYF8ubWFwYC5cbiAgXy5pbml0aWFsID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIDAsIGFycmF5Lmxlbmd0aCAtICgobiA9PSBudWxsKSB8fCBndWFyZCA/IDEgOiBuKSk7XG4gIH07XG5cbiAgLy8gR2V0IHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkuIFBhc3NpbmcgKipuKiogd2lsbCByZXR1cm4gdGhlIGxhc3QgTlxuICAvLyB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5sYXN0ID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiB2b2lkIDA7XG4gICAgaWYgKChuID09IG51bGwpIHx8IGd1YXJkKSB7XG4gICAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzbGljZS5jYWxsKGFycmF5LCBNYXRoLm1heChhcnJheS5sZW5ndGggLSBuLCAwKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJldHVybnMgZXZlcnl0aGluZyBidXQgdGhlIGZpcnN0IGVudHJ5IG9mIHRoZSBhcnJheS4gQWxpYXNlZCBhcyBgdGFpbGAgYW5kIGBkcm9wYC5cbiAgLy8gRXNwZWNpYWxseSB1c2VmdWwgb24gdGhlIGFyZ3VtZW50cyBvYmplY3QuIFBhc3NpbmcgYW4gKipuKiogd2lsbCByZXR1cm5cbiAgLy8gdGhlIHJlc3QgTiB2YWx1ZXMgaW4gdGhlIGFycmF5LiBUaGUgKipndWFyZCoqXG4gIC8vIGNoZWNrIGFsbG93cyBpdCB0byB3b3JrIHdpdGggYF8ubWFwYC5cbiAgXy5yZXN0ID0gXy50YWlsID0gXy5kcm9wID0gZnVuY3Rpb24oYXJyYXksIG4sIGd1YXJkKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoYXJyYXksIChuID09IG51bGwpIHx8IGd1YXJkID8gMSA6IG4pO1xuICB9O1xuXG4gIC8vIFRyaW0gb3V0IGFsbCBmYWxzeSB2YWx1ZXMgZnJvbSBhbiBhcnJheS5cbiAgXy5jb21wYWN0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gXy5maWx0ZXIoYXJyYXksIF8uaWRlbnRpdHkpO1xuICB9O1xuXG4gIC8vIEludGVybmFsIGltcGxlbWVudGF0aW9uIG9mIGEgcmVjdXJzaXZlIGBmbGF0dGVuYCBmdW5jdGlvbi5cbiAgdmFyIGZsYXR0ZW4gPSBmdW5jdGlvbihpbnB1dCwgc2hhbGxvdywgb3V0cHV0KSB7XG4gICAgaWYgKHNoYWxsb3cgJiYgXy5ldmVyeShpbnB1dCwgXy5pc0FycmF5KSkge1xuICAgICAgcmV0dXJuIGNvbmNhdC5hcHBseShvdXRwdXQsIGlucHV0KTtcbiAgICB9XG4gICAgZWFjaChpbnB1dCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpIHx8IF8uaXNBcmd1bWVudHModmFsdWUpKSB7XG4gICAgICAgIHNoYWxsb3cgPyBwdXNoLmFwcGx5KG91dHB1dCwgdmFsdWUpIDogZmxhdHRlbih2YWx1ZSwgc2hhbGxvdywgb3V0cHV0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xuXG4gIC8vIEZsYXR0ZW4gb3V0IGFuIGFycmF5LCBlaXRoZXIgcmVjdXJzaXZlbHkgKGJ5IGRlZmF1bHQpLCBvciBqdXN0IG9uZSBsZXZlbC5cbiAgXy5mbGF0dGVuID0gZnVuY3Rpb24oYXJyYXksIHNoYWxsb3cpIHtcbiAgICByZXR1cm4gZmxhdHRlbihhcnJheSwgc2hhbGxvdywgW10pO1xuICB9O1xuXG4gIC8vIFJldHVybiBhIHZlcnNpb24gb2YgdGhlIGFycmF5IHRoYXQgZG9lcyBub3QgY29udGFpbiB0aGUgc3BlY2lmaWVkIHZhbHVlKHMpLlxuICBfLndpdGhvdXQgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiBfLmRpZmZlcmVuY2UoYXJyYXksIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIH07XG5cbiAgLy8gUHJvZHVjZSBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgdGhlIGFycmF5LiBJZiB0aGUgYXJyYXkgaGFzIGFscmVhZHlcbiAgLy8gYmVlbiBzb3J0ZWQsIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgdXNpbmcgYSBmYXN0ZXIgYWxnb3JpdGhtLlxuICAvLyBBbGlhc2VkIGFzIGB1bmlxdWVgLlxuICBfLnVuaXEgPSBfLnVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5LCBpc1NvcnRlZCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGlzU29ydGVkKSkge1xuICAgICAgY29udGV4dCA9IGl0ZXJhdG9yO1xuICAgICAgaXRlcmF0b3IgPSBpc1NvcnRlZDtcbiAgICAgIGlzU29ydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHZhciBpbml0aWFsID0gaXRlcmF0b3IgPyBfLm1hcChhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIDogYXJyYXk7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgc2VlbiA9IFtdO1xuICAgIGVhY2goaW5pdGlhbCwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICBpZiAoaXNTb3J0ZWQgPyAoIWluZGV4IHx8IHNlZW5bc2Vlbi5sZW5ndGggLSAxXSAhPT0gdmFsdWUpIDogIV8uY29udGFpbnMoc2VlbiwgdmFsdWUpKSB7XG4gICAgICAgIHNlZW4ucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJlc3VsdHMucHVzaChhcnJheVtpbmRleF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgdW5pb246IGVhY2ggZGlzdGluY3QgZWxlbWVudCBmcm9tIGFsbCBvZlxuICAvLyB0aGUgcGFzc2VkLWluIGFycmF5cy5cbiAgXy51bmlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfLnVuaXEoXy5mbGF0dGVuKGFyZ3VtZW50cywgdHJ1ZSkpO1xuICB9O1xuXG4gIC8vIFByb2R1Y2UgYW4gYXJyYXkgdGhhdCBjb250YWlucyBldmVyeSBpdGVtIHNoYXJlZCBiZXR3ZWVuIGFsbCB0aGVcbiAgLy8gcGFzc2VkLWluIGFycmF5cy5cbiAgXy5pbnRlcnNlY3Rpb24gPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBfLmZpbHRlcihfLnVuaXEoYXJyYXkpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gXy5ldmVyeShyZXN0LCBmdW5jdGlvbihvdGhlcikge1xuICAgICAgICByZXR1cm4gXy5pbmRleE9mKG90aGVyLCBpdGVtKSA+PSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVGFrZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIG9uZSBhcnJheSBhbmQgYSBudW1iZXIgb2Ygb3RoZXIgYXJyYXlzLlxuICAvLyBPbmx5IHRoZSBlbGVtZW50cyBwcmVzZW50IGluIGp1c3QgdGhlIGZpcnN0IGFycmF5IHdpbGwgcmVtYWluLlxuICBfLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAgIHZhciByZXN0ID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIF8uZmlsdGVyKGFycmF5LCBmdW5jdGlvbih2YWx1ZSl7IHJldHVybiAhXy5jb250YWlucyhyZXN0LCB2YWx1ZSk7IH0pO1xuICB9O1xuXG4gIC8vIFppcCB0b2dldGhlciBtdWx0aXBsZSBsaXN0cyBpbnRvIGEgc2luZ2xlIGFycmF5IC0tIGVsZW1lbnRzIHRoYXQgc2hhcmVcbiAgLy8gYW4gaW5kZXggZ28gdG9nZXRoZXIuXG4gIF8uemlwID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IF8ubWF4KF8ucGx1Y2soYXJndW1lbnRzLCBcImxlbmd0aFwiKS5jb25jYXQoMCkpO1xuICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0c1tpXSA9IF8ucGx1Y2soYXJndW1lbnRzLCAnJyArIGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICAvLyBDb252ZXJ0cyBsaXN0cyBpbnRvIG9iamVjdHMuIFBhc3MgZWl0aGVyIGEgc2luZ2xlIGFycmF5IG9mIGBba2V5LCB2YWx1ZV1gXG4gIC8vIHBhaXJzLCBvciB0d28gcGFyYWxsZWwgYXJyYXlzIG9mIHRoZSBzYW1lIGxlbmd0aCAtLSBvbmUgb2Yga2V5cywgYW5kIG9uZSBvZlxuICAvLyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gIF8ub2JqZWN0ID0gZnVuY3Rpb24obGlzdCwgdmFsdWVzKSB7XG4gICAgaWYgKGxpc3QgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gbGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICByZXN1bHRbbGlzdFtpXV0gPSB2YWx1ZXNbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbbGlzdFtpXVswXV0gPSBsaXN0W2ldWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIElmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcGx5IHVzIHdpdGggaW5kZXhPZiAoSSdtIGxvb2tpbmcgYXQgeW91LCAqKk1TSUUqKiksXG4gIC8vIHdlIG5lZWQgdGhpcyBmdW5jdGlvbi4gUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBhblxuICAvLyBpdGVtIGluIGFuIGFycmF5LCBvciAtMSBpZiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgaW5kZXhPZmAgaWYgYXZhaWxhYmxlLlxuICAvLyBJZiB0aGUgYXJyYXkgaXMgbGFyZ2UgYW5kIGFscmVhZHkgaW4gc29ydCBvcmRlciwgcGFzcyBgdHJ1ZWBcbiAgLy8gZm9yICoqaXNTb3J0ZWQqKiB0byB1c2UgYmluYXJ5IHNlYXJjaC5cbiAgXy5pbmRleE9mID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGlzU29ydGVkKSB7XG4gICAgaWYgKGFycmF5ID09IG51bGwpIHJldHVybiAtMTtcbiAgICB2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBpZiAoaXNTb3J0ZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgaXNTb3J0ZWQgPT0gJ251bWJlcicpIHtcbiAgICAgICAgaSA9IChpc1NvcnRlZCA8IDAgPyBNYXRoLm1heCgwLCBsZW5ndGggKyBpc1NvcnRlZCkgOiBpc1NvcnRlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpID0gXy5zb3J0ZWRJbmRleChhcnJheSwgaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnJheVtpXSA9PT0gaXRlbSA/IGkgOiAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hdGl2ZUluZGV4T2YgJiYgYXJyYXkuaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZikgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSwgaXNTb3J0ZWQpO1xuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9O1xuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBsYXN0SW5kZXhPZmAgaWYgYXZhaWxhYmxlLlxuICBfLmxhc3RJbmRleE9mID0gZnVuY3Rpb24oYXJyYXksIGl0ZW0sIGZyb20pIHtcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgIHZhciBoYXNJbmRleCA9IGZyb20gIT0gbnVsbDtcbiAgICBpZiAobmF0aXZlTGFzdEluZGV4T2YgJiYgYXJyYXkubGFzdEluZGV4T2YgPT09IG5hdGl2ZUxhc3RJbmRleE9mKSB7XG4gICAgICByZXR1cm4gaGFzSW5kZXggPyBhcnJheS5sYXN0SW5kZXhPZihpdGVtLCBmcm9tKSA6IGFycmF5Lmxhc3RJbmRleE9mKGl0ZW0pO1xuICAgIH1cbiAgICB2YXIgaSA9IChoYXNJbmRleCA/IGZyb20gOiBhcnJheS5sZW5ndGgpO1xuICAgIHdoaWxlIChpLS0pIGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gICAgcmV0dXJuIC0xO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGFuIGludGVnZXIgQXJyYXkgY29udGFpbmluZyBhbiBhcml0aG1ldGljIHByb2dyZXNzaW9uLiBBIHBvcnQgb2ZcbiAgLy8gdGhlIG5hdGl2ZSBQeXRob24gYHJhbmdlKClgIGZ1bmN0aW9uLiBTZWVcbiAgLy8gW3RoZSBQeXRob24gZG9jdW1lbnRhdGlvbl0oaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L2Z1bmN0aW9ucy5odG1sI3JhbmdlKS5cbiAgXy5yYW5nZSA9IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgICAgc3RvcCA9IHN0YXJ0IHx8IDA7XG4gICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHN0ZXAgPSBhcmd1bWVudHNbMl0gfHwgMTtcblxuICAgIHZhciBsZW5ndGggPSBNYXRoLm1heChNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSwgMCk7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIHJhbmdlID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZShpZHggPCBsZW5ndGgpIHtcbiAgICAgIHJhbmdlW2lkeCsrXSA9IHN0YXJ0O1xuICAgICAgc3RhcnQgKz0gc3RlcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZ2U7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gKGFoZW0pIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSZXVzYWJsZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgcHJvdG90eXBlIHNldHRpbmcuXG4gIHZhciBjdG9yID0gZnVuY3Rpb24oKXt9O1xuXG4gIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIGJvdW5kIHRvIGEgZ2l2ZW4gb2JqZWN0IChhc3NpZ25pbmcgYHRoaXNgLCBhbmQgYXJndW1lbnRzLFxuICAvLyBvcHRpb25hbGx5KS4gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYEZ1bmN0aW9uLmJpbmRgIGlmXG4gIC8vIGF2YWlsYWJsZS5cbiAgXy5iaW5kID0gZnVuY3Rpb24oZnVuYywgY29udGV4dCkge1xuICAgIHZhciBhcmdzLCBib3VuZDtcbiAgICBpZiAobmF0aXZlQmluZCAmJiBmdW5jLmJpbmQgPT09IG5hdGl2ZUJpbmQpIHJldHVybiBuYXRpdmVCaW5kLmFwcGx5KGZ1bmMsIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgaWYgKCFfLmlzRnVuY3Rpb24oZnVuYykpIHRocm93IG5ldyBUeXBlRXJyb3I7XG4gICAgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gYm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkpIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBmdW5jLnByb3RvdHlwZTtcbiAgICAgIHZhciBzZWxmID0gbmV3IGN0b3I7XG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG51bGw7XG4gICAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseShzZWxmLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgfTtcblxuICAvLyBQYXJ0aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiBieSBjcmVhdGluZyBhIHZlcnNpb24gdGhhdCBoYXMgaGFkIHNvbWUgb2YgaXRzXG4gIC8vIGFyZ3VtZW50cyBwcmUtZmlsbGVkLCB3aXRob3V0IGNoYW5naW5nIGl0cyBkeW5hbWljIGB0aGlzYCBjb250ZXh0LlxuICBfLnBhcnRpYWwgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBCaW5kIGFsbCBvZiBhbiBvYmplY3QncyBtZXRob2RzIHRvIHRoYXQgb2JqZWN0LiBVc2VmdWwgZm9yIGVuc3VyaW5nIHRoYXRcbiAgLy8gYWxsIGNhbGxiYWNrcyBkZWZpbmVkIG9uIGFuIG9iamVjdCBiZWxvbmcgdG8gaXQuXG4gIF8uYmluZEFsbCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBmdW5jcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWxsIG11c3QgYmUgcGFzc2VkIGZ1bmN0aW9uIG5hbWVzXCIpO1xuICAgIGVhY2goZnVuY3MsIGZ1bmN0aW9uKGYpIHsgb2JqW2ZdID0gXy5iaW5kKG9ialtmXSwgb2JqKTsgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBNZW1vaXplIGFuIGV4cGVuc2l2ZSBmdW5jdGlvbiBieSBzdG9yaW5nIGl0cyByZXN1bHRzLlxuICBfLm1lbW9pemUgPSBmdW5jdGlvbihmdW5jLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtbyA9IHt9O1xuICAgIGhhc2hlciB8fCAoaGFzaGVyID0gXy5pZGVudGl0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIF8uaGFzKG1lbW8sIGtleSkgPyBtZW1vW2tleV0gOiAobWVtb1trZXldID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIERlbGF5cyBhIGZ1bmN0aW9uIGZvciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgYW5kIHRoZW4gY2FsbHNcbiAgLy8gaXQgd2l0aCB0aGUgYXJndW1lbnRzIHN1cHBsaWVkLlxuICBfLmRlbGF5ID0gZnVuY3Rpb24oZnVuYywgd2FpdCkge1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpOyB9LCB3YWl0KTtcbiAgfTtcblxuICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXNcbiAgLy8gY2xlYXJlZC5cbiAgXy5kZWZlciA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICByZXR1cm4gXy5kZWxheS5hcHBseShfLCBbZnVuYywgMV0uY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSkpO1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICAvLyBkdXJpbmcgYSBnaXZlbiB3aW5kb3cgb2YgdGltZS4gTm9ybWFsbHksIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gd2lsbCBydW5cbiAgLy8gYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICAvLyBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICAvLyBge2xlYWRpbmc6IGZhbHNlfWAuIFRvIGRpc2FibGUgZXhlY3V0aW9uIG9uIHRoZSB0cmFpbGluZyBlZGdlLCBkaXR0by5cbiAgXy50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgICB2YXIgcHJldmlvdXMgPSAwO1xuICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogbmV3IERhdGU7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gbmV3IERhdGU7XG4gICAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gIC8vIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAgLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gIC8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4gIF8uZGVib3VuY2UgPSBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgY29udGV4dCA9IHRoaXM7XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdGltZXN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbGFzdCA9IChuZXcgRGF0ZSgpKSAtIHRpbWVzdGFtcDtcbiAgICAgICAgaWYgKGxhc3QgPCB3YWl0KSB7XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIH1cbiAgICAgIGlmIChjYWxsTm93KSByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgbW9zdCBvbmUgdGltZSwgbm8gbWF0dGVyIGhvd1xuICAvLyBvZnRlbiB5b3UgY2FsbCBpdC4gVXNlZnVsIGZvciBsYXp5IGluaXRpYWxpemF0aW9uLlxuICBfLm9uY2UgPSBmdW5jdGlvbihmdW5jKSB7XG4gICAgdmFyIHJhbiA9IGZhbHNlLCBtZW1vO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChyYW4pIHJldHVybiBtZW1vO1xuICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgIG1lbW8gPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBmdW5jID0gbnVsbDtcbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgZmlyc3QgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBzZWNvbmQsXG4gIC8vIGFsbG93aW5nIHlvdSB0byBhZGp1c3QgYXJndW1lbnRzLCBydW4gY29kZSBiZWZvcmUgYW5kIGFmdGVyLCBhbmRcbiAgLy8gY29uZGl0aW9uYWxseSBleGVjdXRlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cbiAgXy53cmFwID0gZnVuY3Rpb24oZnVuYywgd3JhcHBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gW2Z1bmNdO1xuICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIHdyYXBwZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgYSBsaXN0IG9mIGZ1bmN0aW9ucywgZWFjaFxuICAvLyBjb25zdW1pbmcgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gdGhhdCBmb2xsb3dzLlxuICBfLmNvbXBvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZnVuY3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBmb3IgKHZhciBpID0gZnVuY3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXJncyA9IFtmdW5jc1tpXS5hcHBseSh0aGlzLCBhcmdzKV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBiZSBleGVjdXRlZCBhZnRlciBiZWluZyBjYWxsZWQgTiB0aW1lcy5cbiAgXy5hZnRlciA9IGZ1bmN0aW9uKHRpbWVzLCBmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKC0tdGltZXMgPCAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBuYXRpdmVLZXlzIHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChvYmogIT09IE9iamVjdChvYmopKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG9iamVjdCcpO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgaWYgKF8uaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH07XG5cbiAgLy8gUmV0cmlldmUgdGhlIHZhbHVlcyBvZiBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICBfLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBrZXlzID0gXy5rZXlzKG9iaik7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBvYmpba2V5c1tpXV07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG5cbiAgLy8gQ29udmVydCBhbiBvYmplY3QgaW50byBhIGxpc3Qgb2YgYFtrZXksIHZhbHVlXWAgcGFpcnMuXG4gIF8ucGFpcnMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgcGFpcnMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBwYWlyc1tpXSA9IFtrZXlzW2ldLCBvYmpba2V5c1tpXV1dO1xuICAgIH1cbiAgICByZXR1cm4gcGFpcnM7XG4gIH07XG5cbiAgLy8gSW52ZXJ0IHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgYW4gb2JqZWN0LiBUaGUgdmFsdWVzIG11c3QgYmUgc2VyaWFsaXphYmxlLlxuICBfLmludmVydCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbb2JqW2tleXNbaV1dXSA9IGtleXNbaV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgc29ydGVkIGxpc3Qgb2YgdGhlIGZ1bmN0aW9uIG5hbWVzIGF2YWlsYWJsZSBvbiB0aGUgb2JqZWN0LlxuICAvLyBBbGlhc2VkIGFzIGBtZXRob2RzYFxuICBfLmZ1bmN0aW9ucyA9IF8ubWV0aG9kcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBuYW1lcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24ob2JqW2tleV0pKSBuYW1lcy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lcy5zb3J0KCk7XG4gIH07XG5cbiAgLy8gRXh0ZW5kIGEgZ2l2ZW4gb2JqZWN0IHdpdGggYWxsIHRoZSBwcm9wZXJ0aWVzIGluIHBhc3NlZC1pbiBvYmplY3QocykuXG4gIF8uZXh0ZW5kID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0IG9ubHkgY29udGFpbmluZyB0aGUgd2hpdGVsaXN0ZWQgcHJvcGVydGllcy5cbiAgXy5waWNrID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIga2V5cyA9IGNvbmNhdC5hcHBseShBcnJheVByb3RvLCBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIGVhY2goa2V5cywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICBpZiAoa2V5IGluIG9iaikgY29weVtrZXldID0gb2JqW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvcHk7XG4gIH07XG5cbiAgIC8vIFJldHVybiBhIGNvcHkgb2YgdGhlIG9iamVjdCB3aXRob3V0IHRoZSBibGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuICBfLm9taXQgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrZXlzID0gY29uY2F0LmFwcGx5KEFycmF5UHJvdG8sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKCFfLmNvbnRhaW5zKGtleXMsIGtleSkpIGNvcHlba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gY29weTtcbiAgfTtcblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChvYmpbcHJvcF0gPT09IHZvaWQgMCkgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSAoc2hhbGxvdy1jbG9uZWQpIGR1cGxpY2F0ZSBvZiBhbiBvYmplY3QuXG4gIF8uY2xvbmUgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgICByZXR1cm4gXy5pc0FycmF5KG9iaikgPyBvYmouc2xpY2UoKSA6IF8uZXh0ZW5kKHt9LCBvYmopO1xuICB9O1xuXG4gIC8vIEludm9rZXMgaW50ZXJjZXB0b3Igd2l0aCB0aGUgb2JqLCBhbmQgdGhlbiByZXR1cm5zIG9iai5cbiAgLy8gVGhlIHByaW1hcnkgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBcInRhcCBpbnRvXCIgYSBtZXRob2QgY2hhaW4sIGluXG4gIC8vIG9yZGVyIHRvIHBlcmZvcm0gb3BlcmF0aW9ucyBvbiBpbnRlcm1lZGlhdGUgcmVzdWx0cyB3aXRoaW4gdGhlIGNoYWluLlxuICBfLnRhcCA9IGZ1bmN0aW9uKG9iaiwgaW50ZXJjZXB0b3IpIHtcbiAgICBpbnRlcmNlcHRvcihvYmopO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbiAgdmFyIGVxID0gZnVuY3Rpb24oYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXG4gICAgaWYgKGEgPT09IGIpIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09IDEgLyBiO1xuICAgIC8vIEEgc3RyaWN0IGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYG51bGwgPT0gdW5kZWZpbmVkYC5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkgcmV0dXJuIGEgPT09IGI7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgICBpZiAoYiBpbnN0YW5jZW9mIF8pIGIgPSBiLl93cmFwcGVkO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPSB0b1N0cmluZy5jYWxsKGIpKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICByZXR1cm4gYSA9PSBTdHJpbmcoYik7XG4gICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLiBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yXG4gICAgICAgIC8vIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgICByZXR1cm4gYSAhPSArYSA/IGIgIT0gK2IgOiAoYSA9PSAwID8gMSAvIGEgPT0gMSAvIGIgOiBhID09ICtiKTtcbiAgICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgICAgY2FzZSAnW29iamVjdCBCb29sZWFuXSc6XG4gICAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICAgIHJldHVybiArYSA9PSArYjtcbiAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyIHNvdXJjZSBwYXR0ZXJucyBhbmQgZmxhZ3MuXG4gICAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOlxuICAgICAgICByZXR1cm4gYS5zb3VyY2UgPT0gYi5zb3VyY2UgJiZcbiAgICAgICAgICAgICAgIGEuZ2xvYmFsID09IGIuZ2xvYmFsICYmXG4gICAgICAgICAgICAgICBhLm11bHRpbGluZSA9PSBiLm11bHRpbGluZSAmJlxuICAgICAgICAgICAgICAgYS5pZ25vcmVDYXNlID09IGIuaWdub3JlQ2FzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT0gYSkgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09IGI7XG4gICAgfVxuICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3Rgc1xuICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgIGlmIChhQ3RvciAhPT0gYkN0b3IgJiYgIShfLmlzRnVuY3Rpb24oYUN0b3IpICYmIChhQ3RvciBpbnN0YW5jZW9mIGFDdG9yKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmlzRnVuY3Rpb24oYkN0b3IpICYmIChiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wdXNoKGEpO1xuICAgIGJTdGFjay5wdXNoKGIpO1xuICAgIHZhciBzaXplID0gMCwgcmVzdWx0ID0gdHJ1ZTtcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoY2xhc3NOYW1lID09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgc2l6ZSA9IGEubGVuZ3RoO1xuICAgICAgcmVzdWx0ID0gc2l6ZSA9PSBiLmxlbmd0aDtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgICAgd2hpbGUgKHNpemUtLSkge1xuICAgICAgICAgIGlmICghKHJlc3VsdCA9IGVxKGFbc2l6ZV0sIGJbc2l6ZV0sIGFTdGFjaywgYlN0YWNrKSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKF8uaGFzKGEsIGtleSkpIHtcbiAgICAgICAgICAvLyBDb3VudCB0aGUgZXhwZWN0ZWQgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICAgICAgc2l6ZSsrO1xuICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlci5cbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBfLmhhcyhiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICBpZiAoXy5oYXMoYiwga2V5KSAmJiAhKHNpemUtLSkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9ICFzaXplO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSBhIGRlZXAgY29tcGFyaXNvbiB0byBjaGVjayBpZiB0d28gb2JqZWN0cyBhcmUgZXF1YWwuXG4gIF8uaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYiwgW10sIFtdKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdCBlbXB0eT9cbiAgLy8gQW4gXCJlbXB0eVwiIG9iamVjdCBoYXMgbm8gZW51bWVyYWJsZSBvd24tcHJvcGVydGllcy5cbiAgXy5pc0VtcHR5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoXy5pc0FycmF5KG9iaikgfHwgXy5pc1N0cmluZyhvYmopKSByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSBpZiAoXy5oYXMob2JqLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YWx1ZSBhIERPTSBlbGVtZW50P1xuICBfLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxKTtcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhbHVlIGFuIGFycmF5P1xuICAvLyBEZWxlZ2F0ZXMgdG8gRUNNQTUncyBuYXRpdmUgQXJyYXkuaXNBcnJheVxuICBfLmlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxuICAvLyBJcyBhIGdpdmVuIHZhcmlhYmxlIGFuIG9iamVjdD9cbiAgXy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xuICB9O1xuXG4gIC8vIEFkZCBzb21lIGlzVHlwZSBtZXRob2RzOiBpc0FyZ3VtZW50cywgaXNGdW5jdGlvbiwgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0RhdGUsIGlzUmVnRXhwLlxuICBlYWNoKFsnQXJndW1lbnRzJywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIF9bJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIERlZmluZSBhIGZhbGxiYWNrIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBpbiBicm93c2VycyAoYWhlbSwgSUUpLCB3aGVyZVxuICAvLyB0aGVyZSBpc24ndCBhbnkgaW5zcGVjdGFibGUgXCJBcmd1bWVudHNcIiB0eXBlLlxuICBpZiAoIV8uaXNBcmd1bWVudHMoYXJndW1lbnRzKSkge1xuICAgIF8uaXNBcmd1bWVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiAhIShvYmogJiYgXy5oYXMob2JqLCAnY2FsbGVlJykpO1xuICAgIH07XG4gIH1cblxuICAvLyBPcHRpbWl6ZSBgaXNGdW5jdGlvbmAgaWYgYXBwcm9wcmlhdGUuXG4gIGlmICh0eXBlb2YgKC8uLykgIT09ICdmdW5jdGlvbicpIHtcbiAgICBfLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xuICAgIH07XG4gIH1cblxuICAvLyBJcyBhIGdpdmVuIG9iamVjdCBhIGZpbml0ZSBudW1iZXI/XG4gIF8uaXNGaW5pdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gaXNGaW5pdGUob2JqKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChvYmopKTtcbiAgfTtcblxuICAvLyBJcyB0aGUgZ2l2ZW4gdmFsdWUgYE5hTmA/IChOYU4gaXMgdGhlIG9ubHkgbnVtYmVyIHdoaWNoIGRvZXMgbm90IGVxdWFsIGl0c2VsZikuXG4gIF8uaXNOYU4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXy5pc051bWJlcihvYmopICYmIG9iaiAhPSArb2JqO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgYSBib29sZWFuP1xuICBfLmlzQm9vbGVhbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWUgfHwgb2JqID09PSBmYWxzZSB8fCB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFsdWUgZXF1YWwgdG8gbnVsbD9cbiAgXy5pc051bGwgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9O1xuXG4gIC8vIElzIGEgZ2l2ZW4gdmFyaWFibGUgdW5kZWZpbmVkP1xuICBfLmlzVW5kZWZpbmVkID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdm9pZCAwO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbihvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbiAgfTtcblxuICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJ1biBVbmRlcnNjb3JlLmpzIGluICpub0NvbmZsaWN0KiBtb2RlLCByZXR1cm5pbmcgdGhlIGBfYCB2YXJpYWJsZSB0byBpdHNcbiAgLy8gcHJldmlvdXMgb3duZXIuIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICByb290Ll8gPSBwcmV2aW91c1VuZGVyc2NvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gS2VlcCB0aGUgaWRlbnRpdHkgZnVuY3Rpb24gYXJvdW5kIGZvciBkZWZhdWx0IGl0ZXJhdG9ycy5cbiAgXy5pZGVudGl0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8vIFJ1biBhIGZ1bmN0aW9uICoqbioqIHRpbWVzLlxuICBfLnRpbWVzID0gZnVuY3Rpb24obiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgYWNjdW0gPSBBcnJheShNYXRoLm1heCgwLCBuKSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIGFjY3VtW2ldID0gaXRlcmF0b3IuY2FsbChjb250ZXh0LCBpKTtcbiAgICByZXR1cm4gYWNjdW07XG4gIH07XG5cbiAgLy8gUmV0dXJuIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gYW5kIG1heCAoaW5jbHVzaXZlKS5cbiAgXy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIGlmIChtYXggPT0gbnVsbCkge1xuICAgICAgbWF4ID0gbWluO1xuICAgICAgbWluID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG4gIH07XG5cbiAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cbiAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICBlc2NhcGU6IHtcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgIFwiJ1wiOiAnJiN4Mjc7J1xuICAgIH1cbiAgfTtcbiAgZW50aXR5TWFwLnVuZXNjYXBlID0gXy5pbnZlcnQoZW50aXR5TWFwLmVzY2FwZSk7XG5cbiAgLy8gUmVnZXhlcyBjb250YWluaW5nIHRoZSBrZXlzIGFuZCB2YWx1ZXMgbGlzdGVkIGltbWVkaWF0ZWx5IGFib3ZlLlxuICB2YXIgZW50aXR5UmVnZXhlcyA9IHtcbiAgICBlc2NhcGU6ICAgbmV3IFJlZ0V4cCgnWycgKyBfLmtleXMoZW50aXR5TWFwLmVzY2FwZSkuam9pbignJykgKyAnXScsICdnJyksXG4gICAgdW5lc2NhcGU6IG5ldyBSZWdFeHAoJygnICsgXy5rZXlzKGVudGl0eU1hcC51bmVzY2FwZSkuam9pbignfCcpICsgJyknLCAnZycpXG4gIH07XG5cbiAgLy8gRnVuY3Rpb25zIGZvciBlc2NhcGluZyBhbmQgdW5lc2NhcGluZyBzdHJpbmdzIHRvL2Zyb20gSFRNTCBpbnRlcnBvbGF0aW9uLlxuICBfLmVhY2goWydlc2NhcGUnLCAndW5lc2NhcGUnXSwgZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgX1ttZXRob2RdID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBpZiAoc3RyaW5nID09IG51bGwpIHJldHVybiAnJztcbiAgICAgIHJldHVybiAoJycgKyBzdHJpbmcpLnJlcGxhY2UoZW50aXR5UmVnZXhlc1ttZXRob2RdLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gZW50aXR5TWFwW21ldGhvZF1bbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gSWYgdGhlIHZhbHVlIG9mIHRoZSBuYW1lZCBgcHJvcGVydHlgIGlzIGEgZnVuY3Rpb24gdGhlbiBpbnZva2UgaXQgd2l0aCB0aGVcbiAgLy8gYG9iamVjdGAgYXMgY29udGV4dDsgb3RoZXJ3aXNlLCByZXR1cm4gaXQuXG4gIF8ucmVzdWx0ID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuIHZvaWQgMDtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIHJldHVybiBfLmlzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbChvYmplY3QpIDogdmFsdWU7XG4gIH07XG5cbiAgLy8gQWRkIHlvdXIgb3duIGN1c3RvbSBmdW5jdGlvbnMgdG8gdGhlIFVuZGVyc2NvcmUgb2JqZWN0LlxuICBfLm1peGluID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgZWFjaChfLmZ1bmN0aW9ucyhvYmopLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgZnVuYyA9IF9bbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IFt0aGlzLl93cmFwcGVkXTtcbiAgICAgICAgcHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgZnVuYy5hcHBseShfLCBhcmdzKSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGludGVnZXIgaWQgKHVuaXF1ZSB3aXRoaW4gdGhlIGVudGlyZSBjbGllbnQgc2Vzc2lvbikuXG4gIC8vIFVzZWZ1bCBmb3IgdGVtcG9yYXJ5IERPTSBpZHMuXG4gIHZhciBpZENvdW50ZXIgPSAwO1xuICBfLnVuaXF1ZUlkID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgdmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcbiAgICByZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcbiAgfTtcblxuICAvLyBCeSBkZWZhdWx0LCBVbmRlcnNjb3JlIHVzZXMgRVJCLXN0eWxlIHRlbXBsYXRlIGRlbGltaXRlcnMsIGNoYW5nZSB0aGVcbiAgLy8gZm9sbG93aW5nIHRlbXBsYXRlIHNldHRpbmdzIHRvIHVzZSBhbHRlcm5hdGl2ZSBkZWxpbWl0ZXJzLlxuICBfLnRlbXBsYXRlU2V0dGluZ3MgPSB7XG4gICAgZXZhbHVhdGUgICAgOiAvPCUoW1xcc1xcU10rPyklPi9nLFxuICAgIGludGVycG9sYXRlIDogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlICAgICAgOiAvPCUtKFtcXHNcXFNdKz8pJT4vZ1xuICB9O1xuXG4gIC8vIFdoZW4gY3VzdG9taXppbmcgYHRlbXBsYXRlU2V0dGluZ3NgLCBpZiB5b3UgZG9uJ3Qgd2FudCB0byBkZWZpbmUgYW5cbiAgLy8gaW50ZXJwb2xhdGlvbiwgZXZhbHVhdGlvbiBvciBlc2NhcGluZyByZWdleCwgd2UgbmVlZCBvbmUgdGhhdCBpc1xuICAvLyBndWFyYW50ZWVkIG5vdCB0byBtYXRjaC5cbiAgdmFyIG5vTWF0Y2ggPSAvKC4pXi87XG5cbiAgLy8gQ2VydGFpbiBjaGFyYWN0ZXJzIG5lZWQgdG8gYmUgZXNjYXBlZCBzbyB0aGF0IHRoZXkgY2FuIGJlIHB1dCBpbnRvIGFcbiAgLy8gc3RyaW5nIGxpdGVyYWwuXG4gIHZhciBlc2NhcGVzID0ge1xuICAgIFwiJ1wiOiAgICAgIFwiJ1wiLFxuICAgICdcXFxcJzogICAgICdcXFxcJyxcbiAgICAnXFxyJzogICAgICdyJyxcbiAgICAnXFxuJzogICAgICduJyxcbiAgICAnXFx0JzogICAgICd0JyxcbiAgICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAndTIwMjknXG4gIH07XG5cbiAgdmFyIGVzY2FwZXIgPSAvXFxcXHwnfFxccnxcXG58XFx0fFxcdTIwMjh8XFx1MjAyOS9nO1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIF8udGVtcGxhdGUgPSBmdW5jdGlvbih0ZXh0LCBkYXRhLCBzZXR0aW5ncykge1xuICAgIHZhciByZW5kZXI7XG4gICAgc2V0dGluZ3MgPSBfLmRlZmF1bHRzKHt9LCBzZXR0aW5ncywgXy50ZW1wbGF0ZVNldHRpbmdzKTtcblxuICAgIC8vIENvbWJpbmUgZGVsaW1pdGVycyBpbnRvIG9uZSByZWd1bGFyIGV4cHJlc3Npb24gdmlhIGFsdGVybmF0aW9uLlxuICAgIHZhciBtYXRjaGVyID0gbmV3IFJlZ0V4cChbXG4gICAgICAoc2V0dGluZ3MuZXNjYXBlIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAoc2V0dGluZ3MuZXZhbHVhdGUgfHwgbm9NYXRjaCkuc291cmNlXG4gICAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbihtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICAgICAgLnJlcGxhY2UoZXNjYXBlciwgZnVuY3Rpb24obWF0Y2gpIHsgcmV0dXJuICdcXFxcJyArIGVzY2FwZXNbbWF0Y2hdOyB9KTtcblxuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6Xy5lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgfVxuICAgICAgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgICB9XG4gICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgICBzb3VyY2UgKz0gXCInO1xcblwiO1xuXG4gICAgLy8gSWYgYSB2YXJpYWJsZSBpcyBub3Qgc3BlY2lmaWVkLCBwbGFjZSBkYXRhIHZhbHVlcyBpbiBsb2NhbCBzY29wZS5cbiAgICBpZiAoIXNldHRpbmdzLnZhcmlhYmxlKSBzb3VyY2UgPSAnd2l0aChvYmp8fHt9KXtcXG4nICsgc291cmNlICsgJ31cXG4nO1xuXG4gICAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4sXCIgK1xuICAgICAgXCJwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcblwiICtcbiAgICAgIHNvdXJjZSArIFwicmV0dXJuIF9fcDtcXG5cIjtcblxuICAgIHRyeSB7XG4gICAgICByZW5kZXIgPSBuZXcgRnVuY3Rpb24oc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicsICdfJywgc291cmNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHJldHVybiByZW5kZXIoZGF0YSwgXyk7XG4gICAgdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIHJlbmRlci5jYWxsKHRoaXMsIGRhdGEsIF8pO1xuICAgIH07XG5cbiAgICAvLyBQcm92aWRlIHRoZSBjb21waWxlZCBmdW5jdGlvbiBzb3VyY2UgYXMgYSBjb252ZW5pZW5jZSBmb3IgcHJlY29tcGlsYXRpb24uXG4gICAgdGVtcGxhdGUuc291cmNlID0gJ2Z1bmN0aW9uKCcgKyAoc2V0dGluZ3MudmFyaWFibGUgfHwgJ29iaicpICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBBZGQgYSBcImNoYWluXCIgZnVuY3Rpb24sIHdoaWNoIHdpbGwgZGVsZWdhdGUgdG8gdGhlIHdyYXBwZXIuXG4gIF8uY2hhaW4gPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gXyhvYmopLmNoYWluKCk7XG4gIH07XG5cbiAgLy8gT09QXG4gIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAvLyBJZiBVbmRlcnNjb3JlIGlzIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLCBpdCByZXR1cm5zIGEgd3JhcHBlZCBvYmplY3QgdGhhdFxuICAvLyBjYW4gYmUgdXNlZCBPTy1zdHlsZS4gVGhpcyB3cmFwcGVyIGhvbGRzIGFsdGVyZWQgdmVyc2lvbnMgb2YgYWxsIHRoZVxuICAvLyB1bmRlcnNjb3JlIGZ1bmN0aW9ucy4gV3JhcHBlZCBvYmplY3RzIG1heSBiZSBjaGFpbmVkLlxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb250aW51ZSBjaGFpbmluZyBpbnRlcm1lZGlhdGUgcmVzdWx0cy5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0aGlzLl9jaGFpbiA/IF8ob2JqKS5jaGFpbigpIDogb2JqO1xuICB9O1xuXG4gIC8vIEFkZCBhbGwgb2YgdGhlIFVuZGVyc2NvcmUgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyIG9iamVjdC5cbiAgXy5taXhpbihfKTtcblxuICAvLyBBZGQgYWxsIG11dGF0b3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsncG9wJywgJ3B1c2gnLCAncmV2ZXJzZScsICdzaGlmdCcsICdzb3J0JywgJ3NwbGljZScsICd1bnNoaWZ0J10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgbWV0aG9kID0gQXJyYXlQcm90b1tuYW1lXTtcbiAgICBfLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXMuX3dyYXBwZWQ7XG4gICAgICBtZXRob2QuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKChuYW1lID09ICdzaGlmdCcgfHwgbmFtZSA9PSAnc3BsaWNlJykgJiYgb2JqLmxlbmd0aCA9PT0gMCkgZGVsZXRlIG9ialswXTtcbiAgICAgIHJldHVybiByZXN1bHQuY2FsbCh0aGlzLCBvYmopO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIEFkZCBhbGwgYWNjZXNzb3IgQXJyYXkgZnVuY3Rpb25zIHRvIHRoZSB3cmFwcGVyLlxuICBlYWNoKFsnY29uY2F0JywgJ2pvaW4nLCAnc2xpY2UnXSwgZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBtZXRob2QgPSBBcnJheVByb3RvW25hbWVdO1xuICAgIF8ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmNhbGwodGhpcywgbWV0aG9kLmFwcGx5KHRoaXMuX3dyYXBwZWQsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xuXG4gIF8uZXh0ZW5kKF8ucHJvdG90eXBlLCB7XG5cbiAgICAvLyBTdGFydCBjaGFpbmluZyBhIHdyYXBwZWQgVW5kZXJzY29yZSBvYmplY3QuXG4gICAgY2hhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fY2hhaW4gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSBhIHdyYXBwZWQgYW5kIGNoYWluZWQgb2JqZWN0LlxuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwcGVkO1xuICAgIH1cblxuICB9KTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcblxudmFyIHJuZztcblxuaWYgKGdsb2JhbC5jcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvLWJhc2VkIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgLy8gTW9kZXJhdGVseSBmYXN0LCBoaWdoIHF1YWxpdHlcbiAgdmFyIF9ybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoX3JuZHM4KTtcbiAgICByZXR1cm4gX3JuZHM4O1xuICB9O1xufVxuXG5pZiAoIXJuZykge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciAgX3JuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgX3JuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9ybmRzO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJuZztcblxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8vICAgICB1dWlkLmpzXG4vL1xuLy8gICAgIENvcHlyaWdodCAoYykgMjAxMC0yMDEyIFJvYmVydCBLaWVmZmVyXG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBXZSBmZWF0dXJlXG4vLyBkZXRlY3QgdG8gZGV0ZXJtaW5lIHRoZSBiZXN0IFJORyBzb3VyY2UsIG5vcm1hbGl6aW5nIHRvIGEgZnVuY3Rpb24gdGhhdFxuLy8gcmV0dXJucyAxMjgtYml0cyBvZiByYW5kb21uZXNzLCBzaW5jZSB0aGF0J3Mgd2hhdCdzIHVzdWFsbHkgcmVxdWlyZWRcbnZhciBfcm5nID0gcmVxdWlyZSgnLi9ybmcnKTtcblxuLy8gTWFwcyBmb3IgbnVtYmVyIDwtPiBoZXggc3RyaW5nIGNvbnZlcnNpb25cbnZhciBfYnl0ZVRvSGV4ID0gW107XG52YXIgX2hleFRvQnl0ZSA9IHt9O1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICBfYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgX2hleFRvQnl0ZVtfYnl0ZVRvSGV4W2ldXSA9IGk7XG59XG5cbi8vICoqYHBhcnNlKClgIC0gUGFyc2UgYSBVVUlEIGludG8gaXQncyBjb21wb25lbnQgYnl0ZXMqKlxuZnVuY3Rpb24gcGFyc2UocywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSAoYnVmICYmIG9mZnNldCkgfHwgMCwgaWkgPSAwO1xuXG4gIGJ1ZiA9IGJ1ZiB8fCBbXTtcbiAgcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1swLTlhLWZdezJ9L2csIGZ1bmN0aW9uKG9jdCkge1xuICAgIGlmIChpaSA8IDE2KSB7IC8vIERvbid0IG92ZXJmbG93IVxuICAgICAgYnVmW2kgKyBpaSsrXSA9IF9oZXhUb0J5dGVbb2N0XTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFplcm8gb3V0IHJlbWFpbmluZyBieXRlcyBpZiBzdHJpbmcgd2FzIHNob3J0XG4gIHdoaWxlIChpaSA8IDE2KSB7XG4gICAgYnVmW2kgKyBpaSsrXSA9IDA7XG4gIH1cblxuICByZXR1cm4gYnVmO1xufVxuXG4vLyAqKmB1bnBhcnNlKClgIC0gQ29udmVydCBVVUlEIGJ5dGUgYXJyYXkgKGFsYSBwYXJzZSgpKSBpbnRvIGEgc3RyaW5nKipcbmZ1bmN0aW9uIHVucGFyc2UoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMCwgYnRoID0gX2J5dGVUb0hleDtcbiAgcmV0dXJuICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG59XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxuLy8gcmFuZG9tICMncyB3ZSBuZWVkIHRvIGluaXQgbm9kZSBhbmQgY2xvY2tzZXFcbnZhciBfc2VlZEJ5dGVzID0gX3JuZygpO1xuXG4vLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbnZhciBfbm9kZUlkID0gW1xuICBfc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgX3NlZWRCeXRlc1sxXSwgX3NlZWRCeXRlc1syXSwgX3NlZWRCeXRlc1szXSwgX3NlZWRCeXRlc1s0XSwgX3NlZWRCeXRlc1s1XVxuXTtcblxuLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbnZhciBfY2xvY2tzZXEgPSAoX3NlZWRCeXRlc1s2XSA8PCA4IHwgX3NlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwLCBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyBuKyspIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogdW5wYXJzZShiKTtcbn1cblxuLy8gKipgdjQoKWAgLSBHZW5lcmF0ZSByYW5kb20gVVVJRCoqXG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIC8vIERlcHJlY2F0ZWQgLSAnZm9ybWF0JyBhcmd1bWVudCwgYXMgc3VwcG9ydGVkIGluIHYxLjJcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7IGlpKyspIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCB1bnBhcnNlKHJuZHMpO1xufVxuXG4vLyBFeHBvcnQgcHVibGljIEFQSVxudmFyIHV1aWQgPSB2NDtcbnV1aWQudjEgPSB2MTtcbnV1aWQudjQgPSB2NDtcbnV1aWQucGFyc2UgPSBwYXJzZTtcbnV1aWQudW5wYXJzZSA9IHVucGFyc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiJdfQ==
