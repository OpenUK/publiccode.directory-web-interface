import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    licences: [],
    public_sector: [],
    filteredProd: []
  },
  mutations: {
    fetchProducts(state, all) {
      state.products = all;
    },
    getCategories(state) {
      let categoriesSet = new Set();
      state.products.filter(el => {
        categoriesSet.add(el.category);
      });
      state.categories = Array.from(categoriesSet);
    },
    getLicences(state) {
      let categoriesSet = new Set();
      state.products.filter(el => {
        categoriesSet.add(el.licence);
      });
      state.licences = Array.from(categoriesSet);
    },
    getSector(state) {
      let categoriesSet = new Set();
      state.products.filter(el => {
        categoriesSet.add(el.industry_sector);
      });
      state.public_sector = Array.from(categoriesSet);
    },
    updateCat(state, categ) {
      let updateCat = new Set()
      state.products.filter(el => updateCat.add(el.categ))
      state.filteredProd = Array.from(updateCat)
    }
  },
  actions: {
    fetchProducts({
      commit
    }) {
      fetch(`http://localhost:3000/products`)
        .then(res => res.json())
        .then(data => {
          commit("fetchProducts", data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCategories({
      commit
    }) {
      commit('getCategories')
    },
    getLicences({
      commit
    }) {
      commit('getLicences')
    },
    getSector({
      commit
    }) {
      commit('getSector')
    }

  },
  getters: {
    allProducts: state => state.products,
    categories: state => state.categories,
    licences: state => state.licences,
    sectors: state => state.public_sector,
    filteredData: state => state.filteredProd
  }
})