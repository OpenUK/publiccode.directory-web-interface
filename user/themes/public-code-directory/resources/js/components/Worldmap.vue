<script>
  import { mapGetters } from "vuex";
  import L from "leaflet";
  import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
  import "leaflet/dist/leaflet.css";

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.imagePath = "";
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:"/user/themes/public-code-directory/images/logos/marker-icon-2x.png",
    iconUrl: "/user/themes/public-code-directory/images/logos/marker-icon.png",
    shadowUrl: "/user/themes/public-code-directory/images/logos/marker-shadow.png"
  });

  export default {
    name: "Worldmap",
    data() {
      return {
        zoom: 3,
        center: [52.371183, -1.263988],
        url: "",
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        locations: [],
        minZoom: 3,
        maxZoom: 13
      };
    },
    computed: {
      ...mapGetters({
        companies: "allProducts"
      })
    },
    components: {
      // L,
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
              lat: this.companies[index].developer_geolocation.lat,
              lng: this.companies[index].developer_geolocation.long
            },
            url: this.companies[index].developer_url,
            icon: this.companies[index].entry_logoURL,
            attribution: this.companies[index].developer_name
          });
        }
      }, 500);
      // setTimeout(function() {
      //   window.dispatchEvent(new Event("resize"));
      // }, 50);
      this.$refs.map.mapObject._onResize();
    }
  };
</script>