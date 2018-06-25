<template>
    <div class="column is-8">
        <div class="content">
            <h4 class='is-size-4'>Categories</h4>
            <span class='button' v-for="(item, index) in categories" :key="index">
                <a :href="item" v-for="(categ,ind) in item" :key="ind">
                    {{categ}}
                </a>
            </span>
        </div>
    </div>
</template>

<script >
    export default {
      name: "ProdCategories",
      data() {
        return {
          categories: ""
        };
      },
      mounted() {
        this.categories = this.$store.getters.categories;
      }
    };
</script>
