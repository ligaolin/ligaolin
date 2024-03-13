import lButton from './l-Button/l-Button.vue'

const components = [
    lButton
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {
    install,
    ...components,
}
