<template>
    <div class="section column is-8 countries">
        <div class="content">
            <h4 class='is-size-4'>Countries</h4>
            <span class='button' v-for="item in countries" :key="item.id">
                <a :href="item">
                    {{item}}
                </a>
            </span>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
      name: "ProdCountries",
      data() {
        return {};
      },
      mounted() {},
      computed: {
        ...mapGetters({
          countries: "countries"
        })
      }
    };
</script>
