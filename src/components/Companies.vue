<template>
    <div class="section column is-8 companies">
        <div class="content">
            <h4 class='is-size-4'>Companies</h4>
            <p>
                <span class='button' v-for="item in companies" :key="item.id">
                    <a :href="item">
                        {{item}}
                    </a>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
    export default {
      name: "ProdCompanies",
      data() {
        return {};
      },
      created() {},
      mounted() {},
      computed: {
        ...mapGetters({
          companies: "companies"
        })
      },
      methods: {},
      watch: {}
    };
</script>
