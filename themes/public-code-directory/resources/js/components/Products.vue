<script>
  import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

  export default {
    name: "Products",
    delimiters: ["${", "}"],
    components: {},
    data() {
      return {
        loading: true,
        dropdown: { height: 0 },
        filters: { countries: {}, categories: {}, licences: {} },
        menus: { countries: false, categories: false, licences: false },
        isProdModal: false,
        prodModal: {},
      };
    },

    computed: {
      ...mapGetters({
        products: "allProducts",
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
          return this.products.filter(({ origin_country, category, license }) => {
            if (countries.length && !~countries.indexOf(origin_country))
              return false;
            if (licences.length)
              return (
                !licences.length || licences.every(cat => ~license.indexOf(cat))
              );
            if (categories.length)
              return (
                !categories.length ||
                categories.every(cat => ~categories.indexOf(cat))
              );
            return (
              this.products.length ||
              this.products.every(cat => ~name.indexOf(cat))
            );
          });
        }
      },
      activeFilters() {
        let { countries, categories, licences } = this.filters;
        return {
          countries: Object.keys(countries).filter(c => countries[c]),
          categories: Object.keys(categories).filter(c => categories[c]),
          licences: Object.keys(licences).filter(c => licences[c]),
        };
      },
      initialFilters() {
        this.products.forEach(({ origin_country, category, license }) => {
          this.$set(this.filters.countries, origin_country, false);
          this.$set(this.filters.licences, license, false);
          this.$set(this.filters.categories, category, false);
        });
        this.loading = false;
      },
    },
    watch: {
      activeMenu(index, from) {
        if (index === from) return;
        this.$nextTick(() => {
          if (!this.$refs.menu || !this.$refs.menu[index]) {
            this.dropdown.height = 0;
          } else {
            this.dropdown.height = `${this.$refs.menu[index].clientHeight +
              25}px`;
          }
        });
      },
      initialFilters(newval, oldval) {
        this.$nextTick(() => {
          this.products.forEach(({ origin_country, category, license }) => {
            this.$set(this.filters.countries, origin_country, false);
            this.$set(this.filters.licences, license, false);
            this.$set(this.filters.categories, category, false);
          });
          this.loading = false;
        });
      },
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
      cancel() {
        this.prodModal = {};
        this.isProdModal = false;
      },
      prodMod(element) {
        this.cancel();
        Object.assign(this.prodModal, element);
        this.isProdModal = true;
      },
    },
    mounted() {},
  };
</script>