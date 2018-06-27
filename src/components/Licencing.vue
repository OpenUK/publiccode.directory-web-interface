<template>
  <div class="section column is-8 companies">
    <div class="content">
      <h4 class='is-size-4'>Licencing</h4>
      <p>
        <span class='button' v-for="item in licences" :key="item.id">
          <a :href="item">
            {{item}}
          </a>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
  export default {
    name: "ProdLicencing",
    data() {
      return {};
    },
    mounted() {},
    computed: {
      ...mapGetters({
        licences: "licences"
      })
    }
  };
</script>
