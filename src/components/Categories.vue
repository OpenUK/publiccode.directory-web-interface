<template>
    <div class="section column is-8">
        <div class="content">
            <h4 class='is-size-4'>Categories</h4>
            <span class='button' v-for="(item, index) in categories" :key="index">
                <a>
                    {{item}}
                </a>
            </span>
        </div>
    </div>
</template>

<script >
    import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
    export default {
      name: "ProdCategories",
      data() {
        return {};
      },
      mounted() {},
      computed: {
        ...mapGetters({
          categories: "categories"
        })
      }
    };
</script>
