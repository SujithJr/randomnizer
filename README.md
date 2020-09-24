# Randomnizer
A random integer generator between a specified range

Register the package in `main.js`
```
import Vue from 'vue'
import store from 'path/to/store'
import randomnizer from 'randomnizer'

Vue.use(randomnizer, { store }) // To access it inside the store like a store object, pass the store parameter
```
#### You can access the randomnizer function in the following way,

Inside component and store
```
this.fetchRandom(range, type = 'ceil | floor')
```
`arg 1: number`: If 100, it will generate ceil value of the random number between 0 and 100

`arg 2: string (optional)`: ceil or floor - default is set to 'ceil'

Without store parameter, access it by importing Vue inside the store
```
import Vue from 'vue'

export default {
    ...
    action: {
        actionName (...) {
            Vue.prototype.fetchRandom(range, type = 'ceil | floor')
        }
    }
}
```
