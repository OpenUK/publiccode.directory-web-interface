<template>
    <div class="wrapper">
        <app-hero title='Software stuff is amazing' moto='data show'></app-hero>
        <section class="columns is-multiline is-centered">
            <div class="column is-8">
                <div class="content">
                    <h2 class='is-size-2' v-bind:msg="msg">{{msg}}</h2>
                </div>
            </div>
            <prod-categories/>
            <prod-all/>
            <prod-countries/>
            <prod-companies/>
            <prod-licencing/>
            <map-render></map-render>
        </section>
    </div>
</template>
<script>
    import AppHero from "@/components/Hero.vue";
    import TableComponent from "@/components/Table.vue";
    import ProdCategories from "@/components/Categories.vue";
    import Products from "@/components/Product.vue";
    import ProdLicencing from "@/components/Licencing.vue";
    import Countries from "@/components/Countries.vue";
    import Companies from "@/components/Companies.vue";
    import MapRendered from "@/components/MapRender.vue";
    export default {
      components: {
        "prod-table": TableComponent,
        "prod-all": Products,
        "prod-licencing": ProdLicencing,
        "prod-countries": Countries,
        "prod-companies": Companies,
        "prod-categories": ProdCategories,
        "map-render": MapRendered,
        AppHero
      },
      props: { msg: "Open Source Software" },
      data() {
        return {};
      },
      created() {},
      beforeMount() {},
      mounted() {}
    };
</script>