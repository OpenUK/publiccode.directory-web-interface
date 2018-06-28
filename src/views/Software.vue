<template>
    <div class="wrapper ">
        <app-hero title='Software stuff is amazing' moto='data show'></app-hero>
        <div class="section container">

            <prod-all/>
            <!-- <div class="column is-8">
                    <l-map ref="map" :zoom="zoom" :center="center" style="height:500px;">
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                        <l-marker :lat-lng="marker"></l-marker>
                    </l-map>
                </div> -->

        </div>

    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    import AppHero from "@/components/Hero.vue";
    import Products from "@/components/Product.vue";
    // import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
    export default {
      components: {
        "prod-all": Products,
        AppHero
        // LMap,
        // LTileLayer,
        // LMarker
      },
      props: { msg: "Open Source Software" },
      data() {
        return {
          //   zoom: null,
          //   center: {},
          //   url: "",
          //   attribution: "",
          //   marker: []
        };
      },
      created() {},
      computed: {},

      mounted() {
        // this.$refs.map.mapObject._onResize();
      }
    };
</script>