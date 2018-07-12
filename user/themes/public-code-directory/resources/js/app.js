import "babel-polyfill";
import store from "./store";
window.Vue = require('vue');

Vue.filter("capitalize", function (value) {
    if (!value) return "";
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("truncate", function (text, stop, clamp) {
    return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
});

Vue.component('navbar', require('./components/Navbar.vue'));
Vue.component('products', require('./components/Products.vue'));
Vue.component('worldmap', require('./components/Worldmap.vue'));

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store,
    delimiters: ['${', '}']
});
