<template>
    <div class="wrapper ">
        <app-hero title='Software stuff is amazing' moto='data show'></app-hero>
        <section class="section columns is-multiline is-centered">
            <prod-all/>
            <map-render></map-render>
        </section>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    import AppHero from "@/components/Hero.vue";
    import Products from "@/components/Product.vue";
    import MapRendered from "@/components/MapRender.vue";
    export default {
      components: {
        "prod-all": Products,
        "map-render": MapRendered,
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