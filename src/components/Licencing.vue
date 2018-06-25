<template>
  <div class="column is-8 companies">
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
  export default {
    name: "ProdLicencing",
    data() {
      return {
        licences: ""
      };
    },
    mounted() {
      this.licences = this.$store.getters.licences;
    }
  };
</script>
