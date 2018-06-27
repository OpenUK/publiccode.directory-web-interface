import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Buefy from "buefy";
import "buefy/lib/buefy.css";

Vue.use(Buefy);
Vue.config.productionTip = false;

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("truncate", function(text, stop, clamp) {
  return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
