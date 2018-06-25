<template>
    <div class="column is-8 companies">
        <div class="content">
            <h4 class='is-size-4'>Companies</h4>
            <p>
                <span class='button' v-for="item in companies" :key="item.id" v-bind:click="filterLink(item)">
                    <a :href="prods">
                        {{item}}
                    </a>
                </span>
            </p>
        </div>
    </div>
</template>

<script >
    export default {
      name: "ProdCompanies",
      data() {
        return {
          companies: "",
          prods: {}
        };
      },
      mounted() {
        this.companies = this.$store.getters.companies;
      },
      methods: {
        filterLink(el) {
          this.$store.commit("filterData", el);
          this.prods = this.$store.getters.filteredData;
        }
      }
    };
</script>
