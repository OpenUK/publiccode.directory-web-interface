<script>
  import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
  import { Modal, ImageModal, CardModal } from "vue-bulma-modal";
  export default {
    name: "Products",
    delimiters: ["${", "}"],
    components: {
      Modal,
      ImageModal,
      CardModal
    },
    data() {
      return {
        loading: true,
        companies: "",
        dropdown: { height: 0 },
        filters: { countries: {}, categories: {}, licences: {} },
        menus: { countries: false, categories: false, licences: false },
        visible: false
      };
    },

    computed: {
      ...mapGetters({
        products: "allProducts"
      }),
      activeMenu() {
        return Object.keys(this.menus).reduce(
          ($$, set, i) => (this.menus[set] ? i : $$),
          -1
        );
      },
      list() {
        if (!this.loading) {
          let { countries, categories, licences } = this.activeFilters;
          return this.products.filter(
            ({ entry_origin_country, entry_category, entry_license }) => {
              if (countries.length && !~countries.indexOf(entry_origin_country))
                return false;
              if (licences.length && !~licences.indexOf(entry_license))
                return false;
              if (categories.length && !~categories.indexOf(entry_category))
                return false;
              return (
                this.companies.length ||
                this.companies.every(cat => ~entry_name.indexOf(cat))
              );
            }
          );
        }
      },
      activeFilters() {
        let { countries, categories, licences } = this.filters;
        return {
          countries: Object.keys(countries).filter(c => countries[c]),
          categories: Object.keys(categories).filter(c => categories[c]),
          licences: Object.keys(licences).filter(c => licences[c])
        };
      }
    },
    watch: {
      activeMenu(index, from) {
        if (index === from) return;
        this.$nextTick(() => {
          if (!this.$refs.menu || !this.$refs.menu[index]) {
            this.dropdown.height = 0;
          } else {
            this.dropdown.height = `${this.$refs.menu[index].clientHeight +
              16}px`;
          }
        });
      }
    },
    methods: {
      setFilter(filter, option) {
        if (filter === "countries") {
          this.filters[filter][option] = !this.filters[filter][option];
        } else if (filter === "licences") {
          this.filters[filter][option] = !this.filters[filter][option];
        } else if (filter === "categories") {
          this.filters[filter][option] = !this.filters[filter][option];
        } else {
          setTimeout(() => {
            this.clearFilter(filter, option, this.filters[filter][option]);
          }, 100);
        }
      },
      clearFilter(filter, except, active) {
        Object.keys(this.filters[filter]).forEach(option => {
          this.filters[filter][option] = except === option && !active;
        });
      },
      clearAllFilters() {
        Object.keys(this.filters).forEach(this.clearFilter);
      },
      setMenu(menu, active) {
        Object.keys(this.menus).forEach(tab => {
          this.menus[tab] = !active && tab === menu;
        });
      },
      createCompanies() {
        this.companies = this.products;
        this.companies.forEach(
          ({ entry_origin_country, entry_category, entry_license }) => {
            this.$set(this.filters.countries, entry_origin_country, false);
            this.$set(this.filters.licences, entry_license, false);
            this.$set(this.filters.categories, entry_category, false);
          }
        );
      }
    },
    mounted() {
      setTimeout(() => {
        this.createCompanies();
        this.loading = false;
      }, 150);
    }
  };
</script>