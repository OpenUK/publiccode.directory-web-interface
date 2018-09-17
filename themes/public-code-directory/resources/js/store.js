import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
const _ = require("lodash");
const Ajv = require("ajv");

Vue.use(Vuex);
const schemaType = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
        "name",
        "entry_type",
        "description",
        "official_url",
        "repository",
        "logo_url",
        "language",
        "origin_country",
        "sector",
        "category",
        "license",
        "developers",
        "maintainers",
        "users"
    ],
    "properties": {
        "name": {
            "$id": "#/properties/name",
            "type": "string",
            "title": "The Name Schema",
            "default": "",
            "examples": [
                "Project name"
            ],
            "pattern": "^(.*)$"
        },
        "entry_type": {
            "$id": "#/properties/entry_type",
            "type": "array",
            "title": "The Entry_type Schema",
            "items": {
                "$id": "#/properties/entry_type/items",
                "type": "string",
                "title": "The Items Schema",
                "default": "",
                "examples": [
                    "software",
                    "resource",
                    "case study",
                    "some other type"
                ],
                "pattern": "^(.*)$"
            }
        },
        "description": {
            "$id": "#/properties/description",
            "type": "string",
            "title": "The Description Schema",
            "default": "",
            "examples": [
                "description of the project - please mind the double quotes inside the description and make sure you escape them like this - \" ; also do not use the 'Enter' key as the description has to be one paragraph. "
            ],
            "pattern": "^(.*)$"
        },
        "official_url": {
            "$id": "#/properties/official_url",
            "type": "string",
            "title": "The Official_url Schema",
            "default": "",
            "examples": [
                "https://project.website.if.it.has.any"
            ],
            "pattern": "^(.*)$"
        },
        "repository": {
            "$id": "#/properties/repository",
            "type": "string",
            "title": "The Repository Schema",
            "default": "",
            "examples": [
                "https://project.repository"
            ],
            "pattern": "^(.*)$"
        },
        "logo_url": {
            "$id": "#/properties/logo_url",
            "type": "string",
            "title": "The Logo_url Schema",
            "default": "",
            "examples": [
                "https://project.logo - if it exists"
            ],
            "pattern": "^(.*)$"
        },
        "language": {
            "$id": "#/properties/language",
            "type": "array",
            "title": "The Language Schema",
            "items": {
                "$id": "#/properties/language/items",
                "type": "string",
                "title": "The Items Schema",
                "default": "",
                "examples": [
                    "EN",
                    "DE"
                ],
                "pattern": "^(.*)$"
            }
        },
        "origin_country": {
            "$id": "#/properties/origin_country",
            "type": "string",
            "title": "The Origin_country Schema",
            "default": "",
            "examples": [
                "UK"
            ],
            "pattern": "^(.*)$"
        },
        "sector": {
            "$id": "#/properties/sector",
            "type": "array",
            "title": "The Sector Schema",
            "items": {
                "$id": "#/properties/sector/items",
                "type": "string",
                "title": "The Items Schema",
                "default": "",
                "examples": [
                    "localgov",
                    "council",
                    "education",
                    "medicine",
                    "etc ..."
                ],
                "pattern": "^(.*)$"
            }
        },
        "category": {
            "$id": "#/properties/category",
            "type": "array",
            "title": "The Category Schema",
            "items": {
                "$id": "#/properties/category/items",
                "type": "string",
                "title": "The Items Schema",
                "default": "",
                "examples": [
                    "website",
                    "software product",
                    "election software",
                    "education platform",
                    "specific type of category ",
                    "etc ..."
                ],
                "pattern": "^(.*)$"
            }
        },
        "license": {
            "$id": "#/properties/license",
            "type": "array",
            "title": "The License Schema",
            "items": {
                "$id": "#/properties/license/items",
                "type": "string",
                "title": "The Items Schema",
                "default": "",
                "examples": [
                    "MIT",
                    "GNU-3",
                    "any-type-of-licence"
                ],
                "pattern": "^(.*)$"
            }
        },
        "developers": {
            "$id": "#/properties/developers",
            "type": "array",
            "title": "The Developers Schema",
            "items": {
                "$id": "#/properties/developers/items",
                "type": "object",
                "title": "The Items Schema",
                "required": [
                    "developer_name",
                    "developer_logo_url",
                    "developer_url",
                    "developer_category"
                ],
                "properties": {
                    "developer_name": {
                        "$id": "#/properties/developers/items/properties/developer_name",
                        "type": "string",
                        "title": "The Developer_name Schema",
                        "default": "",
                        "examples": [
                            "developer name"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "developer_logo_url": {
                        "$id": "#/properties/developers/items/properties/developer_logo_url",
                        "type": "string",
                        "title": "The Developer_logo_url Schema",
                        "default": "",
                        "examples": [
                            "https://developer.logo"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "developer_url": {
                        "$id": "#/properties/developers/items/properties/developer_url",
                        "type": "string",
                        "title": "The Developer_url Schema",
                        "default": "",
                        "examples": [
                            "https://developer.domain"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "developer_category": {
                        "$id": "#/properties/developers/items/properties/developer_category",
                        "type": "string",
                        "title": "The Developer_category Schema",
                        "default": "",
                        "examples": [
                            "Public"
                        ],
                        "pattern": "^(.*)$"
                    }
                }
            }
        },
        "maintainers": {
            "$id": "#/properties/maintainers",
            "type": "array",
            "title": "The Maintainers Schema",
            "items": {
                "$id": "#/properties/maintainers/items",
                "type": "object",
                "title": "The Items Schema",
                "required": [
                    "maintainer_name",
                    "maintainer_url",
                    "maintainer_logo_url",
                    "maintainer_repository"
                ],
                "properties": {
                    "maintainer_name": {
                        "$id": "#/properties/maintainers/items/properties/maintainer_name",
                        "type": "string",
                        "title": "The Maintainer_name Schema",
                        "default": "",
                        "examples": [
                            "maintainer 1"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "maintainer_url": {
                        "$id": "#/properties/maintainers/items/properties/maintainer_url",
                        "type": "string",
                        "title": "The Maintainer_url Schema",
                        "default": "",
                        "examples": [
                            "https://maintainer1.url"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "maintainer_logo_url": {
                        "$id": "#/properties/maintainers/items/properties/maintainer_logo_url",
                        "type": "string",
                        "title": "The Maintainer_logo_url Schema",
                        "default": "",
                        "examples": [
                            "https://maintainer1.logo.url"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "maintainer_repository": {
                        "$id": "#/properties/maintainers/items/properties/maintainer_repository",
                        "type": "string",
                        "title": "The Maintainer_repository Schema",
                        "default": "",
                        "examples": [
                            "https://git.repository if it exists"
                        ],
                        "pattern": "^(.*)$"
                    }
                }
            }
        },
        "users": {
            "$id": "#/properties/users",
            "type": "array",
            "title": "The Users Schema",
            "items": {
                "$id": "#/properties/users/items",
                "type": "object",
                "title": "The Items Schema",
                "required": [
                    "user_name",
                    "user_location",
                    "user_logo_url",
                    "user_url",
                    "user_geolocation"
                ],
                "properties": {
                    "user_name": {
                        "$id": "#/properties/users/items/properties/user_name",
                        "type": "string",
                        "title": "The User_name Schema",
                        "default": "",
                        "examples": [
                            "City council"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "user_location": {
                        "$id": "#/properties/users/items/properties/user_location",
                        "type": "string",
                        "title": "The User_location Schema",
                        "default": "",
                        "examples": [
                            "London, UK"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "user_logo_url": {
                        "$id": "#/properties/users/items/properties/user_logo_url",
                        "type": "string",
                        "title": "The User_logo_url Schema",
                        "default": "",
                        "examples": [
                            "https://link.to.logo.if.it.exists"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "user_url": {
                        "$id": "#/properties/users/items/properties/user_url",
                        "type": "string",
                        "title": "The User_url Schema",
                        "default": "",
                        "examples": [
                            "https://link.to.curent.public.website"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "user_geolocation": {
                        "$id": "#/properties/users/items/properties/user_geolocation",
                        "type": "object",
                        "title": "The User_geolocation Schema",
                        "required": [
                            "lat",
                            "long"
                        ],
                        "properties": {
                            "lat": {
                                "$id": "#/properties/users/items/properties/user_geolocation/properties/lat",
                                "type": "number",
                                "title": "The Lat Schema",
                                "default": 0.0,
                                "examples": [
                                    53.371376
                                ]
                            },
                            "long": {
                                "$id": "#/properties/users/items/properties/user_geolocation/properties/long",
                                "type": "number",
                                "title": "The Long Schema",
                                "default": 0.0,
                                "examples": [
                                    -1.23398
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}
const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => ({
        checked: state.checked
    })
});
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
    users: [],
    developers: [],
    maintainers: [],
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
            el.category.forEach(element => {
                categoriesSet.add(element);
            });
        });
        state.categories = Array.from(categoriesSet);
    },
    getLicences(state) {
        let categoriesSet = new Set();
        state.products.filter(el => {
            el.license.forEach(element => {
                categoriesSet.add(element);
            });
        });
        state.licences = Array.from(categoriesSet);
    },
    getSector(state) {
        let categoriesSet = new Set();
        state.products.filter(el => {
            el.sector.forEach(element => {
                categoriesSet.add(element);
            });
        });
        state.public_sector = Array.from(categoriesSet);
    },
    getCountries(state) {
        let categoriesSet = new Set();
        state.products.filter(el => {
            categoriesSet.add(el.origin_country);
        });
        state.countries = Array.from(categoriesSet);
    },
    getDevelopers(state) {
        let devSet = new Set()
        state.products.filter(el => {
            el.developers.forEach(developer => {
                devSet.add(developer.developer_name)
            })
        })
        state.developers = Array.from(devSet)
    },
    getUsers(state) {
        let usersSet = new Set()
        state.products.filter(el => {
            el.users.forEach(user => {
                usersSet.add(user.user_name)
            })
        })
        state.users = Array.from(usersSet)
    },
    getMaintainers(state) {
        let maintainerSet = new Set()
        state.products.filter(el => {
            el.maintainers.forEach(maintainer => {
                maintainerSet.add(maintainer.maintainer_name)
            })
        })
        state.maintainers = Array.from(maintainerSet)
    },
    getCompanies(state) {
        // let companySet = new Set();
        // state.products.filter(el => {
        //     companySet.add(el.developer_name);
        // });
        // state.companies = Array.from(companySet);
    },
    updateChecked(state, payload) {
        state.checked = payload;
    }
};
const actions = {
    fetchLinks({
        commit
    }) {
        fetch(
                "https://raw.githubusercontent.com/OpenUK/publiccode.directory/master/database/database.index.json", {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            )
            .then(res => res.json())
            .then(data => {
                commit("fetchLinks", data);
            })
            .then(function () {
                state.links.forEach(item => {
                    fetch(item)
                        .then(res => res.json())
                        .then(data => {
                            const avj = new Ajv();
                            const valid = avj
                                .addSchema(schemaType, "projSchema")
                                .validate("projSchema", data);
                            if (!valid) {
                                return;
                            } else {
                                commit("fetchProducts", data);
                                commit("getCategories");
                                commit("getLicences");
                                commit("getSector");
                                commit("getCompanies");
                                commit("getCountries");
                                commit("getDevelopers");
                                commit("getMaintainers");
                                commit("getUsers");
                            }
                        })
                        .catch(error => console.log(error));
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
const plugins = [vuexLocal.plugin];
export default new Vuex.Store({
    state,
    actions,
    mutations,
    plugins,
    getters
});