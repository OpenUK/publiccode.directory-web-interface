import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    licences: [],
    public_sector: [],
    filteredProd: [],
    countries: []
  },
  mutations: {
    fetchProducts(state, all) {
      state.products = all
      state.filteredProd = state.products
    },
    getCategories(state) {
      let categoriesSet = new Set();
      state.filteredProd = state.products.filter(el => {
        categoriesSet.add(el.category);
      });
      state.categories = Array.from(categoriesSet);
    },
    getLicences(state) {
      let categoriesSet = new Set();
      state.filteredProd = state.products.filter(el => {
        categoriesSet.add(el.licence);
      });
      state.licences = Array.from(categoriesSet);
    },
    getSector(state) {
      let categoriesSet = new Set();
      state.filteredProd = state.products.filter(el => {
        categoriesSet.add(el.industry_sector);
      });
      state.public_sector = Array.from(categoriesSet);
    },
    getCountries(state) {
      let categoriesSet = new Set();
      state.filteredProd = state.products.filter(el => {
        categoriesSet.add(el.country);
      });
      state.countries = Array.from(categoriesSet);
    },
    updateCat(state, categ) {
      let updateCat = new Set()
      state.filteredProd = state.products.filter(el => updateCat.add(categ === el.categ))
      state.categories = Array.from(updateCat)
    },
    updateCountry(state, countries) {
      let updateCountries = new Set()
      state.filteredProd = state.products.filter(el => updateCat.add(countries === el.country))
      state.countries = Array.from(updateCountries)
    },
    updateCompany(state, company) {
      let companyArray = new Set()
      state.filteredProd = state.products.filter(el => updateCat.add(company === el.company))
      state.company = Array.from(companyArray)
    },
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

  },
  getters: {
    allProducts: state => state.products,
    categories: state => state.categories,
    licences: state => state.licences,
    sectors: state => state.public_sector,
    countries: state => state.countries,
    filteredData: state => state.filteredProd
  }
})