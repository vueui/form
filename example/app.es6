
import Vue from 'vue'
import domReady from 'domready'
import uiForm from '../index.es6'

Vue.use(uiForm)

domReady(() => {
    let app = new Vue({
        data: {
            name: 'Agon'
        }
    })

    app.$mount('#app')
})