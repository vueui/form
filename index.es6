
let definition = {
    bind() {

    },
    unbind() {

    }
}

export default {
    install(Vue, options) {
        Vue.elementDirective('ui-form', definition)
    }
}


