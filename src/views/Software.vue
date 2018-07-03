<template>
  <div class="wrapper ">
    <app-hero title='Software stuff is amazing' moto='data show'></app-hero>
    <div class="section container">
      <prod-all/>
    </div>

  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  import AppHero from "@/components/Hero.vue";
  import Products from "@/components/Product.vue";
  export default {
    components: {
      "prod-all": Products,
      AppHero
    },
    props: { msg: "Open Source Software" },
    data() {
      return {};
    },
    created() {},
    computed: {},
    mounted() {}
  };
</script>