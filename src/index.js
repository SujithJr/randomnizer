export default {
    install (Vue, options) {
        Vue.prototype.fetchRandom = (number) => {
            return Math.ceil(Math.random() * number)
        }
        if (options.store) {
            options.store.fetchRandom = (number) => {
                return Math.ceil(Math.random() * number)
            }
        }
    }
}
