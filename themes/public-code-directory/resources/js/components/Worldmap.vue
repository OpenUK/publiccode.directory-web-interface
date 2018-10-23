<script>
  import { mapGetters } from "vuex";
  import L from "leaflet";
  import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
  import "leaflet/dist/leaflet.css";

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.imagePath = "";
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "/user/themes/public-code-directory/images/logos/marker-icon-2x.png",
    iconUrl: "/user/themes/public-code-directory/images/logos/marker-icon.png",
    shadowUrl:
      "/user/themes/public-code-directory/images/logos/marker-shadow.png",
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
        maxZoom: 13,
      };
    },
    computed: {
      ...mapGetters({
        products: "allProducts",
      }),
    },
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
    },
    methods: {
      makeLocations() {
        for (let index = 0; index < this.products.length; index++) {
          this.locations.push({
            id: index,
            position: {
              lat: this.products[index].users[0].user_geolocation.lat,
              lng: this.products[index].users[0].user_geolocation.long,
            },
            url: this.products[index].developers[0].developer_url,
            logo: this.products[index].developers[0].developer_logo_url,
            // icon: L.icon({this.products[index].developers[0].developer_logo_url}),
            attribution: ` 
                      <a href='${
                        this.products[index].developers[0].developer_url
                      }'>
                        <img src='${
                          this.products[index].developers[0].developer_logo_url
                        }' class='small-logo'/>
                        ${this.products[index].developers[0].developer_name}
                      </a>`,
          });
        }
        this.$refs.map.mapObject._onResize();
      },
    },
    mounted() {
      setTimeout(() => {
        this.makeLocations();
      }, 650);
    },
  };
</script>