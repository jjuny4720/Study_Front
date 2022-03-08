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
var _this = this;

/*//산술 연산자(arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5) //나머지 연산자 % : 나누고 나머지를 출력*/

/*//할당 연산자(assignment operator)

let a = 2
// a = a + 1
a += 1

console.log(a)*/

/*//비교 연산자(comparison operator)

const a = 1
const b = 3

console.log( a === b) //일치연산자

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 2))
console.log(isEqual(2,'2'))

const a = 13
const b = 13

console.log(a !== b)
console.log(a <= b)*/

/*//논리 연산자(logical operator)

const a = 1 ===123
const b = 'AB' === 'ABC'
const c = false

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', a && c)  // and 그리고
console.log('||: ', a || b || c) // or 또는
console.log('!: ', !a) // not 부정*/

/*//삼항 연산자(ternary operator)

const a = 1 < 2

if (a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')*/

/*// 조건문 (If statement)
import random from './getRandom'

const a = random()

switch (a){
  case 0: 
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...')
}

if(a === 0) {
  console.log('a is 0')
} else if( a === 2 ){
  console.log('a is 2')
} else if( a === 4 ){
  console.log('a is 4')
} 
else {
  console.log('rest...')
} */
// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}
// const ulEl = document.querySelector('ul')
// for (let i = 0; i < 10; i+= 1){
//   const li = document.createElement('li')
//   li.textContent = `행-${i + 1}`
//   if((i+1) % 2 === 0){
//     li.addEventListener('click', function (){
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }

/*//변수 유효범위(Variable Scope)
//var, let, const

function scope() {
  if (true){
    const a = 123
    console.log(a) //const, let 블록레벨의 유효범위를 가짐
  }
}
scope()*/
//형 변환(Type convesion)

/*const a = 1
const b = '1'

console.log(a == b)*/
//Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...
//Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

/*if ('false') {
  console.log(123)
}*/
// 함수

/*function sum(x, y) { //매개변수
  if (x < 2) {
    return 123
  } 
  return x + y
}

console.log(sum(1,3))*/

/*function sum(){
  console.log(arguments)
  return arguments [0] + arguments
}

console.log(sum(7,3))*/
//화살표 함수
// () => {} vs function () {}
// 일부내용을 생략해 축약형으로 가능
// const double = function (x, y){
//   return x * 2
// }
// console.log('double: ', double(7))
// const doubleArrow = x =>  ({name: 'Heropy'}) /* = {
//   return x*2
// }*/
// console.log('doubleArrow', doubleArrow(7)) 
//즉시실행함수
//IIFE, Immediately-Invoked Function Expression

/*const a = 7
function double() {
  console.log(a*2)
}
double();

(function () {
  console.log(a * 2)
}());

(function () {
  console.log(a * 2)
})();

//호이스팅(Hosting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const b = 8

double()

function double (){
  console.log(b * 2)
}*/
//타이머함수
//setTimeout(함수, 시간) : 일정 시간 후 함수 실행
//setInterval(함수, 시간 ): 시간 간격마다 함수 실행
//clearTimeout() : 설정된 Timeout 함수를 종료
//clearInterval() : 설정된 Interval 함수를 종료

/*const timer = setTimeout( () => {
  console.log('Heropy!')
}, 3000)

const timer = setInterval( () => {
  console.log('Heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})*/
//콜백(Callback)
//함수의 인수로 사용되는 함수

/*//setTimeout(함수, 시간)

function timeout(Callback) {
  setTimeout(() => {
    console.log('Heropy!')
    Callback()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})*/
// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function (){
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())
// function user(first, last){
//   this.firstName = first
//   this.lastName = last
//   }
//   user.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// const heropy = new user('Heropy', 'Park')
// const amy = new user('Amy', 'Clarke')
// const neo = new user ('Neo', 'smith')
// console.log(heropy.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())
// const sunny = {
//   name: 'sunkyu',
//   age : 27,
// }
// sunny.haircolor='black';
// sunny['hobby'] = 'game';
// delete sunny.name;
// console.log(sunny)
//this
// 일반(normal) 함수는 호출 위치에서 따라 this 정의!
//  화살표(Arrow) 함수는 자신이 선언된 함수범위에서 this 정의!
var heropy = {
  name: 'Heropy',
  normal: function normal() {
    console.log(this.name);
  },
  arrow: function arrow() {
    console.log(_this.name);
  }
};
heropy.normal();
heropy.arrow();
var amy = {
  name: 'Amy',
  normal: heropy.normal,
  arrow: heropy.arrow
};
amy.normal();
amy.arrow();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49731" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map