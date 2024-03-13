import lButton from './l-button/l-button.vue'

const components = {
    lButton
}

export { lButton }

export default {
    install(vue){
        Object.keys(components).forEach((key) => {
            vue.component(key,components[key])
        });
    }
}
