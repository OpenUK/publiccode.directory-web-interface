<template>
  <div class="wrapper">
    <AppHero title='Welcome to Miami' moto='Where magic happens'></AppHero>
    <section class="section columns is-centered is-multiline">
      <div class="column is-8">
        <p>this is the magical homepage where stuff ha[pens</p>
      </div>
    </section>
  </div>
</template>

<script>
  import AppHero from "@/components/Hero.vue";
  export default {
    components: {
      AppHero
    }
  };
</script>
