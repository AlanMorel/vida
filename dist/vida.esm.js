import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withScopeId } from 'vue';

var script = defineComponent({
  name: 'VidaSample',

  // vue component name
  data() {
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
    changedBy() {
      var _message$amount;

      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message === null || message === void 0 ? void 0 : message.action} ${(_message$amount = message.amount) !== null && _message$amount !== void 0 ? _message$amount : ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-7b85bdd2");

pushScopeId("data-v-7b85bdd2");
const _hoisted_1 = { class: "vida-sample" };
const _hoisted_2 = /*#__PURE__*/createTextVNode(".");
popScopeId();

const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createVNode("p", null, [
      createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1 /* TEXT */),
      createVNode("b", null, toDisplayString(_ctx.counter), 1),
      _hoisted_2
    ]),
    createVNode("button", {
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.increment(...args)))
    }, " Click +1 "),
    createVNode("button", {
      onClick: _cache[2] || (_cache[2] = (...args) => (_ctx.decrement(...args)))
    }, " Click -1 "),
    createVNode("button", {
      onClick: _cache[3] || (_cache[3] = $event => (_ctx.increment(5)))
    }, " Click +5 "),
    createVNode("button", {
      onClick: _cache[4] || (_cache[4] = $event => (_ctx.decrement(5)))
    }, " Click -5 "),
    createVNode("button", {
      onClick: _cache[5] || (_cache[5] = (...args) => (_ctx.reset(...args)))
    }, " Reset ")
  ]))
});

function styleInject(css, ref) {
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
}

var css_248z = "\n.vida-sample[data-v-7b85bdd2] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.vida-sample p[data-v-7b85bdd2] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-7b85bdd2";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VidaSample: script
});

// Import vue components

const install = function installVida(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var entry_esm = {
  install
}; // To allow individual component use, export components

export default entry_esm;
export { script as VidaSample };
