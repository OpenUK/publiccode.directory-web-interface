import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";
const _ = require("lodash");
const Ajv = require("ajv");

Vue.use(Vuex);
const schemaType = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "http://example.com/root.json",
  type: "object",
  title: "The Root Schema",
  required: [
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
    "licence",
    "developers",
    "maintainers",
    "users"
  ],
  properties: {
    name: {
      $id: "#/properties/name",
      type: "string",
      title: "The Name Schema",
      default: "",
      pattern: "^(.*)$"
    },
    entry_type: {
      $id: "#/properties/entry_type",
      type: "string",
      title: "The Entry_type Schema",
      default: "",
      pattern: "^(.*)$"
    },
    description: {
      $id: "#/properties/description",
      type: "string",
      title: "The Description Schema",
      default: "",
      pattern: "^(.*)$"
    },
    official_url: {
      $id: "#/properties/official_url",
      type: "string",
      title: "The Official_url Schema",
      default: "",
      pattern: "^(.*)$"
    },
    repository: {
      $id: "#/properties/repository",
      type: "string",
      title: "The Repository Schema",
      default: "",
      pattern: "^(.*)$"
    },
    logo_url: {
      $id: "#/properties/logo_url",
      type: "string",
      title: "The Logo_url Schema",
      default: "",
      pattern: "^(.*)$"
    },
    language: {
      $id: "#/properties/language",
      type: "array",
      title: "The Language Schema",
      items: {
        $id: "#/properties/language/items",
        type: "string",
        title: "The Items Schema",
        default: "",
        pattern: "^(.*)$"
      }
    },
    origin_country: {
      $id: "#/properties/origin_country",
      type: "string",
      title: "The Origin_country Schema",
      default: "",
      pattern: "^(.*)$"
    },
    sector: {
      $id: "#/properties/sector",
      type: "array",
      title: "The Sector Schema",
      items: {
        $id: "#/properties/sector/items",
        type: "string",
        title: "The Items Schema",
        default: "",
        pattern: "^(.*)$"
      }
    },
    category: {
      $id: "#/properties/category",
      type: "array",
      title: "The Category Schema",
      items: {
        $id: "#/properties/category/items",
        type: "string",
        title: "The Items Schema",
        default: "",
        pattern: "^(.*)$"
      }
    },
    licence: {
      $id: "#/properties/licence",
      type: "array",
      title: "The Licence Schema",
      items: {
        $id: "#/properties/licence/items",
        type: "string",
        title: "The Items Schema",
        default: "",
        pattern: "^(.*)$"
      }
    },
    developers: {
      $id: "#/properties/developers",
      type: "array",
      title: "The Developers Schema",
      items: {
        $id: "#/properties/developers/items",
        type: "object",
        title: "The Items Schema",
        required: [
          "developer_name",
          "developer_logo_url",
          "developer_url",
          "developer_category"
        ],
        properties: {
          developer_name: {
            $id: "#/properties/developers/items/properties/developer_name",
            type: "string",
            title: "The Developer_name Schema",
            default: "",
            pattern: "^(.*)$"
          },
          developer_logo_url: {
            $id: "#/properties/developers/items/properties/developer_logo_url",
            type: "string",
            title: "The Developer_logo_url Schema",
            default: "",
            pattern: "^(.*)$"
          },
          developer_url: {
            $id: "#/properties/developers/items/properties/developer_url",
            type: "string",
            title: "The Developer_url Schema",
            default: "",
            pattern: "^(.*)$"
          },
          developer_category: {
            $id: "#/properties/developers/items/properties/developer_category",
            type: "string",
            title: "The Developer_category Schema",
            default: "",
            pattern: "^(.*)$"
          }
        }
      }
    },
    maintainers: {
      $id: "#/properties/maintainers",
      type: "array",
      title: "The Maintainers Schema",
      items: {
        $id: "#/properties/maintainers/items",
        type: "object",
        title: "The Items Schema",
        required: [
          "maintainer_name",
          "maintainer_url",
          "maintainer_logo_url",
          "maintainer_repository"
        ],
        properties: {
          maintainer_name: {
            $id: "#/properties/maintainers/items/properties/maintainer_name",
            type: "string",
            title: "The Maintainer_name Schema",
            default: "",
            pattern: "^(.*)$"
          },
          maintainer_url: {
            $id: "#/properties/maintainers/items/properties/maintainer_url",
            type: "string",
            title: "The Maintainer_url Schema",
            default: "",
            pattern: "^(.*)$"
          },
          maintainer_logo_url: {
            $id:
              "#/properties/maintainers/items/properties/maintainer_logo_url",
            type: "string",
            title: "The Maintainer_logo_url Schema",
            default: "",
            pattern: "^(.*)$"
          },
          maintainer_repository: {
            $id:
              "#/properties/maintainers/items/properties/maintainer_repository",
            type: "string",
            title: "The Maintainer_repository Schema",
            default: "",
            pattern: "^(.*)$"
          }
        }
      }
    },
    users: {
      $id: "#/properties/users",
      type: "array",
      title: "The Users Schema",
      items: {
        $id: "#/properties/users/items",
        type: "object",
        title: "The Items Schema",
        required: [
          "user_name",
          "user_location",
          "user_logo_url",
          "user_url",
          "user_geolocation"
        ],
        properties: {
          user_name: {
            $id: "#/properties/users/items/properties/user_name",
            type: "string",
            title: "The User_name Schema",
            default: "",
            pattern: "^(.*)$"
          },
          user_location: {
            $id: "#/properties/users/items/properties/user_location",
            type: "string",
            title: "The User_location Schema",
            default: "",
            pattern: "^(.*)$"
          },
          user_logo_url: {
            $id: "#/properties/users/items/properties/user_logo_url",
            type: "string",
            title: "The User_logo_url Schema",
            default: "",
            pattern: "^(.*)$"
          },
          user_url: {
            $id: "#/properties/users/items/properties/user_url",
            type: "string",
            title: "The User_url Schema",
            default: "",
            pattern: "^(.*)$"
          },
          user_geolocation: {
            $id: "#/properties/users/items/properties/user_geolocation",
            type: "object",
            title: "The User_geolocation Schema",
            required: ["lat", "long"],
            properties: {
              lat: {
                $id:
                  "#/properties/users/items/properties/user_geolocation/properties/lat",
                type: "number",
                title: "The Lat Schema",
                default: 0.0
              },
              long: {
                $id:
                  "#/properties/users/items/properties/user_geolocation/properties/long",
                type: "number",
                title: "The Long Schema",
                default: 0.0
              }
            }
          }
        }
      }
    }
  }
};

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
  languages: [],
  countries: [],
  companies: [],
  users: [],
  developers: [],
  maintainers: [],
  checked: false,
  errors: []
};

const mutations = {
  fetchLinks(state, all) {
    state.links = all.directory_index;
  },
  fetchProducts(state, data) {
    state.products.push( data)
  },
  getCategories(state) {
    let categoriesSet =[];
    state.products.filter(el => {
      el.category.forEach(element => {
        categoriesSet.push(element);
      });
    });
    state.categories = [... new Set(categoriesSet)]
  },
  getlicences(state) {
    let categoriesSet = [];
    state.products.filter(el => {
      el.licence.forEach(element => {
        categoriesSet.push(element);
      });
    });
    state.licences = [... new Set(categoriesSet)]
  },
   getLanguage(state) {
    let categoriesSet = [];
    state.products.filter(el => {
      el.language.forEach(element => {
        categoriesSet.push(element);
      });
    });
    state.languages = [... new Set(categoriesSet)]
  },
  getSector(state) {
    let categoriesSet = [];
    state.products.filter(el => {
      el.sector.forEach(element => {
        categoriesSet.push(element);
      });
    });
    state.public_sector = [... new Set(categoriesSet)]
  },
  getCountries(state) {
    let categoriesSet = [];
    state.products.filter(el => {
      categoriesSet.push(el.origin_country);
    });
    state.countries = [... new Set(categoriesSet)]
  },
  getDevelopers(state) {
    let devSet = [];
    state.products.filter(el => {
      el.developers.forEach(developer => {
        devSet.push(developer.developer_name);
      });
    });
    state.developers = [... new Set(devSet)]
  },
  getUsers(state) {
    let usersSet = [];
    state.products.filter(el => {
      el.users.forEach(user => {
        usersSet.push(user.user_name);
      });
    });
    state.users = [... new Set(usersSet)]
  },
  getMaintainers(state) {
    let maintainerSet = [];
    state.products.filter(el => {
      el.maintainers.forEach(maintainer => {
        maintainerSet.push(maintainer.maintainer_name);
      });
    });
    state.maintainers = [... new Set(maintainerSet)]
  },
  updateChecked(state, payload) {
    state.checked = payload;
  },
  productLoaded(state) {
    state.productLoaded = true;
  }
};

const actions = {
  fetchLinks(context) {
    axios.get(
      "https://raw.githubusercontent.com/OpenUK/publiccode.directory/master/database/database.index.json"
    )
      .then(data => {
        context.commit("fetchLinks", data.data)
      })
      .then( ()=>{
          context. state.links.forEach(item => {
          axios.get(item)
            .then(data => {
              const avj = new Ajv();
              const valid = avj
                .addSchema(schemaType, "projSchema")
                .validate("projSchema", data.data);
              if (valid) {
              context.  commit("fetchProducts", data.data);
              context.  commit("getCategories");
              context.  commit("getCountries");
              context.  commit("getDevelopers");
              context.  commit("getlicences");
              context.  commit("getMaintainers");
              context.  commit("getUsers");
              context.  commit("getSector");
              context.  commit("getLanguage");
              
              } 
            })
            .catch(error => console.log(error));
      })
      })
      .catch(error => {
        console.log(error);
      });
  },
};

const getters = {
  allProducts: state => state.products,
  categories: state =>   state.categories  ,
  licences: state => state.licences,
  users: state => state.users,
  sectors: state => state.public_sector,
  countries: state => state.countries,
  languages: state => state.languages
};

const plugins = [vuexLocal.plugin];

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins,
  getters
});
