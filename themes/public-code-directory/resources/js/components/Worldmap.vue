<script>
import { mapGetters } from "vuex";
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.imagePath = "";
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "/user/themes/public-code-directory/images/logos/marker-icon-2x.png",
  iconUrl: "/user/themes/public-code-directory/images/logos/marker-icon.png",
  shadowUrl: "/user/themes/public-code-directory/images/logos/marker-shadow.png"
});

export default {
  name: "Worldmap",
  data() {
    return {
      zoom: 1,
      center: [0, 0],
      url: "",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      locations: [],
      minZoom: 1,
      maxZoom: 13,
      loading: true,
      dropdown: { height: 0 },
      filters: {
        users: {},
        countries: {},
        categories: {},
        sectors: {},
        languages: {}
      },
      menus: {
        users: false,
        countries: false,
        categories: false,
        sectors: false,
        languages: false
      }
    };
  },
  computed: {
    ...mapGetters({
      products: "allProducts",
      countries: "countries",
      categories: "categories",
      sectors: "sectors",
      users: "users",
      languages: "languages"
    }),
    activeMenu() {
      return Object.keys(this.menus).reduce(
        ($$, set, i) => (this.menus[set] ? i : $$),
        -1
      );
    },
    list() {
      if (!this.loading) {
        let {
          languages,
          countries,
          categories,
          users,
          sectors
        } = this.activeFilters;
        return this.products.filter(product => {
          let match = true;
          if (countries.length && !~countries.indexOf(product.origin_country)) {
            match = false;
          }
          if (sectors.length) {
            match =
              match &&
              (!sectors.length ||
                sectors.some(cat => ~product.sector.indexOf(cat)));
          }
          if (categories.length) {
            match =
              match &&
              (!categories.length ||
                categories.some(cat => ~product.category.indexOf(cat)));
          }
          if (languages.length) {
            match =
              match &&
              (!languages.length ||
                languages.some(cat => ~product.language.indexOf(cat)));
          }
          if (users.length) {
            match =
              match &&
              users.some(
                cat =>
                  product.users.findIndex(el => el.user_name === cat) !== -1
              );
          }
          return match;
        });
      }
    },
    activeFilters() {
      let { countries, sectors, categories, users, languages } = this.filters;
      return {
        users: Object.keys(users).filter(c => users[c]),
        countries: Object.keys(countries).filter(c => countries[c]),
        sectors: Object.keys(sectors).filter(c => sectors[c]),
        categories: Object.keys(categories).filter(c => categories[c]),
        languages: Object.keys(languages).filter(c => languages[c])
      };
    },

    initialFilters() {
      this.countries.forEach(element => {
        this.$set(this.filters.countries, element, false);
      });
      this.users.forEach(element => {
        this.$set(this.filters.users, element, false);
      });
      this.categories.forEach(el => {
        this.$set(this.filters.categories, el, false);
      });
      this.languages.forEach(el => {
        this.$set(this.filters.languages, el, false);
      });
      this.sectors.forEach(el => {
        this.$set(this.filters.sectors, el, false);
      });
      this.loading = false;
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  watch: {
    activeMenu(index, from) {
      if (index === from) return;
      this.$nextTick(() => {
        if (!this.$refs.menu || !this.$refs.menu[index]) {
          this.dropdown.height = 0;
        } else {
          this.dropdown.height = ` 100%`;
        }
      });
    },
    initialFilters(newval, oldval) {
      this.$nextTick(() => {
        this.countries.forEach(element => {
          this.$set(this.filters.countries, element, false);
        });
        this.users.forEach(el => {
          this.$set(this.filters.users, el, false);
        });
        this.sectors.forEach(element => {
          this.$set(this.filters.sectors, element, false);
        });
        this.categories.forEach(el => {
          this.$set(this.filters.categories, el, false);
        });
        this.languages.forEach(el => {
          this.$set(this.filters.languages, el, false);
        });
        this.loading = false;
      });
    }
  },
  methods: {
    updateLocations() {
      let newlocations = [];
      this.locations.filter(element => {
        return this.activeFilters.users.forEach(item => {
          if (element.name === item) {
            newlocations.push(element);
          }
        });
      });
      this.locations = [];
      this.locations = newlocations;
    },
    makeLocations() {
      this.locations = [];
      for (let index = 0; index < this.list.length; index++) {
        this.list[index].users.forEach(user => {
          if (user.user_name !== "") {
            this.locations.push({
              id: index,
              position: {
                lat: user.user_geolocation.lat,
                lng: user.user_geolocation.long
              },
              url: user.user_url,
              logo: user.user_logo_url,
              name: user.user_name,
              attribution: ` <a href='${user.user_url}'>  <img src='${
                user.user_logo_url
              }' class='small-logo'/>  ${user.user_name}</a>`
            });
          }
        });
      }
      this.$refs.map.mapObject._onResize();
    },
    setFilter(filter, option) {
      if (filter === "countries") {
        this.filters[filter][option] = !this.filters[filter][option];
        this.makeLocations();
        // this.updateLocations();
      } else if (filter === "languages") {
        this.filters[filter][option] = !this.filters[filter][option];
        this.makeLocations();
        // this.updateLocations();
      } else if (filter === "sectors") {
        this.filters[filter][option] = !this.filters[filter][option];
        this.makeLocations();
        // this.updateLocations();
      } else if (filter === "users") {
        this.filters[filter][option] = !this.filters[filter][option];
        this.makeLocations();
        this.updateLocations();
      } else if (filter === "categories") {
        this.filters[filter][option] = !this.filters[filter][option];
        this.makeLocations();
        // this.updateLocations();
      } else {
        setTimeout(() => {
          this.clearFilter(filter, option, this.filters[filter][option]);
          this.makeLocations();
          // this.updateLocations();
        }, 100);
      }
    },
    clearFilter(filter, except, active) {
      Object.keys(this.filters[filter]).forEach(option => {
        this.filters[filter][option] = except === option && !active;
      });
      this.makeLocations();
    },
    clearAllFilters() {
      Object.keys(this.filters).forEach(this.clearFilter);
      this.makeLocations();
    },
    setMenu(menu, active) {
      Object.keys(this.menus).forEach(tab => {
        this.menus[tab] = !active && tab === menu;
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.makeLocations();
    }, 1000);
  },
  beforeCreate() {
    this.$store.dispatch("fetchLinks")
  }
};
</script>
