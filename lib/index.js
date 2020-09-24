'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    install: function install(Vue, options) {
        Vue.prototype.fetchRandom = function (number) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ceil';

            return Math[type](Math.random() * number);
        };
        if (options && options.store) {
            options.store.fetchRandom = function (number) {
                var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ceil';

                return Math[type](Math.random() * number);
            };
        }
    }
};