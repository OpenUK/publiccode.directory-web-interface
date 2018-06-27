import Vue from 'vue'
import Vuex from 'vuex'
var base64 = require("js-base64").Base64
var _ = require('lodash');
let token = 'dc79ffa31605737117fb0b9bafa0251c9916541b'
let YAML = require('js-yaml')
Vue.use(Vuex)
const allprods = []
const state = {
  links: [],
  products: [],
  categories: [],
  licences: [],
  public_sector: [],
  filteredProd: [],
  countries: [],
  companies: []
}
const mutations = {
  fetchLinks(state, all) {
    state.links = all.directory_index
  },
  fetchProducts(state, data) {
    allprods.push(data)
    state.products = [...new Set(allprods)]
  },
  filterData(state, item) {
    state.filteredProd = state.products.filter(el => el.m_organisation === item)
  },
  getCategories(state) {
    let categoriesSet = new Set();
    state.products.filter(el => {
      categoriesSet.add(el.entry_category);
    });
    state.categories = Array.from(categoriesSet);
  },
  getLicences(state) {
    let categoriesSet = new Set();
    state.licences = state.products.filter(el => {
      categoriesSet.add(el.entry_license);
    });
    state.licences = Array.from(categoriesSet);
  },
  getSector(state) {
    let categoriesSet = new Set();
    state.products.filter(el => {
      categoriesSet.add(el.entry_sector);
    });
    state.public_sector = Array.from(categoriesSet);
  },
  getCountries(state) {
    let categoriesSet = new Set();
    state.products.filter(el => {
      categoriesSet.add(el.entry_country);
    });
    state.countries = Array.from(categoriesSet);
  },
  getCompanies(state) {
    let companySet = new Set();
    state.products.filter(el => {
      companySet.add(el.m_organisation);
    });
    state.companies = Array.from(companySet);
  },
}
const actions = {
  fetchLinks({
    commit
  }) {

    fetch(`https://api.github.com/repos/JohnMica/publiccode.directory/contents/database/database.index.yaml`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
          Accept: "application/vnd.github.v3.full+json"
        }
      })
      .then(res => res.json())
      .then(data => {
        data.decoded = base64.decode(data.content);
        YAML.safeLoadAll(data.decoded, function (prod) {
          data.json = prod
        })
        commit("fetchLinks", data.json);
      })
      .then(function () {
        state.links.forEach(item => {
          item = item.split('/').slice(-2).join('/')
          console.log(item);
          let url = `https://api.github.com/repos/${item}/contents/entry.yaml`
          fetch(url, {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.v3.full+json"
              }
            }).then(res => res.json())
            .then(single => {
              single.decoded = base64.decode(single.content);
              YAML.safeLoadAll(single.decoded, function (prod) {
                single.json = prod
              })
              commit("fetchProducts", single.json);
            })
            .then(() => {
              commit("getCategories");
              commit("getLicences");
              commit("getSector");
              commit("getCompanies");
              commit("getCountries");
            })
        })
      })
      .catch(error => {
        console.log(error);
      })
  },
  getCategories({
    commit
  }) {
    commit("getCategories");
  },
  getLicences({
    commit
  }) {
    commit("getLicences");
  },
  getSector({
    commit
  }) {
    commit("getSector");
  },
  getCountries({
    commit
  }) {
    commit("getCountries");
  },
  getCompanies({
    commit
  }) {
    commit("getCompanies");
  },

}
const getters = {
  allProducts: state => {
    state.filter = [...new Set(state.products)]
    return state.filter
  },
  categories: state => {
    return _.flatten(state.categories)
  },
  licences: state => state.licences,
  sectors: state => state.public_sector,
  countries: state => state.countries,
  filteredData: state => state.filteredProd,
  companies: state => state.companies
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})