export default {
    install (Vue, options) {
        Vue.prototype.fetchRandom = (number, type = 'ceil') => {
            return Math[type](Math.random() * number)
        }
        if (options && options.store) {
            options.store.fetchRandom = (number, type = 'ceil') => {
                return Math[type](Math.random() * number)
            }
        }
    }
}
