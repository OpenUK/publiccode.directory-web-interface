<script>
    export default {
      data() {
        return {
          navIsActive: false
        };
      },
      methods: {
        toggleNav() {
          !this.navIsActive
            ? (this.navIsActive = true)
            : (this.navIsActive = false);
        }
      },
      beforeCreate() {
        this.$store.dispatch("fetchLinks");
      }
    };
</script>
