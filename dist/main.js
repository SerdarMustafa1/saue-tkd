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
})({"main.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof6(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof6 = function _typeof6(obj) { return typeof obj; }; } else { _typeof6 = function _typeof6(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof6(obj); }

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = function (modules, cache, entry, globalName) {
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
        } // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.


        if (previousRequire) {
          return previousRequire(name, true);
        } // Try the node require function if it exists.


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

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

    if ((typeof exports === "undefined" ? "undefined" : _typeof6(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports; // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      }); // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  } // Override the current require with this new one


  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
}({
  "main.js": [function (require, module, exports) {
    var define;
    var global = arguments[3];

    function _typeof5(obj) {
      if (typeof Symbol === "function" && _typeof6(Symbol.iterator) === "symbol") {
        _typeof5 = function _typeof5(obj) {
          return _typeof6(obj);
        };
      } else {
        _typeof5 = function _typeof5(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof6(obj);
        };
      }

      return _typeof5(obj);
    } // modules are defined as an array
    // [ module function, map of requires ]
    //
    // map of requires is short require name -> numeric require
    //
    // anything defined in a previous bundle is accessed via the
    // orig method which is the require for previous bundles


    parcelRequire = function (modules, cache, entry, globalName) {
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
            } // If there are other bundles on this page the require from the
            // previous one is saved to 'previousRequire'. Repeat this as
            // many times as there are bundles until the module is found or
            // we exhaust the require chain.


            if (previousRequire) {
              return previousRequire(name, true);
            } // Try the node require function if it exists.


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

        function localRequire(x) {
          return newRequire(localRequire.resolve(x));
        }

        function resolve(x) {
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
        var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

        if ((typeof exports === "undefined" ? "undefined" : _typeof5(exports)) === "object" && typeof module !== "undefined") {
          module.exports = mainExports; // RequireJS
        } else if (typeof define === "function" && define.amd) {
          define(function () {
            return mainExports;
          }); // <script>
        } else if (globalName) {
          this[globalName] = mainExports;
        }
      } // Override the current require with this new one


      parcelRequire = newRequire;

      if (error) {
        // throw error from earlier, _after updating parcelRequire_
        throw error;
      }

      return newRequire;
    }({
      "main.js": [function (require, module, exports) {
        var define;
        var global = arguments[3];

        function _typeof4(obj) {
          if (typeof Symbol === "function" && _typeof5(Symbol.iterator) === "symbol") {
            _typeof4 = function _typeof4(obj) {
              return _typeof5(obj);
            };
          } else {
            _typeof4 = function _typeof4(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof5(obj);
            };
          }

          return _typeof4(obj);
        } // modules are defined as an array
        // [ module function, map of requires ]
        //
        // map of requires is short require name -> numeric require
        //
        // anything defined in a previous bundle is accessed via the
        // orig method which is the require for previous bundles


        parcelRequire = function (modules, cache, entry, globalName) {
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
                } // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.


                if (previousRequire) {
                  return previousRequire(name, true);
                } // Try the node require function if it exists.


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

            function localRequire(x) {
              return newRequire(localRequire.resolve(x));
            }

            function resolve(x) {
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
            var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

            if ((typeof exports === "undefined" ? "undefined" : _typeof4(exports)) === "object" && typeof module !== "undefined") {
              module.exports = mainExports; // RequireJS
            } else if (typeof define === "function" && define.amd) {
              define(function () {
                return mainExports;
              }); // <script>
            } else if (globalName) {
              this[globalName] = mainExports;
            }
          } // Override the current require with this new one


          parcelRequire = newRequire;

          if (error) {
            // throw error from earlier, _after updating parcelRequire_
            throw error;
          }

          return newRequire;
        }({
          "main.js": [function (require, module, exports) {
            var define;
            var global = arguments[3];

            function _typeof3(obj) {
              if (typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol") {
                _typeof3 = function _typeof3(obj) {
                  return _typeof4(obj);
                };
              } else {
                _typeof3 = function _typeof3(obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof4(obj);
                };
              }

              return _typeof3(obj);
            } // modules are defined as an array
            // [ module function, map of requires ]
            //
            // map of requires is short require name -> numeric require
            //
            // anything defined in a previous bundle is accessed via the
            // orig method which is the require for previous bundles


            parcelRequire = function (modules, cache, entry, globalName) {
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
                    } // If there are other bundles on this page the require from the
                    // previous one is saved to 'previousRequire'. Repeat this as
                    // many times as there are bundles until the module is found or
                    // we exhaust the require chain.


                    if (previousRequire) {
                      return previousRequire(name, true);
                    } // Try the node require function if it exists.


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

                function localRequire(x) {
                  return newRequire(localRequire.resolve(x));
                }

                function resolve(x) {
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
                var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

                if ((typeof exports === "undefined" ? "undefined" : _typeof3(exports)) === "object" && typeof module !== "undefined") {
                  module.exports = mainExports; // RequireJS
                } else if (typeof define === "function" && define.amd) {
                  define(function () {
                    return mainExports;
                  }); // <script>
                } else if (globalName) {
                  this[globalName] = mainExports;
                }
              } // Override the current require with this new one


              parcelRequire = newRequire;

              if (error) {
                // throw error from earlier, _after updating parcelRequire_
                throw error;
              }

              return newRequire;
            }({
              "main.js": [function (require, module, exports) {
                var define;
                var global = arguments[3];

                function _typeof2(obj) {
                  if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") {
                    _typeof2 = function _typeof2(obj) {
                      return _typeof3(obj);
                    };
                  } else {
                    _typeof2 = function _typeof2(obj) {
                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof3(obj);
                    };
                  }

                  return _typeof2(obj);
                } // modules are defined as an array
                // [ module function, map of requires ]
                //
                // map of requires is short require name -> numeric require
                //
                // anything defined in a previous bundle is accessed via the
                // orig method which is the require for previous bundles


                parcelRequire = function (modules, cache, entry, globalName) {
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
                        } // If there are other bundles on this page the require from the
                        // previous one is saved to 'previousRequire'. Repeat this as
                        // many times as there are bundles until the module is found or
                        // we exhaust the require chain.


                        if (previousRequire) {
                          return previousRequire(name, true);
                        } // Try the node require function if it exists.


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

                    function localRequire(x) {
                      return newRequire(localRequire.resolve(x));
                    }

                    function resolve(x) {
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
                    var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

                    if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
                      module.exports = mainExports; // RequireJS
                    } else if (typeof define === "function" && define.amd) {
                      define(function () {
                        return mainExports;
                      }); // <script>
                    } else if (globalName) {
                      this[globalName] = mainExports;
                    }
                  } // Override the current require with this new one


                  parcelRequire = newRequire;

                  if (error) {
                    // throw error from earlier, _after updating parcelRequire_
                    throw error;
                  }

                  return newRequire;
                }({
                  "main.js": [function (require, module, exports) {
                    var define;
                    var global = arguments[3];

                    function _typeof(obj) {
                      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
                        _typeof = function _typeof(obj) {
                          return _typeof2(obj);
                        };
                      } else {
                        _typeof = function _typeof(obj) {
                          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
                        };
                      }

                      return _typeof(obj);
                    } // modules are defined as an array
                    // [ module function, map of requires ]
                    //
                    // map of requires is short require name -> numeric require
                    //
                    // anything defined in a previous bundle is accessed via the
                    // orig method which is the require for previous bundles


                    parcelRequire = function (modules, cache, entry, globalName) {
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
                            } // If there are other bundles on this page the require from the
                            // previous one is saved to 'previousRequire'. Repeat this as
                            // many times as there are bundles until the module is found or
                            // we exhaust the require chain.


                            if (previousRequire) {
                              return previousRequire(name, true);
                            } // Try the node require function if it exists.


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

                        function localRequire(x) {
                          return newRequire(localRequire.resolve(x));
                        }

                        function resolve(x) {
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
                        var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

                        if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
                          module.exports = mainExports; // RequireJS
                        } else if (typeof define === "function" && define.amd) {
                          define(function () {
                            return mainExports;
                          }); // <script>
                        } else if (globalName) {
                          this[globalName] = mainExports;
                        }
                      } // Override the current require with this new one


                      parcelRequire = newRequire;

                      if (error) {
                        // throw error from earlier, _after updating parcelRequire_
                        throw error;
                      }

                      return newRequire;
                    }({
                      "js/main.js": [function (require, module, exports) {
                        AOS.init({
                          duration: 800,
                          easing: 'slide'
                        });

                        (function ($) {
                          "use strict";

                          $(window).stellar({
                            responsive: true,
                            parallaxBackgrounds: true,
                            parallaxElements: true,
                            horizontalScrolling: false,
                            hideDistantElements: false,
                            scrollProperty: 'scroll',
                            horizontalOffset: 0,
                            verticalOffset: 0
                          }); // Scrollax

                          $.Scrollax();

                          var fullHeight = function fullHeight() {
                            $('.js-fullheight').css('height', $(window).height());
                            $(window).resize(function () {
                              $('.js-fullheight').css('height', $(window).height());
                            });
                          };

                          fullHeight(); // loader

                          var loader = function loader() {
                            setTimeout(function () {
                              if ($('#ftco-loader').length > 0) {
                                $('#ftco-loader').removeClass('show');
                              }
                            }, 1);
                          };

                          loader(); // Scrollax

                          $.Scrollax();

                          var carousel = function carousel() {
                            $('.home-slider').owlCarousel({
                              loop: true,
                              autoplay: true,
                              margin: 0,
                              animateOut: 'fadeOut',
                              animateIn: 'fadeIn',
                              nav: false,
                              autoplayHoverPause: false,
                              items: 1,
                              navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
                              responsive: {
                                0: {
                                  items: 1,
                                  nav: false
                                },
                                600: {
                                  items: 1,
                                  nav: false
                                },
                                1000: {
                                  items: 1,
                                  nav: false
                                }
                              }
                            });
                            $('.carousel-work').owlCarousel({
                              autoplay: true,
                              center: true,
                              loop: true,
                              items: 1,
                              margin: 30,
                              stagePadding: 0,
                              nav: true,
                              navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                              responsive: {
                                0: {
                                  items: 1,
                                  stagePadding: 0
                                },
                                600: {
                                  items: 2,
                                  stagePadding: 50
                                },
                                1000: {
                                  items: 3,
                                  stagePadding: 100
                                }
                              }
                            });
                          };

                          carousel();
                          $('nav .dropdown').hover(function () {
                            var $this = $(this); // 	 timer;
                            // clearTimeout(timer);

                            $this.addClass('show');
                            $this.find('> a').attr('aria-expanded', true); // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');

                            $this.find('.dropdown-menu').addClass('show');
                          }, function () {
                            var $this = $(this); // timer;
                            // timer = setTimeout(function(){

                            $this.removeClass('show');
                            $this.find('> a').attr('aria-expanded', false); // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');

                            $this.find('.dropdown-menu').removeClass('show'); // }, 100);
                          });
                          $('#dropdown04').on('show.bs.dropdown', function () {
                            console.log('show');
                          }); // scroll

                          var scrollWindow = function scrollWindow() {
                            $(window).scroll(function () {
                              var $w = $(this),
                                  st = $w.scrollTop(),
                                  navbar = $('.ftco_navbar'),
                                  sd = $('.js-scroll-wrap');

                              if (st > 150) {
                                if (!navbar.hasClass('scrolled')) {
                                  navbar.addClass('scrolled');
                                }
                              }

                              if (st < 150) {
                                if (navbar.hasClass('scrolled')) {
                                  navbar.removeClass('scrolled sleep');
                                }
                              }

                              if (st > 350) {
                                if (!navbar.hasClass('awake')) {
                                  navbar.addClass('awake');
                                }

                                if (sd.length > 0) {
                                  sd.addClass('sleep');
                                }
                              }

                              if (st < 350) {
                                if (navbar.hasClass('awake')) {
                                  navbar.removeClass('awake');
                                  navbar.addClass('sleep');
                                }

                                if (sd.length > 0) {
                                  sd.removeClass('sleep');
                                }
                              }
                            });
                          };

                          scrollWindow();

                          var counter = function counter() {
                            $('#section-counter').waypoint(function (direction) {
                              if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                                $('.number').each(function () {
                                  var $this = $(this),
                                      num = $this.data('number');
                                  console.log(num);
                                  $this.animateNumber({
                                    number: num,
                                    numberStep: comma_separator_number_step
                                  }, 7000);
                                });
                              }
                            }, {
                              offset: '95%'
                            });
                          };

                          counter();

                          var contentWayPoint = function contentWayPoint() {
                            var i = 0;
                            $('.ftco-animate').waypoint(function (direction) {
                              if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                                i++;
                                $(this.element).addClass('item-animate');
                                setTimeout(function () {
                                  $('body .ftco-animate.item-animate').each(function (k) {
                                    var el = $(this);
                                    setTimeout(function () {
                                      var effect = el.data('animate-effect');

                                      if (effect === 'fadeIn') {
                                        el.addClass('fadeIn ftco-animated');
                                      } else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft ftco-animated');
                                      } else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight ftco-animated');
                                      } else {
                                        el.addClass('fadeInUp ftco-animated');
                                      }

                                      el.removeClass('item-animate');
                                    }, k * 50, 'easeInOutExpo');
                                  });
                                }, 100);
                              }
                            }, {
                              offset: '95%'
                            });
                          };

                          contentWayPoint(); // navigation

                          var OnePageNav = function OnePageNav() {
                            $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
                              e.preventDefault();
                              var hash = this.hash,
                                  navToggler = $('.navbar-toggler');
                              $('html, body').animate({
                                scrollTop: $(hash).offset().top
                              }, 700, 'easeInOutExpo', function () {
                                window.location.hash = hash;
                              });

                              if (navToggler.is(':visible')) {
                                navToggler.click();
                              }
                            });
                            $('body').on('activate.bs.scrollspy', function () {
                              console.log('nice');
                            });
                          };

                          OnePageNav(); // magnific popup

                          $('.image-popup').magnificPopup({
                            type: 'image',
                            closeOnContentClick: true,
                            closeBtnInside: true,
                            fixedContentPos: true,
                            mainClass: 'mfp-no-margins mfp-with-zoom',
                            // class to remove default margin from left and right side
                            gallery: {
                              enabled: true,
                              navigateByImgClick: true,
                              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

                            },
                            image: {
                              verticalFit: true
                            },
                            zoom: {
                              enabled: true,
                              duration: 300 // don't foget to change the duration also in CSS

                            }
                          });
                          $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                            disableOn: 700,
                            type: 'iframe',
                            mainClass: 'mfp-fade',
                            removalDelay: 160,
                            preloader: false,
                            fixedContentPos: false
                          });
                          $('.appointment_date').datepicker({
                            'format': 'm/d/yyyy',
                            'autoclose': true
                          });
                          $('.appointment_time').timepicker();
                        })(jQuery);
                      }, {}],
                      "../node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
                        var global = arguments[3];
                        var OVERLAY_ID = '__parcel__error__overlay__';
                        var OldModule = module.bundle.Module;

                        function Module(moduleName) {
                          OldModule.call(this, moduleName);
                          this.hot = {
                            data: module.bundle.hotData,
                            _acceptCallbacks: [],
                            _disposeCallbacks: [],
                            accept: function accept(fn) {
                              this._acceptCallbacks.push(fn || function () {});
                            },
                            dispose: function dispose(fn) {
                              this._disposeCallbacks.push(fn);
                            }
                          };
                          module.bundle.hotData = null;
                        }

                        module.bundle.Module = Module;
                        var checkedAssets, assetsToAccept;
                        var parent = module.bundle.parent;

                        if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
                          var hostname = "" || location.hostname;
                          var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
                          var ws = new WebSocket(protocol + '://' + hostname + ':' + "55009" + '/');

                          ws.onmessage = function (event) {
                            checkedAssets = {};
                            assetsToAccept = [];
                            var data = JSON.parse(event.data);

                            if (data.type === 'update') {
                              var handled = false;
                              data.assets.forEach(function (asset) {
                                if (!asset.isNew) {
                                  var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

                                  if (didAccept) {
                                    handled = true;
                                  }
                                }
                              }); // Enable HMR for CSS by default.

                              handled = handled || data.assets.every(function (asset) {
                                return asset.type === 'css' && asset.generated.js;
                              });

                              if (handled) {
                                console.clear();
                                data.assets.forEach(function (asset) {
                                  hmrApply(global.parcelRequire, asset);
                                });
                                assetsToAccept.forEach(function (v) {
                                  hmrAcceptRun(v[0], v[1]);
                                });
                              } else {
                                window.location.reload();
                              }
                            }

                            if (data.type === 'reload') {
                              ws.close();

                              ws.onclose = function () {
                                location.reload();
                              };
                            }

                            if (data.type === 'error-resolved') {
                              console.log('[parcel] ✨ Error resolved');
                              removeErrorOverlay();
                            }

                            if (data.type === 'error') {
                              console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
                              removeErrorOverlay();
                              var overlay = createErrorOverlay(data);
                              document.body.appendChild(overlay);
                            }
                          };
                        }

                        function removeErrorOverlay() {
                          var overlay = document.getElementById(OVERLAY_ID);

                          if (overlay) {
                            overlay.remove();
                          }
                        }

                        function createErrorOverlay(data) {
                          var overlay = document.createElement('div');
                          overlay.id = OVERLAY_ID; // html encode message and stack trace

                          var message = document.createElement('div');
                          var stackTrace = document.createElement('pre');
                          message.innerText = data.error.message;
                          stackTrace.innerText = data.error.stack;
                          overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
                          return overlay;
                        }

                        function getParents(bundle, id) {
                          var modules = bundle.modules;

                          if (!modules) {
                            return [];
                          }

                          var parents = [];
                          var k, d, dep;

                          for (k in modules) {
                            for (d in modules[k][1]) {
                              dep = modules[k][1][d];

                              if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
                                parents.push(k);
                              }
                            }
                          }

                          if (bundle.parent) {
                            parents = parents.concat(getParents(bundle.parent, id));
                          }

                          return parents;
                        }

                        function hmrApply(bundle, asset) {
                          var modules = bundle.modules;

                          if (!modules) {
                            return;
                          }

                          if (modules[asset.id] || !bundle.parent) {
                            var fn = new Function('require', 'module', 'exports', asset.generated.js);
                            asset.isNew = !modules[asset.id];
                            modules[asset.id] = [fn, asset.deps];
                          } else if (bundle.parent) {
                            hmrApply(bundle.parent, asset);
                          }
                        }

                        function hmrAcceptCheck(bundle, id) {
                          var modules = bundle.modules;

                          if (!modules) {
                            return;
                          }

                          if (!modules[id] && bundle.parent) {
                            return hmrAcceptCheck(bundle.parent, id);
                          }

                          if (checkedAssets[id]) {
                            return;
                          }

                          checkedAssets[id] = true;
                          var cached = bundle.cache[id];
                          assetsToAccept.push([bundle, id]);

                          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                            return true;
                          }

                          return getParents(global.parcelRequire, id).some(function (id) {
                            return hmrAcceptCheck(global.parcelRequire, id);
                          });
                        }

                        function hmrAcceptRun(bundle, id) {
                          var cached = bundle.cache[id];
                          bundle.hotData = {};

                          if (cached) {
                            cached.hot.data = bundle.hotData;
                          }

                          if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
                            cached.hot._disposeCallbacks.forEach(function (cb) {
                              cb(bundle.hotData);
                            });
                          }

                          delete bundle.cache[id];
                          bundle(id);
                          cached = bundle.cache[id];

                          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                            cached.hot._acceptCallbacks.forEach(function (cb) {
                              cb();
                            });

                            return true;
                          }
                        }
                      }, {}]
                    }, {}, ["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "js/main.js"], null);
                  }, {}],
                  "../node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
                    var global = arguments[3];
                    var OVERLAY_ID = '__parcel__error__overlay__';
                    var OldModule = module.bundle.Module;

                    function Module(moduleName) {
                      OldModule.call(this, moduleName);
                      this.hot = {
                        data: module.bundle.hotData,
                        _acceptCallbacks: [],
                        _disposeCallbacks: [],
                        accept: function accept(fn) {
                          this._acceptCallbacks.push(fn || function () {});
                        },
                        dispose: function dispose(fn) {
                          this._disposeCallbacks.push(fn);
                        }
                      };
                      module.bundle.hotData = null;
                    }

                    module.bundle.Module = Module;
                    var checkedAssets, assetsToAccept;
                    var parent = module.bundle.parent;

                    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
                      var hostname = "" || location.hostname;
                      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
                      var ws = new WebSocket(protocol + '://' + hostname + ':' + "55186" + '/');

                      ws.onmessage = function (event) {
                        checkedAssets = {};
                        assetsToAccept = [];
                        var data = JSON.parse(event.data);

                        if (data.type === 'update') {
                          var handled = false;
                          data.assets.forEach(function (asset) {
                            if (!asset.isNew) {
                              var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

                              if (didAccept) {
                                handled = true;
                              }
                            }
                          }); // Enable HMR for CSS by default.

                          handled = handled || data.assets.every(function (asset) {
                            return asset.type === 'css' && asset.generated.js;
                          });

                          if (handled) {
                            console.clear();
                            data.assets.forEach(function (asset) {
                              hmrApply(global.parcelRequire, asset);
                            });
                            assetsToAccept.forEach(function (v) {
                              hmrAcceptRun(v[0], v[1]);
                            });
                          } else {
                            window.location.reload();
                          }
                        }

                        if (data.type === 'reload') {
                          ws.close();

                          ws.onclose = function () {
                            location.reload();
                          };
                        }

                        if (data.type === 'error-resolved') {
                          console.log('[parcel] ✨ Error resolved');
                          removeErrorOverlay();
                        }

                        if (data.type === 'error') {
                          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
                          removeErrorOverlay();
                          var overlay = createErrorOverlay(data);
                          document.body.appendChild(overlay);
                        }
                      };
                    }

                    function removeErrorOverlay() {
                      var overlay = document.getElementById(OVERLAY_ID);

                      if (overlay) {
                        overlay.remove();
                      }
                    }

                    function createErrorOverlay(data) {
                      var overlay = document.createElement('div');
                      overlay.id = OVERLAY_ID; // html encode message and stack trace

                      var message = document.createElement('div');
                      var stackTrace = document.createElement('pre');
                      message.innerText = data.error.message;
                      stackTrace.innerText = data.error.stack;
                      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
                      return overlay;
                    }

                    function getParents(bundle, id) {
                      var modules = bundle.modules;

                      if (!modules) {
                        return [];
                      }

                      var parents = [];
                      var k, d, dep;

                      for (k in modules) {
                        for (d in modules[k][1]) {
                          dep = modules[k][1][d];

                          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
                            parents.push(k);
                          }
                        }
                      }

                      if (bundle.parent) {
                        parents = parents.concat(getParents(bundle.parent, id));
                      }

                      return parents;
                    }

                    function hmrApply(bundle, asset) {
                      var modules = bundle.modules;

                      if (!modules) {
                        return;
                      }

                      if (modules[asset.id] || !bundle.parent) {
                        var fn = new Function('require', 'module', 'exports', asset.generated.js);
                        asset.isNew = !modules[asset.id];
                        modules[asset.id] = [fn, asset.deps];
                      } else if (bundle.parent) {
                        hmrApply(bundle.parent, asset);
                      }
                    }

                    function hmrAcceptCheck(bundle, id) {
                      var modules = bundle.modules;

                      if (!modules) {
                        return;
                      }

                      if (!modules[id] && bundle.parent) {
                        return hmrAcceptCheck(bundle.parent, id);
                      }

                      if (checkedAssets[id]) {
                        return;
                      }

                      checkedAssets[id] = true;
                      var cached = bundle.cache[id];
                      assetsToAccept.push([bundle, id]);

                      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                        return true;
                      }

                      return getParents(global.parcelRequire, id).some(function (id) {
                        return hmrAcceptCheck(global.parcelRequire, id);
                      });
                    }

                    function hmrAcceptRun(bundle, id) {
                      var cached = bundle.cache[id];
                      bundle.hotData = {};

                      if (cached) {
                        cached.hot.data = bundle.hotData;
                      }

                      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
                        cached.hot._disposeCallbacks.forEach(function (cb) {
                          cb(bundle.hotData);
                        });
                      }

                      delete bundle.cache[id];
                      bundle(id);
                      cached = bundle.cache[id];

                      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                        cached.hot._acceptCallbacks.forEach(function (cb) {
                          cb();
                        });

                        return true;
                      }
                    }
                  }, {}]
                }, {}, ["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "main.js"], null);
              }, {}],
              "../node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
                var global = arguments[3];
                var OVERLAY_ID = '__parcel__error__overlay__';
                var OldModule = module.bundle.Module;

                function Module(moduleName) {
                  OldModule.call(this, moduleName);
                  this.hot = {
                    data: module.bundle.hotData,
                    _acceptCallbacks: [],
                    _disposeCallbacks: [],
                    accept: function accept(fn) {
                      this._acceptCallbacks.push(fn || function () {});
                    },
                    dispose: function dispose(fn) {
                      this._disposeCallbacks.push(fn);
                    }
                  };
                  module.bundle.hotData = null;
                }

                module.bundle.Module = Module;
                var checkedAssets, assetsToAccept;
                var parent = module.bundle.parent;

                if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
                  var hostname = "" || location.hostname;
                  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
                  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55186" + '/');

                  ws.onmessage = function (event) {
                    checkedAssets = {};
                    assetsToAccept = [];
                    var data = JSON.parse(event.data);

                    if (data.type === 'update') {
                      var handled = false;
                      data.assets.forEach(function (asset) {
                        if (!asset.isNew) {
                          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

                          if (didAccept) {
                            handled = true;
                          }
                        }
                      }); // Enable HMR for CSS by default.

                      handled = handled || data.assets.every(function (asset) {
                        return asset.type === 'css' && asset.generated.js;
                      });

                      if (handled) {
                        console.clear();
                        data.assets.forEach(function (asset) {
                          hmrApply(global.parcelRequire, asset);
                        });
                        assetsToAccept.forEach(function (v) {
                          hmrAcceptRun(v[0], v[1]);
                        });
                      } else {
                        window.location.reload();
                      }
                    }

                    if (data.type === 'reload') {
                      ws.close();

                      ws.onclose = function () {
                        location.reload();
                      };
                    }

                    if (data.type === 'error-resolved') {
                      console.log('[parcel] ✨ Error resolved');
                      removeErrorOverlay();
                    }

                    if (data.type === 'error') {
                      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
                      removeErrorOverlay();
                      var overlay = createErrorOverlay(data);
                      document.body.appendChild(overlay);
                    }
                  };
                }

                function removeErrorOverlay() {
                  var overlay = document.getElementById(OVERLAY_ID);

                  if (overlay) {
                    overlay.remove();
                  }
                }

                function createErrorOverlay(data) {
                  var overlay = document.createElement('div');
                  overlay.id = OVERLAY_ID; // html encode message and stack trace

                  var message = document.createElement('div');
                  var stackTrace = document.createElement('pre');
                  message.innerText = data.error.message;
                  stackTrace.innerText = data.error.stack;
                  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
                  return overlay;
                }

                function getParents(bundle, id) {
                  var modules = bundle.modules;

                  if (!modules) {
                    return [];
                  }

                  var parents = [];
                  var k, d, dep;

                  for (k in modules) {
                    for (d in modules[k][1]) {
                      dep = modules[k][1][d];

                      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
                        parents.push(k);
                      }
                    }
                  }

                  if (bundle.parent) {
                    parents = parents.concat(getParents(bundle.parent, id));
                  }

                  return parents;
                }

                function hmrApply(bundle, asset) {
                  var modules = bundle.modules;

                  if (!modules) {
                    return;
                  }

                  if (modules[asset.id] || !bundle.parent) {
                    var fn = new Function('require', 'module', 'exports', asset.generated.js);
                    asset.isNew = !modules[asset.id];
                    modules[asset.id] = [fn, asset.deps];
                  } else if (bundle.parent) {
                    hmrApply(bundle.parent, asset);
                  }
                }

                function hmrAcceptCheck(bundle, id) {
                  var modules = bundle.modules;

                  if (!modules) {
                    return;
                  }

                  if (!modules[id] && bundle.parent) {
                    return hmrAcceptCheck(bundle.parent, id);
                  }

                  if (checkedAssets[id]) {
                    return;
                  }

                  checkedAssets[id] = true;
                  var cached = bundle.cache[id];
                  assetsToAccept.push([bundle, id]);

                  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                    return true;
                  }

                  return getParents(global.parcelRequire, id).some(function (id) {
                    return hmrAcceptCheck(global.parcelRequire, id);
                  });
                }

                function hmrAcceptRun(bundle, id) {
                  var cached = bundle.cache[id];
                  bundle.hotData = {};

                  if (cached) {
                    cached.hot.data = bundle.hotData;
                  }

                  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
                    cached.hot._disposeCallbacks.forEach(function (cb) {
                      cb(bundle.hotData);
                    });
                  }

                  delete bundle.cache[id];
                  bundle(id);
                  cached = bundle.cache[id];

                  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                    cached.hot._acceptCallbacks.forEach(function (cb) {
                      cb();
                    });

                    return true;
                  }
                }
              }, {}]
            }, {}, ["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "main.js"], null);
          }, {}],
          "../node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
            var global = arguments[3];
            var OVERLAY_ID = '__parcel__error__overlay__';
            var OldModule = module.bundle.Module;

            function Module(moduleName) {
              OldModule.call(this, moduleName);
              this.hot = {
                data: module.bundle.hotData,
                _acceptCallbacks: [],
                _disposeCallbacks: [],
                accept: function accept(fn) {
                  this._acceptCallbacks.push(fn || function () {});
                },
                dispose: function dispose(fn) {
                  this._disposeCallbacks.push(fn);
                }
              };
              module.bundle.hotData = null;
            }

            module.bundle.Module = Module;
            var checkedAssets, assetsToAccept;
            var parent = module.bundle.parent;

            if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
              var hostname = "" || location.hostname;
              var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
              var ws = new WebSocket(protocol + '://' + hostname + ':' + "55186" + '/');

              ws.onmessage = function (event) {
                checkedAssets = {};
                assetsToAccept = [];
                var data = JSON.parse(event.data);

                if (data.type === 'update') {
                  var handled = false;
                  data.assets.forEach(function (asset) {
                    if (!asset.isNew) {
                      var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

                      if (didAccept) {
                        handled = true;
                      }
                    }
                  }); // Enable HMR for CSS by default.

                  handled = handled || data.assets.every(function (asset) {
                    return asset.type === 'css' && asset.generated.js;
                  });

                  if (handled) {
                    console.clear();
                    data.assets.forEach(function (asset) {
                      hmrApply(global.parcelRequire, asset);
                    });
                    assetsToAccept.forEach(function (v) {
                      hmrAcceptRun(v[0], v[1]);
                    });
                  } else {
                    window.location.reload();
                  }
                }

                if (data.type === 'reload') {
                  ws.close();

                  ws.onclose = function () {
                    location.reload();
                  };
                }

                if (data.type === 'error-resolved') {
                  console.log('[parcel] ✨ Error resolved');
                  removeErrorOverlay();
                }

                if (data.type === 'error') {
                  console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
                  removeErrorOverlay();
                  var overlay = createErrorOverlay(data);
                  document.body.appendChild(overlay);
                }
              };
            }

            function removeErrorOverlay() {
              var overlay = document.getElementById(OVERLAY_ID);

              if (overlay) {
                overlay.remove();
              }
            }

            function createErrorOverlay(data) {
              var overlay = document.createElement('div');
              overlay.id = OVERLAY_ID; // html encode message and stack trace

              var message = document.createElement('div');
              var stackTrace = document.createElement('pre');
              message.innerText = data.error.message;
              stackTrace.innerText = data.error.stack;
              overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
              return overlay;
            }

            function getParents(bundle, id) {
              var modules = bundle.modules;

              if (!modules) {
                return [];
              }

              var parents = [];
              var k, d, dep;

              for (k in modules) {
                for (d in modules[k][1]) {
                  dep = modules[k][1][d];

                  if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
                    parents.push(k);
                  }
                }
              }

              if (bundle.parent) {
                parents = parents.concat(getParents(bundle.parent, id));
              }

              return parents;
            }

            function hmrApply(bundle, asset) {
              var modules = bundle.modules;

              if (!modules) {
                return;
              }

              if (modules[asset.id] || !bundle.parent) {
                var fn = new Function('require', 'module', 'exports', asset.generated.js);
                asset.isNew = !modules[asset.id];
                modules[asset.id] = [fn, asset.deps];
              } else if (bundle.parent) {
                hmrApply(bundle.parent, asset);
              }
            }

            function hmrAcceptCheck(bundle, id) {
              var modules = bundle.modules;

              if (!modules) {
                return;
              }

              if (!modules[id] && bundle.parent) {
                return hmrAcceptCheck(bundle.parent, id);
              }

              if (checkedAssets[id]) {
                return;
              }

              checkedAssets[id] = true;
              var cached = bundle.cache[id];
              assetsToAccept.push([bundle, id]);

              if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                return true;
              }

              return getParents(global.parcelRequire, id).some(function (id) {
                return hmrAcceptCheck(global.parcelRequire, id);
              });
            }

            function hmrAcceptRun(bundle, id) {
              var cached = bundle.cache[id];
              bundle.hotData = {};

              if (cached) {
                cached.hot.data = bundle.hotData;
              }

              if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
                cached.hot._disposeCallbacks.forEach(function (cb) {
                  cb(bundle.hotData);
                });
              }

              delete bundle.cache[id];
              bundle(id);
              cached = bundle.cache[id];

              if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
                cached.hot._acceptCallbacks.forEach(function (cb) {
                  cb();
                });

                return true;
              }
            }
          }, {}]
        }, {}, ["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "main.js"], null);
      }, {}],
      "../node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
        var global = arguments[3];
        var OVERLAY_ID = '__parcel__error__overlay__';
        var OldModule = module.bundle.Module;

        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function accept(fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function dispose(fn) {
              this._disposeCallbacks.push(fn);
            }
          };
          module.bundle.hotData = null;
        }

        module.bundle.Module = Module;
        var checkedAssets, assetsToAccept;
        var parent = module.bundle.parent;

        if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
          var hostname = "" || location.hostname;
          var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
          var ws = new WebSocket(protocol + '://' + hostname + ':' + "55186" + '/');

          ws.onmessage = function (event) {
            checkedAssets = {};
            assetsToAccept = [];
            var data = JSON.parse(event.data);

            if (data.type === 'update') {
              var handled = false;
              data.assets.forEach(function (asset) {
                if (!asset.isNew) {
                  var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

                  if (didAccept) {
                    handled = true;
                  }
                }
              }); // Enable HMR for CSS by default.

              handled = handled || data.assets.every(function (asset) {
                return asset.type === 'css' && asset.generated.js;
              });

              if (handled) {
                console.clear();
                data.assets.forEach(function (asset) {
                  hmrApply(global.parcelRequire, asset);
                });
                assetsToAccept.forEach(function (v) {
                  hmrAcceptRun(v[0], v[1]);
                });
              } else {
                window.location.reload();
              }
            }

            if (data.type === 'reload') {
              ws.close();

              ws.onclose = function () {
                location.reload();
              };
            }

            if (data.type === 'error-resolved') {
              console.log('[parcel] ✨ Error resolved');
              removeErrorOverlay();
            }

            if (data.type === 'error') {
              console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
              removeErrorOverlay();
              var overlay = createErrorOverlay(data);
              document.body.appendChild(overlay);
            }
          };
        }

        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);

          if (overlay) {
            overlay.remove();
          }
        }

        function createErrorOverlay(data) {
          var overlay = document.createElement('div');
          overlay.id = OVERLAY_ID; // html encode message and stack trace

          var message = document.createElement('div');
          var stackTrace = document.createElement('pre');
          message.innerText = data.error.message;
          stackTrace.innerText = data.error.stack;
          overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
          return overlay;
        }

        function getParents(bundle, id) {
          var modules = bundle.modules;

          if (!modules) {
            return [];
          }

          var parents = [];
          var k, d, dep;

          for (k in modules) {
            for (d in modules[k][1]) {
              dep = modules[k][1][d];

              if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
                parents.push(k);
              }
            }
          }

          if (bundle.parent) {
            parents = parents.concat(getParents(bundle.parent, id));
          }

          return parents;
        }

        function hmrApply(bundle, asset) {
          var modules = bundle.modules;

          if (!modules) {
            return;
          }

          if (modules[asset.id] || !bundle.parent) {
            var fn = new Function('require', 'module', 'exports', asset.generated.js);
            asset.isNew = !modules[asset.id];
            modules[asset.id] = [fn, asset.deps];
          } else if (bundle.parent) {
            hmrApply(bundle.parent, asset);
          }
        }

        function hmrAcceptCheck(bundle, id) {
          var modules = bundle.modules;

          if (!modules) {
            return;
          }

          if (!modules[id] && bundle.parent) {
            return hmrAcceptCheck(bundle.parent, id);
          }

          if (checkedAssets[id]) {
            return;
          }

          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToAccept.push([bundle, id]);

          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            return true;
          }

          return getParents(global.parcelRequire, id).some(function (id) {
            return hmrAcceptCheck(global.parcelRequire, id);
          });
        }

        function hmrAcceptRun(bundle, id) {
          var cached = bundle.cache[id];
          bundle.hotData = {};

          if (cached) {
            cached.hot.data = bundle.hotData;
          }

          if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData);
            });
          }

          delete bundle.cache[id];
          bundle(id);
          cached = bundle.cache[id];

          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            cached.hot._acceptCallbacks.forEach(function (cb) {
              cb();
            });

            return true;
          }
        }
      }, {}]
    }, {}, ["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "main.js"], null);
  }, {}],
  "../node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';
    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function dispose(fn) {
          this._disposeCallbacks.push(fn);
        }
      };
      module.bundle.hotData = null;
    }

    module.bundle.Module = Module;
    var checkedAssets, assetsToAccept;
    var parent = module.bundle.parent;

    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      var hostname = "" || location.hostname;
      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      var ws = new WebSocket(protocol + '://' + hostname + ':' + "55186" + '/');

      ws.onmessage = function (event) {
        checkedAssets = {};
        assetsToAccept = [];
        var data = JSON.parse(event.data);

        if (data.type === 'update') {
          var handled = false;
          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

              if (didAccept) {
                handled = true;
              }
            }
          }); // Enable HMR for CSS by default.

          handled = handled || data.assets.every(function (asset) {
            return asset.type === 'css' && asset.generated.js;
          });

          if (handled) {
            console.clear();
            data.assets.forEach(function (asset) {
              hmrApply(global.parcelRequire, asset);
            });
            assetsToAccept.forEach(function (v) {
              hmrAcceptRun(v[0], v[1]);
            });
          } else {
            window.location.reload();
          }
        }

        if (data.type === 'reload') {
          ws.close();

          ws.onclose = function () {
            location.reload();
          };
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved');
          removeErrorOverlay();
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
          removeErrorOverlay();
          var overlay = createErrorOverlay(data);
          document.body.appendChild(overlay);
        }
      };
    }

    function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);

      if (overlay) {
        overlay.remove();
      }
    }

    function createErrorOverlay(data) {
      var overlay = document.createElement('div');
      overlay.id = OVERLAY_ID; // html encode message and stack trace

      var message = document.createElement('div');
      var stackTrace = document.createElement('pre');
      message.innerText = data.error.message;
      stackTrace.innerText = data.error.stack;
      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
      return overlay;
    }

    function getParents(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return [];
      }

      var parents = [];
      var k, d, dep;

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d];

          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(k);
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id));
      }

      return parents;
    }

    function hmrApply(bundle, asset) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (modules[asset.id] || !bundle.parent) {
        var fn = new Function('require', 'module', 'exports', asset.generated.js);
        asset.isNew = !modules[asset.id];
        modules[asset.id] = [fn, asset.deps];
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset);
      }
    }

    function hmrAcceptCheck(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (!modules[id] && bundle.parent) {
        return hmrAcceptCheck(bundle.parent, id);
      }

      if (checkedAssets[id]) {
        return;
      }

      checkedAssets[id] = true;
      var cached = bundle.cache[id];
      assetsToAccept.push([bundle, id]);

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        return true;
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAcceptCheck(global.parcelRequire, id);
      });
    }

    function hmrAcceptRun(bundle, id) {
      var cached = bundle.cache[id];
      bundle.hotData = {};

      if (cached) {
        cached.hot.data = bundle.hotData;
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData);
        });
      }

      delete bundle.cache[id];
      bundle(id);
      cached = bundle.cache[id];

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb();
        });

        return true;
      }
    }
  }, {}]
}, {}, ["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "main.js"], null);
},{}]