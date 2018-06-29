<template>
  <div class=" columns is-multiline is-centered">
    <div class="column is-8">
      <main class="content products">
        <h4 class='is-size-4'>Products</h4>
        <div class="nav">
          <menu class="nav__controls">
            <!-- <icon class="nav__icon" use="#filter"></icon> -->
            <a v-for="(active, menu) in menus" class="button is-primary is-outlined nav__label" :class="{ ' nav__label--active is-reverse ' : active, '  nav__label--filter is-active ': activeFilters[menu].length }" :key='menu' @click.prevent="setMenu(menu, active)">
              {{ menu }}
            </a>
            <button class="button is-danger is-outlined nav__label nav__label--clear" @click.prevent="clearAllFilters">Clear all</button>
          </menu>
        </div>
        <transition-group name="dropdown" tag="section" class="dropdown" :style="dropdown">
          <menu v-for="(options, filter) in filters" class="filters" v-show="menus[filter]" ref="menu" :key="filter">
            <li v-for="(active, option) in options" class="filters__item" :class="{ 'filters__item--active': active }" @click="setFilter(filter, option)" :key='option'>
              {{ option }}
            </li>
          </menu>
        </transition-group>

        <transition-group name="company" tag="section" class="content__list">
          <div class="card company" v-for="(company,index) in list" :key="index">
            <header class="card-header company__info">
              <h2 class="is-centered">{{ company.entry_name }}</h2>
            </header>
            <div class="card-content ">
              <div class="content ">
                <p class="content-text">{{ company.entry_descripton | truncate(50) }}</p>
                <p>Category:
                  <a class='button is-outlined tagg' @click.prevent="clearFilter('categories', company.entry_category)">
                    {{ company.entry_category }}
                  </a>
                </p>
              </div>
            </div>
            <footer class="card-footer">
              <div class="card-footer-item">
                <p class="company__country">
                  <span>From: </span>
                  <a href="" class='button is-primary is-outlined' @click.prevent="clearFilter('countries', company.entry_country)">
                    {{ company.entry_country }}
                  </a>
                </p>
              </div>
              <div class="card-footer-item">
                <p class="company__rating">
                  <span>Licence:</span>
                  <span>
                    <strong>
                      {{ company.entry_license }}
                    </strong>
                  </span>
                </p>
              </div>
            </footer>
          </div>
        </transition-group>

      </main>
    </div>

    <div class="column is-8 map">
      <l-map ref="map" :zoom="zoom" :center="center" style="height:500px;">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-for="marker in locations" :key="marker.id" :lat-lng="marker.position">
          <l-popup :content="marker.attribution" :title='marker.url'>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
  import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
  export default {
    name: "ProdAll",
    data() {
      return {
        companies: [],
        dropdown: { height: 0 },
        filters: { countries: {}, categories: {}, licences: {} },
        menus: { countries: false, categories: false, licences: false },
        zoom: 3,
        center: [52.371183, -1.263988],
        url: "",
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        locations: []
      };
    },
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup
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
        let { countries, categories, licences } = this.activeFilters;
        return this.products.filter(
          ({ entry_country, entry_category, entry_license }) => {
            if (countries.length && !~countries.indexOf(entry_country))
              return false;
            if (licences.length && !~licences.indexOf(entry_license))
              return false;
            if (categories.length && !~categories.indexOf(entry_category))
              return false;
            // return (
            //   !categories.length ||
            //   categories.every(cat => ~entry_category.indexOf(cat))
            // );
            return (
              this.companies.length ||
              this.companies.every(cat => ~entry_name.indexOf(cat))
            );
          }
        );
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
      }
    },

    mounted() {
      setTimeout(() => {
        this.companies = this.products;
        this.companies.forEach(
          ({ entry_country, entry_category, entry_license }) => {
            this.$set(this.filters.countries, entry_country, false);
            this.$set(this.filters.licences, entry_license, false);
            this.$set(this.filters.categories, entry_category, false);
          }
        );

        for (let index = 0; index < this.companies.length; index++) {
          this.locations.push({
            id: index,
            position: {
              lat: this.companies[index].m_geolocation.lat,
              lng: this.companies[index].m_geolocation.long
            },
            url: this.companies[index].m_organisation_url,
            attribution: this.companies[index].m_organisation
          });
        }
      }, 500);
    }
  };
</script>

<style lang="scss" scoped>
  .content {
    position: relative;
    font-family: "Nunito", sans-serif;
    font-weight: 300;
    color: #3d5358;
    margin: 0 auto;

    &__list {
      position: relative;
      backface-visibility: hidden;
      width: 100%;
      padding: 0.75rem 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
    }

    h4 {
      width: 100%;
    }
  }
  .company {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-radius: 6px;
    background-color: white;
    box-shadow: 0 0 0 1px #7d8181;
    backface-visibility: hidden;
    transform-origin: 10% 50%;
    z-index: 1;

    h2 {
      width: 100%;
    }
    .tagg {
      vertical-align: middle;
    }
    &-move {
      transition: all 600ms ease-in-out 50ms;
    }
    &-enter-active {
      transition: all 300ms ease-out;
    }
    &-leave-active {
      transition: all 200ms ease-in;
      position: absolute;
      z-index: 0;
    }
    &-enter,
    &-leave-to {
      opacity: 0;
    }
    &-enter {
      transform: scale(0.9);
    }
    &__data {
      line-height: 1.3;
      white-space: initial;
    }
    &__label {
      font-size: 0.8rem;
    }
    &__rating {
      text-align: center;
      display: flex;
      flex-direction: column;
    }
    &__info {
      padding: 0 0.75rem;
      text-align: center;
    }
    &__logo {
      width: 3rem;
      height: 3rem;
      margin: 0 auto;
    }
    &__name {
      height: 2.5rem;
      margin: 0.75rem 0;
      font-size: 1.3rem;
      font-weight: 200;
      text-align: center;
    }
    &__slogan {
      height: 2rem;
      text-align: center;
      font-weight: 400;
      text-transform: capitalize;
    }
    &__details {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;
      padding: 0.5rem 0.75rem;
      background-color: rgba(#c5d0d1, 0.1);
      border-top: 1px solid #c5d0d1;
    }
    &__country {
      display: flex;
      flex-direction: column;

      &:hover {
        text-decoration: none;
        color: darken($color: #777, $amount: 15%);
        cursor: pointer;
      }
    }
  }
  .map {
    margin-top: 2rem;
  }
  @media screen and (min-width: 768px) {
    .company {
      max-width: 260px;
    }
  }
  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    white-space: normal;
    margin: 0;
    padding: 2rem 0.5rem 1rem;
    border-bottom: 1px solid #c5d0d1;

    &__controls {
      display: flex;
      padding: 0;
      flex-wrap: wrap;
    }

    &__icon {
      width: 1rem;
      height: 1rem;
      fill: currentColor;
    }

    &__label {
      position: relative;
      margin: 0;
      margin-right: 1rem;
      margin-bottom: 1rem;
      list-style: none;
      text-transform: capitalize;
      z-index: 1;
      cursor: pointer;

      &::after {
        content: "\00d7";
        display: inline-block;
        color: transparent;
        width: 1rem;
        padding-left: 0.25rem;
        font-weight: 400;
        transform: scale(0);
        transition: transform 150ms ease-in-out;
      }

      &--clear {
        color: #f68185;
        opacity: 0;
        transform: translate3d(-25%, 0, 0);
        pointer-events: none;
        transition: all 275ms ease-in-out;
      }

      &--filter ~ &--clear {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        pointer-events: auto;
      }

      &--filter::after,
      &--active::after {
        transform: scale(1);
      }

      &--filter::after {
        content: "\2022";
        color: #46d2c4;
      }

      &--active::after {
        content: "\00d7";
        color: #f68185;
      }
    }
  }
  .dropdown {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.325s;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1rem;
      background-image: linear-gradient(to top, white, rgba(white, 0));
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }

    &-leave,
    &-enter-to {
      opacity: 1;
    }

    &-enter-active,
    &-leave-active {
      position: absolute;
      width: 100%;
      transition: opacity 0.3 ease-in-out;
    }

    &-enter-active {
      transition-delay: 0.15s;
    }
  }
  .filters {
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    list-style: none;

    &__item {
      margin-top: 0.5rem;
      margin-right: 0.5rem;
      padding: 0.25rem 0.5rem;
      border: 1px solid #c5d0d1;
      border-radius: 6px;
      font-size: 0.8rem;
      line-height: 1.35;
      cursor: pointer;
      transition: all 275ms;

      &:hover {
        border-color: #379a93;
      }

      &--active {
        color: white;
        border-color: #379a93;
        background-color: #379a93;
      }
    }

    &__rating {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem 0;
    }

    &__range {
      width: 200px;
      margin-top: 1rem;
      color: inherit;

      &::-webkit-slider-thumb {
        width: 0.8rem;
        height: 0.8rem;
        margin-top: calc(-0.4rem + 2px);
        border-radius: 100%;
        background-color: currentColor;
      }

      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        background-image: linear-gradient(to right, white, #46d2c4);
      }
    }
  }
  .products {
    display: flex;
    height: 100%;
    flex-flow: row wrap;
    padding: 0.75rem 0;
  }
</style>
