// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"LsWl":[function(require,module,exports) {
var app = angular.module('app', ['ngAnimate']);
app.controller('mainCtrl', function ($scope) {
  $scope.boxes = [{
    name: 'Friends',
    image: 'https://source.unsplash.com/uAgLGG1WBd4/900x900'
  }, {
    name: 'Free',
    image: 'https://source.unsplash.com/Cp-LUHPRpWM/900x900'
  }, {
    name: 'Explore',
    image: 'https://source.unsplash.com/7BjmDICVloE/900x900'
  }, {
    name: 'Vast',
    image: 'https://source.unsplash.com/WLUHO9A_xik/900x900'
  }, {
    name: 'Playful',
    image: 'https://source.unsplash.com/b2-fBVrfx0o/900x900'
  }, {
    name: 'Grand',
    image: 'https://source.unsplash.com/Ixp4YhCKZkI/900x900'
  }, {
    name: 'Mist',
    image: 'https://source.unsplash.com/8BmNurlVR6M/900x900'
  }, {
    name: 'Sea',
    image: 'https://source.unsplash.com/6YqpFWWQsno/900x900'
  }, {
    name: 'Reach',
    image: 'https://source.unsplash.com/zFnk_bTLApo/900x900'
  }, {
    name: 'Awe',
    image: 'https://source.unsplash.com/j4PaE7E2_Ws/900x900'
  }, {
    name: 'Surf',
    image: 'https://source.unsplash.com/uohGiEVhWiQ/900x900'
  }, {
    name: 'Thrill',
    image: 'https://source.unsplash.com/ssrbaKvxaos/900x900'
  }];
  $scope.selected = [];
  $scope.selectBox = function (item, position) {
    $scope.selected = [{
      item: item,
      position: position
    }];
    $scope.$apply();
  };
  $scope.clearSelection = function () {
    $scope.selected = [];
  };
});
app.directive('box', function () {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      onSelect: "=",
      item: "="
    },
    controllerAs: 'box',
    controller: function controller() {
      var box = this;
      box.goFullscreen = function (e) {
        box.onSelect(box.item, e.target.getBoundingClientRect());
      };
    },
    link: function link(scope, element) {
      element.bind('click', scope.box.goFullscreen);
      element.css({
        // print scope.box.item.image
        log: scope.box.item.image,
        'background-image': 'url(' + scope.box.item.image + ')'
      });
    }
  };
});
app.directive('bigBox', function ($timeout) {
  return {
    restrict: 'AE',
    scope: {},
    bindToController: {
      position: "=",
      selected: "=",
      onSelect: "="
    },
    controllerAs: 'box',
    controller: function controller() {
      var box = this;
    },
    link: function link(scope, element) {
      var css = {};
      for (var key in scope.box.position) {
        css[key] = scope.box.position[key] + 'px';
      }
      element.css(css);
      $timeout(function () {
        element.css({
          top: '50%',
          left: '10%'
        });
        element.addClass('image-out');
      }, 200);
      $timeout(function () {
        element.css({
          width: '80%',
          height: '100%'
        });
      }, 500);
      $timeout(function () {
        element.addClass('show');
      }, 800);
    }
  };
});
},{}]},{},["LsWl"], null)