<template>
    <div class="wrapper">
        <AppHero title='World view of the OSS ' moto="Developer's location"></AppHero>
        <div class="section container">
            <div class="columns is-centered is-multiline">
                <MapRenderer></MapRenderer>
            </div>
        </div>
    </div>
</template>
<script>
    import MapRenderer from "@/components/MapRender.vue";
    import AppHero from "@/components/Hero.vue";
    export default {
      name: "MapView",
      data() {
        return {};
      },
      components: {
        MapRenderer,
        AppHero
      }
    };
</script>
