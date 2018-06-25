<template>
    <div class="column is-8">
        <div class="content">
            <h4 class='is-size-4'>Products</h4>
            <span class='button' v-for="(item, index) in products" :key="index">
                <a :href="item.entry_url" target="_blank" rel="noopener">
                    {{item.entry_name}}
                </a>
            </span>
        </div>
    </div>
</template>

<script >
    export default {
      name: "ProdAll",
      data() {
        return {
          products: ""
        };
      },
      mounted() {
        this.products = this.$store.getters.allProducts;
      }
    };
</script>
