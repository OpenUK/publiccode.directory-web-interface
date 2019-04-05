import "babel-polyfill";
import store from "./store";
import Buefy from "buefy";
import NavBar from "./components/NavBar.vue";
import Products from "./components/Products.vue";
import Worldmap from "./components/Worldmap.vue";

window.Vue = require("vue");

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter("truncate", function(text, stop, clamp) {
  return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
});

Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  components: {
    Worldmap,
    Products,
    NavBar
  },
  delimiters: ["${", "}"]
});
