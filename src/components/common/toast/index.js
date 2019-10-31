import Toast from "./Toast"

const plugin = {}

plugin.install = function(Vue) {
    const toastConstructor = Vue.extend(Toast);
    const toast = new toastConstructor();
    toast.$mount(document.createElement("div"));
    document.body.appendChild(toast.$el);

    Vue.prototype.$toast = toast;
}



export default plugin