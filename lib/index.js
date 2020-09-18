"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    install: function install(Vue, options) {
        Vue.fetchRandom = function (number) {
            return Math.ceil(Math.random() * number);
        };
        if (options.store) {
            options.store.fetchRandom = function (number) {
                return Math.ceil(Math.random() * number);
            };
        }
    }
};