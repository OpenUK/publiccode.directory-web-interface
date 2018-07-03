<template>
    <div class="column is-8 map">
        <l-map ref="map" :zoom="zoom" :center="center" style="height:500px;">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker v-for="marker in locations" :key="marker.id" :lat-lng="marker.position">
                <l-popup :content="marker.attribution" :title='marker.url'>
                </l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script >
    import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
    import { mapGetters } from "vuex";
    export default {
      name: "MapRenderer",
      data() {
        return {
          zoom: 3,
          center: [52.371183, -1.263988],
          url: "",
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          locations: []
        };
      },
      computed: {
        ...mapGetters({
          companies: "allProducts"
        })
      },
      components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup
      },
      mounted() {
        setTimeout(() => {
          for (let index = 0; index < this.companies.length; index++) {
            this.locations.push({
              id: index,
              position: {
                lat: this.companies[index].m_geolocation.lat,
                lng: this.companies[index].m_geolocation.long
              },
              url: this.companies[index].m_organisation_url,
              attribution: this.companies[index].m_organisation
            });
          }
        }, 1500);
      }
    };
</script>
<style lang="scss" scoped>
    .map {
      margin-top: 2rem;
    }
</style>
