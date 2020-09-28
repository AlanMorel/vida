'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = vue.defineComponent({
  name: 'VidaSample',
  // vue component name
  data: function data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },
  computed: {
    changedBy: function changedBy() {
      var _message$amount;

      var message = this.message;
      if (!message.action) return 'initialized';
      return "".concat(message === null || message === void 0 ? void 0 : message.action, " ").concat((_message$amount = message.amount) !== null && _message$amount !== void 0 ? _message$amount : '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});const _withId = /*#__PURE__*/vue.withScopeId("data-v-7b85bdd2");

vue.pushScopeId("data-v-7b85bdd2");
const _hoisted_1 = { class: "vida-sample" };
const _hoisted_2 = /*#__PURE__*/vue.createTextVNode(".");
vue.popScopeId();

const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
    vue.createVNode("p", null, [
      vue.createTextVNode("The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1 /* TEXT */),
      vue.createVNode("b", null, vue.toDisplayString(_ctx.counter), 1),
      _hoisted_2
    ]),
    vue.createVNode("button", {
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.increment(...args)))
    }, " Click +1 "),
    vue.createVNode("button", {
      onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.decrement(...args)))
    }, " Click -1 "),
    vue.createVNode("button", {
      onClick: _cache[3] || (_cache[3] = $event => (_ctx.increment(5)))
    }, " Click +5 "),
    vue.createVNode("button", {
      onClick: _cache[4] || (_cache[4] = $event => (_ctx.decrement(5)))
    }, " Click -5 "),
    vue.createVNode("button", {
      onClick: _cache[5] || (_cache[5] = (...args) => (_ctx.reset(...args)))
    }, " Reset ")
  ]))
});function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "\n.vida-sample[data-v-7b85bdd2] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.vida-sample p[data-v-7b85bdd2] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-7b85bdd2";/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,VidaSample: script});var install = function installVida(app) {
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To allow individual component use, export components
var components$1=/*#__PURE__*/Object.freeze({__proto__:null,'default': plugin,VidaSample: script});// only expose one global var, with named exports exposed as properties of
// that global var (eg. VivintIcon.iconList)

Object.entries(components$1).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') plugin[componentName] = component;
});module.exports=plugin;