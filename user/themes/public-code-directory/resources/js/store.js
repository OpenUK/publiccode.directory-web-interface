import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'
var _ = require("lodash");

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => ({
        checked: state.checked
    })
})
Vue.use(Vuex);
const allprods = [];
const state = {
    links: [],
    products: [],
    categories: [],
    licences: [],
    public_sector: [],
    filteredProd: [],
    countries: [],
    companies: [],
    checked: false
};
const mutations = {
    fetchLinks(state, all) {
        state.links = all.directory_index;
    },
    fetchProducts(state, data) {
        allprods.push(data);
        state.products = [...new Set(allprods)];
    },
    filterData(state, item) {
        state.filteredProd = state.products.filter(
            el => el.developer_name === item
        );
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
            categoriesSet.add(el.entry_origin_country);
        });
        state.countries = Array.from(categoriesSet);
    },
    getCompanies(state) {
        let companySet = new Set();
        state.products.filter(el => {
            companySet.add(el.developer_name);
        });
        state.companies = Array.from(companySet);
    },
    updateChecked(state, payload) {
        state.checked = payload;
    }
};
const actions = {
    fetchLinks({
        commit
    }) {
        fetch("https://raw.githubusercontent.com/OpenUK/publiccode.directory/master/database/database.index.json")
            .then(res => res.json())
            .then(data => {
                commit("fetchLinks", data);
            })
            .then(function () {
                state.links.forEach(item => {
                    fetch(item)
                        .then(res => res.json())
                        .then(single => {
                            single.json = single;
                            commit("fetchProducts", single.json);
                        })
                        .then(() => {
                            commit("getCategories");
                            commit("getLicences");
                            commit("getSector");
                            commit("getCompanies");
                            commit("getCountries");
                        }).catch(error => console.log(error))
                });
            })
            .catch(error => {
                console.log(error);
            });
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
    }
};
const getters = {
    allProducts: state => {
        state.filter = [...new Set(state.products)];
        return state.filter;
    },
    categories: state => {
        return _.flatten(state.categories);
    },
    licences: state => state.licences,
    sectors: state => state.public_sector,
    countries: state => state.countries,
    filteredData: state => state.filteredProd,
    companies: state => state.companies
};
const plugins = [vuexLocal.plugin]
export default new Vuex.Store({
    state,
    actions,
    mutations,
    plugins,
    getters
});
